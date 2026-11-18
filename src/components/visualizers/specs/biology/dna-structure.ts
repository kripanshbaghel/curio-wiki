import type { VisualizerSpec } from '@/lib/visualizers/types';
import { bool, formatNumber, num } from '@/lib/visualizers/types';
import { COMPLEMENT, DNA_SEQUENCE } from '@/lib/visualizers/data';
import { gcContent, hydrogenBonds } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const BASE_COLORS: Record<string, string> = {
  A: CANVAS_COLORS.biology,
  T: CANVAS_COLORS.engineering,
  G: CANVAS_COLORS.mathematics,
  C: CANVAS_COLORS.physics,
};

const spec: VisualizerSpec = {
  accent: 'biology',
  aspect: 1.6,
  animated: false,
  stageLabel: 'A rotating DNA double helix with complementary base pairs and a local unzip region',
  stageHint: 'Rotation changes the view only. Base pairs are read from the sample sequence; A pairs with T through two hydrogen bonds and G with C through three. Unzip opens the rungs around the selected base pair to show the strands separating.',
  controls: [
    { kind: 'slider', id: 'rotation', label: 'Rotation', min: 0, max: 360, step: 1, defaultValue: 24, unit: '°' },
    { kind: 'slider', id: 'base', label: 'Base pair', min: 1, max: DNA_SEQUENCE.length, step: 1, defaultValue: 5 },
    { kind: 'slider', id: 'unzip', label: 'Unzip', min: 0, max: 100, step: 1, defaultValue: 0, unit: '%' },
    { kind: 'toggle', id: 'labels', label: 'Base letters', defaultValue: true, onLabel: 'Shown', offLabel: 'Hidden' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const rotation = num(params, 'rotation');
    const selected = Math.min(DNA_SEQUENCE.length, Math.max(1, Math.round(num(params, 'base')))) - 1;
    const unzip = num(params, 'unzip') / 100;
    const showLabels = bool(params, 'labels');

    const x0 = view.width * 0.14;
    const x1 = view.width * 0.86;
    const cy = view.height * 0.5;
    const amplitude = Math.min(view.height * 0.2, view.width * 0.1);
    const phaseAt = (index: number) =>
      (rotation * Math.PI) / 180 + (index / Math.max(1, DNA_SEQUENCE.length - 1)) * Math.PI * 4.4;
    const xAt = (index: number) => x0 + (index / Math.max(1, DNA_SEQUENCE.length - 1)) * (x1 - x0);

    // Selected-pair band.
    const selectedX = xAt(selected);
    ctx.save();
    ctx.fillStyle = 'rgba(246, 196, 83, 0.07)';
    ctx.fillRect(selectedX - 10, 44, 20, view.height - 88);
    ctx.restore();

    // Backbones: two smooth antiparallel sine strands.
    for (const direction of [1, -1]) {
      ctx.save();
      ctx.strokeStyle = direction === 1 ? CANVAS_COLORS.ink : CANVAS_COLORS.muted;
      ctx.lineWidth = 2.4;
      ctx.beginPath();
      const steps = Math.max(120, Math.floor(view.width));
      for (let index = 0; index <= steps; index += 1) {
        const u = index / steps;
        const x = x0 + u * (x1 - x0);
        const y = cy + Math.sin((rotation * Math.PI) / 180 + u * Math.PI * 4.4) * amplitude * direction;
        if (index === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();
    }

    // Base rungs.
    const spacing = (x1 - x0) / Math.max(1, DNA_SEQUENCE.length - 1);
    const showAll = showLabels && spacing >= 15;
    const stride = showAll ? 1 : 2;
    for (let index = 0; index < DNA_SEQUENCE.length; index += 1) {
      const base = DNA_SEQUENCE[index];
      const pair = COMPLEMENT[base];
      const phase = phaseAt(index);
      const sine = Math.sin(phase);
      const x = xAt(index);
      const topY = cy + sine * amplitude;
      const bottomY = cy - sine * amplitude;
      const opening = unzip * Math.exp(-((index - selected) ** 2) / (2 * 2.6 ** 2));
      const halfGap = opening * amplitude * 0.82;
      const topEnd = cy - halfGap;
      const bottomEnd = cy + halfGap;
      const bonds = hydrogenBonds(base);

      line(ctx, x, topY, x, topEnd, BASE_COLORS[base], index === selected ? 3.2 : 1.8);
      line(ctx, x, bottomY, x, bottomEnd, BASE_COLORS[pair], index === selected ? 3.2 : 1.8);

      // Hydrogen bonds sit in the gap between the two bases.
      const gap = bottomEnd - topEnd;
      if (gap > 4) {
        for (let bond = 0; bond < bonds; bond += 1) {
          const offset = ((bond + 0.5) / bonds) * gap;
          dot(ctx, x, topEnd + offset, 1.6, CANVAS_COLORS.muted, false);
        }
      }

      if (showLabels && index % stride === 0 && Math.abs(bottomY - topY) > 18) {
        const size = index === selected ? 12 : 7;
        const inset = Math.min(12, Math.abs(bottomY - topY) * 0.22);
        label(ctx, base, x, topY + Math.sign(topEnd - topY) * inset, {
          align: 'center',
          color: BASE_COLORS[base],
          size,
          weight: 700,
          mono: true,
        });
        label(ctx, pair, x, bottomY + Math.sign(bottomEnd - bottomY) * inset, {
          align: 'center',
          color: BASE_COLORS[pair],
          size,
          weight: 700,
          mono: true,
        });
      } else if (index === selected) {
        const size = 12;
        label(ctx, base, x, topY + Math.sign(topEnd - topY) * 12, {
          align: 'center',
          color: BASE_COLORS[base],
          size,
          weight: 700,
          mono: true,
        });
        label(ctx, pair, x, bottomY + Math.sign(bottomEnd - bottomY) * 12, {
          align: 'center',
          color: BASE_COLORS[pair],
          size,
          weight: 700,
          mono: true,
        });
      }
    }

    // Legend.
    let legendX = view.width * 0.14;
    const legendY = view.height - 30;
    for (const base of ['A', 'T', 'G', 'C']) {
      dot(ctx, legendX, legendY, 3, BASE_COLORS[base], false);
      label(ctx, base, legendX + 8, legendY, { color: CANVAS_COLORS.muted, size: 9, weight: 600, mono: true });
      legendX += 34;
    }

    const selectedBase = DNA_SEQUENCE[selected];
    const selectedPair = COMPLEMENT[selectedBase];
    label(ctx, `pair ${selected + 1}: ${selectedBase}–${selectedPair}`, selectedX, 32, {
      align: 'center',
      color: CANVAS_COLORS.mathematics,
      size: 10,
      weight: 600,
    });
    if (unzip > 0.05) {
      label(ctx, 'local separation', selectedX, view.height - 30, {
        align: 'center',
        color: CANVAS_COLORS.warn,
        size: 9,
      });
    }
    label(ctx, `rotation ${rotation.toFixed(0)}° · ${DNA_SEQUENCE.length} bp`, view.width - 16, view.height - 30, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    drawTitle(ctx, view.width, `DNA double helix · GC ${formatNumber(gcContent(DNA_SEQUENCE), 0)}%`);
    cornerNote(ctx, view.width, view.height, 'Schematic B-DNA · sample sequence, not to scale');
  },
  metrics(params) {
    const selected = Math.min(DNA_SEQUENCE.length, Math.max(1, Math.round(num(params, 'base')))) - 1;
    const base = DNA_SEQUENCE[selected];
    const pair = COMPLEMENT[base];
    return [
      { label: 'Selected pair', value: `${base}–${pair}` },
      { label: 'Hydrogen bonds', value: String(hydrogenBonds(base)) },
      { label: 'Position', value: `${selected + 1} / ${DNA_SEQUENCE.length}` },
      { label: 'GC content', value: formatNumber(gcContent(DNA_SEQUENCE), 0), unit: '%' },
      { label: 'Strands', value: '2 · antiparallel' },
      { label: 'Rotation', value: formatNumber(num(params, 'rotation'), 0), unit: '°' },
    ];
  },
  explanation(params) {
    const selected = Math.min(DNA_SEQUENCE.length, Math.max(1, Math.round(num(params, 'base')))) - 1;
    const base = DNA_SEQUENCE[selected];
    const pair = COMPLEMENT[base];
    const bonds = hydrogenBonds(base);
    const unzip = num(params, 'unzip');
    const unzipText =
      unzip > 50
        ? 'The model has opened the rungs around this pair, illustrating how helicase would separate the strands before replication or transcription.'
        : 'The rungs are intact; the two strands stay paired at this position.';
    return {
      headline: `${base} pairs with ${pair} through ${bonds} hydrogen bonds.`,
      body: `${base === 'A' || base === 'T' ? 'Adenine and thymine' : 'Guanine and cytosine'} form ${bonds} hydrogen bonds in this schematic B-DNA model. The sugar–phosphate backbones run antiparallel on the outside, while the bases stack on the inside. ${unzipText} The sample is ${DNA_SEQUENCE.length} base pairs with ${formatNumber(gcContent(DNA_SEQUENCE), 0)}% GC, and rotation changes only the view.`,
    };
  },
  experiment: {
    question: 'Which is harder to separate, an A–T pair or a G–C pair?',
    steps: [
      'Select a base position that contains A or T and read the hydrogen-bond count.',
      'Select a position that contains G or C and compare.',
      'Use the unzip slider to see the rungs open around the selected pair.',
    ],
    expected:
      'G–C pairs have three hydrogen bonds and A–T pairs have two, so GC-rich regions need more energy to separate. This is one reason GC content affects DNA stability.',
  },
  assumptions: [
    'The helix is a schematic B-DNA ladder, not an atomic structure; rise, twist and diameter are not to scale.',
    'The displayed sequence is a short sample, and the selected base pair is a teaching position rather than a gene feature.',
    'Unzipping is an illustrative separation, not a simulation of helicase kinetics or replication.',
    'Hydrogen-bond counts (2 for A–T, 3 for G–C) follow the standard Watson–Crick pairing.',
  ],
  sources: [
    SOURCES.biology,
    { label: 'DNA — Wikipedia', url: 'https://en.wikipedia.org/wiki/DNA' },
  ],
  table(params) {
    const selected = Math.min(DNA_SEQUENCE.length, Math.max(1, Math.round(num(params, 'base')))) - 1;
    const start = Math.max(0, Math.min(DNA_SEQUENCE.length - 8, selected - 3));
    return {
      caption: 'Base pairs around the selected position',
      headers: ['Position', 'Base', 'Complement', 'H bonds'],
      rows: DNA_SEQUENCE.slice(start, start + 8).split('').map((base, offset) => ({
        cells: [
          String(start + offset + 1),
          base,
          COMPLEMENT[base],
          String(hydrogenBonds(base)),
        ],
        highlight: start + offset === selected,
      })),
    };
  },
};

export default spec;
