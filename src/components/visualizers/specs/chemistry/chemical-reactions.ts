import type { VisualizerSpec } from '@/lib/visualizers/types';
import { num, str } from '@/lib/visualizers/types';
import { REACTIONS, type ReactionSpecies } from '@/lib/visualizers/data';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

function atomTotals(species: ReactionSpecies[]): Record<string, number> {
  const totals: Record<string, number> = {};
  for (const entry of species) {
    for (const [atom, count] of Object.entries(entry.atoms)) {
      totals[atom] = (totals[atom] ?? 0) + count * entry.coefficient;
    }
  }
  return totals;
}

function drawSpecies(
  ctx: CanvasRenderingContext2D,
  species: ReactionSpecies[],
  xStart: number,
  xEnd: number,
  centerY: number,
  alpha: number,
): void {
  const slots = species.reduce((sum, entry) => sum + entry.coefficient, 0);
  let slot = 0;
  ctx.save();
  ctx.globalAlpha = Math.max(0.08, alpha);
  for (const entry of species) {
    for (let copy = 0; copy < entry.coefficient; copy += 1) {
      const x = xStart + ((slot + 0.5) / Math.max(1, slots)) * (xEnd - xStart);
      const y = centerY + Math.sin(slot * 1.7) * 14;
      const atomCount = Object.values(entry.atoms).reduce((sum, count) => sum + count, 0);
      for (let atomIndex = 0; atomIndex < atomCount; atomIndex += 1) {
        const angle = (atomIndex / Math.max(1, atomCount)) * Math.PI * 2;
        dot(ctx, x + Math.cos(angle) * 12, y + Math.sin(angle) * 12, 5, CANVAS_COLORS[entry.color as keyof typeof CANVAS_COLORS] ?? CANVAS_COLORS.chemistry, false);
      }
      label(ctx, entry.label, x, y + 26, { align: 'center', color: CANVAS_COLORS.ink, size: 10, weight: 600 });
      slot += 1;
    }
  }
  ctx.restore();
}

const spec: VisualizerSpec = {
  accent: 'chemistry',
  aspect: 1.7,
  animated: false,
  stageLabel: 'A balanced chemical reaction with reactants on the left, products on the right and conserved atoms',
  stageHint: 'Drag the reaction progress to move from reactants to products. The atom table checks conservation element by element.',
  controls: [
    { kind: 'select', id: 'reaction', label: 'Reaction', defaultValue: 'hydrogen', options: REACTIONS.map((reaction) => ({ value: reaction.id, label: reaction.label })) },
    { kind: 'slider', id: 'progress', label: 'Reaction progress', min: 0, max: 100, step: 1, defaultValue: 0, unit: '%' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const reaction = REACTIONS.find((entry) => entry.id === str(params, 'reaction')) ?? REACTIONS[0];
    const progress = num(params, 'progress') / 100;
    const centerY = view.height * 0.48;
    const leftStart = view.width * 0.06;
    const leftEnd = view.width * 0.36;
    const rightStart = view.width * 0.64;
    const rightEnd = view.width * 0.94;

    drawSpecies(ctx, reaction.left, leftStart, leftEnd, centerY, 1 - progress * 0.92);
    drawSpecies(ctx, reaction.right, rightStart, rightEnd, centerY, 0.08 + progress * 0.92);

    arrow(ctx, view.width * 0.43, centerY, view.width * 0.58, centerY, CANVAS_COLORS.chemistry, 3, 9);
    label(ctx, reaction.energy.toLowerCase(), view.width / 2, centerY - 18, { align: 'center', color: reaction.energy === 'Exothermic' ? CANVAS_COLORS.engineering : CANVAS_COLORS.technology, size: 10, weight: 600 });
    label(ctx, `${Math.round(progress * 100)}%`, view.width / 2, centerY + 20, { align: 'center', color: CANVAS_COLORS.ink, size: 12, weight: 700 });
    label(ctx, 'reactants', (leftStart + leftEnd) / 2, view.height - 54, { align: 'center', color: CANVAS_COLORS.muted, size: 10 });
    label(ctx, 'products', (rightStart + rightEnd) / 2, view.height - 54, { align: 'center', color: CANVAS_COLORS.muted, size: 10 });
    label(ctx, reaction.equation, view.width / 2, view.height - 26, { align: 'center', color: CANVAS_COLORS.ink, size: 15, weight: 600 });
    drawTitle(ctx, view.width, reaction.label);
    cornerNote(ctx, view.width, view.height, 'Atoms are conserved · coefficients shown');
  },
  metrics(params) {
    const reaction = REACTIONS.find((entry) => entry.id === str(params, 'reaction')) ?? REACTIONS[0];
    const left = atomTotals(reaction.left);
    const right = atomTotals(reaction.right);
    const elements = [...new Set([...Object.keys(left), ...Object.keys(right)])];
    const balanced = elements.every((element) => (left[element] ?? 0) === (right[element] ?? 0));
    return [
      { label: 'Reaction', value: reaction.label },
      { label: 'Energy', value: reaction.energy },
      { label: 'Atoms balanced', value: balanced ? 'Yes' : 'No' },
      { label: 'Elements', value: elements.join(', ') },
      { label: 'Progress', value: `${Math.round(num(params, 'progress'))}%` },
      { label: 'Molecules shown', value: String(reaction.left.reduce((sum, entry) => sum + entry.coefficient, 0) + reaction.right.reduce((sum, entry) => sum + entry.coefficient, 0)) },
    ];
  },
  explanation(params) {
    const reaction = REACTIONS.find((entry) => entry.id === str(params, 'reaction')) ?? REACTIONS[0];
    return {
      headline: 'Coefficients balance atoms, not molecules.',
      body: `${reaction.equation}. ${reaction.note} The ${reaction.energy.toLowerCase()} reaction releases or absorbs energy, but the number of each kind of atom is unchanged.`,
    };
  },
  experiment: {
    question: 'Check methane combustion: how many oxygen atoms are on each side?',
    steps: ['Select methane combustion.', 'Read the atom totals in the table.', 'Count oxygen on the left (2O₂) and on the right (CO₂ + 2H₂O).'],
    expected: 'There are four oxygen atoms on each side (2 × 2 = 2 + 2). Carbon and hydrogen also balance, so the equation is balanced.',
  },
  assumptions: [
    'Reactions are shown as complete, balanced overall changes with no intermediate species.',
    'Combustion is assumed complete; no CO or soot is produced in this model.',
    'The molecule pictures are schematic, not a reaction mechanism or energy profile.',
  ],
  sources: [SOURCES.chemistry, { label: 'Conservation of mass — Wikipedia', url: 'https://en.wikipedia.org/wiki/Conservation_of_mass' }],
  table(params) {
    const reaction = REACTIONS.find((entry) => entry.id === str(params, 'reaction')) ?? REACTIONS[0];
    const left = atomTotals(reaction.left);
    const right = atomTotals(reaction.right);
    const elements = [...new Set([...Object.keys(left), ...Object.keys(right)])];
    return {
      caption: 'Atom count before and after the reaction',
      headers: ['Element', 'Reactants', 'Products', 'Balanced'],
      rows: elements.map((element) => ({
        cells: [element, String(left[element] ?? 0), String(right[element] ?? 0), (left[element] ?? 0) === (right[element] ?? 0) ? 'yes' : 'no'],
        highlight: (left[element] ?? 0) !== (right[element] ?? 0),
      })),
    };
  },
};

export default spec;
