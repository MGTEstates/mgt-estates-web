import type { ConsultationRequest } from './provider';
import type { GoHighLevelConfig } from './gohighlevel';

export function buildConsultationTagIds(
  _request: ConsultationRequest,
  config: GoHighLevelConfig,
): string[] {
  return config.tagIds;
}
