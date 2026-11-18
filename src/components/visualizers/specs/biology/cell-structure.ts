import type { VisualizerSpec } from '@/lib/visualizers/types';
import { str } from '@/lib/visualizers/types';
import { CELL_ORGANELLES, type OrganelleDatum } from '@/lib/visualizers/data';
import { CANVAS_COLORS } from '@/components/visualizers/core/palette';
import {
  cornerNote,
  dot,
  label,
  line,
  prepare,
  ring,
  roundRectPath,
} from '@/components/visualizers/core/draw';
import { SOURCES, drawTitle } from '../common';

type CellType = 'plant' | 'animal';

function presence(organelle: OrganelleDatum, cell: CellType): boolean {
  return cell === 'plant' ? organelle.plant : organelle.animal;
}

function drawBoundary(
  ctx: CanvasRenderingContext2D,
  cell: CellType,
  area: { x: number; y: number; width: number; height: number },
  centre: { x: number; y: number },
  radius: { x: number; y: number },
  highlight: boolean,
): void {
  ctx.save();
  if (cell === 'plant') {
    roundRectPath(ctx, area.x, area.y, area.width, area.height, 26);
    ctx.fillStyle = 'rgba(110, 231, 160, 0.05)';
    ctx.fill();
    ctx.strokeStyle = highlight ? CANVAS_COLORS.biology : CANVAS_COLORS.hairline;
    ctx.lineWidth = highlight ? 5 : 3;
    ctx.stroke();
    roundRectPath(ctx, area.x + 8, area.y + 8, area.width - 16, area.height - 16, 20);
    ctx.strokeStyle = highlight ? CANVAS_COLORS.biology : CANVAS_COLORS.muted;
    ctx.lineWidth = highlight ? 2 : 1;
    ctx.stroke();
  } else {
    ctx.beginPath();
    for (let index = 0; index <= 96; index += 1) {
      const angle = (index / 96) * Math.PI * 2;
      const wobble = 1 + 0.022 * Math.sin(angle * 3 + 1.4);
      const x = centre.x + Math.cos(angle) * radius.x * wobble;
      const y = centre.y + Math.sin(angle) * radius.y * wobble;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(110, 231, 160, 0.05)';
    ctx.fill();
    ctx.strokeStyle = highlight ? CANVAS_COLORS.biology : CANVAS_COLORS.hairline;
    ctx.lineWidth = highlight ? 4 : 2;
    ctx.stroke();
  }
  ctx.restore();
}

function drawOrganelle(
  ctx: CanvasRenderingContext2D,
  organelle: OrganelleDatum,
  x: number,
  y: number,
  selected: boolean,
  t: number,
): void {
  const color = CANVAS_COLORS.biology;
  const soft = selected ? 1 : 0.42;
  ctx.save();
  ctx.globalAlpha = soft;

  switch (organelle.id) {
    case 'nucleus': {
      dot(ctx, x, y, 27, 'rgba(110, 231, 160, 0.18)', false);
      ring(ctx, x, y, 27, color, 2);
      ring(ctx, x, y, 22, CANVAS_COLORS.hairline, 1);
      dot(ctx, x + 7, y - 5, 7, color, false);
      label(ctx, 'DNA', x - 6, y + 12, { align: 'center', color: CANVAS_COLORS.muted, size: 8 });
      break;
    }
    case 'mitochondrion': {
      ctx.beginPath();
      ctx.ellipse(x, y, 20, 11, -0.35, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(110, 231, 160, 0.14)';
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      ctx.beginPath();
      for (let index = 0; index < 4; index += 1) {
        const px = x - 13 + index * 8;
        ctx.moveTo(px, y - 6);
        ctx.lineTo(px + 5, y);
        ctx.lineTo(px, y + 6);
      }
      ctx.strokeStyle = CANVAS_COLORS.mathematics;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      break;
    }
    case 'ribosome': {
      for (let index = 0; index < 7; index += 1) {
        const angle = index * 1.9 + 0.4;
        dot(ctx, x + Math.cos(angle) * (10 + (index % 3) * 7), y + Math.sin(angle) * (7 + (index % 2) * 6), 3, color, false);
      }
      break;
    }
    case 'endoplasmic-reticulum': {
      for (let row = 0; row < 3; row += 1) {
        ctx.beginPath();
        for (let step = 0; step <= 16; step += 1) {
          const px = x - 24 + step * 3;
          const py = y - 10 + row * 10 + Math.sin(step * 0.9 + row) * 3;
          if (step === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = row === 1 ? CANVAS_COLORS.mathematics : color;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }
      break;
    }
    case 'golgi': {
      for (let layer = 0; layer < 4; layer += 1) {
        ctx.beginPath();
        ctx.arc(x, y - layer * 4, 16 - layer * 2.4, Math.PI * 1.12, Math.PI * 1.88);
        ctx.strokeStyle = layer === 0 ? CANVAS_COLORS.mathematics : color;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      break;
    }
    case 'cell-membrane': {
      break;
    }
    case 'chloroplast': {
      ctx.beginPath();
      ctx.ellipse(x, y, 23, 13, 0.28, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(110, 231, 160, 0.18)';
      ctx.fill();
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.8;
      ctx.stroke();
      for (let stack = 0; stack < 3; stack += 1) {
        const px = x - 10 + stack * 9;
        line(ctx, px - 5, y - 5, px + 5, y - 5, CANVAS_COLORS.mathematics, 2.4);
        line(ctx, px - 5, y, px + 5, y, CANVAS_COLORS.mathematics, 2.4);
        line(ctx, px - 5, y + 5, px + 5, y + 5, CANVAS_COLORS.mathematics, 2.4);
      }
      break;
    }
    case 'cell-wall': {
      break;
    }
    case 'central-vacuole': {
      ctx.beginPath();
      ctx.ellipse(x, y, 52, 32, 0, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(79, 224, 200, 0.08)';
      ctx.fill();
      ctx.strokeStyle = CANVAS_COLORS.technology;
      ctx.lineWidth = 1.6;
      ctx.stroke();
      label(ctx, 'water + solutes', x, y, { align: 'center', color: CANVAS_COLORS.muted, size: 9 });
      break;
    }
    case 'lysosome': {
      dot(ctx, x, y, 13, 'rgba(255, 143, 163, 0.24)', false);
      ring(ctx, x, y, 13, CANVAS_COLORS.engineering, 1.6);
      for (let index = 0; index < 5; index += 1) {
        const angle = index * 1.3 + t * 0.2;
        dot(ctx, x + Math.cos(angle) * 6, y + Math.sin(angle) * 6, 1.8, CANVAS_COLORS.engineering, false);
      }
      break;
    }
    case 'centrosome': {
      line(ctx, x - 10, y, x + 10, y, CANVAS_COLORS.technology, 5);
      line(ctx, x, y - 10, x, y + 10, CANVAS_COLORS.technology, 5);
      dot(ctx, x, y, 3, CANVAS_COLORS.ink, false);
      break;
    }
    default:
      dot(ctx, x, y, 8, color, false);
  }

  ctx.restore();

  if (selected) {
    ring(ctx, x, y, organelle.id === 'central-vacuole' ? 60 : 34, CANVAS_COLORS.mathematics, 1.5, [4, 4]);
    label(ctx, organelle.short, x, y - (organelle.id === 'central-vacuole' ? 42 : 40), {
      align: 'center',
      color: CANVAS_COLORS.ink,
      size: 11,
      weight: 600,
    });
  }
}

const spec: VisualizerSpec = {
  accent: 'biology',
  aspect: 1.55,
  animated: true,
  defaultSpeed: 1,
  stageLabel: 'A schematic plant or animal cell with selectable organelles',
  stageHint: 'Choose a cell type and an organelle. The dashed marker shows what is selected; the note at the bottom names structures that the chosen cell does not have in this model.',
  controls: [
    {
      kind: 'segment',
      id: 'cell',
      label: 'Cell type',
      defaultValue: 'animal',
      options: [
        { value: 'animal', label: 'Animal cell' },
        { value: 'plant', label: 'Plant cell' },
      ],
    },
    {
      kind: 'select',
      id: 'organelle',
      label: 'Organelle',
      defaultValue: 'nucleus',
      options: CELL_ORGANELLES.map((organelle) => ({ value: organelle.id, label: organelle.name })),
    },
  ],
  draw(ctx, params, t, view) {
    prepare(ctx, view.width, view.height);
    const cell = str(params, 'cell') === 'plant' ? 'plant' : 'animal';
    const selected = CELL_ORGANELLES.find((entry) => entry.id === str(params, 'organelle')) ?? CELL_ORGANELLES[0];
    const area = {
      x: view.width * 0.15,
      y: 58,
      width: view.width * 0.7,
      height: view.height - 118,
    };
    const centre = { x: view.width / 2, y: area.y + area.height / 2 };
    const radius = { x: area.width / 2, y: area.height / 2 };
    const selectedPresent = presence(selected, cell);

    drawBoundary(
      ctx,
      cell,
      area,
      centre,
      radius,
      selectedPresent && (selected.id === 'cell-membrane' || selected.id === 'cell-wall'),
    );

    const position = (organelle: OrganelleDatum) =>
      cell === 'plant'
        ? {
            x: area.x + organelle.u * area.width,
            y: area.y + organelle.v * area.height,
          }
        : {
            x: centre.x + (organelle.u - 0.5) * radius.x * 1.62,
            y: centre.y + (organelle.v - 0.5) * radius.y * 1.62,
          };

    // The vacuole is drawn first so the smaller organelles sit on top.
    const vacuole = CELL_ORGANELLES.find((entry) => entry.id === 'central-vacuole');
    if (cell === 'plant' && vacuole) {
      const point = position(vacuole);
      drawOrganelle(ctx, vacuole, point.x, point.y, selected.id === vacuole.id, t);
    }

    for (const organelle of CELL_ORGANELLES) {
      if (!presence(organelle, cell)) continue;
      if (organelle.id === 'central-vacuole' || organelle.id === 'cell-membrane' || organelle.id === 'cell-wall') continue;
      const point = position(organelle);
      drawOrganelle(ctx, organelle, point.x, point.y, selected.id === organelle.id, t);
    }

    const absent = CELL_ORGANELLES.filter((organelle) => !presence(organelle, cell));
    const absentText = absent.map((organelle) => organelle.short).join(' · ');
    label(ctx, `${cell === 'plant' ? 'Plant' : 'Animal'} cell`, view.width - 16, 20, {
      align: 'right',
      color: CANVAS_COLORS.biology,
      size: 11,
      weight: 600,
    });
    label(ctx, `Not in this cell: ${absentText}`, view.width / 2, view.height - 22, {
      align: 'center',
      color: CANVAS_COLORS.muted,
      size: 9,
    });

    if (!selectedPresent) {
      label(ctx, `${selected.name} is absent from this cell`, view.width / 2, centre.y, {
        align: 'center',
        color: CANVAS_COLORS.warn,
        size: 13,
        weight: 600,
      });
    }

    drawTitle(ctx, view.width, 'Cell structure · schematic, not to scale');
    cornerNote(ctx, view.width, view.height, 'Eukaryotic cell · teaching model');
  },
  metrics(params) {
    const cell = str(params, 'cell') === 'plant' ? 'plant' : 'animal';
    const selected = CELL_ORGANELLES.find((entry) => entry.id === str(params, 'organelle')) ?? CELL_ORGANELLES[0];
    const present = CELL_ORGANELLES.filter((organelle) => presence(organelle, cell)).length;
    return [
      { label: 'Cell type', value: cell === 'plant' ? 'Plant' : 'Animal' },
      { label: 'Selected', value: selected.short },
      { label: 'Present here', value: presence(selected, cell) ? 'Yes' : 'No', hint: presence(selected, cell) ? undefined : `${selected.name} is not part of this cell model.` },
      { label: 'Structures modelled', value: String(present) },
      { label: 'Cell wall', value: cell === 'plant' ? 'Cellulose' : 'Absent' },
      { label: 'Chloroplasts', value: cell === 'plant' ? 'Present' : 'Absent' },
    ];
  },
  explanation(params) {
    const cell = str(params, 'cell') === 'plant' ? 'plant' : 'animal';
    const selected = CELL_ORGANELLES.find((entry) => entry.id === str(params, 'organelle')) ?? CELL_ORGANELLES[0];
    if (!presence(selected, cell)) {
      return {
        headline: `${selected.name} is not present in a ${cell} cell in this model.`,
        body: `Its usual role is: ${selected.function} The other cell type shows it. Plant and animal cells share most eukaryotic organelles, but differ in the wall, chloroplasts, the large central vacuole, lysosomes and centrosomes.`,
      };
    }
    return {
      headline: `${selected.name}: ${selected.function}`,
      body: `This ${cell} cell model shows ${CELL_ORGANELLES.filter((organelle) => presence(organelle, cell)).length} structures. Organelles divide labour: the nucleus holds DNA, mitochondria release usable energy, and the endomembrane system makes and ships proteins and lipids. The drawing is schematic, so sizes and counts are not measured.`,
    };
  },
  experiment: {
    question: 'Which structures appear in a plant cell but not in an animal cell?',
    steps: [
      'Start with the animal cell and note the organelle list and the absent-structures note.',
      'Switch to the plant cell.',
      'Compare the cell boundary and select the chloroplast and central vacuole.',
    ],
    expected:
      'The plant cell adds a cellulose cell wall, chloroplasts and a large central vacuole. The animal cell instead shows lysosomes and a centrosome. Both share a nucleus, mitochondria, ribosomes, ER, Golgi and a membrane.',
  },
  assumptions: [
    'The drawing is a two-dimensional teaching schematic, not a micrograph; sizes, shapes and organelle counts are simplified.',
    'Presence flags follow the common plant/animal contrast taught at introductory level; real cells vary by tissue and species.',
    'Only a representative set of organelles is shown. The cytoskeleton, peroxisomes and other structures are omitted.',
  ],
  sources: [
    SOURCES.biology,
    { label: 'Organelle — Wikipedia', url: 'https://en.wikipedia.org/wiki/Organelle' },
  ],
  table(params) {
    const cell = str(params, 'cell') === 'plant' ? 'plant' : 'animal';
    return {
      caption: 'Organelles in the model and the cells that contain them',
      headers: ['Organelle', 'Plant', 'Animal', 'Selected here'],
      rows: CELL_ORGANELLES.map((organelle) => ({
        cells: [
          organelle.name,
          organelle.plant ? 'yes' : '—',
          organelle.animal ? 'yes' : '—',
          organelle.id === str(params, 'organelle') ? (presence(organelle, cell) ? 'present' : 'absent') : '',
        ],
        highlight: organelle.id === str(params, 'organelle'),
      })),
    };
  },
};

export default spec;
