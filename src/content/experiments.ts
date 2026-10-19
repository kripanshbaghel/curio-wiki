import { z } from 'zod';
import { experimentSchema, parseContent } from './schema';
import type { Experiment } from './types';

/**
 * Seed dataset. Task 16 expands this to the full curated catalog (≥15 experiments).
 * Parsed at module load so invalid content fails the build immediately.
 */
const rawExperiments: unknown[] = [
  {
    slug: 'simple-pendulum-period',
    title: "Measure a pendulum's period",
    subject: 'physics',
    topic: 'simple-pendulum',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Measure how long a pendulum takes for one swing and check how the period changes with string length.',
    concept:
      'A pendulum’s period depends on its length and on gravity, not on the mass or the width of the swing (for small angles).',
    materials: [
      'String or light thread (about 1 metre)',
      'A small soft weight (for example a steel nut or a wrapped eraser)',
      'Tape',
      'Ruler or measuring tape',
      'Stopwatch or phone timer',
    ],
    procedure: [
      'Tape one end of the string to the edge of a table so the weight hangs freely.',
      'Measure the length of the string from the table edge to the top of the weight and write it down.',
      'Pull the weight sideways a small angle (about 10–15 degrees) and release it without pushing.',
      'Time 10 complete swings with the stopwatch and divide by 10 to get the period.',
      'Shorten the string by 25 cm and repeat the measurement.',
      'Compare the periods: a shorter pendulum swings faster.',
    ],
    observations: [
      'Record string length and measured period for each trial in a small table.',
      'Note whether changing the release angle (still small) changes the period much.',
    ],
    explanation:
      'For small release angles a pendulum’s period is T = 2π√(L/g): it grows with the square root of the length L. The mass of the weight and the amplitude (small angle) do not appear in the formula, so they have little effect. Doubling the length increases the period by about 40%, not by half or double.',
    safety: [
      'Use a soft weight and keep the area below the pendulum clear of people and objects.',
      'Do not swing the weight near faces or screens.',
    ],
    durationMinutes: 20,
    relatedVideoQueries: ['simple pendulum period experiment', 'pendulum physics demonstration'],
    sources: [
      { label: 'Wikipedia: Pendulum', url: 'https://en.wikipedia.org/wiki/Pendulum' },
      {
        label: 'HyperPhysics: Pendulum',
        url: 'http://hyperphysics.phy-astr.gsu.edu/hbase/Pend/pend.html',
      },
    ],
    featured: true,
  },
  {
    slug: 'vinegar-volcano',
    title: 'Baking soda and vinegar volcano',
    subject: 'chemistry',
    topic: 'acid-base-reaction',
    level: 'beginner',
    supervision: 'adult-required',
    objective:
      'Create a safe model volcano using kitchen materials and observe the gas produced by an acid–base reaction.',
    concept:
      'Vinegar (an acid) reacts with baking soda (a base) to form carbon dioxide gas, which escapes as bubbles — the same gas that fizzes in fizzy drinks.',
    materials: [
      'Small plastic bottle or container',
      'Baking soda (2–3 tablespoons)',
      'Vinegar (about 100 ml)',
      'Dish soap (a squirt, optional)',
      'Food colouring (a few drops, optional)',
      'Tray, baking sheet, or outdoor surface',
      'Spoon',
    ],
    procedure: [
      'Place the bottle upright in the middle of the tray to catch the overflow.',
      'Add baking soda to the bottle, then the dish soap and food colouring if you have them.',
      'Pour the vinegar into the bottle in one go.',
      'Watch the bubbles rise and overflow — that gas is carbon dioxide.',
      'Record how long the fizzing lasts and try changing the amounts to compare.',
    ],
    observations: [
      'Describe the size and duration of the bubbles for different amounts of baking soda.',
      'Note whether warming the vinegar (gently, by an adult) changes the reaction speed.',
    ],
    explanation:
      'Acetic acid in vinegar donates protons to hydrogencarbonate in baking soda, producing carbonic acid that quickly breaks into water and carbon dioxide. The carbon dioxide escapes as bubbles. Adding dish soap traps the gas in foam, making the “lava” flow slower and look bigger.',
    safety: [
      'Adult supervision required; do the experiment on a tray or outdoors.',
      'Keep the mixture away from eyes; splash it out carefully rather than shaking the bottle.',
      'Do not seal the bottle — the gas must be able to escape.',
    ],
    durationMinutes: 15,
    relatedVideoQueries: ['baking soda vinegar volcano experiment', 'acid base reaction for kids'],
    sources: [
      {
        label: 'Wikipedia: Neutralization (chemistry)',
        url: 'https://en.wikipedia.org/wiki/Neutralization_(chemistry)',
      },
    ],
    featured: true,
  },
  {
    slug: 'leaf-starch-test',
    title: 'Test a leaf for starch',
    subject: 'biology',
    topic: 'photosynthesis',
    level: 'beginner',
    supervision: 'adult-required',
    objective:
      'Use an iodine test to show that a leaf exposed to light contains starch, evidence that photosynthesis happened.',
    concept:
      'Photosynthesis produces glucose, which plants store as starch. Iodine solution turns blue-black in the presence of starch.',
    materials: [
      'A leaf from a houseplant or garden plant (e.g. geranium or coleus)',
      'Small pot of water',
      'Kettle or adult-helped hot water',
      'Small jar of rubbing alcohol (methylated spirit)',
      'Iodine solution (dilute, from a pharmacy)',
      'White plate or tile',
      'Tongs or forceps',
      'Gloves',
    ],
    procedure: [
      'Leave the chosen plant in a dark cupboard for about two days so its leaves use up stored starch (destarching).',
      'Take one leaf and keep the plant in bright light for several hours.',
      'An adult heats the water. Boil the leaf in water for about two minutes with tongs.',
      'An adult places the jar of alcohol in the hot-water bath (never on a direct heat source) and the leaf into the alcohol until it turns pale.',
      'Rinse the pale leaf in cool water and spread it flat on the white plate.',
      'An adult drops a few drops of iodine solution onto the leaf. A blue-black colour means starch is present.',
    ],
    observations: [
      'Compare a leaf kept in the light with one kept in the dark (if available): the light leaf usually turns darker blue-black.',
      'Sketch or photograph the leaf colour before and after adding iodine.',
    ],
    explanation:
      'Iodine is an indicator for starch: it changes from brown to blue-black when starch is present. The light-treated leaf contains starch made from the glucose of photosynthesis, so it stains strongly. The destarched control leaf stains much less, showing the starch was made in the light, not left over from earlier.',
    safety: [
      'Adult supervision required throughout.',
      'Alcohol is flammable — warm it only in the hot-water bath, never on a stove or near flames.',
      'Iodine stains skin and clothes; wear gloves and clean spills immediately.',
    ],
    durationMinutes: 45,
    relatedVideoQueries: ['iodine starch test leaf photosynthesis', 'photosynthesis starch experiment'],
    sources: [{ label: 'Wikipedia: Starch', url: 'https://en.wikipedia.org/wiki/Starch' }],
    featured: false,
  },
];

export const experiments: Experiment[] = parseContent(
  z.array(experimentSchema),
  rawExperiments,
  'experiments',
);

export function getExperiment(slug: string): Experiment | undefined {
  return experiments.find((experiment) => experiment.slug === slug);
}
