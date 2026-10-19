export interface RateLimitResult {
  ok: boolean;
  retryAfterSeconds?: number;
}

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 30;
const MAX_BUCKETS = 10_000;

interface Bucket {
  tokens: number;
  lastRefill: number;
}

const buckets = new Map<string, Bucket>();

/**
 * In-memory per-IP token bucket: 30 requests/minute.
 * Good enough for a single instance; swap for Redis/Upstash when horizontally scaling.
 */
export function checkRateLimit(ip: string, now: number = Date.now()): RateLimitResult {
  if (buckets.size >= MAX_BUCKETS && !buckets.has(ip)) {
    const oldest = buckets.keys().next().value;
    if (oldest !== undefined) buckets.delete(oldest);
  }

  const bucket = buckets.get(ip) ?? { tokens: MAX_REQUESTS, lastRefill: now };
  const elapsed = Math.max(0, now - bucket.lastRefill);
  const refill = (elapsed / WINDOW_MS) * MAX_REQUESTS;
  bucket.tokens = Math.min(MAX_REQUESTS, bucket.tokens + refill);
  bucket.lastRefill = now;

  if (bucket.tokens >= 1) {
    bucket.tokens -= 1;
    buckets.set(ip, bucket);
    return { ok: true };
  }

  const deficit = 1 - bucket.tokens;
  const retryAfterSeconds = Math.max(1, Math.ceil(((deficit / MAX_REQUESTS) * WINDOW_MS) / 1000));
  buckets.set(ip, bucket);
  return { ok: false, retryAfterSeconds };
}

export function resetRateLimiterForTests(): void {
  buckets.clear();
}
