import type { ConsultationRequest, CRMOpportunityInput } from './provider';
import type { GoHighLevelConfig } from './gohighlevel';

export function buildConsultationOpportunityInput(
  request: ConsultationRequest,
  config: GoHighLevelConfig,
  contactId: string,
): CRMOpportunityInput {
  return {
    locationId: config.locationId,
    contactId,
    title: `Consultation — ${request.firstName} ${request.lastName}`,
    pipelineId: config.pipelineId,
    pipelineStageId: config.pipelineStageId,
    status: 'open',
  };
}
