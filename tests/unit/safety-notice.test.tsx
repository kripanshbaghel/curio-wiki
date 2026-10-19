import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SafetyNotice } from '@/components/experiment/safety-notice';

describe('SafetyNotice', () => {
  it('renders the safety warnings', () => {
    render(
      <SafetyNotice
        supervision="none"
        safety={['Keep the area clear.', 'Wear eye protection.']}
      />,
    );
    expect(screen.getByText('Safety first')).toBeInTheDocument();
    expect(screen.getByText('Keep the area clear.')).toBeInTheDocument();
    expect(screen.getByText('Wear eye protection.')).toBeInTheDocument();
  });

  it('shows a prominent supervision banner for adult-required experiments', () => {
    render(
      <SafetyNotice supervision="adult-required" safety={['Wear gloves.']} />,
    );
    expect(
      screen.getByText('Adult supervision required for this experiment.'),
    ).toBeInTheDocument();
  });

  it('shows a teacher-led banner for teacher-led experiments', () => {
    render(<SafetyNotice supervision="teacher-led" safety={['Follow classroom rules.']} />);
    expect(screen.getByText('Teacher-led: follow your classroom lab rules.')).toBeInTheDocument();
  });
});
