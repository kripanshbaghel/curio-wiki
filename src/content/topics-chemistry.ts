import type { Topic } from './types';

/**
 * Chemistry topic seeds.
 * Parsed at module load by `parseContent` — invalid content fails the build.
 */
export const chemistryTopicSeeds: Topic[] = [
  {
    "slug": "acid-base-reaction",
    "title": "Acid–base reaction",
    "subject": "chemistry",
    "summary": "Acid–base reactions transfer protons between substances. When an acid meets a base they neutralize each other; if a carbonate is present the reaction also releases carbon dioxide gas.",
    "aliases": [
      "neutralization",
      "vinegar and baking soda"
    ],
    "keyConcepts": [
      {
        "term": "Acid",
        "definition": "A substance that donates protons (H⁺) in solution, turning indicators like litmus red."
      },
      {
        "term": "Base",
        "definition": "A substance that accepts protons (or produces OH⁻ in water), turning indicators like litmus blue."
      },
      {
        "term": "Neutralization",
        "definition": "The reaction of an acid with a base to form water and a salt."
      }
    ],
    "equations": [
      {
        "label": "Vinegar (acetic acid) and baking soda (sodium hydrogencarbonate)",
        "latex": "\\mathrm{CH}_3\\mathrm{COOH} + \\mathrm{NaHCO}_3 \\rightarrow \\mathrm{CH}_3\\mathrm{COONa} + \\mathrm{H}_2\\mathrm{O} + \\mathrm{CO}_2",
        "variables": [
          {
            "symbol": "CH₃COOH",
            "meaning": "acetic acid (in vinegar)"
          },
          {
            "symbol": "NaHCO₃",
            "meaning": "sodium hydrogencarbonate (baking soda)"
          },
          {
            "symbol": "CO₂",
            "meaning": "carbon dioxide gas (the bubbles)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "vinegar-volcano"
    ],
    "wikipediaTitle": "Acid–base reaction",
    "collectionSlugs": [
      "life-and-reactions",
      "matter-and-chemistry"
    ],
    "category": "acids-and-bases",
    "relatedSlugs": [
      "chemical-bonding",
      "states-of-matter"
    ],
    "sources": [
      {
        "label": "Acid–base reaction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Acid%E2%80%93base_reaction"
      },
      {
        "label": "Chemistry LibreTexts — Acid–Base Chemistry",
        "url": "https://chem.libretexts.org/"
      }
    ]
  },
  {
    "slug": "atomic-structure",
    "title": "Atomic structure",
    "subject": "chemistry",
    "summary": "Atoms are the building blocks of elements: tiny nuclei of protons and neutrons surrounded by clouds of electrons. The arrangement of those electrons determines an element’s chemistry and how it bonds to others.",
    "aliases": [
      "atom model",
      "subatomic particles"
    ],
    "keyConcepts": [
      {
        "term": "Nucleus",
        "definition": "The dense centre of an atom, containing protons and neutrons; it holds almost all of the atom’s mass."
      },
      {
        "term": "Proton",
        "definition": "A positively charged particle in the nucleus; the number of protons (the atomic number) defines the element."
      },
      {
        "term": "Electron",
        "definition": "A negatively charged particle found in energy levels around the nucleus; its arrangement governs bonding."
      },
      {
        "term": "Isotope",
        "definition": "Atoms of the same element with different numbers of neutrons, giving different masses but identical chemistry."
      }
    ],
    "equations": [
      {
        "label": "Photon energy",
        "latex": "E = hf",
        "variables": [
          {
            "symbol": "E",
            "meaning": "energy of the photon (joules)"
          },
          {
            "symbol": "h",
            "meaning": "Planck’s constant (≈ 6.626 × 10⁻³⁴ J s)"
          },
          {
            "symbol": "f",
            "meaning": "frequency of the light (hertz)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "balloon-static-electricity"
    ],
    "wikipediaTitle": "Atom",
    "collectionSlugs": [
      "matter-and-chemistry"
    ],
    "category": "atomic-structure",
    "relatedSlugs": [
      "chemical-bonding",
      "states-of-matter"
    ],
    "sources": [
      {
        "label": "Atom — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Atom"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "chemical-bonding",
    "title": "Chemical bonding",
    "subject": "chemistry",
    "summary": "Chemical bonds hold atoms together in molecules and crystals. Ionic bonds form when electrons transfer between atoms, while covalent and metallic bonds arise from shared or delocalised electrons, giving materials very different properties.",
    "aliases": [
      "ionic bond",
      "covalent bond"
    ],
    "keyConcepts": [
      {
        "term": "Ionic bond",
        "definition": "The attraction between oppositely charged ions that forms when electrons transfer from one atom to another."
      },
      {
        "term": "Covalent bond",
        "definition": "A bond in which two atoms share a pair of electrons, typically between non-metals."
      },
      {
        "term": "Metallic bond",
        "definition": "The attraction between positive metal ions and a sea of delocalised electrons, which explains metals’ conductivity."
      },
      {
        "term": "Valence electron",
        "definition": "An electron in the outer shell of an atom, involved in forming chemical bonds with other atoms."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "wikipediaTitle": "Chemical bond",
    "collectionSlugs": [
      "matter-and-chemistry"
    ],
    "category": "chemical-bonding",
    "relatedSlugs": [
      "atomic-structure",
      "states-of-matter",
      "acid-base-reaction"
    ],
    "sources": [
      {
        "label": "Chemical bond — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chemical_bond"
      },
      {
        "label": "Chemistry LibreTexts — Chemical Bonding",
        "url": "https://chem.libretexts.org/"
      }
    ]
  },
  {
    "slug": "states-of-matter",
    "title": "States of matter",
    "subject": "chemistry",
    "summary": "Matter usually exists as a solid, liquid, or gas, and heating or cooling can change one state into another. The ideal gas law links a gas’s pressure, volume, and temperature to the amount of substance present.",
    "aliases": [
      "phases of matter",
      "gas laws"
    ],
    "keyConcepts": [
      {
        "term": "Solid",
        "definition": "A state with a fixed shape and volume; particles vibrate in place in a regular arrangement."
      },
      {
        "term": "Liquid",
        "definition": "A state with a fixed volume but no fixed shape; particles slide past one another and take the container’s form."
      },
      {
        "term": "Gas",
        "definition": "A state with no fixed shape or volume; particles move freely and expand to fill whatever container they are in."
      },
      {
        "term": "Melting and boiling points",
        "definition": "The temperatures at which a substance changes from solid to liquid and from liquid to gas at standard pressure."
      }
    ],
    "equations": [
      {
        "label": "Ideal gas law",
        "latex": "PV = nRT",
        "variables": [
          {
            "symbol": "P",
            "meaning": "pressure of the gas (pascals)"
          },
          {
            "symbol": "V",
            "meaning": "volume of the gas (cubic metres)"
          },
          {
            "symbol": "n",
            "meaning": "amount of substance (moles)"
          },
          {
            "symbol": "R",
            "meaning": "ideal gas constant (≈ 8.314 J mol⁻¹ K⁻¹)"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature (kelvin)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [
      "density-column-liquids",
      "growing-salt-crystals"
    ],
    "wikipediaTitle": "State of matter",
    "collectionSlugs": [
      "matter-and-chemistry"
    ],
    "category": "thermochemistry",
    "relatedSlugs": [
      "atomic-structure",
      "chemical-bonding"
    ],
    "sources": [
      {
        "label": "State of matter — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/State_of_matter"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  }
];
