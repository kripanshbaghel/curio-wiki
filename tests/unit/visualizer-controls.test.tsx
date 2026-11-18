import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ControlPanel } from '@/components/visualizers/ui/controls';
import type { Control, Params } from '@/lib/visualizers/types';

const controls: Control[] = [
  {
    kind: 'slider',
    id: 'length',
    label: 'Length',
    min: 0,
    max: 10,
    step: 0.5,
    defaultValue: 2,
    unit: 'm',
  },
  {
    kind: 'toggle',
    id: 'labels',
    label: 'Labels',
    defaultValue: true,
  },
  {
    kind: 'select',
    id: 'mode',
    label: 'Mode',
    defaultValue: 'simple',
    options: [
      { value: 'simple', label: 'Simple' },
      { value: 'complex', label: 'Complex' },
    ],
  },
  {
    kind: 'segment',
    id: 'shape',
    label: 'Shape',
    defaultValue: 'cube',
    options: [
      { value: 'cube', label: 'Cube' },
      { value: 'sphere', label: 'Sphere' },
    ],
  },
  {
    kind: 'slider',
    id: 'hidden',
    label: 'Only for complex',
    min: 0,
    max: 1,
    step: 0.1,
    defaultValue: 0.5,
    when: (params: Params) => params.mode === 'complex',
  },
];

const params: Params = {
  length: 2,
  labels: true,
  mode: 'simple',
  shape: 'cube',
  hidden: 0.5,
};

describe('ControlPanel', () => {
  it('renders a labelled slider with its unit and current value', () => {
    render(<ControlPanel controls={controls} params={params} onChange={vi.fn()} onReset={vi.fn()} />);
    expect(screen.getByLabelText('Length')).toBeInTheDocument();
    expect(screen.getByLabelText('Length value')).toHaveValue(2);
    expect(screen.getByText('m')).toBeInTheDocument();
  });

  it('reports slider changes as numbers', () => {
    const onChange = vi.fn();
    render(<ControlPanel controls={controls} params={params} onChange={onChange} onReset={vi.fn()} />);
    fireEvent.change(screen.getByLabelText('Length'), { target: { value: '6.5' } });
    expect(onChange).toHaveBeenCalledWith('length', 6.5);
  });

  it('commits a typed numeric value on blur', () => {
    const onChange = vi.fn();
    render(<ControlPanel controls={controls} params={params} onChange={onChange} onReset={vi.fn()} />);
    const input = screen.getByLabelText('Length value');
    fireEvent.change(input, { target: { value: '4' } });
    fireEvent.blur(input);
    expect(onChange).toHaveBeenCalledWith('length', 4);
  });

  it('toggles switches and reports selects', () => {
    const onChange = vi.fn();
    render(<ControlPanel controls={controls} params={params} onChange={onChange} onReset={vi.fn()} />);
    fireEvent.click(screen.getByRole('switch', { name: /labels/i }));
    expect(onChange).toHaveBeenCalledWith('labels', false);
    fireEvent.change(screen.getByLabelText('Mode'), { target: { value: 'complex' } });
    expect(onChange).toHaveBeenCalledWith('mode', 'complex');
  });

  it('hides conditional controls until their condition is met', () => {
    const { rerender } = render(
      <ControlPanel controls={controls} params={params} onChange={vi.fn()} onReset={vi.fn()} />,
    );
    expect(screen.queryByText('Only for complex')).not.toBeInTheDocument();

    rerender(
      <ControlPanel
        controls={controls}
        params={{ ...params, mode: 'complex' }}
        onChange={vi.fn()}
        onReset={vi.fn()}
      />,
    );
    expect(screen.getByText('Only for complex')).toBeInTheDocument();
  });

  it('calls reset from the panel header', () => {
    const onReset = vi.fn();
    render(<ControlPanel controls={controls} params={params} onChange={vi.fn()} onReset={onReset} />);
    fireEvent.click(screen.getByRole('button', { name: /reset/i }));
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
