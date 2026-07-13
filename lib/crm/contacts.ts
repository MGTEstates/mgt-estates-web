import type { ConsultationRequest, CRMContactInput } from './provider';
import type { GoHighLevelConfig } from './gohighlevel';

export function buildConsultationContactInput(
  request: ConsultationRequest,
  config: GoHighLevelConfig,
): CRMContactInput {
  return {
    locationId: config.locationId,
    firstName: request.firstName,
    lastName: request.lastName,
    email: request.email,
    phone: request.phone,
    source: request.source,
  };
}
