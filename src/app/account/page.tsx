import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { isSupabaseConfigured } from '@/lib/config/env';
import { listSavedItems, type SavedRow } from '@/lib/saved/repository';
import { createSupabaseServerClient, requireUser } from '@/lib/supabase/server';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';
import { SectionHeader } from '@/components/ui/section-header';
import { SavedList } from '@/components/saved/saved-list';

export const metadata: Metadata = {
  title: 'Saved',
};

const TYPE_LABELS: Record<SavedRow['resource_type'], string> = {
  topic: 'Topics',
  experiment: 'Experiments',
  video: 'Videos',
};

export default async function AccountPage() {
  // Unconfigured auth → same destination as signed-out; /signin explains the
  // missing setup honestly (EmptyState, no fake form).
  if (!isSupabaseConfigured()) redirect('/signin');

  const auth = await requireUser('/account');
  if ('redirect' in auth) redirect(auth.redirect);

  const supabase = await createSupabaseServerClient();
  let items: SavedRow[] = [];
  let databaseFailed = false;
  try {
    items = await listSavedItems(supabase, auth.user.id);
  } catch {
    databaseFailed = true;
  }

  const byType = {
    topic: items.filter((item) => item.resource_type === 'topic'),
    experiment: items.filter((item) => item.resource_type === 'experiment'),
    video: items.filter((item) => item.resource_type === 'video'),
  } as const;

  return (
    <Container className="flex flex-col gap-10 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Saved items</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Topics, experiments, and videos you&apos;ve bookmarked. Stored in your Supabase project,
          visible only to you.
        </p>
      </div>

      {databaseFailed ? (
        <EmptyState
          title="Saved items aren't available yet"
          description="The saved_resources table hasn't been created in your Supabase project. Run the migration in supabase/migrations/ (see docs/setup.md)."
        />
      ) : items.length === 0 ? (
        <EmptyState
          title="Nothing saved yet"
          description="Use the Save button on topics, experiments, and videos to keep them here."
        />
      ) : (
        (['topic', 'experiment', 'video'] as const).map((type) =>
          byType[type].length > 0 ? (
            <section key={type}>
              <SectionHeader title={TYPE_LABELS[type]} />
              <SavedList items={byType[type]} />
            </section>
          ) : null,
        )
      )}
    </Container>
  );
}
