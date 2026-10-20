import { ExternalLink } from 'lucide-react';
import type { YouTubeVideo } from '@/lib/adapters/youtube';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

function unavailableReason(video: YouTubeVideo): string {
  if (!video.available) return 'This video is unavailable (private or removed by the owner).';
  return 'Embedding is disabled by the video owner — watch it on YouTube instead.';
}

export function VideoPlayer({ video }: { video: YouTubeVideo }) {
  if (video.embeddable && video.available) {
    return (
      <div className="overflow-hidden rounded-card border border-border bg-surface shadow-card">
        <iframe
          className="aspect-video w-full"
          src={video.embedUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <Card className="flex flex-col gap-3">
      <Badge className="w-fit">Not embeddable</Badge>
      <p className="text-sm text-foreground">{video.title}</p>
      <p className="text-sm text-muted-foreground">{unavailableReason(video)}</p>
      {video.available ? (
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-2 hover:underline"
        >
          <ExternalLink aria-hidden className="size-4" />
          Watch on YouTube
        </a>
      ) : null}
    </Card>
  );
}
