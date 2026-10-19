import { describe, expect, it } from 'vitest';
import { normalizeQuery } from '@/lib/search/normalize';

const BEL = String.fromCharCode(7);

describe('normalizeQuery', () => {
  it('rejects empty input', () => {
    expect(normalizeQuery('')).toEqual({ ok: false, reason: 'empty' });
    expect(normalizeQuery('    ')).toEqual({ ok: false, reason: 'empty' });
  });

  it('rejects one-character queries', () => {
    expect(normalizeQuery('a')).toEqual({ ok: false, reason: 'too_short' });
  });

  it('rejects queries longer than 200 characters', () => {
    expect(normalizeQuery('x'.repeat(201))).toEqual({ ok: false, reason: 'too_long' });
  });

  it('collapses internal whitespace', () => {
    expect(normalizeQuery("  Newton's   laws  ")).toEqual({
      ok: true,
      value: "Newton's laws",
    });
  });

  it('accepts markup-looking text as plain text', () => {
    const result = normalizeQuery('<script>alert(1)</script>');
    expect(result).toEqual({ ok: true, value: '<script>alert(1)</script>' });
  });

  it('rejects control characters', () => {
    expect(normalizeQuery('photosynthesis' + BEL)).toEqual({
      ok: false,
      reason: 'invalid',
    });
  });

  it('rejects non-string input', () => {
    expect(normalizeQuery(42)).toEqual({ ok: false, reason: 'invalid' });
    expect(normalizeQuery(null)).toEqual({ ok: false, reason: 'invalid' });
    expect(normalizeQuery(undefined)).toEqual({ ok: false, reason: 'invalid' });
  });
});
