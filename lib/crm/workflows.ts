import type { ConsultationRequest } from './provider';
import type { GoHighLevelConfig } from './gohighlevel';

export function buildConsultationWorkflowIds(
  _request: ConsultationRequest,
  config: GoHighLevelConfig,
): string[] {
  return config.workflowIds;
}
