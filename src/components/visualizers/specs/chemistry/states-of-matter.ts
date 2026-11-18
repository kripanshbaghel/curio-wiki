import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num } from '@/lib/visualizers/types';
import { matterState } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, panel, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'chemistry',
  aspect: 1.6,
  autoPlay: true,
  stageLabel: 'A container of particles in solid, liquid or gas state, moving with temperature-dependent energy',
  stageHint: 'Solid particles vibrate around fixed places. Liquid particles slide past one another. Gas particles fill the container.',
  controls: [
    { kind: 'slider', id: 'temperature', label: 'Temperature', min: 10, max: 800, step: 10, defaultValue: 300, unit: 'K' },
    { kind: 'slider', id: 'particles', label: 'Particles', min: 20, max: 120, step: 10, defaultValue: 60 },
    { kind: 'slider', id: 'volume', label: 'Container volume', min: 0.5, max: 2, step: 0.1, defaultValue: 1, unit: 'L' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const temperature = num(params, 'temperature');
    const count = Math.round(num(params, 'particles'));
    const volume = num(params, 'volume');
    const state = matterState(temperature, volume, count);
    const box = { x: view.width * 0.16, y: 52, width: view.width * 0.68, height: view.height - 100 };
    panel(ctx, box, CANVAS_COLORS.raised);
    ctx.save();
    ctx.strokeStyle = CANVAS_COLORS.hairline;
    ctx.lineWidth = 2;
    ctx.strokeRect(box.x, box.y, box.width, box.height);
    ctx.restore();

    const cols = Math.ceil(Math.sqrt(count));
    const rows = Math.ceil(count / cols);
    const cellW = box.width / cols;
    const cellH = box.height / rows;
    const energy = Math.min(1.8, state.averageSpeed / 650);
    const color = state.state === 'solid' ? CANVAS_COLORS.chemistry : state.state === 'liquid' ? CANVAS_COLORS.technology : CANVAS_COLORS.engineering;

    for (let index = 0; index < count; index += 1) {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const latticeX = box.x + (col + 0.5) * cellW;
      const latticeY = box.y + (row + 0.5) * cellH;
      let x = latticeX;
      let y = latticeY;
      if (state.state === 'solid') {
        x += Math.sin(t * 4 + index) * 1.8 * energy;
        y += Math.cos(t * 5 + index * 1.7) * 1.8 * energy;
      } else if (state.state === 'liquid') {
        x += Math.sin(t * 0.8 + index * 2.1) * cellW * 0.28 * energy;
        y += Math.max(0, box.y + box.height * 0.55 - latticeY) * 0.9 + Math.cos(t * 1.1 + index) * cellH * 0.18 * energy;
        y = Math.min(box.y + box.height - 8, Math.max(box.y + box.height * 0.42, y));
      } else {
        x = box.x + 8 + ((index * 97) % Math.max(1, Math.floor(box.width - 16)));
        y = box.y + 8 + ((index * 61) % Math.max(1, Math.floor(box.height - 16)));
        x += Math.sin(t * (1.2 + energy) + index * 2.3) * 18;
        y += Math.cos(t * (1.5 + energy) + index * 1.9) * 14;
        x = Math.min(box.x + box.width - 8, Math.max(box.x + 8, x));
        y = Math.min(box.y + box.height - 8, Math.max(box.y + 8, y));
      }
      dot(ctx, x, y, state.state === 'gas' ? 3.5 : 4.2, color, state.state !== 'solid');
    }

    if (state.state === 'solid') {
      for (let index = 0; index < Math.min(count - 1, 18); index += 1) {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const x = box.x + (col + 0.5) * cellW;
        const y = box.y + (row + 0.5) * cellH;
        if (col + 1 < cols) line(ctx, x, y, x + cellW, y, CANVAS_COLORS.hairline, 1, [2, 3]);
        if (row + 1 < rows) line(ctx, x, y, x, y + cellH, CANVAS_COLORS.hairline, 1, [2, 3]);
      }
    }

    const stateLabel = state.state === 'solid' ? 'Solid' : state.state === 'liquid' ? 'Liquid' : 'Gas';
    label(ctx, stateLabel, box.x + 10, box.y + 20, { color, size: 14, weight: 700 });
    label(ctx, `${formatNumber(temperature, 0)} K`, box.x + box.width - 10, box.y + 20, { align: 'right', color: CANVAS_COLORS.ink, size: 12, weight: 600 });
    drawTitle(ctx, view.width, `Particle model · ${stateLabel.toLowerCase()}`);
    cornerNote(ctx, view.width, view.height, 'Water-like thresholds at 1 atm · not to scale');
  },
  metrics(params) {
    const state = matterState(num(params, 'temperature'), num(params, 'volume'), Math.round(num(params, 'particles')));
    return [
      { label: 'State', value: state.state },
      { label: 'Average speed', value: formatNumber(state.averageSpeed, 0), unit: 'm/s' },
      { label: 'Temperature', value: formatNumber(num(params, 'temperature'), 0), unit: 'K' },
      { label: 'Relative density', value: formatNumber(state.density, 1), unit: 'particles/L' },
      { label: 'Particles', value: String(Math.round(num(params, 'particles'))) },
      { label: 'Volume', value: formatNumber(num(params, 'volume'), 1), unit: 'L' },
    ];
  },
  explanation(params) {
    const state = matterState(num(params, 'temperature'), num(params, 'volume'), Math.round(num(params, 'particles')));
    const stateText = state.state === 'solid' ? 'Particles are locked into a lattice and only vibrate.' : state.state === 'liquid' ? 'Particles still touch but can slide past each other.' : 'Particles are far apart and move quickly through the whole container.';
    return {
      headline: `${state.state[0].toUpperCase()}${state.state.slice(1)} at ${num(params, 'temperature').toFixed(0)} K.`,
      body: `${stateText} The displayed average speed is ${state.averageSpeed.toFixed(0)} m/s, based on the equipartition result for water molecules. Raising temperature adds kinetic energy; it does not change the particles themselves.`,
    };
  },
  experiment: {
    question: 'Warm ice from 250 K to 400 K. What changes, and what stays the same?',
    steps: ['Set the temperature to 250 K and observe the solid lattice.', 'Raise it to 300 K and then 400 K.', 'Watch the particle motion and the state readout.'],
    expected: 'The arrangement loosens from solid to liquid to gas while the particles themselves remain the same water molecules. The average speed rises with temperature.',
  },
  assumptions: [
    'The model assumes water-like melting (273 K) and boiling (373 K) points at 1 atm.',
    'Particles are classical and drawn much larger than reality.',
    'The container is a simple fixed box; pressure changes are not modelled.',
  ],
  sources: [SOURCES.chemistry, { label: 'State of matter — Wikipedia', url: 'https://en.wikipedia.org/wiki/State_of_matter' }],
};

export default spec;
