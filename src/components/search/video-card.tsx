import Link from 'next/link';
import { Play } from 'lucide-react';
import type { YouTubeVideo } from '@/lib/adapters/youtube';
import { Card } from '@/components/ui/card';

export function VideoCard({ video }: { video: YouTubeVideo }) {
  return (
    <Link
      href={`/videos/${video.id}`}
      className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Card className="flex h-full flex-col gap-3 transition-colors hover:border-primary/40">
        <div className="relative aspect-video overflow-hidden rounded-md bg-surface-muted">
          {video.thumbnailUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={video.thumbnailUrl} alt="" className="size-full object-cover" loading="lazy" />
          ) : null}
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-background/80 p-3 shadow-card">
              <Play aria-hidden className="size-5 text-foreground" fill="currentColor" />
            </span>
          </span>
        </div>
        <h3 className="line-clamp-2 text-sm font-medium text-foreground">{video.title}</h3>
        <p className="text-xs text-muted-foreground">{video.channelTitle}</p>
      </Card>
    </Link>
  );
}
