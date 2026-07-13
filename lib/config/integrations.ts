import { getGoHighLevelConfig } from '@/lib/crm/gohighlevel';

interface ValidationResult {
  ok: true;
}

function requireEnv(name: string): void {
  const value = process.env[name];
  if (!value || !value.trim()) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
}

export function validateConsultationIntegrationConfig(): ValidationResult {
  requireEnv('RESEND_API_KEY');

  // Validates required CRM variables and normalizes optional configuration.
  getGoHighLevelConfig();

  return { ok: true };
}
