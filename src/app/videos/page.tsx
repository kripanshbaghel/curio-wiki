import type { Metadata } from 'next';
import type { YouTubeVideo } from '@/lib/adapters/youtube';
import { searchYouTube } from '@/lib/adapters/youtube';
import { getServerEnv } from '@/lib/config/env';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { VideoGrid } from '@/components/video/video-grid';
import { VideoSearch } from '@/components/video/video-search';
import { VideosEmptyState } from '@/components/video/videos-empty-state';

export const metadata: Metadata = {
  title: 'Videos',
};

const DEFAULT_QUERY = 'science for students';

export default async function VideosPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string | string[] }>;
}) {
  const params = await searchParams;
  const q =
    typeof params.q === 'string' && params.q.trim() ? params.q.trim() : DEFAULT_QUERY;

  if (!getServerEnv().hasYouTube) {
    return <VideosEmptyState />;
  }

  let videos: YouTubeVideo[];
  let failed = false;
  try {
    videos = await searchYouTube(q, { maxResults: 12 });
  } catch {
    failed = true;
    videos = [];
  }

  return (
    <Container className="flex flex-col gap-8 py-10">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Videos</h1>
        <VideoSearch initialQuery={q} />
      </div>

      {failed ? (
        <p className="text-sm text-muted-foreground">
          Video search failed — the YouTube API may be rate-limited. Try again shortly.
        </p>
      ) : videos.length === 0 ? (
        <p className="text-sm text-muted-foreground">No videos found for “{q}”.</p>
      ) : (
        <section>
          <SectionHeader title={`Results for “${q}”`} />
          <VideoGrid videos={videos} />
        </section>
      )}
    </Container>
  );
}
