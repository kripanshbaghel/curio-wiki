import { NextResponse } from 'next/server';
import { createSupabaseServerClient, requireUser } from '@/lib/supabase/server';
import {
  removeSavedItem,
  savedItemSchema,
  saveItem,
  listSavedItems,
} from '@/lib/saved/repository';

function unauthorized() {
  return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
}

async function withUser<T>(run: (userId: string, supabase: Awaited<ReturnType<typeof createSupabaseServerClient>>) => Promise<T>): Promise<T | NextResponse> {
  const auth = await requireUser('/account');
  if ('redirect' in auth) return unauthorized();
  const supabase = await createSupabaseServerClient();
  return run(auth.user.id, supabase);
}

export async function GET() {
  try {
    const result = await withUser(async (userId, supabase) => {
      const items = await listSavedItems(supabase, userId);
      return NextResponse.json({ items });
    });
    if (result instanceof NextResponse) return result;
    return result;
  } catch {
    return NextResponse.json({ error: 'database_error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const auth = await requireUser('/account');
  if ('redirect' in auth) return unauthorized();

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 });
  }

  const parsed = savedItemSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'invalid_item', issues: parsed.error.issues }, { status: 400 });
  }

  try {
    const supabase = await createSupabaseServerClient();
    await saveItem(supabase, auth.user.id, parsed.data);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'database_error' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const auth = await requireUser('/account');
  if ('redirect' in auth) return unauthorized();

  const { searchParams } = new URL(request.url);
  const parsed = savedItemSchema
    .pick({ resource_type: true, resource_id: true })
    .safeParse({
      resource_type: searchParams.get('resource_type'),
      resource_id: searchParams.get('resource_id'),
    });
  if (!parsed.success) {
    return NextResponse.json({ error: 'invalid_item' }, { status: 400 });
  }

  try {
    const supabase = await createSupabaseServerClient();
    await removeSavedItem(supabase, auth.user.id, parsed.data.resource_type, parsed.data.resource_id);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'database_error' }, { status: 500 });
  }
}
