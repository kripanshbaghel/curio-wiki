import { afterEach, describe, expect, it, vi } from 'vitest';
import { __clearCacheForTests, cachedFetch } from '@/lib/cache';

afterEach(() => {
  __clearCacheForTests();
  vi.useRealTimers();
});

describe('cachedFetch', () => {
  it('caches successful results within the ttl', async () => {
    const fetcher = vi.fn().mockResolvedValue({ n: 1 });
    const first = await cachedFetch('k1', fetcher, { ttlMs: 10_000 });
    const second = await cachedFetch('k1', fetcher, { ttlMs: 10_000 });
    expect(first).toEqual({ n: 1 });
    expect(second).toEqual({ n: 1 });
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('refetches after the ttl expires', async () => {
    vi.useFakeTimers();
    const fetcher = vi.fn().mockResolvedValue({ n: 1 });
    await cachedFetch('k2', fetcher, { ttlMs: 1_000 });
    vi.advanceTimersByTime(1_500);
    await cachedFetch('k2', fetcher, { ttlMs: 1_000 });
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it('deduplicates concurrent in-flight requests', async () => {
    const fetcher = vi.fn().mockResolvedValue({ n: 2 });
    const [a, b] = await Promise.all([
      cachedFetch('k3', fetcher, { ttlMs: 10_000 }),
      cachedFetch('k3', fetcher, { ttlMs: 10_000 }),
    ]);
    expect(a).toEqual(b);
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  it('does not cache failures', async () => {
    const fetcher = vi
      .fn()
      .mockRejectedValueOnce(new Error('up'))
      .mockResolvedValueOnce({ ok: true });
    await expect(cachedFetch('k4', fetcher, { ttlMs: 1_000 })).rejects.toThrow('up');
    const value = await cachedFetch('k4', fetcher, { ttlMs: 1_000 });
    expect(value).toEqual({ ok: true });
    expect(fetcher).toHaveBeenCalledTimes(2);
  });

  it('clearCacheForTests empties the store', async () => {
    const fetcher = vi.fn().mockResolvedValue(1);
    await cachedFetch('k5', fetcher, { ttlMs: 10_000 });
    __clearCacheForTests();
    await cachedFetch('k5', fetcher, { ttlMs: 10_000 });
    expect(fetcher).toHaveBeenCalledTimes(2);
  });
});
