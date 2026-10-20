import type { Metadata } from 'next';
import { runUnifiedSearch } from '@/lib/search/orchestrator';
import { SearchBox } from '@/components/layout/search-box';
import { SearchResults } from '@/components/search/search-results';
import { Container } from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Search',
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const q = typeof params.q === 'string' ? params.q : '';
  const response = await runUnifiedSearch(q);
  const query = response.query ?? '';

  return (
    <Container className="flex flex-col gap-8 py-8">
      <h1 className="sr-only">{query ? `Search results for “${query}”` : 'Search'}</h1>
      <div className="sticky top-14 z-30 -mx-4 border-b border-border bg-background/90 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <SearchBox size="compact" initialValue={query} />
      </div>
      <SearchResults initial={response} />
    </Container>
  );
}
