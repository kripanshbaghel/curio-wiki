import { SearchBox } from '@/components/layout/search-box';
import { SubjectGrid } from '@/components/home/subject-grid';
import { TopicCollections } from '@/components/home/topic-collections';
import { FeaturedExperiments } from '@/components/home/featured-experiments';
import { VideoSection } from '@/components/home/video-section';
import { Container } from '@/components/ui/container';

export default function Home() {
  return (
    <Container className="flex flex-col gap-12 py-12">
      <section className="mx-auto w-full max-w-2xl text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Search STEM topics and experiments
        </h1>
        <div className="mt-6">
          <SearchBox size="hero" autoFocus />
        </div>
      </section>
      <SubjectGrid />
      <TopicCollections />
      <FeaturedExperiments />
      <VideoSection />
    </Container>
  );
}
