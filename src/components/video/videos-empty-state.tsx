import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';

export function VideosEmptyState() {
  return (
    <Container className="py-16">
      <EmptyState
        title="YouTube API key not configured"
        description={
          <>
            Set <code className="rounded bg-surface-muted px-1">YOUTUBE_API_KEY</code> to enable
            video search. See <code className="rounded bg-surface-muted px-1">docs/setup.md</code>{' '}
            in the repository for setup steps.
          </>
        }
      />
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Meanwhile, browse{' '}
        <Link href="/topics" className="text-primary underline-offset-2 hover:underline">
          topics
        </Link>{' '}
        or{' '}
        <Link href="/experiments" className="text-primary underline-offset-2 hover:underline">
          experiments
        </Link>
        .
      </p>
    </Container>
  );
}
