import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getExperiment } from '@/content/experiments';
import { getCollection, collections } from '@/content/collections';
import { getTopic } from '@/content/topics';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { ConceptList } from '@/components/topic/concept-list';
import { EquationBlock } from '@/components/topic/equation-block';
import { VisualizerCallout } from '@/components/topic/visualizer-callout';
import { WikipediaPanel } from '@/components/topic/wikipedia-panel';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  return { title: topic ? topic.title : 'Topic not found' };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const relatedExperiments = topic.relatedExperimentSlugs
    .map((experimentSlug) => getExperiment(experimentSlug))
    .filter((experiment) => experiment !== undefined);
  const topicCollections = topic.collectionSlugs
    .map((collectionSlug) => collections.find((collection) => collection.slug === collectionSlug) ?? getCollection(collectionSlug))
    .filter((collection) => collection !== undefined);
  const relatedTopics = topic.relatedSlugs
    .map((slug) => getTopic(slug))
    .filter((other) => other !== undefined);

  return (
    <Container className="flex flex-col gap-10 py-10">
      <header className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Badge>{topic.subject}</Badge>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{topic.title}</h1>
        <p className="max-w-3xl text-muted-foreground">{topic.summary}</p>
      </header>

      <VisualizerCallout topicSlug={topic.slug} />

      {topic.keyConcepts.length > 0 ? (
        <section>
          <SectionHeader title="Key concepts" />
          <ConceptList concepts={topic.keyConcepts} />
        </section>
      ) : null}

      {topic.equations.length > 0 ? (
        <section className="flex flex-col gap-4">
          <SectionHeader title="Equations" />
          {topic.equations.map((equation) => (
            <EquationBlock key={equation.label} {...equation} />
          ))}
        </section>
      ) : null}

      {relatedExperiments.length > 0 ? (
        <section>
          <SectionHeader
            title="Related experiments"
            action={
              <Link href="/experiments" className="font-medium text-primary hover:underline">
                All experiments
              </Link>
            }
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedExperiments.map((experiment) => (
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

      {relatedTopics.length > 0 ? (
        <section>
          <SectionHeader title="Related topics" />
          <ul className="flex flex-wrap gap-2">
            {relatedTopics.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/topics/${other.slug}`}
                  className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-foreground hover:border-primary/40"
                >
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {topicCollections.length > 0 ? (
        <section>
          <SectionHeader title="Collections" />
          <ul className="flex flex-wrap gap-2">
            {topicCollections.map((collection) => (
              <li key={collection.slug}>
                <Link
                  href={`/topics?collection=${collection.slug}`}
                  className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-sm font-medium text-foreground hover:border-primary/40"
                >
                  {collection.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section>
        <SectionHeader title="Further reading" />
        <a
          href={`https://en.wikipedia.org/wiki/${encodeURIComponent(topic.wikipediaTitle)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary underline-offset-2 hover:underline"
        >
          Wikipedia: {topic.wikipediaTitle}
        </a>
      </section>

      {topic.sources && topic.sources.length > 0 ? (
        <section>
          <SectionHeader title="Sources" />
          <p className="mb-3 text-sm text-muted-foreground">
            This curated summary is written in line with the references below. It is not a copy of
            these sources.
          </p>
          <ul className="flex flex-col gap-1">
            {topic.sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary underline-offset-2 hover:underline"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <WikipediaPanel wikipediaTitle={topic.wikipediaTitle} />
    </Container>
  );
}
