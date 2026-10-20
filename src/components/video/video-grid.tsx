import type { YouTubeVideo } from '@/lib/adapters/youtube';
import { VideoCard } from '@/components/search/video-card';

export function VideoGrid({ videos }: { videos: YouTubeVideo[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </ul>
  );
}
