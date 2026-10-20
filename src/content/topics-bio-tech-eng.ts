import type { Topic } from './types';

/**
 * Biology, technology, and engineering topic seeds.
 * Owned by content agent B — extend this array with new entries.
 * collectionSlugs available: motion-and-forces, life-and-reactions,
 * matter-and-chemistry, mathematics-toolkit, living-systems, technology-and-design.
 * Experiment slugs available (for relatedExperimentSlugs):
 * simple-pendulum-period, vinegar-volcano, leaf-starch-test, yeast-fermentation-balloon,
 * osmosis-potato-cores, density-column-liquids, growing-salt-crystals, straw-bridge-load-test,
 * solar-oven-smores, ohms-law-circuit, seeing-sound-rice-drum, rainbow-refraction-light,
 * balloon-static-electricity, magnetic-field-iron-filings, reaction-rate-temperature-baking-soda,
 * chromatography-plant-pigments, ph-indicator-red-cabbage, pulse-and-exercise-response.
 */
export const bioTechEngTopicSeeds: Topic[] = [
  {
    slug: 'photosynthesis',
    title: 'Photosynthesis',
    subject: 'biology',
    summary:
      'Photosynthesis is the process plants, algae, and some bacteria use to capture light energy and turn water and carbon dioxide into glucose, releasing oxygen as a by-product.',
    aliases: ['plant photosynthesis'],
    keyConcepts: [
      {
        term: 'Chlorophyll',
        definition: 'The green pigment in chloroplasts that absorbs light energy, mostly red and blue light.',
      },
      {
        term: 'Glucose',
        definition: 'The sugar produced during photosynthesis; it stores chemical energy for the plant.',
      },
    ],
    equations: [
      {
        label: 'Overall photosynthesis equation',
        latex: '6\\mathrm{CO}_2 + 6\\mathrm{H}_2\\mathrm{O} + \\text{light} \\rightarrow \\mathrm{C}_6\\mathrm{H}_{12}\\mathrm{O}_6 + 6\\mathrm{O}_2',
        variables: [
          { symbol: 'CO₂', meaning: 'carbon dioxide taken in from the air' },
          { symbol: 'H₂O', meaning: 'water absorbed by the roots' },
          { symbol: 'C₆H₁₂O₆', meaning: 'glucose produced' },
          { symbol: 'O₂', meaning: 'oxygen released' },
        ],
      },
    ],
    relatedExperimentSlugs: ['leaf-starch-test'],
    wikipediaTitle: 'Photosynthesis',
    collectionSlugs: ['life-and-reactions', 'living-systems'],
  },
  {
    slug: 'cell-biology',
    title: 'Cell biology',
    subject: 'biology',
    summary:
      'Cells are the smallest units that carry out the processes of life. Nearly all living things are built from cells, which take in nutrients, release energy, grow, and reproduce, and which group together into tissues, organs, and systems.',
    aliases: ['cells', 'cell theory'],
    keyConcepts: [
      {
        term: 'Cell membrane',
        definition:
          'The thin, flexible boundary of a cell that controls which substances enter and leave.',
      },
      {
        term: 'Nucleus',
        definition:
          'The control centre of a animal, plant, and fungal cell, holding most of the cell’s DNA.',
      },
      {
        term: 'Cytoplasm',
        definition:
          'The jelly-like fluid inside a cell where many of its chemical reactions take place.',
      },
      {
        term: 'Organelle',
        definition:
          'A specialised structure inside a cell that does a particular job, such as a mitochondrion releasing energy.',
      },
    ],
    equations: [],
    relatedExperimentSlugs: ['yeast-fermentation-balloon', 'osmosis-potato-cores'],
    wikipediaTitle: 'Cell (biology)',
    collectionSlugs: ['living-systems'],
  },
  {
    slug: 'human-circulatory-system',
    title: 'Human circulatory system',
    subject: 'biology',
    summary:
      'The circulatory system moves blood around the body. The heart pumps blood through arteries to the body’s tissues and organs, and veins carry it back, delivering oxygen and nutrients and carrying away carbon dioxide and other wastes.',
    aliases: ['circulatory system', 'cardiovascular system', 'blood circulation'],
    keyConcepts: [
      {
        term: 'Heart',
        definition:
          'A muscular pump that drives blood through the lungs and around the rest of the body.',
      },
      {
        term: 'Artery',
        definition:
          'A vessel carrying blood away from the heart, usually under high pressure and with thick, elastic walls.',
      },
      {
        term: 'Vein',
        definition:
          'A vessel returning blood towards the heart, often fitted with valves to stop it flowing backwards.',
      },
      {
        term: 'Capillary',
        definition:
          'A tiny, thin-walled vessel where oxygen, nutrients, and wastes are exchanged with the body’s cells.',
      },
      {
        term: 'Pulse',
        definition:
          'The surge of pressure in an artery each time the heart contracts; it rises during exercise.',
      },
    ],
    equations: [],
    relatedExperimentSlugs: ['pulse-and-exercise-response'],
    wikipediaTitle: 'Circulatory system',
    collectionSlugs: ['living-systems'],
  },
  {
    slug: 'genetics-basics',
    title: 'Genetics basics',
    subject: 'biology',
    summary:
      'Genetics is the study of genes, the units of heredity passed from parents to offspring. DNA carries the instructions for building and running an organism, and different versions of a gene — alleles — help explain why traits vary within a species.',
    aliases: ['genetics', 'heredity'],
    keyConcepts: [
      {
        term: 'Gene',
        definition:
          'A length of DNA that codes for a useful product, such as a protein, and influences a particular trait.',
      },
      {
        term: 'DNA',
        definition:
          'The molecule that stores genetic information in a sequence of four chemical bases: A, T, C, and G.',
      },
      {
        term: 'Chromosome',
        definition:
          'A thread-like structure of DNA and protein found in the nucleus; humans typically have 46 chromosomes.',
      },
      {
        term: 'Allele',
        definition:
          'One of the alternative versions of a gene; an individual may inherit the same allele from both parents or different ones.',
      },
      {
        term: 'Dominant and recessive',
        definition:
          'A dominant allele shows its trait when present in one copy, while a recessive allele shows only when two copies are inherited.',
      },
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Genetics',
    collectionSlugs: ['living-systems'],
  },
  {
    slug: 'ecology-and-ecosystems',
    title: 'Ecology and ecosystems',
    subject: 'biology',
    summary:
      'Ecology is the study of how organisms interact with one another and with their surroundings. An ecosystem combines a living community with the non-living air, water, sunlight, and rock around it, joined by constant flows of energy and matter.',
    aliases: ['ecology', 'ecosystems', 'food webs'],
    keyConcepts: [
      {
        term: 'Ecosystem',
        definition:
          'A community of living organisms together with the non-living parts of their environment, interacting as a system.',
      },
      {
        term: 'Habitat',
        definition:
          'The place where an organism naturally lives, providing the food, water, and shelter it needs.',
      },
      {
        term: 'Producer',
        definition:
          'An organism, such as a green plant, that makes its own food from sunlight or chemicals and starts most food chains.',
      },
      {
        term: 'Consumer',
        definition:
          'An organism that obtains energy by eating other organisms; herbivores eat plants and carnivores eat animals.',
      },
      {
        term: 'Food web',
        definition:
          'A network of interconnected food chains showing how energy and matter pass between organisms in a habitat.',
      },
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Ecology',
    collectionSlugs: ['living-systems'],
  },
  {
    slug: 'computer-hardware-basics',
    title: 'Computer hardware basics',
    subject: 'technology',
    summary:
      'Computer hardware is the physical equipment of a computer — the parts you can touch. A processor executes instructions, memory holds data while it is in use, and storage keeps it for the long term, all connected so information can move between them.',
    aliases: ['computer components', 'hardware'],
    keyConcepts: [
      {
        term: 'Processor (CPU)',
        definition:
          'The chip that fetches, decodes, and executes instructions; its speed is often measured in gigahertz.',
      },
      {
        term: 'Memory (RAM)',
        definition:
          'Fast, temporary storage that holds programmes and data currently in use; its contents are lost when power is switched off.',
      },
      {
        term: 'Storage drive',
        definition:
          'A device such as a solid-state drive or hard disk that keeps files and programmes even when the computer is off.',
      },
      {
        term: 'Input and output devices',
        definition:
          'Hardware such as a keyboard and mouse that send data into the computer, and a screen or printer that presents results.',
      },
      {
        term: 'Bus',
        definition:
          'A set of electrical pathways that carries data and instructions between the processor, memory, and storage.',
      },
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Computer hardware',
    collectionSlugs: ['technology-and-design'],
  },
  {
    slug: 'programming-algorithms',
    title: 'Programming and algorithms',
    subject: 'technology',
    summary:
      'An algorithm is a finite, step-by-step recipe for solving a problem or completing a task. Programs are algorithms written in a language a computer can run, and studying an algorithm’s efficiency reveals how its running time grows as the input gets larger.',
    aliases: ['algorithms', 'computational procedure'],
    keyConcepts: [
      {
        term: 'Algorithm',
        definition:
          'A finite set of unambiguous instructions that transforms inputs into outputs, finishing after a fixed number of steps.',
      },
      {
        term: 'Pseudocode',
        definition:
          'A plain-language description of an algorithm’s steps, used to plan a program before writing real code.',
      },
      {
        term: 'Sequence, selection, and iteration',
        definition:
          'The three building blocks of programs: doing steps in order, choosing between branches, and repeating steps in loops.',
      },
      {
        term: 'Efficiency',
        definition:
          'How the running time or memory needs of an algorithm grow with the size of the input, often written using big O notation.',
      },
      {
        term: 'Decomposition',
        definition:
          'Breaking a large problem into smaller, manageable parts that can be solved independently.',
      },
    ],
    equations: [],
    relatedExperimentSlugs: [],
    wikipediaTitle: 'Algorithm',
    collectionSlugs: ['technology-and-design'],
  },
  {
    slug: 'simple-machines',
    title: 'Simple machines',
    subject: 'engineering',
    summary:
      'A simple machine is a device that changes the size or direction of a force. Levers, pulleys, inclined planes, wedges, screws, and wheels and axles all trade a smaller force applied over a longer distance for a larger force over a shorter one.',
    aliases: ['simple machines', 'mechanical advantage'],
    keyConcepts: [
      {
        term: 'Simple machine',
        definition:
          'A device that redirects or multiplies a force with no moving parts of its own, such as a lever or an inclined plane.',
      },
      {
        term: 'Mechanical advantage',
        definition:
          'How many times a machine multiplies the force you put in; ideal mechanical advantage compares the output force with the input force.',
      },
      {
        term: 'Effort',
        definition: 'The force you apply to a machine, also called the input force.',
      },
      {
        term: 'Load',
        definition: 'The force the machine works against, also called the output force.',
      },
      {
        term: 'Distance trade-off',
        definition:
          'To gain force you must move the effort further than the load moves; no machine gives force and distance for free.',
      },
    ],
    equations: [
      {
        label: 'Mechanical advantage of a machine',
        latex: '\\mathrm{MA} = \\frac{F_{\\mathrm{out}}}{F_{\\mathrm{in}}}',
        variables: [
          { symbol: 'MA', meaning: 'mechanical advantage (no units)' },
          { symbol: 'F_out', meaning: 'output force delivered by the machine (newtons)' },
          { symbol: 'F_in', meaning: 'input force you apply (newtons)' },
        ],
      },
    ],
    relatedExperimentSlugs: ['straw-bridge-load-test'],
    wikipediaTitle: 'Simple machine',
    collectionSlugs: ['technology-and-design'],
  },
];
