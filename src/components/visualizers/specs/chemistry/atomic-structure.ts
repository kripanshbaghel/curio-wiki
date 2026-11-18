import type { VisualizerSpec } from '@/lib/visualizers/types';
import { num } from '@/lib/visualizers/types';
import { configurationFor, elementByZ } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, prepare, ring } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'chemistry',
  aspect: 1.65,
  animated: false,
  stageLabel: 'A Bohr-style atom with a nucleus and occupied electron shells',
  stageHint: 'Protons decide the element. Changing neutrons makes an isotope; changing electrons makes an ion. Shell filling is simplified.',
  controls: [
    { kind: 'slider', id: 'protons', label: 'Protons', min: 1, max: 20, step: 1, defaultValue: 6 },
    { kind: 'slider', id: 'neutrons', label: 'Neutrons', min: 0, max: 24, step: 1, defaultValue: 6 },
    { kind: 'slider', id: 'electrons', label: 'Electrons', min: 0, max: 20, step: 1, defaultValue: 6 },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const protons = Math.round(num(params, 'protons'));
    const neutrons = Math.round(num(params, 'neutrons'));
    const electrons = Math.round(num(params, 'electrons'));
    const element = elementByZ(protons);
    const configuration = configurationFor(protons, protons - electrons);
    const cx = view.width * 0.42;
    const cy = view.height * 0.52;

    dot(ctx, cx, cy, 13, CANVAS_COLORS.chemistry, true);
    let seed = 17;
    const random = () => {
      seed = (seed * 1103515245 + 12345) % 2147483648;
      return seed / 2147483648;
    };
    const nucleons = Math.min(protons + neutrons, 50);
    for (let index = 0; index < nucleons; index += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 5 + random() * 20;
      dot(ctx, cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, 3, index < protons ? CANVAS_COLORS.engineering : CANVAS_COLORS.muted, false);
    }
    label(ctx, `${element.symbol}`, cx, cy, { align: 'center', color: CANVAS_COLORS.ink, size: 13, weight: 700 });

    const shells = configuration.shells;
    shells.forEach((count, shellIndex) => {
      const radius = 42 + shellIndex * 34;
      ring(ctx, cx, cy, radius, CANVAS_COLORS.hairline, 1);
      for (let electron = 0; electron < count; electron += 1) {
        const angle = (electron / Math.max(1, count)) * Math.PI * 2 - Math.PI / 2 + shellIndex * 0.4;
        dot(ctx, cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius, 4, CANVAS_COLORS.physics, true);
      }
    });

    const charge = protons - electrons;
    const chargeText = charge === 0 ? 'neutral' : charge > 0 ? `${charge}+ ion` : `${Math.abs(charge)}− ion`;
    label(ctx, `${element.name} · ${chargeText}`, view.width - 18, view.height - 30, { align: 'right', color: CANVAS_COLORS.ink, size: 12, weight: 600 });
    label(ctx, configuration.configuration, view.width - 18, view.height - 14, { align: 'right', color: CANVAS_COLORS.muted, size: 10 });
    label(ctx, `p⁺ ${protons}`, view.width - 18, 46, { align: 'right', color: CANVAS_COLORS.engineering, size: 10 });
    label(ctx, `n⁰ ${neutrons}`, view.width - 18, 62, { align: 'right', color: CANVAS_COLORS.muted, size: 10 });
    label(ctx, `e⁻ ${electrons}`, view.width - 18, 78, { align: 'right', color: CANVAS_COLORS.physics, size: 10 });

    drawTitle(ctx, view.width, `Atomic number ${protons} · mass number ${protons + neutrons}`);
    cornerNote(ctx, view.width, view.height, 'Bohr shell model · first 20 elements');
  },
  metrics(params) {
    const protons = Math.round(num(params, 'protons'));
    const neutrons = Math.round(num(params, 'neutrons'));
    const electrons = Math.round(num(params, 'electrons'));
    const element = elementByZ(protons);
    const configuration = configurationFor(protons, protons - electrons);
    return [
      { label: 'Element', value: element.name },
      { label: 'Symbol', value: element.symbol },
      { label: 'Mass number', value: String(protons + neutrons) },
      { label: 'Charge', value: protons - electrons === 0 ? '0' : `${protons - electrons > 0 ? '+' : '−'}${Math.abs(protons - electrons)}` },
      { label: 'Configuration', value: configuration.configuration },
      { label: 'Valence electrons', value: String(configuration.shells[configuration.shells.length - 1] ?? 0) },
    ];
  },
  explanation(params) {
    const protons = Math.round(num(params, 'protons'));
    const neutrons = Math.round(num(params, 'neutrons'));
    const electrons = Math.round(num(params, 'electrons'));
    const element = elementByZ(protons);
    const charge = protons - electrons;
    if (charge !== 0) {
      return {
        headline: 'The atom is an ion because its electron count differs from its proton count.',
        body: `${element.name} has ${protons} protons and ${electrons} electrons, so its net charge is ${charge > 0 ? '+' : '−'}${Math.abs(charge)}. With ${neutrons} neutrons, its mass number is ${protons + neutrons}.`,
      };
    }
    return {
      headline: 'The atom is neutral: protons and electrons balance.',
      body: `${protons} protons make ${element.name}. The ${neutrons} neutrons change the isotope, not the element. The simplified shell model fills 2, 8, 8, 2 across the first four shells.`,
    };
  },
  experiment: {
    question: 'Start with carbon (6 protons). Add one proton. What element appears?',
    steps: ['Set protons to 6 and electrons to 6.', 'Note the element name and symbol.', 'Increase protons to 7 and keep electrons at 6.', 'Identify the new element and the charge.'],
    expected: 'Nitrogen appears (7 protons). The atom is now a +1 ion until an electron is added.',
  },
  assumptions: [
    'The Bohr shell model is used for clarity, not quantum-mechanical orbital shapes.',
    'Only the first twenty elements are supported.',
    'Nucleon positions are decorative; the nucleus is not drawn to scale.',
  ],
  sources: [SOURCES.chemistry, { label: 'Atomic nucleus — Wikipedia', url: 'https://en.wikipedia.org/wiki/Atomic_nucleus' }],
};

export default spec;
