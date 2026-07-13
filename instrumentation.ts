import { logError, logInfo } from '@/lib/observability/logger';
import { validateConsultationIntegrationConfig } from '@/lib/config/integrations';

export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') {
    return;
  }

  try {
    validateConsultationIntegrationConfig();
    logInfo({
      correlationId: 'startup',
      event: 'integration.config.validated',
      stage: 'startup',
    });
  } catch (error) {
    logError({
      correlationId: 'startup',
      event: 'integration.config.invalid',
      stage: 'startup',
      error: error instanceof Error ? error.message : String(error),
    });

    throw error;
  }
}
