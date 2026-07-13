import { createHash } from 'crypto';

import type { ConsultationRequest } from './provider';

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

export function buildConsultationSubmissionKey(request: ConsultationRequest): string {
  const fingerprint = {
    firstName: normalize(request.firstName),
    lastName: normalize(request.lastName),
    email: normalize(request.email),
    phone: normalize(request.phone),
    howCanIHelp: normalize(request.howCanIHelp),
    timeline: normalize(request.timeline),
    preferredArea: normalize(request.preferredArea),
    estimatedBudget: normalize(request.estimatedBudget),
    goals: normalize(request.goals),
  };

  return createHash('sha256').update(JSON.stringify(fingerprint)).digest('hex');
}
