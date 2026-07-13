import type { ConsultationRequest, CRMCustomFieldValue } from './provider';
import type { GoHighLevelConfig } from './gohighlevel';

export function buildConsultationCustomFields(
  request: ConsultationRequest,
  config: GoHighLevelConfig,
): CRMCustomFieldValue[] {
  const values: CRMCustomFieldValue[] = [];

  const pushIfConfigured = (id: string | null, value: string) => {
    if (!id || !value) {
      return;
    }

    values.push({ id, value });
  };

  pushIfConfigured(config.customFieldIds.howCanIHelp, request.howCanIHelp);
  pushIfConfigured(config.customFieldIds.timeline, request.timeline);
  pushIfConfigured(config.customFieldIds.preferredArea, request.preferredArea);
  pushIfConfigured(config.customFieldIds.estimatedBudget, request.estimatedBudget);
  pushIfConfigured(config.customFieldIds.goals, request.goals);

  return values;
}
