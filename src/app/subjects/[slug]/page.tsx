import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SUBJECT_CATEGORIES } from '@/content/categories';
import { experiments } from '@/content/experiments';
import { getSubject } from '@/content/subjects';
import { getTopicsPage, TOPIC_PAGE_SIZE } from '@/content/topics';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';
import { Pagination } from '@/components/ui/pagination';
import { SectionHeader } from '@/components/ui/section-header';
import { TopicCard } from '@/components/topic/topic-card';
import { TopicFilterBar, topicsHref } from '@/components/topic/topic-filter-bar';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubject(slug);
  return { title: subject ? subject.name : 'Subject not found' };
}

function single(value: string | string[] | undefined): string | undefined {
  return typeof value === 'string' && value.length > 0 ? value : undefined;
}

export default async function SubjectPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const query = await searchParams;
  const category = single(query.category);
  const q = single(query.q);
  const page = Number.parseInt(single(query.page) ?? '1', 10) || 1;
  const basePath = `/subjects/${subject.slug}`;

  const result = getTopicsPage({
    subject: subject.slug,
    category,
    q,
    page,
    pageSize: TOPIC_PAGE_SIZE,
  });

  const featuredExperiments = experiments.filter(
    (experiment) => experiment.subject === subject.slug && experiment.featured,
  );

  return (
    <Container className="flex flex-col gap-10 py-10">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{subject.name}</h1>
        <p className="mt-2 text-muted-foreground">{subject.description}</p>
      </header>

      <section className="flex flex-col gap-5">
        <SectionHeader
          title="Topics"
          description={`${result.total} curated topic${result.total === 1 ? '' : 's'} in ${subject.name.toLowerCase()}.`}
          action={
            <Link href={`/topics?subject=${subject.slug}`} className="font-medium text-primary hover:underline">
              Browse the full library
            </Link>
          }
        />

        <TopicFilterBar
          basePath={basePath}
          categories={SUBJECT_CATEGORIES[subject.slug]}
          current={{ category, q }}
        />

        {result.items.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {result.items.map((topic) => (
              <li key={topic.slug}>
                <TopicCard topic={topic} />
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="No topics match"
            description="Try another keyword or category — or search the whole site and the web."
            action={
              <Link href="/search" className="text-sm font-medium text-primary hover:underline">
                Search topics
              </Link>
            }
          />
        )}

        <Pagination
          page={result.page}
          pageCount={result.pageCount}
          makeHref={(nextPage) =>
            topicsHref(basePath, {
              category,
              q,
              page: nextPage === 1 ? undefined : String(nextPage),
            })
          }
        />
      </section>

      {featuredExperiments.length > 0 ? (
        <section>
          <SectionHeader
            title="Featured experiments"
            action={
              <Link
                href={`/experiments?subject=${subject.slug}`}
                className="font-medium text-primary hover:underline"
              >
                All experiments
              </Link>
            }
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {featuredExperiments.map((experiment) => (
              <li key={experiment.slug}>
                <Link
                  href={`/experiments/${experiment.slug}`}
                  className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Card className="h-full transition-colors hover:border-primary/40">
                    <div className="flex flex-wrap gap-2">
                      <Badge>{experiment.subject}</Badge>
                      <Badge accent>{experiment.level}</Badge>
                    </div>
                    <h3 className="mt-3 font-semibold text-foreground">{experiment.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {experiment.objective}
                    </p>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section>
        <SectionHeader title="Videos" description={`Search YouTube for ${subject.name.toLowerCase()} videos.`} />
        <Link
          href={`/videos?q=${encodeURIComponent(subject.name)}`}
          className="inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary-hover"
        >
          Browse {subject.name.toLowerCase()} videos
        </Link>
      </section>
    </Container>
  );
}
