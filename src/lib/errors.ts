export type SourceErrorCode =
  | 'config'
  | 'auth'
  | 'quota'
  | 'rate_limited'
  | 'network'
  | 'invalid_response'
  | 'not_found'
  | 'unknown';

export interface ProviderErrorOptions {
  retryable?: boolean;
  retryAfterMs?: number;
  cause?: unknown;
}

export class ProviderError extends Error {
  readonly provider: string;
  readonly code: SourceErrorCode;
  readonly retryable: boolean;
  readonly retryAfterMs?: number;

  constructor(
    provider: string,
    code: SourceErrorCode,
    message: string,
    opts: ProviderErrorOptions = {},
  ) {
    super(message, opts.cause !== undefined ? { cause: opts.cause } : undefined);
    this.name = 'ProviderError';
    this.provider = provider;
    this.code = code;
    this.retryable = opts.retryable ?? false;
    this.retryAfterMs = opts.retryAfterMs;
  }
}

const QUOTA_REASONS = new Set([
  'quotaExceeded',
  'dailyLimitExceeded',
  'limitExceeded',
  'quotaExceeded402',
  'dailyLimitExceeded402',
]);

const RATE_REASONS = new Set(['rateLimitExceeded', 'userRateLimitExceeded']);

const AUTH_REASONS = new Set([
  'keyInvalid',
  'keyExpired',
  'accessNotConfigured',
  'unauthorized',
  'forbidden',
  'invalidCredentials',
  'invalid_grant',
  'insufficientPermissions',
]);

export function classifyHttpError(
  status: number,
  provider: string,
  reason?: string,
  retryAfterMs?: number,
): ProviderError {
  const label = `HTTP ${status}${reason ? ` (${reason})` : ''} from ${provider}`;

  if (reason && QUOTA_REASONS.has(reason)) {
    return new ProviderError(provider, 'quota', label, { retryable: false });
  }

  if (status === 429 || (reason && RATE_REASONS.has(reason))) {
    return new ProviderError(provider, 'rate_limited', label, {
      retryable: true,
      retryAfterMs,
    });
  }

  if (reason && AUTH_REASONS.has(reason)) {
    return new ProviderError(provider, 'auth', label, { retryable: false });
  }

  if (status === 401 || status === 403) {
    return new ProviderError(provider, 'auth', label, { retryable: false });
  }

  // Tavily plan/pay-as-you-go limit statuses (docs.tavily.com/api-reference/endpoint/search).
  if (status === 432 || status === 433) {
    return new ProviderError(provider, 'quota', label, { retryable: false });
  }

  if (status === 404) {
    return new ProviderError(provider, 'not_found', label, { retryable: false });
  }

  if (status >= 500) {
    return new ProviderError(provider, 'network', label, { retryable: true });
  }

  return new ProviderError(provider, 'unknown', label, { retryable: false });
}
