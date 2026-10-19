import { describe, expect, it } from 'vitest';
import { ProviderError, classifyHttpError } from '@/lib/errors';

describe('ProviderError', () => {
  it('carries provider, code and retryable flag', () => {
    const err = new ProviderError('wikipedia', 'network', 'boom', { retryable: true });
    expect(err.provider).toBe('wikipedia');
    expect(err.code).toBe('network');
    expect(err.retryable).toBe(true);
    expect(err.message).toBe('boom');
    expect(err).toBeInstanceOf(Error);
  });

  it('defaults retryable to false', () => {
    expect(new ProviderError('web', 'auth', 'no key').retryable).toBe(false);
  });
});

describe('classifyHttpError', () => {
  it('classifies youtube quota reasons as non-retryable quota', () => {
    const quota = classifyHttpError(403, 'youtube', 'quotaExceeded');
    expect(quota.code).toBe('quota');
    expect(quota.retryable).toBe(false);
    const daily = classifyHttpError(403, 'youtube', 'dailyLimitExceeded');
    expect(daily.code).toBe('quota');
  });

  it('classifies auth failures as non-retryable auth', () => {
    expect(classifyHttpError(401, 'web').code).toBe('auth');
    expect(classifyHttpError(400, 'youtube', 'keyInvalid').code).toBe('auth');
    expect(classifyHttpError(403, 'youtube', 'accessNotConfigured').code).toBe('auth');
    expect(classifyHttpError(403, 'web').code).toBe('auth');
  });

  it('classifies 429 as retryable rate_limited', () => {
    const err = classifyHttpError(429, 'wikipedia');
    expect(err.code).toBe('rate_limited');
    expect(err.retryable).toBe(true);
  });

  it('classifies 5xx as retryable network', () => {
    const err = classifyHttpError(503, 'wikipedia');
    expect(err.code).toBe('network');
    expect(err.retryable).toBe(true);
  });

  it('classifies 404 as not_found', () => {
    expect(classifyHttpError(404, 'wikipedia').code).toBe('not_found');
  });

  it('classifies unknown statuses as unknown', () => {
    expect(classifyHttpError(418, 'web').code).toBe('unknown');
  });
});
