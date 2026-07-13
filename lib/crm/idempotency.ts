const consultedSubmissionMap = new Map<string, number>();

function now(): number {
  return Date.now();
}

function getTtlMs(): number {
  const raw = Number(process.env.CRM_IDEMPOTENCY_TTL_MS || '900000');
  if (!Number.isFinite(raw) || raw < 60000) {
    return 900000;
  }

  return raw;
}

function pruneExpired(ttlMs: number): void {
  const currentTime = now();

  for (const [key, timestamp] of consultedSubmissionMap.entries()) {
    if (currentTime - timestamp > ttlMs) {
      consultedSubmissionMap.delete(key);
    }
  }
}

export function markSubmissionIfNew(submissionKey: string): boolean {
  const ttlMs = getTtlMs();
  pruneExpired(ttlMs);

  if (consultedSubmissionMap.has(submissionKey)) {
    return false;
  }

  consultedSubmissionMap.set(submissionKey, now());
  return true;
}
