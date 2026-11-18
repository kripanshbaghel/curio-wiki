import type { VisualizerSpec } from '@/lib/visualizers/types';
import { num, str } from '@/lib/visualizers/types';
import { configurationFor } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare, ring } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const ORDER = ['1s', '2s', '2p', '3s', '3p', '4s'] as const;

function boxesFor(label: string): number {
  return label.endsWith('p') ? 3 : 1;
}

const spec: VisualizerSpec = {
  accent: 'chemistry',
  aspect: 1.7,
  animated: false,
  stageLabel: 'Electron shell rings beside orbital box notation with paired and unpaired electrons',
  stageHint: 'Orbital boxes fill singly before pairing (Hund’s rule). A full outer shell is chemically stable.',
  controls: [
    { kind: 'slider', id: 'z', label: 'Atomic number', min: 1, max: 20, step: 1, defaultValue: 8 },
    { kind: 'select', id: 'charge', label: 'Ion charge', defaultValue: '0', options: [
      { value: '0', label: 'Neutral' },
      { value: '1', label: '+1' },
      { value: '2', label: '+2' },
      { value: '-1', label: '−1' },
    ] },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const z = Math.round(num(params, 'z'));
    const charge = Number(str(params, 'charge'));
    const configuration = configurationFor(z, charge);
    const cx = view.width * 0.25;
    const cy = view.height * 0.52;
    const maxShell = Math.max(1, configuration.shells.length);

    configuration.shells.forEach((count, shellIndex) => {
      const radius = 32 + shellIndex * (Math.min(view.width * 0.11, 34));
      ring(ctx, cx, cy, radius, CANVAS_COLORS.hairline, 1);
      for (let electron = 0; electron < count; electron += 1) {
        const angle = (electron / Math.max(1, count)) * Math.PI * 2 - Math.PI / 2;
        dot(ctx, cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, 4, CANVAS_COLORS.chemistry, true);
      }
    });
    dot(ctx, cx, cy, 11, CANVAS_COLORS.chemistry, true);
    label(ctx, configuration.element.symbol, cx, cy, { align: 'center', color: CANVAS_COLORS.ink, size: 12, weight: 700 });

    const boxStartX = view.width * 0.52;
    const boxStartY = view.height * 0.3;
    let row = 0;
    for (const labelText of ORDER) {
      const count = configuration.subshells[labelText] ?? 0;
      if (count === 0 && labelText !== '1s') continue;
      const y = boxStartY + row * 46;
      label(ctx, labelText, boxStartX - 22, y + 9, { color: CANVAS_COLORS.muted, size: 10, weight: 600 });
      const countBoxes = boxesFor(labelText);
      const boxWidth = 38;
      for (let box = 0; box < countBoxes; box += 1) {
        const x = boxStartX + box * (boxWidth + 8);
        ctx.save();
        ctx.strokeStyle = CANVAS_COLORS.hairline;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, boxWidth, 20);
        ctx.restore();
        const electronsInBox = Math.max(0, Math.min(2, count - box * 2));
        if (electronsInBox >= 1) {
          line(ctx, x + 14, y + 5, x + 14, y + 15, CANVAS_COLORS.physics, 1.5);
          ctx.save();
          ctx.fillStyle = CANVAS_COLORS.physics;
          ctx.beginPath();
          ctx.moveTo(x + 14, y + 2);
          ctx.lineTo(x + 10, y + 7);
          ctx.lineTo(x + 18, y + 7);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
        if (electronsInBox >= 2) {
          line(ctx, x + 24, y + 5, x + 24, y + 15, CANVAS_COLORS.technology, 1.5);
          ctx.save();
          ctx.fillStyle = CANVAS_COLORS.technology;
          ctx.beginPath();
          ctx.moveTo(x + 24, y + 18);
          ctx.lineTo(x + 20, y + 13);
          ctx.lineTo(x + 28, y + 13);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        }
      }
      if (labelText === '2p' && maxShell < 2) {
        label(ctx, 'empty in smaller atoms', boxStartX, y + 28, { color: CANVAS_COLORS.muted, size: 9 });
      }
      row += 1;
    }

    const valence = configuration.shells[configuration.shells.length - 1] ?? 0;
    const unpaired = ORDER.reduce((total, key) => {
      const count = configuration.subshells[key] ?? 0;
      const boxes = boxesFor(key);
      if (count === 0) return total;
      return total + Math.max(0, Math.min(boxes, count) * 2 - count);
    }, 0);

    label(ctx, configuration.configuration, view.width - 16, view.height - 30, { align: 'right', color: CANVAS_COLORS.ink, size: 12, weight: 600 });
    label(ctx, `${valence} valence e⁻ · ${unpaired} unpaired`, view.width - 16, view.height - 14, { align: 'right', color: CANVAS_COLORS.muted, size: 10 });
    drawTitle(ctx, view.width, `${configuration.element.name} · ${charge === 0 ? 'neutral' : charge > 0 ? `+${charge}` : `${charge}`}`);
    cornerNote(ctx, view.width, view.height, 'Aufbau order · first 20 elements');
  },
  metrics(params) {
    const configuration = configurationFor(Math.round(num(params, 'z')), Number(str(params, 'charge')));
    const valence = configuration.shells[configuration.shells.length - 1] ?? 0;
    const unpaired = ORDER.reduce((total, key) => {
      const count = configuration.subshells[key] ?? 0;
      const boxes = boxesFor(key);
      if (count === 0) return total;
      return total + Math.max(0, Math.min(boxes, count) * 2 - count);
    }, 0);
    return [
      { label: 'Element', value: configuration.element.name },
      { label: 'Configuration', value: configuration.configuration },
      { label: 'Valence electrons', value: String(valence) },
      { label: 'Unpaired electrons', value: String(unpaired) },
      { label: 'Shells', value: configuration.shells.join(', ') },
      { label: 'Electrons', value: String(configuration.electrons) },
    ];
  },
  explanation(params) {
    const z = Math.round(num(params, 'z'));
    const charge = Number(str(params, 'charge'));
    const configuration = configurationFor(z, charge);
    const valence = configuration.shells[configuration.shells.length - 1] ?? 0;
    if (valence === 8 || (configuration.shells.length === 1 && valence === 2)) {
      return {
        headline: 'The outer shell is full.',
        body: `${configuration.element.name} has ${configuration.configuration}. A full outer shell (2 for helium, 8 for the others) is associated with low reactivity, which is why the noble gases are stable.`,
      };
    }
    return {
      headline: 'The outer shell is not full.',
      body: `${configuration.element.name} has ${configuration.configuration}, leaving ${valence} electrons in the outer shell. Atoms tend to gain, lose or share electrons to reach a stable outer configuration.`,
    };
  },
  experiment: {
    question: 'Compare sodium (Z = 11) with chlorine (Z = 17). Which has a full outer shell?',
    steps: ['Set the atomic number to 11 and note the outer shell.', 'Set it to 17 and note the outer shell.', 'Compare both with neon (Z = 10).'],
    expected: 'Sodium has one outer electron and chlorine has seven. Neither is full; neon has a full outer shell of eight.',
  },
  assumptions: [
    'Ground-state configurations for the first twenty elements are used.',
    'Ion charges are modelled by removing from or adding to the outermost occupied subshell.',
    'The shell diagram is a simplified Bohr representation, not a quantum orbital plot.',
  ],
  sources: [SOURCES.chemistry, { label: 'Electron configuration — Wikipedia', url: 'https://en.wikipedia.org/wiki/Electron_configuration' }],
};

export default spec;
