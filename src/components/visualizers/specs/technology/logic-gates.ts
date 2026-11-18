import type { VisualizerSpec } from '@/lib/visualizers/types';
import { bool, str } from '@/lib/visualizers/types';
import { logicGate, type LogicGate } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const GATES: LogicGate[] = ['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'];

const EXPRESSIONS: Record<LogicGate, string> = {
  AND: 'Q = A · B',
  OR: 'Q = A + B',
  NOT: 'Q = ¬A',
  NAND: 'Q = ¬(A · B)',
  NOR: 'Q = ¬(A + B)',
  XOR: 'Q = A ⊕ B',
  XNOR: 'Q = ¬(A ⊕ B)',
};

const DESCRIPTIONS: Record<LogicGate, string> = {
  AND: 'Outputs 1 only when both inputs are 1.',
  OR: 'Outputs 1 when at least one input is 1.',
  NOT: 'Inverts the single input: 0 becomes 1 and 1 becomes 0.',
  NAND: 'AND followed by an inversion; outputs 0 only when both inputs are 1.',
  NOR: 'OR followed by an inversion; outputs 1 only when both inputs are 0.',
  XOR: 'Outputs 1 when the inputs differ.',
  XNOR: 'Outputs 1 when the inputs match.',
};

function drawGate(
  ctx: CanvasRenderingContext2D,
  gate: LogicGate,
  x: number,
  y: number,
  color: string,
): void {
  const width = 62;
  const height = 78;
  const inverted = gate === 'NAND' || gate === 'NOR' || gate === 'XNOR' || gate === 'NOT';
  const shaped = gate === 'AND' || gate === 'NAND';
  const xor = gate === 'XOR' || gate === 'XNOR';

  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = 'rgba(79, 224, 200, 0.08)';
  ctx.lineWidth = 2.2;
  if (gate === 'NOT') {
    ctx.beginPath();
    ctx.moveTo(x - width * 0.34, y - height * 0.42);
    ctx.lineTo(x - width * 0.34, y + height * 0.42);
    ctx.lineTo(x + width * 0.26, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  } else if (shaped) {
    ctx.beginPath();
    ctx.moveTo(x - width * 0.48, y - height * 0.46);
    ctx.lineTo(x, y - height * 0.46);
    ctx.arc(x, y, height * 0.46, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(x - width * 0.48, y + height * 0.46);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    if (xor) {
      ctx.beginPath();
      ctx.arc(x - width * 0.58, y, height * 0.46, -Math.PI / 2, Math.PI / 2);
      ctx.stroke();
    }
  } else {
    ctx.beginPath();
    ctx.moveTo(x - width * 0.44, y - height * 0.46);
    ctx.quadraticCurveTo(x - width * 0.08, y, x - width * 0.44, y + height * 0.46);
    ctx.quadraticCurveTo(x + width * 0.02, y + height * 0.46, x + width * 0.34, y);
    ctx.quadraticCurveTo(x + width * 0.02, y - height * 0.46, x - width * 0.44, y - height * 0.46);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    if (xor) {
      ctx.beginPath();
      ctx.moveTo(x - width * 0.56, y - height * 0.46);
      ctx.quadraticCurveTo(x - width * 0.2, y, x - width * 0.56, y + height * 0.46);
      ctx.stroke();
    }
  }
  if (inverted) {
    const bubbleX = gate === 'NOT' ? x + width * 0.34 : x + width * 0.46;
    dot(ctx, bubbleX, y, 6, CANVAS_COLORS.stage, false);
    ctx.beginPath();
    ctx.arc(bubbleX, y, 6, 0, Math.PI * 2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.6;
    ctx.stroke();
  }
  ctx.restore();
}

const spec: VisualizerSpec = {
  accent: 'technology',
  aspect: 1.65,
  animated: false,
  stageLabel: 'A logic gate symbol with two inputs, an output lamp and the matching Boolean expression',
  stageHint: 'Toggle A and B. The output is computed from the selected gate, and the truth table lists every input combination so you can check the symbol against the logic.',
  controls: [
    {
      kind: 'select',
      id: 'gate',
      label: 'Gate',
      defaultValue: 'AND',
      options: GATES.map((gate) => ({ value: gate, label: gate })),
    },
    { kind: 'toggle', id: 'a', label: 'Input A', defaultValue: true, onLabel: '1', offLabel: '0' },
    { kind: 'toggle', id: 'b', label: 'Input B', defaultValue: false, onLabel: '1', offLabel: '0', when: (params) => str(params, 'gate') !== 'NOT' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const gate = (str(params, 'gate') as LogicGate) ?? 'AND';
    const a = bool(params, 'a');
    const b = bool(params, 'b');
    const output = logicGate(gate, a, b);
    const cx = view.width * 0.5;
    const cy = view.height * 0.54;
    const color = CANVAS_COLORS.technology;

    const inputY = [cy - 26, cy + 26];
    line(ctx, view.width * 0.16, inputY[0], cx - 34, inputY[0], a ? color : CANVAS_COLORS.muted, 2.5);
    if (gate !== 'NOT') {
      line(ctx, view.width * 0.16, inputY[1], cx - 34, inputY[1], b ? color : CANVAS_COLORS.muted, 2.5);
    }
    label(ctx, 'A', view.width * 0.15, inputY[0] - 14, { align: 'right', color: a ? color : CANVAS_COLORS.muted, size: 11, weight: 700 });
    if (gate !== 'NOT') {
      label(ctx, 'B', view.width * 0.15, inputY[1] - 14, { align: 'right', color: b ? color : CANVAS_COLORS.muted, size: 11, weight: 700 });
    }
    dot(ctx, view.width * 0.16, inputY[0], 5, a ? color : CANVAS_COLORS.muted, a);
    if (gate !== 'NOT') dot(ctx, view.width * 0.16, inputY[1], 5, b ? color : CANVAS_COLORS.muted, b);
    label(ctx, a ? '1' : '0', view.width * 0.16, inputY[0] - 22, { align: 'center', color: a ? color : CANVAS_COLORS.muted, size: 12, weight: 700 });
    if (gate !== 'NOT') {
      label(ctx, b ? '1' : '0', view.width * 0.16, inputY[1] - 22, { align: 'center', color: b ? color : CANVAS_COLORS.muted, size: 12, weight: 700 });
    }

    drawGate(ctx, gate, cx, cy, color);
    label(ctx, gate, cx, cy - 54, { align: 'center', color: CANVAS_COLORS.ink, size: 13, weight: 700 });

    const outputX = cx + 90;
    line(ctx, cx + 40, cy, outputX, cy, output ? color : CANVAS_COLORS.muted, 2.5);
    dot(ctx, outputX, cy, 16, output ? color : CANVAS_COLORS.raised, output);
    ctx.save();
    ctx.strokeStyle = output ? color : CANVAS_COLORS.hairline;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(outputX, cy, 16, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
    label(ctx, output ? '1' : '0', outputX, cy, { align: 'center', color: output ? CANVAS_COLORS.stage : CANVAS_COLORS.ink, size: 14, weight: 700 });
    label(ctx, 'Q', outputX, cy - 28, { align: 'center', color: output ? color : CANVAS_COLORS.muted, size: 11, weight: 700 });
    label(ctx, output ? 'HIGH' : 'LOW', outputX, cy + 30, { align: 'center', color: output ? color : CANVAS_COLORS.muted, size: 9 });

    drawTitle(ctx, view.width, EXPRESSIONS[gate]);
    label(ctx, DESCRIPTIONS[gate], view.width - 16, view.height - 22, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    cornerNote(ctx, view.width, view.height, 'Ideal gate · zero propagation delay in the logic table');
  },
  metrics(params) {
    const gate = (str(params, 'gate') as LogicGate) ?? 'AND';
    const a = bool(params, 'a');
    const b = bool(params, 'b');
    const output = logicGate(gate, a, b);
    return [
      { label: 'Output', value: output ? '1' : '0' },
      { label: 'Gate', value: gate },
      { label: 'Input A', value: a ? '1' : '0' },
      { label: 'Input B', value: gate === 'NOT' ? '—' : b ? '1' : '0' },
      { label: 'Expression', value: EXPRESSIONS[gate] },
      { label: 'High inputs', value: String((a ? 1 : 0) + (gate !== 'NOT' && b ? 1 : 0)) },
    ];
  },
  explanation(params) {
    const gate = (str(params, 'gate') as LogicGate) ?? 'AND';
    const a = bool(params, 'a');
    const b = bool(params, 'b');
    const output = logicGate(gate, a, b);
    return {
      headline: `${gate} with A = ${a ? 1 : 0}${gate === 'NOT' ? '' : ` and B = ${b ? 1 : 0}`} outputs ${output ? 1 : 0}.`,
      body: `${DESCRIPTIONS[gate]} The expression is ${EXPRESSIONS[gate]}. In a real circuit the output would also depend on propagation delay, fan-out and voltage thresholds; this bench shows ideal Boolean behaviour only.`,
    };
  },
  experiment: {
    question: 'Which gate outputs 1 only when both inputs are 0?',
    steps: ['Set A = 0 and B = 0, then check each gate.', 'Set A = 0 and B = 1 and check the gates that output 1.', 'Identify the gate whose output is 1 for neither mixed case.'],
    expected: 'NOR is the only two-input gate that outputs 1 for 00 and 0 for 01, 10 and 11. NAND is the opposite: it outputs 0 only for 11.',
  },
  assumptions: [
    'Gates are ideal: outputs are exactly 0 or 1 with no propagation delay, noise margin or loading effects.',
    'NOT has one input; the B control is hidden because the gate ignores it.',
    'The symbols are simplified but follow the standard distinctive shapes for AND, OR, NOT and XOR.',
  ],
  sources: [SOURCES.logic, { label: 'Boolean algebra — Wikipedia', url: 'https://en.wikipedia.org/wiki/Boolean_algebra' }],
  table(params) {
    const gate = (str(params, 'gate') as LogicGate) ?? 'AND';
    const rows: Array<{ a: boolean; b: boolean }> =
      gate === 'NOT'
        ? [{ a: false, b: false }, { a: true, b: false }]
        : [
            { a: false, b: false },
            { a: false, b: true },
            { a: true, b: false },
            { a: true, b: true },
          ];
    return {
      caption: `${gate} truth table`,
      headers: gate === 'NOT' ? ['A', 'Q'] : ['A', 'B', 'Q'],
      rows: rows.map((row) => {
        const values = gate === 'NOT'
          ? [row.a ? '1' : '0', logicGate(gate, row.a, row.b) ? '1' : '0']
          : [row.a ? '1' : '0', row.b ? '1' : '0', logicGate(gate, row.a, row.b) ? '1' : '0'];
        return {
          cells: values,
          highlight: row.a === bool(params, 'a') && (gate === 'NOT' || row.b === bool(params, 'b')),
        };
      }),
    };
  },
};

export default spec;
