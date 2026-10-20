import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { VideosEmptyState } from '@/components/video/videos-empty-state';

describe('VideosEmptyState', () => {
  it('explains the missing YouTube key honestly', () => {
    render(<VideosEmptyState />);
    expect(screen.getByText(/youtube api key not configured/i)).toBeInTheDocument();
    expect(screen.getByText('docs/setup.md')).toBeInTheDocument();
  });
});
