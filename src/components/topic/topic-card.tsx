import Link from 'next/link';
import type { Topic } from '@/content/types';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

export function TopicCard({ topic }: { topic: Topic }) {
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="h-full transition-colors hover:border-primary/40">
        <Badge>{topic.subject}</Badge>
        <h3 className="mt-3 font-semibold text-foreground">{topic.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{topic.summary}</p>
      </Card>
    </Link>
  );
}
