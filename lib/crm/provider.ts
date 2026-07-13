import type { ConsultationFormData } from '@/lib/validations/consultation';

export interface ConsultationRequest extends ConsultationFormData {
  submittedAt: string;
  source: 'website-consultation';
}

export interface ConsultationSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
  contactId?: string;
  opportunityId?: string;
}

export interface CRMCustomFieldValue {
  id: string;
  value: string;
}

export interface CRMContactInput {
  locationId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source: string;
  customFields?: CRMCustomFieldValue[];
}

export interface CRMOpportunityInput {
  locationId: string;
  contactId: string;
  title: string;
  pipelineId: string;
  pipelineStageId: string;
  status: 'open' | 'won' | 'lost' | 'abandoned' | 'all';
}

export interface GHLContact {
  id: string;
  locationId: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  source?: string;
}

export interface GHLOpportunity {
  id: string;
  locationId: string;
  contactId: string;
  pipelineId: string;
  pipelineStageId: string;
  status: 'open' | 'won' | 'lost' | 'abandoned' | 'all';
  name?: string;
}

export interface GHLWorkflow {
  id: string;
  name?: string;
}

export interface GHLTag {
  id: string;
  name?: string;
}

export interface CRMSyncResult {
  success: true;
  skipped: boolean;
  submissionKey: string;
  contactId?: string;
  opportunityId?: string;
}

export interface CRMProvider {
  createOrUpdateContact(input: CRMContactInput): Promise<GHLContact>;
  updateCustomFields(contactId: string, fields: CRMCustomFieldValue[]): Promise<GHLContact>;
  applyTags(contactId: string, tagIds: string[]): Promise<void>;
  createOpportunity(input: CRMOpportunityInput): Promise<GHLOpportunity>;
  triggerWorkflow(contactId: string, workflowId: string): Promise<void>;
}
