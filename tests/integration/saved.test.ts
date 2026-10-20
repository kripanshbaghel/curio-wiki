import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const requireUser = vi.fn();
const createSupabaseServerClient = vi.fn();

vi.mock('@/lib/supabase/server', () => ({
  requireUser: (...args: unknown[]) => requireUser(...args),
  createSupabaseServerClient: (...args: unknown[]) => createSupabaseServerClient(...args),
  isSupabaseConfigured: () => true,
}));

import { GET, POST } from '@/app/api/saved/route';
import { listSavedItems, removeSavedItem, saveItem } from '@/lib/saved/repository';

const USER = { id: 'user-1', email: 'a@b.com' };

beforeEach(() => {
  vi.clearAllMocks();
});

describe('saved_resources migration SQL', () => {
  const sql = readFileSync(
    resolve(__dirname, '../../supabase/migrations/20261019000001_saved_resources.sql'),
    'utf8',
  );

  it('enables row level security', () => {
    expect(sql).toMatch(/enable row level security/i);
  });

  it('defines select, insert, and delete policies scoped to auth.uid()', () => {
    const uidChecks = sql.match(/auth\.uid\(\)\s*=\s*user_id/g) ?? [];
    expect(sql).toMatch(/create policy[\s\S]*?for select/i);
    expect(sql).toMatch(/create policy[\s\S]*?for insert/i);
    expect(sql).toMatch(/create policy[\s\S]*?for delete/i);
    expect(uidChecks.length).toBeGreaterThanOrEqual(3);
  });
});

describe('repository', () => {
  function makeClient(result: { data?: unknown; error?: unknown } = { data: [], error: null }) {
    const chain: Record<string, ReturnType<typeof vi.fn>> = {};
    const names = [
      'select',
      'insert',
      'upsert',
      'delete',
      'eq',
      'order',
      'single',
      'maybeSingle',
    ];
    for (const name of names) {
      chain[name] = vi.fn(() => chain);
    }
    chain.order = vi.fn(() => Promise.resolve(result));
    chain.single = vi.fn(() => Promise.resolve(result));
    const from = vi.fn(() => chain);
    return { client: { from } as never, from, chain };
  }

  it('lists items from saved_resources scoped to the user', async () => {
    const { client, from, chain } = makeClient({
      data: [{ resource_type: 'topic', resource_id: 'photosynthesis' }],
      error: null,
    });
    const items = await listSavedItems(client, 'user-1');
    expect(from).toHaveBeenCalledWith('saved_resources');
    expect(chain.eq).toHaveBeenCalledWith('user_id', 'user-1');
    expect(items).toHaveLength(1);
  });

  it('upserts with the user id and conflict target', async () => {
    const { client, from, chain } = makeClient({ error: null });
    await saveItem(client, 'user-1', {
      resource_type: 'experiment',
      resource_id: 'vinegar-volcano',
      title: 'Vinegar Volcano',
      url: 'http://localhost:3000/experiments/vinegar-volcano',
    });
    expect(from).toHaveBeenCalledWith('saved_resources');
    expect(chain.upsert).toHaveBeenCalledWith(
      expect.objectContaining({ user_id: 'user-1', resource_type: 'experiment' }),
      { onConflict: 'user_id,resource_type,resource_id' },
    );
  });

  it('deletes scoped to user, type, and id', async () => {
    const { client, from, chain } = makeClient({ error: null });
    chain.eq = vi.fn(() => chain);
    await removeSavedItem(client, 'user-1', 'video', 'abc123');
    expect(from).toHaveBeenCalledWith('saved_resources');
    expect(chain.delete).toHaveBeenCalled();
    expect(chain.eq).toHaveBeenCalledWith('user_id', 'user-1');
    expect(chain.eq).toHaveBeenCalledWith('resource_type', 'video');
    expect(chain.eq).toHaveBeenCalledWith('resource_id', 'abc123');
  });
});

describe('POST /api/saved', () => {
  it('returns 401 when there is no session', async () => {
    requireUser.mockResolvedValue({ redirect: '/signin?next=%2Faccount' });
    const response = await POST(
      new Request('http://localhost:3000/api/saved', {
        method: 'POST',
        body: JSON.stringify({
          resource_type: 'topic',
          resource_id: 'x',
          title: 'X',
          url: 'https://example.com/x',
        }),
      }),
    );
    expect(response.status).toBe(401);
  });

  it('returns 400 for an invalid resource_type', async () => {
    requireUser.mockResolvedValue({ user: USER });
    const response = await POST(
      new Request('http://localhost:3000/api/saved', {
        method: 'POST',
        body: JSON.stringify({
          resource_type: 'banana',
          resource_id: 'x',
          title: 'X',
          url: 'https://example.com/x',
        }),
      }),
    );
    expect(response.status).toBe(400);
  });

  it('returns 400 for an unsafe url', async () => {
    requireUser.mockResolvedValue({ user: USER });
    const response = await POST(
      new Request('http://localhost:3000/api/saved', {
        method: 'POST',
        body: JSON.stringify({
          resource_type: 'topic',
          resource_id: 'x',
          title: 'X',
          url: 'javascript:alert(1)',
        }),
      }),
    );
    expect(response.status).toBe(400);
  });
});

describe('GET /api/saved', () => {
  it('returns 401 when there is no session', async () => {
    requireUser.mockResolvedValue({ redirect: '/signin?next=%2Faccount' });
    const response = await GET();
    expect(response.status).toBe(401);
  });
});
