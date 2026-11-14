import type { Metadata } from 'next';
import Link from 'next/link';
import { collections } from '@/content/collections';
import { ALL_CATEGORY_SLUGS, getTopicsPage } from '@/content/topics';
import { SUBJECT_KEYS, type SubjectKey } from '@/content/types';
import { getSubject } from '@/content/subjects';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';
import { Pagination } from '@/components/ui/pagination';
import { SectionHeader } from '@/components/ui/section-header';
import { TopicCard } from '@/components/topic/topic-card';
import { TopicFilterBar, topicsHref } from '@/components/topic/topic-filter-bar';

export const metadata: Metadata = {
  title: 'Topics',
};

interface Props {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function single(value: string | string[] | undefined): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

export default async function TopicsPage({ searchParams }: Props) {
  const params = await searchParams;
  const subjectParam = single(params.subject);
  const subject = (SUBJECT_KEYS as readonly string[]).includes(subjectParam ?? '')
    ? (subjectParam as SubjectKey)
    : undefined;
  const category = single(params.category);
  const q = single(params.q);
  const collection = single(params.collection);
  const page = Number.parseInt(single(params.page) ?? '1', 10) || 1;

  const result = getTopicsPage({ subject, category, q, collection, page });
  const collectionTitle = collection
    ? collections.find((entry) => entry.slug === collection)?.title
    : undefined;

  const heading = collectionTitle ?? (subject ? `${getSubject(subject)?.name ?? subject} topics` : 'Topics');

  return (
    <Container className="flex flex-col gap-8 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{heading}</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {collectionTitle
            ? 'A curated collection of related topics.'
            : 'Curated explainers with key concepts, equations, and experiments.'}
        </p>
        <p className="mt-2 text-sm text-muted-foreground" aria-live="polite">
          {result.total} topic{result.total === 1 ? '' : 's'}
        </p>
      </div>

      <TopicFilterBar
        basePath="/topics"
        showSubjects
        categories={ALL_CATEGORY_SLUGS}
        current={{ subject, category, q, collection }}
      />

      {result.items.length > 0 ? (
        <section>
          <SectionHeader title={collection ? 'In this collection' : 'Browse topics'} />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {result.items.map((topic) => (
              <li key={topic.slug}>
                <TopicCard topic={topic} />
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <EmptyState
          title="No topics match"
          description="Try a different keyword, category, or subject — or search the whole web from the search page."
          action={
            <Link href="/search" className="text-sm font-medium text-primary hover:underline">
              Search the site and the web
            </Link>
          }
        />
      )}

      <Pagination
        page={result.page}
        pageCount={result.pageCount}
        makeHref={(nextPage) =>
          topicsHref('/topics', {
            subject,
            category,
            q,
            collection,
            page: nextPage === 1 ? undefined : String(nextPage),
          })
        }
      />
    </Container>
  );
}
