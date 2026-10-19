import type { Metadata } from 'next';
import { SUBJECT_KEYS } from '@/content/types';
import { topics } from '@/content/topics';
import { getSubject } from '@/content/subjects';
import { TopicCard } from '@/components/topic/topic-card';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';

export const metadata: Metadata = {
  title: 'Topics',
};

export default function TopicsPage() {
  return (
    <Container className="flex flex-col gap-10 py-10">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Topics</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Curated explainers with key concepts, equations, and experiments.
        </p>
      </div>
      {SUBJECT_KEYS.map((subjectKey) => {
        const subjectTopics = topics.filter((topic) => topic.subject === subjectKey);
        if (subjectTopics.length === 0) return null;
        const subject = getSubject(subjectKey);
        return (
          <section key={subjectKey}>
            <SectionHeader title={subject?.name ?? subjectKey} />
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subjectTopics.map((topic) => (
                <li key={topic.slug}>
                  <TopicCard topic={topic} />
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </Container>
  );
}
