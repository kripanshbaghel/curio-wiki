import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { experiments } from '@/content/experiments';
import { getSubject } from '@/content/subjects';
import { topics } from '@/content/topics';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { TopicCard } from '@/components/topic/topic-card';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const subject = getSubject(slug);
  return { title: subject ? subject.name : 'Subject not found' };
}

export default async function SubjectPage({ params }: Props) {
  const { slug } = await params;
  const subject = getSubject(slug);
  if (!subject) notFound();

  const subjectTopics = topics.filter((topic) => topic.subject === subject.slug);
  const featuredExperiments = experiments.filter(
    (experiment) => experiment.subject === subject.slug && experiment.featured,
  );

  return (
    <Container className="flex flex-col gap-10 py-10">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{subject.name}</h1>
        <p className="mt-2 text-muted-foreground">{subject.description}</p>
      </header>

      {subjectTopics.length > 0 ? (
        <section>
          <SectionHeader
            title="Topics"
            action={
              <Link href={`/topics?subject=${subject.slug}`} className="font-medium text-primary hover:underline">
                All {subject.name.toLowerCase()} topics
              </Link>
            }
          />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjectTopics.map((topic) => (
              <li key={topic.slug}>
                <TopicCard topic={topic} />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

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
