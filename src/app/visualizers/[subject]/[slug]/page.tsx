import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getSubject } from '@/content/subjects';
import { getTopic } from '@/content/topics';
import { getVisualizer, visualizers, visualizersBySubject } from '@/content/visualizers';
import { Container } from '@/components/ui/container';
import { VisualizerClient } from '@/components/visualizers/registry';

interface Props {
  params: Promise<{ subject: string; slug: string }>;
}

export function generateStaticParams() {
  return visualizers.map((entry) => ({ subject: entry.subject, slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getVisualizer(slug);
  if (!meta) return { title: 'Visualizer not found' };
  return {
    title: meta.title,
    description: meta.summary,
  };
}

export default async function VisualizerWorkspacePage({ params }: Props) {
  const { subject: subjectSlug, slug } = await params;
  const subject = getSubject(subjectSlug);
  const meta = getVisualizer(slug);
  if (!subject || !meta || meta.subject !== subject.slug) notFound();

  const siblings = visualizersBySubject(subject.slug);
  const index = siblings.findIndex((entry) => entry.slug === meta.slug);
  const previous = index > 0 ? siblings[index - 1] : null;
  const next = index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : null;

  const relatedTopics = meta.topicSlugs
    .map((topicSlug) => getTopic(topicSlug))
    .filter((topic) => topic !== undefined);

  return (
    <Container className="flex flex-col gap-8 py-10">
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/visualizers" className="underline-offset-4 hover:text-foreground hover:underline">
              Visualizers
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link
              href={`/visualizers/${subject.slug}`}
              className="underline-offset-4 hover:text-foreground hover:underline"
            >
              {subject.name}
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-foreground">
            {meta.title}
          </li>
        </ol>
      </nav>

      <VisualizerClient meta={meta} />

      {relatedTopics.length > 0 ? (
        <section aria-labelledby="related-reading" className="border-t border-border pt-6">
          <h2 id="related-reading" className="text-sm font-semibold text-foreground">
            Read alongside this bench
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {relatedTopics.map((topic) => (
              <li key={topic.slug}>
                <Link
                  href={`/topics/${topic.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground hover:bg-surface-muted"
                >
                  {topic.title}
                  <ArrowRight aria-hidden className="size-3" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <nav aria-label="More in this subject" className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
        {previous ? (
          <Link
            href={`/visualizers/${previous.subject}/${previous.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft aria-hidden className="size-4" />
            <span>
              <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">Previous</span>
              {previous.title}
            </span>
          </Link>
        ) : (
          <span aria-hidden />
        )}
        {next ? (
          <Link
            href={`/visualizers/${next.subject}/${next.slug}`}
            className="inline-flex items-center gap-1.5 text-right text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <span>
              <span className="block text-[11px] uppercase tracking-wide text-muted-foreground">Next</span>
              {next.title}
            </span>
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        ) : (
          <span aria-hidden />
        )}
      </nav>
    </Container>
  );
}
