import { z } from 'zod';

const optionalKey = z
  .string()
  .optional()
  .transform((value) => (value && value.trim() ? value.trim() : undefined));

const envSchema = z.object({
  YOUTUBE_API_KEY: optionalKey,
  TAVILY_API_KEY: optionalKey,
  BRAVE_SEARCH_API_KEY: optionalKey,
  NEXT_PUBLIC_SUPABASE_URL: optionalKey,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: optionalKey,
  SUPABASE_SECRET_KEY: optionalKey,
  NEXT_PUBLIC_SITE_URL: optionalKey,
});

export interface ServerEnv {
  YOUTUBE_API_KEY?: string;
  TAVILY_API_KEY?: string;
  BRAVE_SEARCH_API_KEY?: string;
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  SUPABASE_SECRET_KEY?: string;
  NEXT_PUBLIC_SITE_URL: string;
  hasYouTube: boolean;
  hasWebSearch: boolean;
  hasSupabase: boolean;
}

export function getServerEnv(source: NodeJS.ProcessEnv = process.env): ServerEnv {
  const parsed = envSchema.parse(source);
  const siteUrl = parsed.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const hasSupabase = Boolean(
    parsed.NEXT_PUBLIC_SUPABASE_URL && parsed.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
  return {
    ...parsed,
    NEXT_PUBLIC_SITE_URL: siteUrl,
    hasYouTube: Boolean(parsed.YOUTUBE_API_KEY),
    hasWebSearch: Boolean(parsed.TAVILY_API_KEY || parsed.BRAVE_SEARCH_API_KEY),
    hasSupabase,
  };
}

export function isSupabaseConfigured(source: NodeJS.ProcessEnv = process.env): boolean {
  return getServerEnv(source).hasSupabase;
}
