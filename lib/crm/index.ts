import { buildConsultationContactInput } from './contacts';
import { buildConsultationCustomFields } from './customFields';
import {
  getCRMRetryConfig,
  getGoHighLevelConfig,
  isRetryableGhlError,
  GoHighLevelProvider,
} from './gohighlevel';
import { buildConsultationSubmissionKey } from './hash';
import { markSubmissionIfNew } from './idempotency';
import { logInfo, logWarn } from '@/lib/observability/logger';
import { buildConsultationOpportunityInput } from './opportunities';
import type { ConsultationRequest, CRMSyncResult } from './provider';
import { withRetry } from './retry';
import { buildConsultationTagIds } from './tags';
import { buildConsultationWorkflowIds } from './workflows';

interface SyncConsultationOptions {
  correlationId: string;
}

export async function syncConsultationToCRM(
  request: ConsultationRequest,
  options: SyncConsultationOptions,
): Promise<CRMSyncResult> {
  const submissionKey = buildConsultationSubmissionKey(request);

  if (!markSubmissionIfNew(submissionKey)) {
    logWarn({
      correlationId: options.correlationId,
      event: 'crm.sync.skipped_duplicate',
      stage: 'idempotency',
      submissionKey,
      email: request.email,
    });

    return {
      success: true,
      skipped: true,
      submissionKey,
    };
  }

  const config = getGoHighLevelConfig();
  const retryConfig = getCRMRetryConfig();
  const provider = new GoHighLevelProvider(config);

  const contactInput = buildConsultationContactInput(request, config);
  const customFields = buildConsultationCustomFields(request, config);

  logInfo({
    correlationId: options.correlationId,
    event: 'crm.sync.started',
    stage: 'crm',
    submissionKey,
    email: request.email,
  });

  const contact = await withRetry(
    () =>
      provider.createOrUpdateContact({
        ...contactInput,
        customFields,
      }),
    retryConfig,
    {
      correlationId: options.correlationId,
      operation: 'contact_upsert',
      isRetryableError: isRetryableGhlError,
    },
  );

  logInfo({
    correlationId: options.correlationId,
    event: 'crm.contact.synced',
    stage: 'crm.contact',
    contactId: contact.id,
    submissionKey,
  });

  if (customFields.length > 0) {
    await withRetry(
      () => provider.updateCustomFields(contact.id, customFields),
      retryConfig,
      {
        correlationId: options.correlationId,
        operation: 'contact_custom_fields',
        isRetryableError: isRetryableGhlError,
      },
    );

    logInfo({
      correlationId: options.correlationId,
      event: 'crm.custom_fields.synced',
      stage: 'crm.contact',
      contactId: contact.id,
      fieldCount: customFields.length,
      submissionKey,
    });
  }

  const tagIds = buildConsultationTagIds(request, config);
  await withRetry(() => provider.applyTags(contact.id, tagIds), retryConfig, {
    correlationId: options.correlationId,
    operation: 'contact_tags',
    isRetryableError: isRetryableGhlError,
  });

  if (tagIds.length > 0) {
    logInfo({
      correlationId: options.correlationId,
      event: 'crm.tags.applied',
      stage: 'crm.tags',
      contactId: contact.id,
      tagCount: tagIds.length,
      submissionKey,
    });
  }

  const opportunityInput = buildConsultationOpportunityInput(
    request,
    config,
    contact.id,
  );
  const opportunity = await provider.createOpportunity(opportunityInput);

  logInfo({
    correlationId: options.correlationId,
    event: 'crm.opportunity.created',
    stage: 'crm.opportunity',
    contactId: contact.id,
    opportunityId: opportunity.id,
    submissionKey,
  });

  const workflowIds = buildConsultationWorkflowIds(request, config);
  for (const workflowId of workflowIds) {
    await provider.triggerWorkflow(contact.id, workflowId);

    logInfo({
      correlationId: options.correlationId,
      event: 'crm.workflow.triggered',
      stage: 'crm.workflow',
      contactId: contact.id,
      workflowId,
      submissionKey,
    });
  }

  logInfo({
    correlationId: options.correlationId,
    event: 'crm.sync.completed',
    stage: 'crm',
    contactId: contact.id,
    opportunityId: opportunity.id,
    submissionKey,
  });

  return {
    success: true,
    skipped: false,
    submissionKey,
    contactId: contact.id,
    opportunityId: opportunity.id,
  };
}
