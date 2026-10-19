import Link from 'next/link';
import { Play } from 'lucide-react';
import { searchYouTube } from '@/lib/adapters/youtube';
import { getServerEnv } from '@/lib/config/env';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';

/**
 * Homepage video strip: live YouTube results for a fixed educational query.
 * Renders nothing when YouTube isn't configured or the request fails — the
 * rest of the homepage stays fully usable.
 */
export async function VideoSection() {
  if (!getServerEnv().hasYouTube) return null;

  let videos;
  try {
    videos = await searchYouTube('science experiments for students', { maxResults: 3 });
  } catch {
    return null;
  }
  if (videos.length === 0) return null;

  return (
    <section>
      <SectionHeader
        title="Videos"
        action={
          <Link href="/videos" className="font-medium text-primary hover:underline">
            Browse videos
          </Link>
        }
      />
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <li key={video.id}>
            <Link
              href={`/videos/${video.id}`}
              className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Card className="flex h-full flex-col gap-3 transition-colors hover:border-primary/40">
                <div className="relative aspect-video overflow-hidden rounded-md bg-surface-muted">
                  {video.thumbnailUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={video.thumbnailUrl}
                      alt=""
                      className="size-full object-cover"
                      loading="lazy"
                    />
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
          </li>
        ))}
      </ul>
    </section>
  );
}
