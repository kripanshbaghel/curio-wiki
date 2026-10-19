import { ProviderError, classifyHttpError } from './errors';

export interface FetchPolicyOptions {
  timeoutMs?: number;
  /** Extra attempts after the first. */
  retries?: number;
  backoffMs?: number[];
  provider?: string;
}

const DEFAULT_TIMEOUT_MS = 8_000;
const DEFAULT_BACKOFF_MS = [250, 750];
/** Upper bound for honoring Retry-After inside a request cycle. */
const MAX_RETRY_AFTER_HONOR_MS = 2_000;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function extractReason(body: unknown): string | undefined {
  if (!body || typeof body !== 'object') return undefined;
  const root = body as Record<string, unknown>;
  const error = root.error;
  if (!error || typeof error !== 'object') return undefined;
  const err = error as Record<string, unknown>;
  if (typeof err.reason === 'string') return err.reason;
  if (Array.isArray(err.errors)) {
    const first = err.errors[0];
    if (first && typeof first === 'object' && typeof (first as Record<string, unknown>).reason === 'string') {
      return (first as Record<string, string>).reason;
    }
  }
  if (typeof err.code === 'string') return err.code;
  return undefined;
}

function parseRetryAfter(header: string | null): number | undefined {
  if (!header) return undefined;
  const seconds = Number(header);
  if (Number.isFinite(seconds) && seconds >= 0) return seconds * 1000;
  const date = Date.parse(header);
  if (!Number.isNaN(date)) return Math.max(0, date - Date.now());
  return undefined;
}

async function parseBody(res: Response): Promise<unknown> {
  const contentType = res.headers.get('content-type') ?? '';
  if (contentType.includes('json')) {
    try {
      return await res.json();
    } catch {
      return null;
    }
  }
  return await res.text();
}

export async function fetchWithPolicy(
  url: string | URL,
  init: RequestInit | undefined,
  options: FetchPolicyOptions = {},
): Promise<unknown> {
  const provider = options.provider ?? 'http';
  const timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  const retries = options.retries ?? 2;
  const backoff = options.backoffMs ?? DEFAULT_BACKOFF_MS;
  let lastNetworkError: ProviderError | undefined;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    if (attempt > 0) {
      await sleep(backoff[Math.min(attempt - 1, backoff.length - 1)] ?? 0);
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const signal = init?.signal
      ? AbortSignal.any([init.signal, controller.signal])
      : controller.signal;

    try {
      const res = await fetch(url, { ...init, signal });
      clearTimeout(timer);

      if (res.ok) {
        return await parseBody(res);
      }

      const body = await parseBody(res).catch(() => null);
      const reason = extractReason(body);
      const retryAfterMs = parseRetryAfter(res.headers.get('retry-after'));
      const error = classifyHttpError(res.status, provider, reason, retryAfterMs);

      if (error.retryable && attempt < retries) {
        if (error.code === 'rate_limited') {
          if (retryAfterMs !== undefined && retryAfterMs > MAX_RETRY_AFTER_HONOR_MS) {
            throw error;
          }
          await sleep(Math.min(retryAfterMs ?? 0, MAX_RETRY_AFTER_HONOR_MS));
        }
        lastNetworkError = error;
        continue;
      }

      throw error;
    } catch (error) {
      clearTimeout(timer);
      if (error instanceof ProviderError) {
        throw error;
      }
      const isAbort =
        error instanceof DOMException && (error.name === 'AbortError' || error.name === 'TimeoutError');
      const message =
        error instanceof Error ? error.message : typeof error === 'string' ? error : 'unknown error';
      const networkError = new ProviderError(
        provider,
        'network',
        isAbort ? `request timed out after ${timeoutMs}ms` : `network error: ${message}`,
        { retryable: true, cause: error },
      );
      if (attempt >= retries) {
        throw networkError;
      }
      lastNetworkError = networkError;
    }
  }

  throw lastNetworkError ?? new ProviderError(provider, 'unknown', 'request failed');
}
