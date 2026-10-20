import type { SupabaseClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { isSafeExternalUrl } from '@/lib/adapters/web';
import { ProviderError } from '@/lib/errors';

export const SAVED_TYPES = ['topic', 'experiment', 'video'] as const;

const SAVED_TABLE = 'saved_resources';

export const savedItemSchema = z.object({
  resource_type: z.enum(SAVED_TYPES),
  resource_id: z.string().min(1).max(200),
  title: z.string().min(1).max(300),
  url: z
    .string()
    .min(1)
    .max(2000)
    .refine((value) => isSafeExternalUrl(value), 'url must be a safe http(s) link'),
});

export type SavedItem = z.infer<typeof savedItemSchema>;

export interface SavedRow extends SavedItem {
  created_at: string;
}

function dbError(message: string, cause?: unknown): ProviderError {
  return new ProviderError('supabase', 'unknown', `saved_resources: ${message}`, { cause });
}

export async function listSavedItems(
  supabase: SupabaseClient,
  userId: string,
): Promise<SavedRow[]> {
  const { data, error } = await supabase
    .from(SAVED_TABLE)
    .select('resource_type, resource_id, title, url, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  if (error) throw dbError(error.message, error);
  return (data ?? []) as SavedRow[];
}

export async function saveItem(
  supabase: SupabaseClient,
  userId: string,
  item: SavedItem,
): Promise<void> {
  const { error } = await supabase
    .from(SAVED_TABLE)
    .upsert({ ...item, user_id: userId }, { onConflict: 'user_id,resource_type,resource_id' });
  if (error) throw dbError(error.message, error);
}

export async function removeSavedItem(
  supabase: SupabaseClient,
  userId: string,
  resourceType: SavedItem['resource_type'],
  resourceId: string,
): Promise<void> {
  const { error } = await supabase
    .from(SAVED_TABLE)
    .delete()
    .eq('user_id', userId)
    .eq('resource_type', resourceType)
    .eq('resource_id', resourceId);
  if (error) throw dbError(error.message, error);
}
