import type { Topic } from './types';

/**
 * Engineering topic seeds.
 * Parsed at module load by `parseContent` — invalid content fails the build.
 */
export const engineeringTopicSeeds: Topic[] = [
  {
    "slug": "simple-machines",
    "title": "Simple machines",
    "subject": "engineering",
    "summary": "A simple machine is a device that changes the size or direction of a force. Levers, pulleys, inclined planes, wedges, screws, and wheels and axles all trade a smaller force applied over a longer distance for a larger force over a shorter one.",
    "aliases": [
      "simple machines",
      "mechanical advantage"
    ],
    "keyConcepts": [
      {
        "term": "Simple machine",
        "definition": "A device that redirects or multiplies a force with no moving parts of its own, such as a lever or an inclined plane."
      },
      {
        "term": "Mechanical advantage",
        "definition": "How many times a machine multiplies the force you put in; ideal mechanical advantage compares the output force with the input force."
      },
      {
        "term": "Effort",
        "definition": "The force you apply to a machine, also called the input force."
      },
      {
        "term": "Load",
        "definition": "The force the machine works against, also called the output force."
      },
      {
        "term": "Distance trade-off",
        "definition": "To gain force you must move the effort further than the load moves; no machine gives force and distance for free."
      }
    ],
    "equations": [
      {
        "label": "Mechanical advantage of a machine",
        "latex": "\\mathrm{MA} = \\frac{F_{\\mathrm{out}}}{F_{\\mathrm{in}}}",
        "variables": [
          {
            "symbol": "MA",
            "meaning": "mechanical advantage (no units)"
          },
          {
            "symbol": "F_out",
            "meaning": "output force delivered by the machine (newtons)"
          },
          {
            "symbol": "F_in",
            "meaning": "input force you apply (newtons)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "straw-bridge-load-test"
    ],
    "wikipediaTitle": "Simple machine",
    "collectionSlugs": [
      "technology-and-design"
    ],
    "category": "mechanical-engineering",
    "relatedSlugs": [
      "newtons-laws-of-motion",
      "work-energy-theorem"
    ],
    "sources": [
      {
        "label": "Simple machine — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Simple_machine"
      },
      {
        "label": "OpenStax College Physics 2e",
        "url": "https://openstax.org/books/college-physics-2e"
      }
    ]
  }
];
