import type { Topic } from './types';

/**
 * Technology topic seeds.
 * Parsed at module load by `parseContent` — invalid content fails the build.
 */
export const technologyTopicSeeds: Topic[] = [
  {
    "slug": "computer-hardware-basics",
    "title": "Computer hardware basics",
    "subject": "technology",
    "summary": "Computer hardware is the physical equipment of a computer — the parts you can touch. A processor executes instructions, memory holds data while it is in use, and storage keeps it for the long term, all connected so information can move between them.",
    "aliases": [
      "computer components",
      "hardware"
    ],
    "keyConcepts": [
      {
        "term": "Processor (CPU)",
        "definition": "The chip that fetches, decodes, and executes instructions; its speed is often measured in gigahertz."
      },
      {
        "term": "Memory (RAM)",
        "definition": "Fast, temporary storage that holds programmes and data currently in use; its contents are lost when power is switched off."
      },
      {
        "term": "Storage drive",
        "definition": "A device such as a solid-state drive or hard disk that keeps files and programmes even when the computer is off."
      },
      {
        "term": "Input and output devices",
        "definition": "Hardware such as a keyboard and mouse that send data into the computer, and a screen or printer that presents results."
      },
      {
        "term": "Bus",
        "definition": "A set of electrical pathways that carries data and instructions between the processor, memory, and storage."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "wikipediaTitle": "Computer hardware",
    "collectionSlugs": [
      "technology-and-design"
    ],
    "category": "computer-hardware",
    "relatedSlugs": [
      "programming-algorithms",
      "electric-circuits"
    ],
    "sources": [
      {
        "label": "Computer hardware — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computer_hardware"
      },
      {
        "label": "MIT OpenCourseWare 6.004 — Computation Structures",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      }
    ]
  },
  {
    "slug": "programming-algorithms",
    "title": "Programming and algorithms",
    "subject": "technology",
    "summary": "An algorithm is a finite, step-by-step recipe for solving a problem or completing a task. Programs are algorithms written in a language a computer can run, and studying an algorithm’s efficiency reveals how its running time grows as the input gets larger.",
    "aliases": [
      "algorithms",
      "computational procedure"
    ],
    "keyConcepts": [
      {
        "term": "Algorithm",
        "definition": "A finite set of unambiguous instructions that transforms inputs into outputs, finishing after a fixed number of steps."
      },
      {
        "term": "Pseudocode",
        "definition": "A plain-language description of an algorithm’s steps, used to plan a program before writing real code."
      },
      {
        "term": "Sequence, selection, and iteration",
        "definition": "The three building blocks of programs: doing steps in order, choosing between branches, and repeating steps in loops."
      },
      {
        "term": "Efficiency",
        "definition": "How the running time or memory needs of an algorithm grow with the size of the input, often written using big O notation."
      },
      {
        "term": "Decomposition",
        "definition": "Breaking a large problem into smaller, manageable parts that can be solved independently."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "wikipediaTitle": "Algorithm",
    "collectionSlugs": [
      "technology-and-design"
    ],
    "category": "algorithms",
    "relatedSlugs": [
      "computer-hardware-basics"
    ],
    "sources": [
      {
        "label": "Algorithm — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Algorithm"
      },
      {
        "label": "Khan Academy — Algorithms",
        "url": "https://www.khanacademy.org/computing/computer-science/algorithms"
      }
    ]
  }
];
