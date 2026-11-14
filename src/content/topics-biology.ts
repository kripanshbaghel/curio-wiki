import type { Topic } from './types';

/**
 * Biology topic seeds.
 * Parsed at module load by `parseContent` — invalid content fails the build.
 */
export const biologyTopicSeeds: Topic[] = [
  {
    "slug": "photosynthesis",
    "title": "Photosynthesis",
    "subject": "biology",
    "summary": "Photosynthesis is the process plants, algae, and some bacteria use to capture light energy and turn water and carbon dioxide into glucose, releasing oxygen as a by-product.",
    "aliases": [
      "plant photosynthesis"
    ],
    "keyConcepts": [
      {
        "term": "Chlorophyll",
        "definition": "The green pigment in chloroplasts that absorbs light energy, mostly red and blue light."
      },
      {
        "term": "Glucose",
        "definition": "The sugar produced during photosynthesis; it stores chemical energy for the plant."
      }
    ],
    "equations": [
      {
        "label": "Overall photosynthesis equation",
        "latex": "6\\mathrm{CO}_2 + 6\\mathrm{H}_2\\mathrm{O} + \\text{light} \\rightarrow \\mathrm{C}_6\\mathrm{H}_{12}\\mathrm{O}_6 + 6\\mathrm{O}_2",
        "variables": [
          {
            "symbol": "CO₂",
            "meaning": "carbon dioxide taken in from the air"
          },
          {
            "symbol": "H₂O",
            "meaning": "water absorbed by the roots"
          },
          {
            "symbol": "C₆H₁₂O₆",
            "meaning": "glucose produced"
          },
          {
            "symbol": "O₂",
            "meaning": "oxygen released"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "leaf-starch-test"
    ],
    "wikipediaTitle": "Photosynthesis",
    "collectionSlugs": [
      "life-and-reactions",
      "living-systems"
    ],
    "category": "plants",
    "relatedSlugs": [
      "cell-biology",
      "ecology-and-ecosystems"
    ],
    "sources": [
      {
        "label": "Photosynthesis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Photosynthesis"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "cell-biology",
    "title": "Cell biology",
    "subject": "biology",
    "summary": "Cells are the smallest units that carry out the processes of life. Nearly all living things are built from cells, which take in nutrients, release energy, grow, and reproduce, and which group together into tissues, organs, and systems.",
    "aliases": [
      "cells",
      "cell theory"
    ],
    "keyConcepts": [
      {
        "term": "Cell membrane",
        "definition": "The thin, flexible boundary of a cell that controls which substances enter and leave."
      },
      {
        "term": "Nucleus",
        "definition": "The control centre of a animal, plant, and fungal cell, holding most of the cell’s DNA."
      },
      {
        "term": "Cytoplasm",
        "definition": "The jelly-like fluid inside a cell where many of its chemical reactions take place."
      },
      {
        "term": "Organelle",
        "definition": "A specialised structure inside a cell that does a particular job, such as a mitochondrion releasing energy."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [
      "yeast-fermentation-balloon",
      "osmosis-potato-cores"
    ],
    "wikipediaTitle": "Cell (biology)",
    "collectionSlugs": [
      "living-systems"
    ],
    "category": "cells",
    "relatedSlugs": [
      "genetics-basics",
      "photosynthesis"
    ],
    "sources": [
      {
        "label": "Cell (biology) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cell_(biology)"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "human-circulatory-system",
    "title": "Human circulatory system",
    "subject": "biology",
    "summary": "The circulatory system moves blood around the body. The heart pumps blood through arteries to the body’s tissues and organs, and veins carry it back, delivering oxygen and nutrients and carrying away carbon dioxide and other wastes.",
    "aliases": [
      "circulatory system",
      "cardiovascular system",
      "blood circulation"
    ],
    "keyConcepts": [
      {
        "term": "Heart",
        "definition": "A muscular pump that drives blood through the lungs and around the rest of the body."
      },
      {
        "term": "Artery",
        "definition": "A vessel carrying blood away from the heart, usually under high pressure and with thick, elastic walls."
      },
      {
        "term": "Vein",
        "definition": "A vessel returning blood towards the heart, often fitted with valves to stop it flowing backwards."
      },
      {
        "term": "Capillary",
        "definition": "A tiny, thin-walled vessel where oxygen, nutrients, and wastes are exchanged with the body’s cells."
      },
      {
        "term": "Pulse",
        "definition": "The surge of pressure in an artery each time the heart contracts; it rises during exercise."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [
      "pulse-and-exercise-response"
    ],
    "wikipediaTitle": "Circulatory system",
    "collectionSlugs": [
      "living-systems"
    ],
    "category": "anatomy-and-physiology",
    "relatedSlugs": [
      "cell-biology"
    ],
    "sources": [
      {
        "label": "Circulatory system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Circulatory_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "genetics-basics",
    "title": "Genetics basics",
    "subject": "biology",
    "summary": "Genetics is the study of genes, the units of heredity passed from parents to offspring. DNA carries the instructions for building and running an organism, and different versions of a gene — alleles — help explain why traits vary within a species.",
    "aliases": [
      "genetics",
      "heredity"
    ],
    "keyConcepts": [
      {
        "term": "Gene",
        "definition": "A length of DNA that codes for a useful product, such as a protein, and influences a particular trait."
      },
      {
        "term": "DNA",
        "definition": "The molecule that stores genetic information in a sequence of four chemical bases: A, T, C, and G."
      },
      {
        "term": "Chromosome",
        "definition": "A thread-like structure of DNA and protein found in the nucleus; humans typically have 46 chromosomes."
      },
      {
        "term": "Allele",
        "definition": "One of the alternative versions of a gene; an individual may inherit the same allele from both parents or different ones."
      },
      {
        "term": "Dominant and recessive",
        "definition": "A dominant allele shows its trait when present in one copy, while a recessive allele shows only when two copies are inherited."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "wikipediaTitle": "Genetics",
    "collectionSlugs": [
      "living-systems"
    ],
    "category": "genetics",
    "relatedSlugs": [
      "cell-biology",
      "ecology-and-ecosystems"
    ],
    "sources": [
      {
        "label": "Genetics — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Genetics"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "ecology-and-ecosystems",
    "title": "Ecology and ecosystems",
    "subject": "biology",
    "summary": "Ecology is the study of how organisms interact with one another and with their surroundings. An ecosystem combines a living community with the non-living air, water, sunlight, and rock around it, joined by constant flows of energy and matter.",
    "aliases": [
      "ecology",
      "ecosystems",
      "food webs"
    ],
    "keyConcepts": [
      {
        "term": "Ecosystem",
        "definition": "A community of living organisms together with the non-living parts of their environment, interacting as a system."
      },
      {
        "term": "Habitat",
        "definition": "The place where an organism naturally lives, providing the food, water, and shelter it needs."
      },
      {
        "term": "Producer",
        "definition": "An organism, such as a green plant, that makes its own food from sunlight or chemicals and starts most food chains."
      },
      {
        "term": "Consumer",
        "definition": "An organism that obtains energy by eating other organisms; herbivores eat plants and carnivores eat animals."
      },
      {
        "term": "Food web",
        "definition": "A network of interconnected food chains showing how energy and matter pass between organisms in a habitat."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "wikipediaTitle": "Ecology",
    "collectionSlugs": [
      "living-systems"
    ],
    "category": "ecology",
    "relatedSlugs": [
      "photosynthesis",
      "genetics-basics"
    ],
    "sources": [
      {
        "label": "Ecology — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ecology"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  }
];
