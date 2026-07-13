import { logInfo, logWarn } from '@/lib/observability/logger';

export interface RetryConfig {
  maxRetries: number;
  baseDelayMs: number;
  maxDelayMs: number;
}

export interface RetryContext {
  correlationId: string;
  operation: string;
  isRetryableError: (error: unknown) => boolean;
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function calculateDelayMs(baseDelayMs: number, maxDelayMs: number, attempt: number): number {
  const exponential = baseDelayMs * 2 ** attempt;
  const jitter = Math.floor(Math.random() * Math.max(1, Math.floor(baseDelayMs / 2)));
  return clamp(exponential + jitter, baseDelayMs, maxDelayMs);
}

export async function withRetry<T>(
  execute: () => Promise<T>,
  config: RetryConfig,
  context: RetryContext,
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 0; attempt <= config.maxRetries; attempt += 1) {
    try {
      if (attempt > 0) {
        logInfo({
          correlationId: context.correlationId,
          event: 'crm.retry.attempt',
          stage: context.operation,
          attempt,
        });
      }

      return await execute();
    } catch (error) {
      lastError = error;
      const retryable = context.isRetryableError(error);
      const isLastAttempt = attempt >= config.maxRetries;

      if (!retryable || isLastAttempt) {
        if (retryable) {
          logWarn({
            correlationId: context.correlationId,
            event: 'crm.retry.exhausted',
            stage: context.operation,
            attempts: attempt + 1,
            error: error instanceof Error ? error.message : String(error),
          });
        }

        break;
      }

      const delayMs = calculateDelayMs(config.baseDelayMs, config.maxDelayMs, attempt);
      logWarn({
        correlationId: context.correlationId,
        event: 'crm.retry.scheduled',
        stage: context.operation,
        attempt: attempt + 1,
        delayMs,
        error: error instanceof Error ? error.message : String(error),
      });
      await wait(delayMs);
    }
  }

  throw lastError instanceof Error ? lastError : new Error('Retry operation failed');
}
