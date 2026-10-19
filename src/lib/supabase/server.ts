import 'server-only';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import type { WebSocketLikeConstructor } from '@supabase/realtime-js';
import { cookies } from 'next/headers';
import { WebSocket } from 'ws';

/**
 * @supabase/realtime-js ≥2.118 requires Node ≥22's native WebSocket and throws
 * at client construction on Node 20. We never use realtime channels, but the
 * constructor still checks — injecting `ws` satisfies it cheaply.
 * (https://github.com/orgs/supabase/discussions/45715)
 */
const serverOptions = {
  realtime: { transport: WebSocket as unknown as WebSocketLikeConstructor },
} as const;

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // Called from a Server Component — middleware refreshes sessions.
          }
        },
      },
      ...serverOptions,
    },
  );
}
