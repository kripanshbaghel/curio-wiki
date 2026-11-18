import type { VisualizerSpec } from '@/lib/visualizers/types';
import { formatNumber, num, str } from '@/lib/visualizers/types';
import { cpuState, type CpuInstruction } from '@/lib/visualizers/formulas';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import { cornerNote, dot, label, line, prepare, roundRectPath } from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

const PHASES = ['Fetch', 'Decode', 'Execute', 'Write back'] as const;

const PHASE_NOTES: Record<(typeof PHASES)[number], string> = {
  Fetch: 'Read the instruction at the program counter.',
  Decode: 'Work out which operation and operands are needed.',
  Execute: 'The ALU performs the operation.',
  'Write back': 'The result is stored in a register or memory.',
};

const spec: VisualizerSpec = {
  accent: 'technology',
  aspect: 1.65,
  animated: true,
  autoPlay: true,
  defaultSpeed: 1,
  stageLabel: 'A simplified CPU datapath stepping through fetch, decode, execute and write back',
  stageHint: 'The clock slider sets how many cycles run per second. The highlighted stage follows the cycle counter; the same instruction repeats so you can watch the phases rotate.',
  controls: [
    {
      kind: 'select',
      id: 'instruction',
      label: 'Instruction',
      defaultValue: 'LOAD',
      options: [
        { value: 'LOAD', label: 'LOAD · read memory into the accumulator' },
        { value: 'ADD', label: 'ADD · add memory to the accumulator' },
        { value: 'STORE', label: 'STORE · write the accumulator to memory' },
      ],
    },
    { kind: 'slider', id: 'clock', label: 'Clock speed', min: 1, max: 12, step: 1, defaultValue: 3, unit: 'Hz' },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const instruction = (str(params, 'instruction') as CpuInstruction) ?? 'LOAD';
    const clock = num(params, 'clock');
    const cycles = Math.floor(t * clock);
    const state = cpuState(instruction, cycles);
    const activePhase = state.phase;
    const accent = CANVAS_COLORS.technology;

    // Four-stage pipeline.
    const margin = 20;
    const gap = 6;
    const boxWidth = (view.width - margin * 2 - gap * 3) / 4;
    const boxTop = 46;
    const boxHeight = 46;
    PHASES.forEach((phase, index) => {
      const x = margin + index * (boxWidth + gap);
      const active = phase === activePhase;
      ctx.save();
      roundRectPath(ctx, x, boxTop, boxWidth, boxHeight, 6);
      ctx.fillStyle = active ? 'rgba(79, 224, 200, 0.18)' : CANVAS_COLORS.raised;
      ctx.fill();
      ctx.strokeStyle = active ? accent : CANVAS_COLORS.hairline;
      ctx.lineWidth = active ? 1.8 : 1;
      ctx.stroke();
      ctx.restore();
      label(ctx, phase, x + boxWidth / 2, boxTop + 15, {
        align: 'center',
        color: active ? CANVAS_COLORS.ink : CANVAS_COLORS.muted,
        size: view.width < 420 ? 8 : 9,
        weight: active ? 700 : 500,
      });
      label(ctx, `cycle ${index + 1}`, x + boxWidth / 2, boxTop + 32, {
        align: 'center',
        color: active ? accent : 'rgba(200, 215, 240, 0.45)',
        size: 8,
      });
    });

    // Datapath blocks.
    const diagramTop = 120;
    const diagramBottom = view.height - 52;
    const centreY = (diagramTop + diagramBottom) / 2;
    const card = (x: number, y: number, width: number, height: number, heading: string, value: string, active: boolean) => {
      ctx.save();
      roundRectPath(ctx, x, y, width, height, 8);
      ctx.fillStyle = active ? 'rgba(79, 224, 200, 0.14)' : CANVAS_COLORS.raised;
      ctx.fill();
      ctx.strokeStyle = active ? accent : CANVAS_COLORS.hairline;
      ctx.lineWidth = active ? 1.8 : 1;
      ctx.stroke();
      ctx.restore();
      label(ctx, heading, x + width / 2, y + 15, {
        align: 'center',
        color: active ? accent : CANVAS_COLORS.muted,
        size: 9,
        weight: 600,
      });
      label(ctx, value, x + width / 2, y + height - 17, {
        align: 'center',
        color: CANVAS_COLORS.ink,
        size: 13,
        weight: 700,
        mono: true,
      });
    };

    const memory = { x: view.width * 0.05, y: centreY - 46, width: view.width * 0.2, height: 92 };
    const control = { x: view.width * 0.37, y: centreY - 74, width: view.width * 0.26, height: 58 };
    const alu = { x: view.width * 0.37, y: centreY + 16, width: view.width * 0.26, height: 58 };
    const registers = { x: view.width * 0.72, y: centreY - 62, width: view.width * 0.23, height: 124 };

    card(memory.x, memory.y, memory.width, memory.height, 'Memory', String(state.memoryValue), activePhase === 'Fetch');
    card(control.x, control.y, control.width, control.height, 'Control unit', state.ir, activePhase === 'Decode');
    card(alu.x, alu.y, alu.width, alu.height, 'ALU', instruction === 'ADD' ? 'add' : instruction === 'STORE' ? 'pass' : 'load', activePhase === 'Execute');
    card(registers.x, registers.y, registers.width, registers.height, 'Registers', `ACC ${state.acc}`, activePhase === 'Write back');
    label(ctx, `PC ${state.pc}`, registers.x + registers.width / 2, registers.y + 52, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 9,
      mono: true,
    });

    // Buses.
    const bus = CANVAS_COLORS.hairline;
    line(ctx, memory.x + memory.width, centreY - 20, control.x, centreY - 45, bus, 1.5);
    line(ctx, control.x + control.width, centreY - 45, registers.x, centreY - 20, bus, 1.5);
    line(ctx, registers.x, centreY + 20, alu.x + alu.width, centreY + 45, bus, 1.5);
    line(ctx, alu.x + alu.width / 2, alu.y, control.x + control.width / 2, control.y + control.height, bus, 1.5);
    label(ctx, 'address / data bus', memory.x + memory.width / 2, centreY + 54, {
      align: 'center',
      color: 'rgba(200, 215, 240, 0.45)',
      size: 8,
    });

    // A pulse that travels the datapath in step with the clock.
    const path = [
      { x: memory.x + memory.width / 2, y: centreY },
      { x: control.x + control.width / 2, y: control.y + control.height / 2 },
      { x: alu.x + alu.width / 2, y: alu.y + alu.height / 2 },
      { x: registers.x + registers.width / 2, y: centreY },
    ];
    const progress = ((t * clock) % 4) / 4;
    const segment = Math.min(3, Math.floor(progress * 4));
    const local = progress * 4 - segment;
    const from = path[segment];
    const to = path[(segment + 1) % path.length];
    dot(ctx, from.x + (to.x - from.x) * local, from.y + (to.y - from.y) * local, 4, accent, true);

    label(ctx, `${clock.toFixed(0)} Hz · cycle ${state.cycles}`, view.width - 16, 24, {
      align: 'right',
      color: CANVAS_COLORS.muted,
      size: 9,
    });
    drawTitle(ctx, view.width, `CPU · ${instruction} · ${activePhase}`);
    cornerNote(ctx, view.width, view.height, 'Simplified single-instruction datapath · not a real pipeline');
  },
  metrics(params, t) {
    const instruction = (str(params, 'instruction') as CpuInstruction) ?? 'LOAD';
    const clock = num(params, 'clock');
    const state = cpuState(instruction, Math.floor(t * clock));
    return [
      { label: 'Phase', value: state.phase },
      { label: 'Cycle', value: String(state.cycles) },
      { label: 'Program counter', value: String(state.pc) },
      { label: 'Instruction', value: state.ir },
      { label: 'Accumulator', value: String(state.acc) },
      { label: 'Clock', value: formatNumber(clock, 0), unit: 'Hz' },
    ];
  },
  explanation(params, t) {
    const instruction = (str(params, 'instruction') as CpuInstruction) ?? 'LOAD';
    const state = cpuState(instruction, Math.floor(t * num(params, 'clock')));
    const detail =
      state.phase === 'Fetch'
        ? 'The program counter selects an address, and the instruction is read from memory into the instruction register.'
        : state.phase === 'Decode'
          ? 'The control unit interprets the opcode and sets up the operands for the ALU and registers.'
          : state.phase === 'Execute'
            ? instruction === 'ADD'
              ? 'The ALU adds the memory value to the accumulator.'
              : instruction === 'STORE'
                ? 'The accumulator value is prepared for the write-back path.'
                : 'The memory value is passed through toward the accumulator.'
            : 'The result is committed to the destination register or memory location.';
    return {
      headline: `${state.phase}: ${PHASE_NOTES[state.phase]}`,
      body: `${detail} In this run the instruction is ${instruction} and the clock is ${num(params, 'clock').toFixed(0)} Hz, so a four-cycle instruction takes about ${(4 / Math.max(1, num(params, 'clock'))).toFixed(2)} s of simulated time. The model repeats one instruction rather than running a stored program.`,
    };
  },
  experiment: {
    question: 'How many clock cycles make one complete instruction in this model?',
    steps: ['Pause the animation and note the phase and cycle counter.', 'Step through the animation and watch the highlighted stage change.', 'Continue until the same phase returns.'],
    expected:
      'Four cycles complete one instruction: Fetch, Decode, Execute and Write back. The program counter advances once per instruction, at the end of the fourth cycle in this simplified model.',
  },
  assumptions: [
    'The CPU is a single-instruction teaching datapath, not a real pipelined processor with hazards, caches or interrupts.',
    'One instruction takes four clock cycles, and the model repeats that instruction instead of reading a program from memory.',
    'The accumulator and memory values are illustrative small integers, not the result of a full instruction-set simulation.',
    'The program counter advances once per completed instruction in this model.',
  ],
  sources: [
    SOURCES.cpu,
    { label: 'Instruction cycle — Wikipedia', url: 'https://en.wikipedia.org/wiki/Instruction_cycle' },
  ],
  table() {
    return {
      caption: 'The four stages and what the model does in each',
      headers: ['Stage', 'Action'],
      rows: PHASES.map((phase) => ({
        cells: [phase, PHASE_NOTES[phase]],
      })),
    };
  },
};

export default spec;
