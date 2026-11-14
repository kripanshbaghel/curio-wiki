import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TopicCard } from '@/components/topic/topic-card';

describe('TopicCard', () => {
  it('links to the topic page with the subject badge and summary', () => {
    render(
      <TopicCard
        topic={{
          slug: 'photosynthesis',
          title: 'Photosynthesis',
          subject: 'biology',
          category: 'plants',
          summary: 'How plants turn light into sugar.',
          aliases: [],
          keyConcepts: [],
          equations: [],
          relatedExperimentSlugs: [],
          relatedSlugs: [],
          wikipediaTitle: 'Photosynthesis',
          collectionSlugs: [],
        }}
      />,
    );
    const link = screen.getByRole('link', { name: /photosynthesis/i });
    expect(link.getAttribute('href')).toBe('/topics/photosynthesis');
    expect(screen.getByText('biology')).toBeInTheDocument();
    expect(screen.getByText('How plants turn light into sugar.')).toBeInTheDocument();
  });
});
