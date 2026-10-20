import type { SupabaseClient } from '@supabase/supabase-js';
import { isSupabaseConfigured } from '@/lib/config/env';
import { listSavedItems, type SavedItem } from '@/lib/saved/repository';
import { createSupabaseServerClient, getOptionalUser } from '@/lib/supabase/server';

/**
 * Saved resource ids for the current user, filtered to one type.
 * Returns null when saving isn't possible (unconfigured, signed out,
 * or the saved_resources table isn't set up yet) so parents can hide
 * save controls entirely.
 */
export async function getSavedIds(
  type: SavedItem['resource_type'],
  supabase?: SupabaseClient,
): Promise<Set<string> | null> {
  if (!isSupabaseConfigured()) return null;
  try {
    const user = await getOptionalUser();
    if (!user) return null;
    const client = supabase ?? (await createSupabaseServerClient());
    const items = await listSavedItems(client, user.id);
    return new Set(
      items.filter((item) => item.resource_type === type).map((item) => item.resource_id),
    );
  } catch {
    return null;
  }
}
