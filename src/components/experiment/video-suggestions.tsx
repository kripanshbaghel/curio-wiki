import { searchYouTube } from '@/lib/adapters/youtube';
import { getServerEnv } from '@/lib/config/env';
import { VideoCard } from '@/components/search/video-card';
import { SectionHeader } from '@/components/ui/section-header';

/**
 * Related videos for an experiment. Renders nothing when YouTube isn't
 * configured or the lookup fails — the experiment page stays usable.
 */
export async function VideoSuggestions({ queries }: { queries: string[] }) {
  if (!getServerEnv().hasYouTube || queries.length === 0) return null;

  let videos;
  try {
    videos = await searchYouTube(queries[0] as string, { maxResults: 3 });
  } catch {
    return null;
  }
  if (videos.length === 0) return null;

  return (
    <section>
      <SectionHeader title="Related videos" />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </ul>
    </section>
  );
}
