import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { waveSuperposition } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, label, line, panel, plotArea, prepare, wavePath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'physics',
  aspect: 1.65,
  autoPlay: true,
  stageLabel: 'Two coherent waves and their sum, showing constructive and destructive interference',
  stageHint: 'The upper two traces are the individual waves; the lower trace is their sum. A phase shift of 180° turns a peak into a trough.',
  controls: [
    { kind: 'slider', id: 'frequency', label: 'Frequency', min: 0.5, max: 3, step: 0.1, defaultValue: 1, unit: 'Hz' },
    { kind: 'slider', id: 'amplitude', label: 'Amplitude', min: 0.2, max: 1, step: 0.05, defaultValue: 1, unit: 'rel.' },
    { kind: 'slider', id: 'phase', label: 'Phase difference', min: 0, max: 360, step: 5, defaultValue: 0, unit: '°' },
    { kind: 'slider', id: 'path', label: 'Path difference', min: 0, max: 2, step: 0.05, defaultValue: 0, unit: 'λ' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const frequency = num(params, 'frequency');
    const amplitude = num(params, 'amplitude');
    const phaseDeg = num(params, 'phase');
    const path = num(params, 'path');
    const wavelength = 1 / Math.max(0.1, frequency);
    const totalPhase = (2 * Math.PI * path) + (phaseDeg * Math.PI) / 180;
    const result = waveSuperposition(amplitude, totalPhase);
    const omega = 2 * Math.PI * frequency;

    const area = plotArea(view.width, view.height, 48, 30);
    const top = { x: area.x, y: area.y + 8, width: area.width, height: area.height * 0.36 };
    const bottom = { x: area.x, y: area.y + area.height * 0.55, width: area.width, height: area.height * 0.36 };

    panel(ctx, { x: area.x - 8, y: top.y - 10, width: area.width + 16, height: top.height + 20 }, CANVAS_COLORS.raised);
    panel(ctx, { x: area.x - 8, y: bottom.y - 10, width: area.width + 16, height: bottom.height + 20 }, CANVAS_COLORS.raised);

    line(ctx, top.x, top.y + top.height / 2, top.x + top.width, top.y + top.height / 2, CANVAS_COLORS.hairline, 1);
    line(ctx, bottom.x, bottom.y + bottom.height / 2, bottom.x + bottom.width, bottom.y + bottom.height / 2, CANVAS_COLORS.hairline, 1);

    const k = (2 * Math.PI) / wavelength;
    const waveA = (u: number) => 0.5 + 0.35 * amplitude * Math.sin(k * u * 4 - omega * t);
    const waveB = (u: number) => 0.5 + 0.35 * amplitude * Math.sin(k * u * 4 - omega * t + totalPhase);
    const sum = (u: number) => {
      const raw = amplitude * Math.sin(k * u * 4 - omega * t) + amplitude * Math.sin(k * u * 4 - omega * t + totalPhase);
      return 0.5 + 0.175 * raw;
    };

    wavePath(ctx, top, waveA, CANVAS_COLORS.physics, 2);
    wavePath(ctx, top, waveB, CANVAS_COLORS.mathematics, 2, [5, 4]);
    wavePath(ctx, bottom, sum, CANVAS_COLORS.ink, 2.5);

    label(ctx, 'Wave A', top.x + 8, top.y + 10, { color: CANVAS_COLORS.physics, size: 10, weight: 600 });
    label(ctx, 'Wave B', top.x + 72, top.y + 10, { color: CANVAS_COLORS.mathematics, size: 10, weight: 600 });
    label(ctx, 'A + B', bottom.x + 8, bottom.y + 10, { color: CANVAS_COLORS.ink, size: 10, weight: 600 });

    const barWidth = 92;
    const barX = area.x + area.width - barWidth - 8;
    const barY = bottom.y + bottom.height - 18;
    line(ctx, barX, barY, barX + barWidth, barY, CANVAS_COLORS.hairline, 5);
    line(ctx, barX, barY, barX + barWidth * (result.resultant / 2), barY, CANVAS_COLORS.technology, 5);
    label(ctx, result.kind, barX + barWidth / 2, barY - 10, {
      align: 'center',
      color: CANVAS_COLORS.technology,
      size: 9,
      weight: 600,
    });

    drawTitle(ctx, view.width, `λ = ${formatNumber(wavelength, 2)} m · Δφ = ${formatNumber(phaseDeg, 0)}°`);
    label(ctx, `path ${formatNumber(path, 2)} λ`, view.width - 16, 18, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 10,
    });
    cornerNote(ctx, view.width, view.height, 'Equal amplitudes · ideal superposition');
  },
  metrics(params) {
    const frequency = num(params, 'frequency');
    const amplitude = num(params, 'amplitude');
    const phaseDeg = num(params, 'phase');
    const path = num(params, 'path');
    const totalPhase = (2 * Math.PI * path) + (phaseDeg * Math.PI) / 180;
    const result = waveSuperposition(amplitude, totalPhase);
    return [
      { label: 'Wavelength', value: formatNumber(1 / Math.max(0.1, frequency), 2), unit: 'm' },
      { label: 'Phase difference', value: formatNumber(phaseDeg, 0), unit: '°' },
      { label: 'Path difference', value: formatNumber(path, 2), unit: 'λ' },
      { label: 'Resultant amplitude', value: formatNumber(result.resultant, 2), unit: 'rel.' },
      { label: 'Interference', value: result.kind },
      { label: 'Source frequency', value: formatNumber(frequency, 1), unit: 'Hz' },
    ];
  },
  explanation(params) {
    const phaseDeg = num(params, 'phase');
    const path = num(params, 'path');
    const totalPhase = (2 * Math.PI * path) + (phaseDeg * Math.PI) / 180;
    const result = waveSuperposition(num(params, 'amplitude'), totalPhase);
    const kind = result.kind;
    return {
      headline: kind === 'destructive' ? 'The waves cancel where their peaks oppose.' : kind === 'constructive' ? 'The waves reinforce wherever their phases agree.' : 'The waves partly reinforce and partly cancel.',
      body: `The phase difference is ${(totalPhase * 180 / Math.PI).toFixed(0)}°, from ${phaseDeg.toFixed(0)}° of source phase plus ${path.toFixed(2)}λ of path difference. The resultant amplitude is ${result.resultant.toFixed(2)} relative to a single wave amplitude of ${num(params, 'amplitude').toFixed(2)}.`,
    };
  },
  experiment: {
    question: 'What happens to the sum when the phase difference changes from 0° to 180°?',
    steps: [
      'Leave both amplitudes at 1 and the path difference at 0.',
      'Set the phase difference to 0° and note the lower trace.',
      'Change the phase difference to 180° and compare the lower trace.',
    ],
    expected: 'At 0° the waves are in phase and add to twice the amplitude. At 180° every peak meets a trough and the sum is zero.',
  },
  assumptions: [
    'The two waves have equal amplitude and a constant phase relationship.',
    'Superposition is linear and one-dimensional; the medium does not change the waves.',
    'Reflections, absorption and diffraction losses are ignored.',
  ],
  sources: [SOURCES.physics, { label: 'Wave interference — Wikipedia', url: 'https://en.wikipedia.org/wiki/Wave_interference' }],
};

export default spec;
