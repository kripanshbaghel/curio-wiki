import { createServerClient as createSSRServerClient } from '@supabase/ssr';
import type { WebSocketLikeConstructor } from '@supabase/realtime-js';
import type { User } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { isSupabaseConfigured } from '@/lib/config/env';
import { NoopWebSocket } from '@/lib/supabase/noop-websocket';

export { isSupabaseConfigured };

export async function createSupabaseServerClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error('Supabase is not configured.');
  }
  const cookieStore = await cookies();
  return createSSRServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          // Server Component — ignore.
        }
      },
    },
    realtime: {
      transport: NoopWebSocket as unknown as WebSocketLikeConstructor,
    },
  });
}

export async function getOptionalUser(): Promise<User | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function requireUser(
  pathname = '/account',
): Promise<{ user: User } | { redirect: string }> {
  if (!isSupabaseConfigured()) return { redirect: '/signin' };
  const user = await getOptionalUser();
  if (!user) return { redirect: `/signin?next=${encodeURIComponent(pathname)}` };
  return { user };
}
