import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTopic } from '@/content/topics';
import { getExperiment } from '@/content/experiments';
import { getWikipediaSummary } from '@/lib/adapters/wikipedia';
import { searchYouTube, type YouTubeVideo } from '@/lib/adapters/youtube';
import { getResearch } from '@/lib/research';
import { Container } from '@/components/ui/container';
import { SectionHeader } from '@/components/ui/section-header';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { VideoPlayer } from '@/components/video/video-player';
import { EmptyState } from '@/components/ui/empty-state';

interface Props {
  params: Promise<{ slug: string }>;
}

interface LearningTopic {
  slug: string;
  title: string;
  subject: string;
  category: string;
  summary: string;
  wikipediaTitle?: string;
  relatedExperimentSlugs: string[];
  isCurated: boolean;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  return {
    title: topic ? `${topic.title} — Learning` : 'Learning',
  };
}

async function fetchYouTubeVideos(query: string): Promise<YouTubeVideo[]> {
  try {
    return await searchYouTube(query, { maxResults: 4 });
  } catch {
    return [];
  }
}

async function fetchWikipediaSummary(title: string) {
  try {
    return await getWikipediaSummary(title);
  } catch {
    return null;
  }
}

export default async function LearningPage({ params }: Props) {
  const { slug } = await params;

  const curatedTopic = getTopic(slug);
  let topic: LearningTopic | null = null;
  let researchData: { query: string } | null = null;

  if (curatedTopic) {
    topic = {
      slug: curatedTopic.slug,
      title: curatedTopic.title,
      subject: curatedTopic.subject,
      category: curatedTopic.category,
      summary: curatedTopic.summary,
      wikipediaTitle: curatedTopic.wikipediaTitle,
      relatedExperimentSlugs: curatedTopic.relatedExperimentSlugs,
      isCurated: true,
    };
  } else {
    researchData = getResearch(slug);
    if (researchData) {
      topic = {
        slug,
        title: researchData.query,
        subject: 'engineering',
        category: 'design-principles',
        summary: 'Externally discovered topic from live search results.',
        relatedExperimentSlugs: [],
        isCurated: false,
      };
    }
  }

  if (!topic) notFound();

  const [primaryVideo, alternativeVideos] = await Promise.all([
    fetchYouTubeVideos(topic.title).then((videos) => videos[0] ?? null),
    fetchYouTubeVideos(`${topic.title} educational`).then((videos) => videos.slice(0, 3)),
  ]);

  const wikiTitle = topic.wikipediaTitle ?? topic.title;
  const wikiSummary = await fetchWikipediaSummary(wikiTitle);

  const relatedExperiments = topic.relatedExperimentSlugs
    .map((experimentSlug) => getExperiment(experimentSlug))
    .filter((experiment) => experiment !== undefined);

  return (
    <Container className="flex flex-col gap-10 py-10">
      <header className="max-w-3xl">
        <div className="flex items-center gap-2">
          <Badge>{topic.subject}</Badge>
          <Badge>{topic.category}</Badge>
          {topic.isCurated ? (
            <Badge>Curated</Badge>
          ) : (
            <Badge>Temporary research</Badge>
          )}
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">{topic.title}</h1>
        <p className="mt-2 max-w-3xl text-muted-foreground">{topic.summary}</p>
      </header>

      <section>
        <SectionHeader title="Video" />
        {primaryVideo ? (
          <div className="flex flex-col gap-4">
            <VideoPlayer video={primaryVideo} />
            <div className="flex flex-col gap-1">
              <p className="font-semibold text-foreground">{primaryVideo.title}</p>
              <p className="text-sm text-muted-foreground">{primaryVideo.channelTitle}</p>
            </div>
          </div>
        ) : (
          <EmptyState
            title="No video available"
            description="YouTube API is not configured or no results were found for this topic."
          />
        )}
      </section>

      {alternativeVideos.length > 0 ? (
        <section>
          <SectionHeader title="Alternative videos" />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {alternativeVideos.map((video) => (
              <li key={video.id}>
                <Card className="h-full transition-colors hover:border-primary/40">
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
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.channelTitle}</p>
                    {video.available ? (
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary underline-offset-2 hover:underline mt-2 inline-block"
                      >
                        Watch on YouTube
                      </a>
                    ) : null}
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {wikiSummary ? (
        <section>
          <SectionHeader title="Wikipedia" />
          <div className="flex items-start gap-3">
            {wikiSummary.thumbnailUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={wikiSummary.thumbnailUrl}
                alt=""
                className="size-24 shrink-0 rounded-md object-cover"
                loading="lazy"
              />
            ) : null}
            <div className="min-w-0">
              <a
                href={wikiSummary.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline-offset-2 hover:underline"
              >
                {wikiSummary.title}
              </a>
              <p className="mt-2 text-sm text-foreground leading-relaxed">{wikiSummary.extract}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Content available under {wikiSummary.license}.{' '}
                <a
                  href={wikiSummary.pageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  Read original article
                </a>
              </p>
            </div>
          </div>
        </section>
      ) : (
        <EmptyState
          title="No Wikipedia information"
          description="Wikipedia data is not available for this topic."
        />
      )}

      {relatedExperiments.length > 0 ? (
        <section>
          <SectionHeader title="Related experiments" />
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {relatedExperiments.map((experiment) => (
              <li key={experiment.slug}>
                <Link
                  href={`/experiments/${experiment.slug}`}
                  className="block h-full rounded-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <Card className="h-full transition-colors hover:border-primary/40">
                    <div className="flex flex-wrap gap-2">
                      <Badge>{experiment.subject}</Badge>
                      <Badge accent>{experiment.level}</Badge>
                    </div>
                    <h3 className="mt-3 font-semibold text-foreground">{experiment.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {experiment.objective}
                    </p>
                  </Card>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section>
        <SectionHeader title="Further reading" />
        <ul className="flex flex-col gap-2">
          {wikiSummary ? (
            <li>
              <a
                href={wikiSummary.pageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary underline-offset-2 hover:underline"
              >
                {wikiSummary.title} — Wikipedia
              </a>
            </li>
          ) : null}
          {primaryVideo ? (
            <li>
              <a
                href={primaryVideo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary underline-offset-2 hover:underline"
              >
                {primaryVideo.title} — YouTube
              </a>
            </li>
          ) : null}
        </ul>
      </section>
    </Container>
  );
}
