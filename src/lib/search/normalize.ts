export type NormalizeFailure = 'empty' | 'too_short' | 'too_long' | 'invalid';

export type NormalizeResult =
  | { ok: true; value: string }
  | { ok: false; reason: NormalizeFailure };

export const QUERY_MIN_LENGTH = 2;
export const QUERY_MAX_LENGTH = 200;

const CONTROL_CHARS = new RegExp('[\\u0000-\\u001f\\u007f]');

export function normalizeQuery(raw: unknown): NormalizeResult {
  if (typeof raw !== 'string') {
    return { ok: false, reason: 'invalid' };
  }
  if (CONTROL_CHARS.test(raw)) {
    return { ok: false, reason: 'invalid' };
  }
  const value = raw.trim().replace(/\s+/g, ' ');
  if (!value) {
    return { ok: false, reason: 'empty' };
  }
  if (value.length < QUERY_MIN_LENGTH) {
    return { ok: false, reason: 'too_short' };
  }
  if (value.length > QUERY_MAX_LENGTH) {
    return { ok: false, reason: 'too_long' };
  }
  return { ok: true, value };
}
