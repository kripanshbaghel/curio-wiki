import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getExperiment } from '@/content/experiments';
import { getTopic } from '@/content/topics';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { MaterialsList } from '@/components/experiment/materials-list';
import { SafetyNotice } from '@/components/experiment/safety-notice';
import { VideoSuggestions } from '@/components/experiment/video-suggestions';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experiment = getExperiment(slug);
  return { title: experiment ? experiment.title : 'Experiment not found' };
}

const LEVEL_LABEL = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
} as const;

export default async function ExperimentPage({ params }: Props) {
  const { slug } = await params;
  const experiment = getExperiment(slug);
  if (!experiment) notFound();

  const topic = getTopic(experiment.topic);

  return (
    <Container className="flex flex-col gap-10 py-10">
      <header className="max-w-3xl">
        <div className="flex flex-wrap gap-2">
          <Badge>{experiment.subject}</Badge>
          <Badge accent>{LEVEL_LABEL[experiment.level]}</Badge>
          <Badge>
            {experiment.supervision === 'none'
              ? 'No supervision'
              : experiment.supervision === 'adult-required'
                ? 'Adult supervision'
                : 'Teacher-led'}
          </Badge>
          {experiment.durationMinutes !== null ? (
            <Badge>{experiment.durationMinutes} min</Badge>
          ) : null}
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
          {experiment.title}
        </h1>
        {topic ? (
          <p className="mt-2 text-sm text-muted-foreground">
            Topic:{' '}
            <Link href={`/topics/${topic.slug}`} className="text-primary underline-offset-2 hover:underline">
              {topic.title}
            </Link>
          </p>
        ) : null}
      </header>

      <section>
        <SectionHeader title="Objective" />
        <p className="max-w-3xl text-sm text-foreground">{experiment.objective}</p>
      </section>

      <section>
        <SectionHeader title="The concept" />
        <p className="max-w-3xl text-sm text-muted-foreground">{experiment.concept}</p>
      </section>

      <SafetyNotice supervision={experiment.supervision} safety={experiment.safety} />

      <section>
        <SectionHeader title="Materials" />
        <MaterialsList materials={experiment.materials} />
      </section>

      <section>
        <SectionHeader title="Procedure" />
        <ol className="flex max-w-3xl flex-col gap-3">
          {experiment.procedure.map((step, index) => (
            <li key={step} className="flex gap-3 text-sm text-foreground">
              <span
                aria-hidden
                className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground"
              >
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <SectionHeader title="What to observe" />
        <ul className="flex max-w-3xl list-disc flex-col gap-1 pl-5 text-sm text-muted-foreground">
          {experiment.observations.map((observation) => (
            <li key={observation}>{observation}</li>
          ))}
        </ul>
      </section>

      <section>
        <SectionHeader title="Why it works" />
        <p className="max-w-3xl text-sm text-muted-foreground">{experiment.explanation}</p>
      </section>

      <VideoSuggestions queries={experiment.relatedVideoQueries} />

      <section>
        <SectionHeader title="Sources" />
        <ul className="flex flex-col gap-1 text-sm">
          {experiment.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-2 hover:underline"
              >
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-xs italic text-muted-foreground">
        CurioWiki editorial selection — not physically tested by CurioWiki. Follow every safety
        note, and supervise as indicated.
      </p>
    </Container>
  );
}
