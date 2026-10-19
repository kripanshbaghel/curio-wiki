import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SubjectGrid } from '@/components/home/subject-grid';

describe('SubjectGrid', () => {
  it('renders 6 subject cards linking to their subject pages', () => {
    render(<SubjectGrid />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(6);
    const hrefs = links.map((link) => link.getAttribute('href'));
    expect(hrefs).toEqual(
      expect.arrayContaining([
        '/subjects/physics',
        '/subjects/chemistry',
        '/subjects/biology',
        '/subjects/mathematics',
        '/subjects/technology',
        '/subjects/engineering',
      ]),
    );
    for (const link of links) {
      expect(link).toHaveAccessibleName();
    }
  });
});
