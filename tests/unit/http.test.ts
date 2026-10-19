import { afterEach, describe, expect, it, vi } from 'vitest';
import { ProviderError } from '@/lib/errors';
import { fetchWithPolicy } from '@/lib/http';

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function jsonResponse(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...headers },
  });
}

describe('fetchWithPolicy', () => {
  it('returns parsed json on success', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({ hello: 'world' }));
    vi.stubGlobal('fetch', fetchMock);
    const data = await fetchWithPolicy('https://example.com/api', undefined, { provider: 'test' });
    expect(data).toEqual({ hello: 'world' });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('retries 5xx responses then succeeds', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({ err: 1 }, 500))
      .mockResolvedValueOnce(jsonResponse({ err: 1 }, 502))
      .mockResolvedValueOnce(jsonResponse({ ok: true }));
    vi.stubGlobal('fetch', fetchMock);
    const data = await fetchWithPolicy('https://example.com/api', undefined, {
      provider: 'test',
      backoffMs: [1, 1],
    });
    expect(data).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('gives up after the configured number of retries', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({}, 500));
    vi.stubGlobal('fetch', fetchMock);
    await expect(
      fetchWithPolicy('https://example.com/api', undefined, {
        provider: 'test',
        retries: 2,
        backoffMs: [1, 1],
      }),
    ).rejects.toBeInstanceOf(ProviderError);
    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('does not retry plain 4xx failures', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({}, 400));
    vi.stubGlobal('fetch', fetchMock);
    await expect(
      fetchWithPolicy('https://example.com/api', undefined, { provider: 'test', backoffMs: [1] }),
    ).rejects.toBeInstanceOf(ProviderError);
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('extracts google-style error reasons for classification', async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      jsonResponse(
        { error: { code: 403, message: 'quota', errors: [{ domain: 'youtube', reason: 'quotaExceeded' }] } },
        403,
      ),
    );
    vi.stubGlobal('fetch', fetchMock);
    const err = await fetchWithPolicy('https://example.com/api', undefined, {
      provider: 'youtube',
      backoffMs: [1],
    }).catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('quota');
    expect((err as ProviderError).retryable).toBe(false);
  });

  it('classifies timeouts as retryable network failures', async () => {
    const fetchMock = vi.fn(
      (_url: string, init?: RequestInit) =>
        new Promise((_resolve, reject) => {
          init?.signal?.addEventListener('abort', () =>
            reject(new DOMException('aborted', 'AbortError')),
          );
        }),
    );
    vi.stubGlobal('fetch', fetchMock);
    const err = await fetchWithPolicy('https://example.com/slow', undefined, {
      provider: 'test',
      timeoutMs: 25,
      retries: 0,
      backoffMs: [1],
    }).catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('network');
  });

  it('retries 429 when Retry-After is short', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(jsonResponse({}, 429, { 'retry-after': '0' }))
      .mockResolvedValueOnce(jsonResponse({ ok: true }));
    vi.stubGlobal('fetch', fetchMock);
    const data = await fetchWithPolicy('https://example.com/api', undefined, {
      provider: 'test',
      backoffMs: [1],
    });
    expect(data).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('fails fast on 429 with a long Retry-After', async () => {
    const fetchMock = vi.fn().mockResolvedValue(jsonResponse({}, 429, { 'retry-after': '30' }));
    vi.stubGlobal('fetch', fetchMock);
    const err = await fetchWithPolicy('https://example.com/api', undefined, {
      provider: 'test',
      backoffMs: [1],
    }).catch((e: unknown) => e);
    expect(err).toBeInstanceOf(ProviderError);
    expect((err as ProviderError).code).toBe('rate_limited');
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
