import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getYouTubeVideos, isValidYouTubeId } from '@/lib/adapters/youtube';
import { getServerEnv } from '@/lib/config/env';
import { Container } from '@/components/ui/container';
import { VideoPlayer } from '@/components/video/video-player';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  if (!isValidYouTubeId(id) || !getServerEnv().hasYouTube) return { title: 'Video' };
  try {
    const [video] = await getYouTubeVideos([id]);
    return { title: video ? video.title : 'Video not found' };
  } catch {
    return { title: 'Video' };
  }
}

export default async function VideoPage({ params }: Props) {
  const { id } = await params;
  if (!isValidYouTubeId(id)) notFound();
  if (!getServerEnv().hasYouTube) {
    return (
      <Container className="py-16">
        <p className="text-sm text-muted-foreground">
          YouTube API key not configured — see <code className="rounded bg-surface-muted px-1">docs/setup.md</code>.
        </p>
      </Container>
    );
  }

  let video;
  try {
    [video] = await getYouTubeVideos([id]);
  } catch {
    video = undefined;
  }
  if (!video) notFound();

  return (
    <Container className="flex max-w-4xl flex-col gap-6 py-10">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">{video.title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{video.channelTitle}</p>
      </header>
      <VideoPlayer video={video} />
      {video.description ? (
        <p className="max-w-3xl whitespace-pre-line text-sm text-muted-foreground">
          {video.description}
        </p>
      ) : null}
      <p className="text-xs text-muted-foreground">
        Video served via YouTube&apos;s privacy-enhanced embed.{' '}
        <Link
          href="/videos"
          className="text-primary underline-offset-2 hover:underline"
        >
          Back to videos
        </Link>
      </p>
    </Container>
  );
}
