import { describe, expect, it } from 'vitest';
import { isValidYouTubeId } from '@/lib/adapters/youtube';

describe('isValidYouTubeId', () => {
  it('accepts a normal 11-character id', () => {
    expect(isValidYouTubeId('dQw4w9WgXcQ')).toBe(true);
    expect(isValidYouTubeId('abc_DEF-123')).toBe(true);
  });

  it('rejects path traversal and malformed ids', () => {
    expect(isValidYouTubeId('../../etc')).toBe(false);
    expect(isValidYouTubeId('..%2F..%2Fetc')).toBe(false);
    expect(isValidYouTubeId('short')).toBe(false);
    expect(isValidYouTubeId('way-too-long-for-youtube')).toBe(false);
    expect(isValidYouTubeId('has spaces')).toBe(false);
    expect(isValidYouTubeId('')).toBe(false);
  });
});
