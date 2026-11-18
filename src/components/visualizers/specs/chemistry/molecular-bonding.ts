import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, str } from '@/lib/visualizers/types';
import { MOLECULES } from '@/lib/visualizers/data';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { arrow, cornerNote, dot, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const spec: VisualizerSpec = {
  accent: 'chemistry',
  aspect: 1.7,
  animated: false,
  stageLabel: 'A Lewis-style molecule diagram showing atoms, bonds and electron sharing or transfer',
  stageHint: 'Ionic bonds transfer electrons; covalent bonds share pairs. The dotted markers show the valence electrons involved.',
  controls: [
    { kind: 'select', id: 'molecule', label: 'Molecule', defaultValue: 'nacl', options: MOLECULES.map((molecule) => ({ value: molecule.id, label: molecule.label })) },
    { kind: 'toggle', id: 'electrons', label: 'Show bonding electrons', defaultValue: true, onLabel: 'Visible', offLabel: 'Hidden' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const molecule = MOLECULES.find((entry) => entry.id === str(params, 'molecule')) ?? MOLECULES[0];
    const showElectrons = params.electrons === true;
    const cx = view.width / 2;
    const cy = view.height / 2 + 8;
    const scale = Math.min(view.width * 0.5, view.height * 0.64);

    const positions = molecule.atoms.map((atom) => ({ ...atom, x: cx + (atom.x - 0.5) * scale, y: cy + (atom.y - 0.5) * scale }));
    molecule.bonds.forEach((bond) => {
      const a = positions[bond.a];
      const b = positions[bond.b];
      const color = molecule.type === 'Ionic' ? CANVAS_COLORS.engineering : CANVAS_COLORS.chemistry;
      if (bond.ionic) {
        line(ctx, a.x, a.y, b.x, b.y, color, 1.5, [6, 5]);
        if (showElectrons) {
          const angle = Math.atan2(b.y - a.y, b.x - a.x);
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          arrow(ctx, midX - Math.cos(angle) * 22, midY - Math.sin(angle) * 22, midX + Math.cos(angle) * 22, midY + Math.sin(angle) * 22, color, 1.5, 6);
          dot(ctx, midX + Math.cos(angle) * 26, midY + Math.sin(angle) * 26, 3, CANVAS_COLORS.mathematics, true);
        }
      } else {
        const offset = bond.order === 2 ? 3 : 0;
        line(ctx, a.x, a.y + offset, b.x, b.y + offset, color, 2);
        if (bond.order === 2) line(ctx, a.x, a.y - offset, b.x, b.y - offset, color, 2);
        if (showElectrons) {
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const dx = (b.x - a.x) * 0.18;
          const dy = (b.y - a.y) * 0.18;
          dot(ctx, midX - dx, midY - dy, 2.5, CANVAS_COLORS.mathematics);
          dot(ctx, midX + dx, midY + dy, 2.5, CANVAS_COLORS.mathematics);
        }
      }
    });

    positions.forEach((atom) => {
      dot(ctx, atom.x, atom.y, atom.symbol.length > 1 ? 26 : 21, CANVAS_COLORS.raised, true);
      ctx.save();
      ctx.strokeStyle = CANVAS_COLORS.chemistry;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(atom.x, atom.y, atom.symbol.length > 1 ? 26 : 21, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
      label(ctx, atom.symbol, atom.x, atom.y, { align: 'center', color: CANVAS_COLORS.ink, size: 13, weight: 700 });
      if (atom.charge) {
        label(ctx, atom.charge, atom.x + 24, atom.y - 18, { color: CANVAS_COLORS.mathematics, size: 11, weight: 700 });
      }
    });

    label(ctx, molecule.type === 'Ionic' ? 'Electron transfer' : 'Electron sharing', view.width / 2, view.height - 46, { align: 'center', color: molecule.type === 'Ionic' ? CANVAS_COLORS.engineering : CANVAS_COLORS.chemistry, size: 12, weight: 600 });
    label(ctx, molecule.note, view.width / 2, view.height - 24, { align: 'center', color: CANVAS_COLORS.muted, size: 9 });
    drawTitle(ctx, view.width, molecule.label);
    cornerNote(ctx, view.width, view.height, 'Simplified 2D Lewis model');
  },
  metrics(params) {
    const molecule = MOLECULES.find((entry) => entry.id === str(params, 'molecule')) ?? MOLECULES[0];
    return [
      { label: 'Bond type', value: molecule.type },
      { label: 'Atoms', value: String(molecule.atoms.length) },
      { label: 'Electronegativity gap', value: formatNumber(molecule.electronegativityDifference, 2) },
      { label: 'Polar molecule', value: molecule.polar ? 'Yes' : 'No' },
      { label: 'Bonds', value: String(molecule.bonds.length) },
    ];
  },
  explanation(params) {
    const molecule = MOLECULES.find((entry) => entry.id === str(params, 'molecule')) ?? MOLECULES[0];
    return {
      headline: molecule.type === 'Ionic' ? 'An ionic bond holds charged ions together.' : 'A covalent bond shares electron pairs.',
      body: `${molecule.note} The approximate electronegativity difference is ${molecule.electronegativityDifference.toFixed(2)}; a large gap favours electron transfer, while a small gap favours sharing.`,
    };
  },
  experiment: {
    question: 'Compare sodium chloride and hydrogen chloride. Both have one bond. What is different?',
    steps: ['Select NaCl and observe the dashed transfer arrow.', 'Select HCl and observe the shared pair.', 'Compare the electronegativity gap in the readout.'],
    expected: 'NaCl is ionic: sodium transfers an electron to chlorine. HCl is covalent: the pair is shared, but unequally, making the bond polar.',
  },
  assumptions: [
    'The model is a schematic two-dimensional Lewis representation, not a molecular orbital calculation.',
    'Electronegativity values are approximate Pauling values.',
    'Bond angles and lengths are not drawn to scale.',
  ],
  sources: [SOURCES.chemistry, { label: 'Chemical bond — Wikipedia', url: 'https://en.wikipedia.org/wiki/Chemical_bond' }],
};

export default spec;
