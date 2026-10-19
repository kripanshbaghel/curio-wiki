import { afterEach, describe, expect, it, vi } from 'vitest';
import { getServerEnv, isSupabaseConfigured } from '@/lib/config/env';

afterEach(() => {
  vi.unstubAllEnvs();
});

describe('getServerEnv', () => {
  it('reports no providers configured when keys are unset', () => {
    vi.stubEnv('YOUTUBE_API_KEY', '');
    vi.stubEnv('TAVILY_API_KEY', '');
    vi.stubEnv('BRAVE_SEARCH_API_KEY', '');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', '');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', '');
    const env = getServerEnv();
    expect(env.hasYouTube).toBe(false);
    expect(env.hasWebSearch).toBe(false);
    expect(env.hasSupabase).toBe(false);
    expect(isSupabaseConfigured()).toBe(false);
  });

  it('reports configured providers when keys are set', () => {
    vi.stubEnv('YOUTUBE_API_KEY', 'yt-key');
    vi.stubEnv('TAVILY_API_KEY', 'tvly-key');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://proj.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'anon');
    const env = getServerEnv();
    expect(env.hasYouTube).toBe(true);
    expect(env.hasWebSearch).toBe(true);
    expect(env.hasSupabase).toBe(true);
    expect(isSupabaseConfigured()).toBe(true);
  });

  it('requires both supabase url and anon key', () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://proj.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', '');
    expect(getServerEnv().hasSupabase).toBe(false);
  });

  it('falls back to localhost site url', () => {
    vi.stubEnv('NEXT_PUBLIC_SITE_URL', '');
    expect(getServerEnv().NEXT_PUBLIC_SITE_URL).toBe('http://localhost:3000');
  });
});
