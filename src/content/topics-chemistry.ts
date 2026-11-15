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
    "summary": "Acid–base reactions transfer a proton (H⁺) from an acid to a base, producing the acid’s conjugate base and the base’s conjugate acid. The strength of an acid is measured by how far this proton transfer proceeds in water.",
    "aliases": [
      "vinegar and baking soda"
    ],
    "keyConcepts": [
      {
        "term": "Brønsted–Lowry acid and base",
        "definition": "An acid donates a proton and a base accepts one. Every acid has a conjugate base left after it donates, and every base a conjugate acid after it accepts."
      },
      {
        "term": "Conjugate acid–base pair",
        "definition": "Two species that differ by one proton, such as CH₃COOH and CH₃COO⁻. A strong acid has a weak conjugate base, and vice versa."
      },
      {
        "term": "Amphiprotic species",
        "definition": "A substance that can both donate and accept a proton — water is the common example, acting as an acid with ammonia and as a base with hydrogen chloride."
      },
      {
        "term": "Strong versus weak",
        "definition": "A strong acid such as HCl transfers its proton almost completely to water, while a weak acid such as acetic acid reaches an equilibrium with most molecules undissociated."
      }
    ],
    "equations": [
      {
        "label": "Acetic acid donating a proton to water",
        "latex": "\\mathrm{CH_3COOH} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{CH_3COO^-} + \\mathrm{H_3O^+}",
        "variables": [
          {
            "symbol": "CH₃COOH",
            "meaning": "acetic acid (proton donor)"
          },
          {
            "symbol": "CH₃COO⁻",
            "meaning": "acetate, its conjugate base"
          },
          {
            "symbol": "H₃O⁺",
            "meaning": "hydronium ion, the conjugate acid of water"
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
      "states-of-matter",
      "neutralisation-reactions",
      "strong-and-weak-acids-and-bases",
      "ph-and-poh-scales"
    ],
    "sources": [
      {
        "label": "Acid–base reaction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Acid%E2%80%93base_reaction"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
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
        "label": "Photon energy emitted in an electron transition",
        "latex": "\\Delta E = hf",
        "variables": [
          {
            "symbol": "ΔE",
            "meaning": "energy difference between the two levels (J)"
          },
          {
            "symbol": "h",
            "meaning": "Planck’s constant (≈ 6.626 × 10⁻³⁴ J s)"
          },
          {
            "symbol": "f",
            "meaning": "frequency of the emitted photon (Hz)"
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
      "states-of-matter",
      "atomic-emission-spectra",
      "photoelectric-effect"
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
    "summary": "Chemical bonds hold atoms together in molecules and crystals. Ionic, covalent, and metallic bonding differ in how electrons are transferred, shared, or delocalised, which explains why salts, molecular substances, and metals behave so differently.",
    "aliases": [
      "bonding",
      "types of chemical bond"
    ],
    "keyConcepts": [
      {
        "term": "Ionic bonding",
        "definition": "Electron transfer creates oppositely charged ions held in a lattice; the result is brittle, high-melting, and conducts only when molten or dissolved."
      },
      {
        "term": "Covalent bonding",
        "definition": "Atoms share electron pairs, forming discrete molecules or giant covalent networks with strong directional bonds and little or no conductivity."
      },
      {
        "term": "Metallic bonding",
        "definition": "Positive ions sit in a sea of delocalised electrons, which explains conductivity, malleability, and lustre."
      },
      {
        "term": "Bonding continuum",
        "definition": "Bonds range from non-polar covalent through polar covalent to ionic as the electronegativity difference grows; there is no sharp boundary between the categories."
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
      "ionic-bonding",
      "covalent-bonding",
      "metallic-bonding"
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
    "summary": "Matter usually exists as a solid, liquid, or gas, and heating or cooling changes one state into another at a melting or boiling point. Phase changes absorb or release a fixed latent heat, and the ideal gas law links a gas’s pressure, volume, and temperature to the amount of substance present.",
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
      },
      {
        "term": "Enthalpy of phase change",
        "definition": "Melting absorbs the enthalpy of fusion and vaporising absorbs the (larger) enthalpy of vaporisation without changing temperature; condensing and freezing release the same amounts. For water, ΔH_vap is about 40.7 kJ mol⁻¹ at 100 °C."
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
      },
      {
        "label": "Heat absorbed in a phase change",
        "latex": "q = n\\Delta H_{\\text{phase}}",
        "variables": [
          {
            "symbol": "q",
            "meaning": "heat absorbed (J)"
          },
          {
            "symbol": "n",
            "meaning": "amount of substance (mol)"
          },
          {
            "symbol": "ΔH_phase",
            "meaning": "enthalpy of fusion or vaporisation (J mol⁻¹)"
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
      "chemical-bonding",
      "enthalpy-and-enthalpy-changes",
      "calorimetry",
      "latent-heat-and-phase-changes"
    ],
    "sources": [
      {
        "label": "State of matter — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/State_of_matter"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      },
      {
        "label": "Ideal gas law — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ideal_gas_law"
      }
    ]
  },
  {
    "slug": "atomic-nucleus",
    "title": "Atomic nucleus",
    "subject": "chemistry",
    "category": "atomic-structure",
    "summary": "The nucleus is the dense central region of an atom, containing positively charged protons and neutral neutrons bound by the strong nuclear force. Its proton count fixes the element's identity, while the total count of protons and neutrons sets the isotope.",
    "aliases": [
      "nuclear core"
    ],
    "keyConcepts": [
      {
        "term": "Proton",
        "definition": "A positively charged nucleon with relative charge +1 and mass number 1; the number of protons is the atomic number Z and defines the element."
      },
      {
        "term": "Neutron",
        "definition": "An electrically neutral nucleon with mass number 1. Changing the neutron count produces a different isotope of the same element."
      },
      {
        "term": "Strong nuclear force",
        "definition": "The short-range attractive force between nucleons that overcomes proton–proton electrostatic repulsion and holds the nucleus together."
      },
      {
        "term": "Nuclear radius",
        "definition": "The radius of a nucleus scales roughly as the cube root of its mass number, R ≈ r₀A^(1/3) with r₀ about 1.2 fm, so nuclear density is nearly constant."
      }
    ],
    "equations": [
      {
        "label": "Nuclear symbol notation",
        "latex": "^{A}_{Z}\\mathrm{X}",
        "variables": [
          {
            "symbol": "A",
            "meaning": "mass number (protons + neutrons)"
          },
          {
            "symbol": "Z",
            "meaning": "atomic number (protons)"
          },
          {
            "symbol": "X",
            "meaning": "chemical symbol of the element"
          }
        ]
      },
      {
        "label": "Nuclear radius from mass number",
        "latex": "R \\approx r_0 A^{1/3}",
        "variables": [
          {
            "symbol": "R",
            "meaning": "nuclear radius (femtometres)"
          },
          {
            "symbol": "r₀",
            "meaning": "constant ≈ 1.2 fm"
          },
          {
            "symbol": "A",
            "meaning": "mass number"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "isotopes-and-mass-number",
      "history-of-atomic-models",
      "atomic-structure",
      "ionisation-energy"
    ],
    "wikipediaTitle": "Atomic nucleus",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Atomic nucleus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Atomic_nucleus"
      },
      {
        "label": "OpenStax College Physics 2e — nuclear physics",
        "url": "https://openstax.org/books/college-physics-2e"
      }
    ]
  },
  {
    "slug": "electron-configuration-and-orbitals",
    "title": "Electron configuration and orbitals",
    "subject": "chemistry",
    "category": "atomic-structure",
    "summary": "Electrons occupy atomic orbitals in order of increasing energy, following the Aufbau principle, the Pauli exclusion principle and Hund's rule. The resulting configuration, often written 1s² 2s² 2p⁶, explains an element's place in the periodic table and its bonding.",
    "aliases": [
      "electronic configuration",
      "electron arrangement",
      "orbital diagram"
    ],
    "keyConcepts": [
      {
        "term": "Aufbau principle",
        "definition": "Electrons fill the lowest-energy orbital available first, giving configurations such as 1s² 2s² 2p⁶ 3s¹ for sodium."
      },
      {
        "term": "Pauli exclusion principle",
        "definition": "No two electrons in one atom can share all four quantum numbers, so an orbital holds at most two electrons with opposite spins."
      },
      {
        "term": "Hund's rule",
        "definition": "Within a set of degenerate orbitals, electrons occupy separate orbitals with parallel spins before any pairing occurs."
      }
    ],
    "equations": [
      {
        "label": "Energy of the nth level in hydrogen (Z = 1)",
        "latex": "E_n = -\\frac{13.6\\ \\mathrm{eV}}{n^2}",
        "variables": [
          {
            "symbol": "Eₙ",
            "meaning": "energy of shell n (electronvolts)"
          },
          {
            "symbol": "n",
            "meaning": "principal quantum number (1, 2, 3, …)"
          }
        ]
      },
      {
        "label": "Maximum number of electrons in shell n",
        "latex": "2n^2",
        "variables": [
          {
            "symbol": "n",
            "meaning": "principal quantum number"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "quantum-numbers-and-atomic-orbitals",
      "ionisation-energy",
      "groups-and-periods",
      "atomic-structure"
    ],
    "wikipediaTitle": "Electron configuration",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Electron configuration — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electron_configuration"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "ionisation-energy",
    "title": "Ionisation energy",
    "subject": "chemistry",
    "category": "atomic-structure",
    "summary": "First ionisation energy is the minimum energy needed to remove the most loosely bound electron from a gaseous atom, usually quoted in kJ per mole of atoms. It generally rises across a period as nuclear charge grows and falls down a group as the outer electron sits farther from the nucleus.",
    "aliases": [
      "ionization energy",
      "first ionisation energy"
    ],
    "keyConcepts": [
      {
        "term": "First ionisation energy",
        "definition": "The energy required to remove the most loosely bound electron from a gaseous atom; values are quoted per mole of atoms in kJ mol⁻¹."
      },
      {
        "term": "Successive ionisation energies",
        "definition": "Each further electron is harder to remove because the remaining ion is more positively charged; large jumps reveal the shell structure."
      },
      {
        "term": "Shielding",
        "definition": "Inner electrons screen outer electrons from the full nuclear charge, reducing the effective attraction and lowering ionisation energy."
      },
      {
        "term": "Trend across a period",
        "definition": "Nuclear charge increases while electrons enter the same shell, so the outer electron is held more tightly and ionisation energy rises."
      }
    ],
    "equations": [
      {
        "label": "First ionisation of a gaseous atom",
        "latex": "\\mathrm{X}(g) \\rightarrow \\mathrm{X}^{+}(g) + e^{-}",
        "variables": [
          {
            "symbol": "X(g)",
            "meaning": "gaseous atom of element X"
          },
          {
            "symbol": "X⁺(g)",
            "meaning": "gaseous singly positive ion"
          },
          {
            "symbol": "e⁻",
            "meaning": "removed electron"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electron-configuration-and-orbitals",
      "periodic-trends",
      "atomic-nucleus",
      "atomic-structure"
    ],
    "wikipediaTitle": "Ionization energy",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Ionization energy — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ionization_energy"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "isotopes-and-mass-number",
    "title": "Isotopes and mass number",
    "subject": "chemistry",
    "category": "atomic-structure",
    "summary": "Isotopes are atoms of the same element with different numbers of neutrons, so they share chemical behaviour but differ in mass. Mass number counts protons plus neutrons, and the abundance-weighted average of isotope masses gives relative atomic mass.",
    "aliases": [
      "isotope",
      "nuclide notation"
    ],
    "keyConcepts": [
      {
        "term": "Mass number",
        "definition": "A = Z + N, the total number of protons and neutrons in a nucleus; it is written as a superscript before the element symbol."
      },
      {
        "term": "Isotope",
        "definition": "A nuclide with the same atomic number but a different neutron number, such as carbon-12 and carbon-14."
      },
      {
        "term": "Relative atomic mass",
        "definition": "The abundance-weighted average of isotope masses on the carbon-12 scale; because isotope masses are not integers and Ar is their abundance-weighted average, it is not a whole number."
      },
      {
        "term": "Radioisotope",
        "definition": "An unstable isotope that decays by emitting radiation at a characteristic half-life, such as uranium-235 or iodine-131."
      }
    ],
    "equations": [
      {
        "label": "Mass number from protons and neutrons",
        "latex": "A = Z + N",
        "variables": [
          {
            "symbol": "A",
            "meaning": "mass number"
          },
          {
            "symbol": "Z",
            "meaning": "atomic number (protons)"
          },
          {
            "symbol": "N",
            "meaning": "number of neutrons"
          }
        ]
      },
      {
        "label": "Abundance-weighted relative atomic mass",
        "latex": "A_r = \\sum_i x_i A_{r,i}",
        "variables": [
          {
            "symbol": "Aᵣ",
            "meaning": "relative atomic mass"
          },
          {
            "symbol": "xᵢ",
            "meaning": "fractional abundance of isotope i"
          },
          {
            "symbol": "Aᵣ,ᵢ",
            "meaning": "relative mass of isotope i"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "atomic-nucleus",
      "periodic-trends",
      "atomic-structure"
    ],
    "wikipediaTitle": "Isotope",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Isotope — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Isotope"
      },
      {
        "label": "PubChem",
        "url": "https://pubchem.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "slug": "quantum-numbers-and-atomic-orbitals",
    "title": "Quantum numbers and atomic orbitals",
    "subject": "chemistry",
    "category": "atomic-structure",
    "summary": "Four quantum numbers label each electron in an atom: n sets the shell and energy, ℓ the orbital shape, mℓ the orientation and ms the spin. Their allowed combinations reproduce the shell, subshell and orbital structure of the periodic table.",
    "aliases": [
      "quantum number",
      "orbital quantum numbers"
    ],
    "keyConcepts": [
      {
        "term": "Principal quantum number n",
        "definition": "A positive integer that fixes the electron shell and, in hydrogen, its energy; larger n means a larger, higher-energy orbital."
      },
      {
        "term": "Angular momentum quantum number ℓ",
        "definition": "An integer from 0 to n−1 that determines orbital shape: ℓ = 0, 1, 2 and 3 correspond to s, p, d and f orbitals."
      },
      {
        "term": "Magnetic quantum number mℓ",
        "definition": "An integer from −ℓ to +ℓ giving an orbital's orientation; a subshell with quantum number ℓ contains 2ℓ + 1 orbitals."
      },
      {
        "term": "Spin quantum number ms",
        "definition": "Takes the values +½ or −½ and describes the electron's intrinsic spin orientation, allowing two electrons per orbital."
      }
    ],
    "equations": [
      {
        "label": "Allowed values of the angular momentum quantum number",
        "latex": "\\ell = 0, 1, 2, \\ldots, n-1",
        "variables": [
          {
            "symbol": "ℓ",
            "meaning": "orbital shape quantum number"
          },
          {
            "symbol": "n",
            "meaning": "principal quantum number"
          }
        ]
      },
      {
        "label": "Allowed values of the magnetic quantum number",
        "latex": "m_\\ell = -\\ell, \\ldots, 0, \\ldots, +\\ell",
        "variables": [
          {
            "symbol": "mℓ",
            "meaning": "orbital orientation quantum number"
          },
          {
            "symbol": "ℓ",
            "meaning": "angular momentum quantum number"
          }
        ]
      },
      {
        "label": "Allowed values of the spin quantum number",
        "latex": "m_s = \\pm\\tfrac{1}{2}",
        "variables": [
          {
            "symbol": "ms",
            "meaning": "spin quantum number"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electron-configuration-and-orbitals",
      "atomic-structure",
      "ionisation-energy"
    ],
    "wikipediaTitle": "Quantum number",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Quantum number — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Quantum_number"
      },
      {
        "label": "OpenStax Chemistry: Atoms First 2e",
        "url": "https://openstax.org/books/chemistry-atoms-first-2e"
      }
    ]
  },
  {
    "slug": "history-of-atomic-models",
    "title": "History of atomic models",
    "subject": "chemistry",
    "category": "atomic-structure",
    "summary": "Atomic models changed as experiments exposed their limits: Thomson's plum-pudding model gave way to Rutherford's nuclear atom after alpha particles scattered from gold foil, and Bohr's quantised orbits then explained hydrogen's line spectrum.",
    "aliases": [
      "plum pudding model",
      "Rutherford model",
      "Bohr model"
    ],
    "keyConcepts": [
      {
        "term": "Plum pudding model",
        "definition": "J. J. Thomson's 1904 model pictured electrons embedded in a sphere of diffuse positive charge, following his discovery of the electron."
      },
      {
        "term": "Rutherford scattering",
        "definition": "In 1911 Rutherford explained alpha particles deflected by gold foil as evidence for a tiny, dense, positively charged nucleus."
      },
      {
        "term": "Bohr model",
        "definition": "Niels Bohr's 1913 model placed electrons in quantised circular orbits, explaining the discrete wavelengths of the hydrogen spectrum."
      },
      {
        "term": "Quantum mechanical model",
        "definition": "From 1925 onwards, orbitals and probability densities replaced definite orbits, matching the observed wave nature of electrons."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "atomic-nucleus",
      "electron-configuration-and-orbitals",
      "atomic-structure"
    ],
    "wikipediaTitle": "History of atomic theory",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "History of atomic theory — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/History_of_atomic_theory"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "groups-and-periods",
    "title": "Groups and periods of the periodic table",
    "subject": "chemistry",
    "category": "periodic-table",
    "summary": "The periodic table arranges elements by increasing atomic number in rows called periods and columns called groups. Elements in one group share a valence-electron count and therefore similar chemistry, while a period corresponds to filling one electron shell.",
    "aliases": [
      "periodic table groups",
      "periodic table periods"
    ],
    "keyConcepts": [
      {
        "term": "Group",
        "definition": "A vertical column of the periodic table; main-group elements in the same group have the same number of valence electrons."
      },
      {
        "term": "Period",
        "definition": "A horizontal row; every element in the row has the same highest occupied principal quantum number, which is the period number."
      },
      {
        "term": "Block",
        "definition": "A region named for the subshell being filled — s, p, d or f — grouping elements by their outer electron configuration."
      },
      {
        "term": "Periodic law",
        "definition": "When elements are ordered by atomic number, their properties repeat periodically because valence configurations repeat."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "periodic-trends",
      "electron-configuration-and-orbitals",
      "alkali-metals",
      "halogens"
    ],
    "wikipediaTitle": "Periodic table",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Periodic table — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Periodic_table"
      },
      {
        "label": "Royal Society of Chemistry Periodic Table",
        "url": "https://www.rsc.org/periodic-table"
      }
    ]
  },
  {
    "slug": "periodic-trends",
    "title": "Periodic trends",
    "subject": "chemistry",
    "category": "periodic-table",
    "summary": "Atomic radius decreases across a period as growing effective nuclear charge pulls electrons inward, and increases down a group as new shells are added. Electronegativity follows the opposite pattern and peaks at fluorine in the top-right corner.",
    "aliases": [
      "trends across the periodic table",
      "atomic radius trend",
      "electronegativity trend"
    ],
    "keyConcepts": [
      {
        "term": "Atomic radius",
        "definition": "Half the distance between the nuclei of bonded identical atoms; it shrinks left to right across a period and grows down a group."
      },
      {
        "term": "Effective nuclear charge",
        "definition": "The net positive charge felt by a valence electron after inner electrons screen the nucleus; it increases across a period."
      },
      {
        "term": "Electronegativity",
        "definition": "An atom's tendency to attract shared electrons in a bond; it increases across a period and decreases down a group."
      },
      {
        "term": "Ionic radius",
        "definition": "Cations are smaller than their parent atoms and anions larger, because the electron count changes while nuclear charge does not."
      }
    ],
    "equations": [
      {
        "label": "Effective nuclear charge",
        "latex": "Z_\\mathrm{eff} = Z - S",
        "variables": [
          {
            "symbol": "Z_eff",
            "meaning": "effective nuclear charge felt by an electron"
          },
          {
            "symbol": "Z",
            "meaning": "actual nuclear charge (atomic number)"
          },
          {
            "symbol": "S",
            "meaning": "shielding constant from inner electrons"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "groups-and-periods",
      "electronegativity-and-bond-polarity",
      "ionisation-energy",
      "alkali-metals"
    ],
    "wikipediaTitle": "Periodic trends",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Periodic trends — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Periodic_trends"
      },
      {
        "label": "Royal Society of Chemistry Periodic Table",
        "url": "https://www.rsc.org/periodic-table"
      }
    ]
  },
  {
    "slug": "alkali-metals",
    "title": "Alkali metals",
    "subject": "chemistry",
    "category": "periodic-table",
    "summary": "The alkali metals — lithium, sodium, potassium, rubidium, caesium and francium — are soft, low-density group 1 elements with a single valence s electron. They lose that electron readily, making them strong reducing agents that react vigorously with water.",
    "aliases": [
      "group 1 elements",
      "lithium group"
    ],
    "keyConcepts": [
      {
        "term": "Group 1 configuration",
        "definition": "Each alkali metal has one electron in its outermost s orbital (ns¹) and loses it to form a 1+ ion with a noble-gas configuration."
      },
      {
        "term": "Reactivity trend",
        "definition": "Reactivity increases down the group because the valence electron lies farther from the nucleus and is more shielded."
      },
      {
        "term": "Reaction with water",
        "definition": "Alkali metals produce a metal hydroxide and hydrogen gas; the exothermic reaction becomes more violent down the group."
      },
      {
        "term": "Flame colours",
        "definition": "Lithium, sodium and potassium give characteristic crimson, yellow and lilac flames when their compounds are heated in a flame test."
      }
    ],
    "equations": [
      {
        "label": "Sodium reacting with water",
        "latex": "2\\mathrm{Na}(s) + 2\\mathrm{H_2O}(l) \\rightarrow 2\\mathrm{NaOH}(aq) + \\mathrm{H_2}(g)",
        "variables": [
          {
            "symbol": "Na",
            "meaning": "sodium metal"
          },
          {
            "symbol": "H₂O",
            "meaning": "water"
          },
          {
            "symbol": "NaOH",
            "meaning": "sodium hydroxide (alkali)"
          },
          {
            "symbol": "H₂",
            "meaning": "hydrogen gas"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "groups-and-periods",
      "periodic-trends",
      "ionic-bonding",
      "halogens"
    ],
    "wikipediaTitle": "Alkali metal",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Alkali metal — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Alkali_metal"
      },
      {
        "label": "Royal Society of Chemistry Periodic Table",
        "url": "https://www.rsc.org/periodic-table"
      }
    ]
  },
  {
    "slug": "halogens",
    "title": "Halogens",
    "subject": "chemistry",
    "category": "periodic-table",
    "summary": "The halogens — fluorine, chlorine, bromine, iodine and astatine — are group 17 elements with seven valence electrons, one short of a full octet. They exist as diatomic molecules, gain an electron to form 1− ions, and become less oxidising down the group.",
    "aliases": [
      "group 17 elements",
      "salt-forming elements"
    ],
    "keyConcepts": [
      {
        "term": "Diatomic molecules",
        "definition": "Halogens occur as X₂ molecules joined by a single covalent bond, with colour deepening from pale yellow fluorine to violet iodine."
      },
      {
        "term": "Oxidising strength",
        "definition": "Reactivity decreases down the group, so a halogen higher up displaces a halide lower down from solution."
      },
      {
        "term": "Halide ions",
        "definition": "Gaining one electron completes the octet, giving ions such as Cl⁻ that form ionic salts with metals."
      },
      {
        "term": "Physical state trend",
        "definition": "Melting and boiling points rise down the group as larger, more polarisable molecules experience stronger dispersion forces."
      }
    ],
    "equations": [
      {
        "label": "Chlorine displacing bromide from solution",
        "latex": "\\mathrm{Cl_2}(aq) + 2\\mathrm{NaBr}(aq) \\rightarrow 2\\mathrm{NaCl}(aq) + \\mathrm{Br_2}(aq)",
        "variables": [
          {
            "symbol": "Cl₂",
            "meaning": "dissolved chlorine (oxidising agent)"
          },
          {
            "symbol": "NaBr",
            "meaning": "sodium bromide source of Br⁻"
          },
          {
            "symbol": "Br₂",
            "meaning": "bromine released by oxidation"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "groups-and-periods",
      "ionic-bonding",
      "intermolecular-forces",
      "noble-gases"
    ],
    "wikipediaTitle": "Halogen",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Halogen — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Halogen"
      },
      {
        "label": "PubChem",
        "url": "https://pubchem.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "slug": "noble-gases",
    "title": "Noble gases",
    "subject": "chemistry",
    "category": "periodic-table",
    "summary": "The noble gases — helium, neon, argon, krypton, xenon and radon — have full outer shells: two electrons for helium and eight for the rest. They are exceptionally unreactive, and their low boiling points reflect only weak London dispersion forces between atoms.",
    "aliases": [
      "group 18 elements",
      "inert gases",
      "rare gases"
    ],
    "keyConcepts": [
      {
        "term": "Stable octet",
        "definition": "A filled ns²np⁶ configuration (1s² for helium) gives no energetic gain from gaining or losing electrons, so these atoms rarely bond."
      },
      {
        "term": "Monatomic gases",
        "definition": "Noble gases exist as single atoms rather than molecules, so only London dispersion forces act between their particles."
      },
      {
        "term": "Ionisation energy",
        "definition": "They have the highest ionisation energies in their periods because their valence electrons are held tightly by an effective full shell."
      },
      {
        "term": "Practical uses",
        "definition": "Argon shields welding arcs, helium cools superconducting magnets, and neon fills low-pressure discharge lamps."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "groups-and-periods",
      "intermolecular-forces",
      "halogens",
      "periodic-trends"
    ],
    "wikipediaTitle": "Noble gas",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Noble gas — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Noble_gas"
      },
      {
        "label": "Royal Society of Chemistry Periodic Table",
        "url": "https://www.rsc.org/periodic-table"
      }
    ]
  },
  {
    "slug": "transition-metals",
    "title": "Transition metals",
    "subject": "chemistry",
    "category": "periodic-table",
    "summary": "Transition metals are d-block elements whose atom has an incomplete d subshell, or which forms cations with an incomplete d subshell. They form coloured compounds, act as catalysts, and show variable oxidation states and paramagnetism.",
    "aliases": [
      "d-block elements",
      "transition elements"
    ],
    "keyConcepts": [
      {
        "term": "Variable oxidation states",
        "definition": "Because 4s and 3d electrons have similar energies, transition metals can lose different numbers of electrons, giving ions such as Fe²⁺ and Fe³⁺."
      },
      {
        "term": "Coloured ions",
        "definition": "Partially filled d orbitals split in energy by surrounding ligands absorb visible light, producing characteristic solution colours."
      },
      {
        "term": "Catalytic activity",
        "definition": "Partly filled d orbitals and accessible oxidation states let metals such as iron, nickel and platinum catalyse reactions."
      },
      {
        "term": "Complex ions",
        "definition": "Transition-metal ions bind ligands that donate electron pairs, forming coordination complexes with defined geometry and coordination number."
      }
    ],
    "equations": [
      {
        "label": "Reversible oxidation of iron(II) to iron(III)",
        "latex": "\\mathrm{Fe^{2+}}(aq) \\rightleftharpoons \\mathrm{Fe^{3+}}(aq) + e^{-}",
        "variables": [
          {
            "symbol": "Fe²⁺",
            "meaning": "iron(II) ion"
          },
          {
            "symbol": "Fe³⁺",
            "meaning": "iron(III) ion"
          },
          {
            "symbol": "e⁻",
            "meaning": "electron transferred"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "groups-and-periods",
      "catalysts-and-catalysis",
      "redox-reactions",
      "electron-configuration-and-orbitals"
    ],
    "wikipediaTitle": "Transition metal",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Transition metal — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Transition_metal"
      },
      {
        "label": "Royal Society of Chemistry Periodic Table",
        "url": "https://www.rsc.org/periodic-table"
      }
    ]
  },
  {
    "slug": "ionic-bonding",
    "title": "Ionic bonding",
    "subject": "chemistry",
    "category": "chemical-bonding",
    "summary": "Ionic bonding is the electrostatic attraction between oppositely charged ions formed when electrons transfer from a metal to a non-metal. The ions pack into a lattice held together in all directions, giving high melting points and brittle crystals.",
    "aliases": [
      "electrovalent bond"
    ],
    "keyConcepts": [
      {
        "term": "Electron transfer",
        "definition": "A metal atom with low ionisation energy donates electrons to a non-metal with high electron affinity, creating a cation and an anion."
      },
      {
        "term": "Lattice energy",
        "definition": "The energy released when one mole of an ionic solid forms from its gaseous ions; it measures how strongly the lattice holds together."
      },
      {
        "term": "Electrostatic attraction",
        "definition": "Bond strength follows Coulomb's law, so higher ion charges and smaller ion separations give stronger attractions and higher melting points."
      },
      {
        "term": "Properties",
        "definition": "Ionic solids are hard, brittle and high-melting, and conduct electricity only when molten or dissolved because the ions must be free to move."
      }
    ],
    "equations": [
      {
        "label": "Sodium loses an electron",
        "latex": "\\mathrm{Na}(g) \\rightarrow \\mathrm{Na^{+}}(g) + e^{-}",
        "variables": [
          {
            "symbol": "Na",
            "meaning": "sodium atom"
          },
          {
            "symbol": "Na⁺",
            "meaning": "sodium cation"
          },
          {
            "symbol": "e⁻",
            "meaning": "transferred electron"
          }
        ]
      },
      {
        "label": "Chlorine gains an electron",
        "latex": "\\mathrm{Cl}(g) + e^{-} \\rightarrow \\mathrm{Cl^{-}}(g)",
        "variables": [
          {
            "symbol": "Cl",
            "meaning": "chlorine atom"
          },
          {
            "symbol": "Cl⁻",
            "meaning": "chloride anion"
          }
        ]
      },
      {
        "label": "Overall formation of sodium chloride",
        "latex": "2\\mathrm{Na}(s) + \\mathrm{Cl_2}(g) \\rightarrow 2\\mathrm{NaCl}(s)",
        "variables": [
          {
            "symbol": "NaCl",
            "meaning": "ionic sodium chloride lattice"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "covalent-bonding",
      "metallic-bonding",
      "electronegativity-and-bond-polarity",
      "chemical-bonding"
    ],
    "wikipediaTitle": "Ionic bonding",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Ionic bonding — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ionic_bonding"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "covalent-bonding",
    "title": "Covalent bonding",
    "subject": "chemistry",
    "category": "chemical-bonding",
    "summary": "A covalent bond forms when two atoms share one or more pairs of electrons, usually between non-metals. The shared pair is attracted to both nuclei, lowering the energy of the joined atoms compared with the separate atoms.",
    "aliases": [
      "shared-electron bond",
      "electron-pair bond"
    ],
    "keyConcepts": [
      {
        "term": "Electron-pair bond",
        "definition": "Two atoms each contribute one electron to a shared pair, giving both a more stable electron arrangement than the separate atoms."
      },
      {
        "term": "Bond order",
        "definition": "Sharing one, two or three pairs gives a single, double or triple bond; higher bond order means a shorter and stronger bond."
      },
      {
        "term": "Bond dissociation energy",
        "definition": "The energy needed to break one mole of a particular bond in the gas phase; it measures bond strength."
      },
      {
        "term": "Polar covalent bonds",
        "definition": "Unequal sharing caused by differing electronegativity creates partial charges and a bond dipole."
      }
    ],
    "equations": [
      {
        "label": "Formation of a hydrogen molecule from two atoms",
        "latex": "\\mathrm{H}(g) + \\mathrm{H}(g) \\rightarrow \\mathrm{H_2}(g)",
        "variables": [
          {
            "symbol": "H",
            "meaning": "hydrogen atom with one electron"
          },
          {
            "symbol": "H₂",
            "meaning": "hydrogen molecule with a shared electron pair"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ionic-bonding",
      "electronegativity-and-bond-polarity",
      "lewis-structures",
      "chemical-bonding"
    ],
    "wikipediaTitle": "Covalent bond",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Covalent bond — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Covalent_bond"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "metallic-bonding",
    "title": "Metallic bonding",
    "subject": "chemistry",
    "category": "chemical-bonding",
    "summary": "Metallic bonding is the attraction between a lattice of positive metal ions and a sea of delocalised valence electrons. Mobile electrons explain why metals conduct heat and electricity, and why they are malleable rather than brittle.",
    "aliases": [
      "electron-sea model",
      "metallic bond"
    ],
    "keyConcepts": [
      {
        "term": "Delocalised electrons",
        "definition": "Valence electrons are not tied to one atom but spread across the whole metal lattice, forming a sea of mobile charge."
      },
      {
        "term": "Malleability",
        "definition": "Layers of metal ions can slide over each other without breaking the bonding, because the attraction is non-directional."
      },
      {
        "term": "Conductivity",
        "definition": "Free electrons carry charge through the metal and transfer kinetic energy, giving high electrical and thermal conductivity."
      },
      {
        "term": "Melting point trend",
        "definition": "More delocalised electrons per atom and smaller ions usually mean stronger metallic bonding and higher melting points."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ionic-bonding",
      "covalent-bonding",
      "intermolecular-forces",
      "chemical-bonding"
    ],
    "wikipediaTitle": "Metallic bonding",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Metallic bonding — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Metallic_bonding"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "intermolecular-forces",
    "title": "Intermolecular forces",
    "subject": "chemistry",
    "category": "chemical-bonding",
    "summary": "Intermolecular forces are attractions between molecules, far weaker than covalent bonds but strong enough to set boiling points. They include London dispersion forces, present in all molecules, and dipole–dipole attractions in polar ones.",
    "aliases": [
      "van der Waals forces",
      "intermolecular attraction"
    ],
    "keyConcepts": [
      {
        "term": "London dispersion forces",
        "definition": "Instantaneous dipoles in one molecule induce dipoles in neighbours, producing attractions that grow with electron count and surface area."
      },
      {
        "term": "Dipole–dipole forces",
        "definition": "Permanent dipoles in polar molecules align so that partial positive and partial negative ends attract one another."
      },
      {
        "term": "Polarisability",
        "definition": "Larger, more diffuse electron clouds distort more easily, strengthening dispersion forces and raising boiling points."
      },
      {
        "term": "Effect on boiling point",
        "definition": "More energy is needed to separate molecules with stronger intermolecular forces, so boiling points rise as those forces increase."
      }
    ],
    "equations": [
      {
        "label": "Lennard-Jones potential energy between two molecules",
        "latex": "V(r) = 4\\varepsilon\\left[\\left(\\frac{\\sigma}{r}\\right)^{12} - \\left(\\frac{\\sigma}{r}\\right)^{6}\\right]",
        "variables": [
          {
            "symbol": "V(r)",
            "meaning": "potential energy at separation r"
          },
          {
            "symbol": "ε",
            "meaning": "depth of the potential well"
          },
          {
            "symbol": "σ",
            "meaning": "separation where potential is zero"
          },
          {
            "symbol": "r",
            "meaning": "distance between molecule centres"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "hydrogen-bonding",
      "covalent-bonding",
      "states-of-matter",
      "halogens"
    ],
    "wikipediaTitle": "Intermolecular force",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Intermolecular force — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Intermolecular_force"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "hydrogen-bonding",
    "title": "Hydrogen bonding",
    "subject": "chemistry",
    "category": "chemical-bonding",
    "summary": "Hydrogen bonds form when a hydrogen atom bonded to nitrogen, oxygen or fluorine is attracted to a lone pair on a nearby electronegative atom. They are much stronger than ordinary dipole–dipole forces and explain water's high boiling point and ice's low density.",
    "aliases": [
      "hydrogen bond",
      "H-bond"
    ],
    "keyConcepts": [
      {
        "term": "Donor and acceptor",
        "definition": "The donor is the X–H bond, where X is N, O or F; the acceptor is a lone pair on a nearby N, O or F atom."
      },
      {
        "term": "Strength",
        "definition": "Typically about 10–40 kJ per mole, far weaker than a covalent O–H bond but stronger than ordinary dispersion forces."
      },
      {
        "term": "Water's anomalies",
        "definition": "Hydrogen bonding raises water's boiling point and makes ice less dense than liquid water because the crystal lattice is open."
      },
      {
        "term": "Biological role",
        "definition": "Hydrogen bonds hold DNA base pairs together and stabilise protein secondary structures such as alpha helices."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "intermolecular-forces",
      "covalent-bonding",
      "electronegativity-and-bond-polarity",
      "states-of-matter"
    ],
    "wikipediaTitle": "Hydrogen bond",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Hydrogen bond — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hydrogen_bond"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "electronegativity-and-bond-polarity",
    "title": "Electronegativity and bond polarity",
    "subject": "chemistry",
    "category": "chemical-bonding",
    "summary": "Electronegativity measures how strongly an atom pulls shared electrons in a bond. A large difference between two atoms makes the bond polar, creating partial charges that drive dipole–dipole forces and many reaction mechanisms.",
    "aliases": [
      "bond polarity",
      "polar covalent bond"
    ],
    "keyConcepts": [
      {
        "term": "Electronegativity",
        "definition": "A relative measure of an atom's attraction for bonding electrons; fluorine is the most electronegative element on the Pauling scale."
      },
      {
        "term": "Nonpolar versus polar bonds",
        "definition": "Similar electronegativities give nearly equal sharing, while a difference of roughly 0.4 to 1.7 produces a polar covalent bond."
      },
      {
        "term": "Dipole moment",
        "definition": "A polar bond has a dipole moment equal to the separated charge multiplied by the distance between the charges."
      },
      {
        "term": "Molecular polarity",
        "definition": "A molecule is polar only if its bond dipoles do not cancel by symmetry, as carbon dioxide's opposed dipoles cancel but water's do not."
      }
    ],
    "equations": [
      {
        "label": "Dipole moment of a simple two-charge system",
        "latex": "\\mu = Q\\,r",
        "variables": [
          {
            "symbol": "μ",
            "meaning": "dipole moment (coulomb-metres or debye)"
          },
          {
            "symbol": "Q",
            "meaning": "magnitude of the separated charge"
          },
          {
            "symbol": "r",
            "meaning": "distance between the charges"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "covalent-bonding",
      "intermolecular-forces",
      "hydrogen-bonding",
      "periodic-trends"
    ],
    "wikipediaTitle": "Electronegativity",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Electronegativity — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electronegativity"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "lewis-structures",
    "title": "Lewis structures",
    "subject": "chemistry",
    "category": "chemical-bonding",
    "summary": "A Lewis structure shows valence electrons as dots or lines around atomic symbols, revealing bonding pairs and lone pairs. Structures are built by counting valence electrons, connecting atoms, completing octets and checking formal charges.",
    "aliases": [
      "Lewis dot structures",
      "electron-dot structures",
      "Lewis diagrams"
    ],
    "keyConcepts": [
      {
        "term": "Valence electron count",
        "definition": "The total number of dots equals the sum of valence electrons from all atoms, adjusted for the charge of an ion."
      },
      {
        "term": "Octet rule",
        "definition": "Atoms of the second period tend to surround themselves with eight electrons, although hydrogen is complete with two."
      },
      {
        "term": "Formal charge",
        "definition": "Formal charge equals valence electrons minus lone-pair electrons minus half the bonding electrons; the best structure minimises it."
      },
      {
        "term": "Resonance",
        "definition": "When several valid structures exist, the real molecule is a resonance hybrid of them, as in ozone and the nitrate ion."
      }
    ],
    "equations": [
      {
        "label": "Formal charge of an atom in a Lewis structure",
        "latex": "\\mathrm{FC} = V - N - \\frac{B}{2}",
        "variables": [
          {
            "symbol": "FC",
            "meaning": "formal charge"
          },
          {
            "symbol": "V",
            "meaning": "valence electrons of the free atom"
          },
          {
            "symbol": "N",
            "meaning": "non-bonding electrons on the atom"
          },
          {
            "symbol": "B",
            "meaning": "bonding electrons around the atom"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "covalent-bonding",
      "vsepr-theory",
      "electronegativity-and-bond-polarity",
      "chemical-bonding"
    ],
    "wikipediaTitle": "Lewis structure",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Lewis structure — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lewis_structure"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "vsepr-theory",
    "title": "VSEPR theory and molecular geometry",
    "subject": "chemistry",
    "category": "chemical-bonding",
    "summary": "VSEPR theory predicts molecular shape by arranging electron pairs around a central atom as far apart as possible. Lone pairs repel more strongly than bonding pairs, bending bond angles away from the ideal geometry.",
    "aliases": [
      "valence shell electron pair repulsion theory",
      "electron-pair repulsion model"
    ],
    "keyConcepts": [
      {
        "term": "Electron-domain repulsion",
        "definition": "Bonds and lone pairs adopt positions that minimise repulsion, giving linear, trigonal planar, tetrahedral, trigonal bipyramidal or octahedral arrangements."
      },
      {
        "term": "Lone-pair effect",
        "definition": "A lone pair occupies more space than a bonding pair, reducing adjacent bond angles, as in water's 104.5° angle."
      },
      {
        "term": "AXE notation",
        "definition": "AXₙEₘ records n bonding domains and m lone pairs on the central atom, mapping directly onto a predicted molecular shape."
      },
      {
        "term": "Multiple bonds",
        "definition": "A double or triple bond counts as one electron domain but repels neighbouring domains slightly more than a single bond does."
      }
    ],
    "equations": [
      {
        "label": "Steric number used to assign geometry",
        "latex": "\\text{steric number} = \\text{bonding domains} + \\text{lone pairs}",
        "variables": [
          {
            "symbol": "steric number",
            "meaning": "total electron domains around the central atom"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "lewis-structures",
      "covalent-bonding",
      "electronegativity-and-bond-polarity",
      "chemical-bonding"
    ],
    "wikipediaTitle": "VSEPR theory",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "VSEPR theory — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/VSEPR_theory"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "types-of-chemical-reactions",
    "title": "Types of chemical reactions",
    "subject": "chemistry",
    "category": "reactions",
    "summary": "Chemical reactions are classified by how atoms rearrange: synthesis combines reactants, decomposition splits a compound, and single or double displacement exchanges atoms or ions. These patterns help predict products and balance equations.",
    "aliases": [
      "reaction types",
      "synthesis and decomposition",
      "displacement reactions"
    ],
    "keyConcepts": [
      {
        "term": "Synthesis",
        "definition": "Two or more reactants combine into a single product, as when sodium and chlorine form sodium chloride."
      },
      {
        "term": "Decomposition",
        "definition": "One compound breaks into simpler substances, often driven by heat, light or electricity, such as heating calcium carbonate."
      },
      {
        "term": "Single displacement",
        "definition": "A more reactive element replaces another in a compound, as when zinc displaces copper from copper sulfate solution."
      },
      {
        "term": "Double displacement",
        "definition": "Two ionic compounds exchange partners, forming a precipitate, a gas or a weak electrolyte that drives the reaction."
      }
    ],
    "equations": [
      {
        "label": "Synthesis (combination)",
        "latex": "\\mathrm{A} + \\mathrm{B} \\rightarrow \\mathrm{AB}",
        "variables": [
          {
            "symbol": "A, B",
            "meaning": "reacting elements or compounds"
          },
          {
            "symbol": "AB",
            "meaning": "single combined product"
          }
        ]
      },
      {
        "label": "Decomposition",
        "latex": "\\mathrm{AB} \\rightarrow \\mathrm{A} + \\mathrm{B}",
        "variables": [
          {
            "symbol": "AB",
            "meaning": "compound being broken down"
          }
        ]
      },
      {
        "label": "Single displacement",
        "latex": "\\mathrm{A} + \\mathrm{BC} \\rightarrow \\mathrm{AC} + \\mathrm{B}",
        "variables": [
          {
            "symbol": "A",
            "meaning": "more reactive displacing element"
          },
          {
            "symbol": "BC",
            "meaning": "compound containing the displaced element"
          }
        ]
      },
      {
        "label": "Double displacement",
        "latex": "\\mathrm{AB} + \\mathrm{CD} \\rightarrow \\mathrm{AD} + \\mathrm{CB}",
        "variables": [
          {
            "symbol": "AB, CD",
            "meaning": "two ionic compounds"
          },
          {
            "symbol": "AD, CB",
            "meaning": "products with exchanged ion partners"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "combustion",
      "precipitation-reactions",
      "redox-reactions",
      "chemical-bonding"
    ],
    "wikipediaTitle": "Chemical reaction",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Chemical reaction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chemical_reaction"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "combustion",
    "title": "Combustion",
    "subject": "chemistry",
    "category": "reactions",
    "summary": "Combustion is a rapid exothermic reaction with oxygen that releases heat and light. Complete combustion of a hydrocarbon yields carbon dioxide and water, while limited oxygen produces carbon monoxide or soot.",
    "aliases": [
      "burning",
      "combustion reaction"
    ],
    "keyConcepts": [
      {
        "term": "Complete combustion",
        "definition": "With sufficient oxygen, hydrocarbons burn to carbon dioxide and water, releasing the maximum amount of energy."
      },
      {
        "term": "Incomplete combustion",
        "definition": "Insufficient oxygen produces carbon monoxide and soot; carbon monoxide is toxic because it binds haemoglobin far more strongly than oxygen."
      },
      {
        "term": "Activation energy",
        "definition": "A flame supplies the activation energy needed to break initial bonds; once started, the exothermic reaction releases enough heat to sustain itself."
      },
      {
        "term": "Fossil fuels",
        "definition": "Burning coal, oil and natural gas returns stored carbon to the atmosphere as carbon dioxide, a greenhouse gas."
      }
    ],
    "equations": [
      {
        "label": "Complete combustion of methane",
        "latex": "\\mathrm{CH_4} + 2\\mathrm{O_2} \\rightarrow \\mathrm{CO_2} + 2\\mathrm{H_2O}",
        "variables": [
          {
            "symbol": "CH₄",
            "meaning": "methane"
          },
          {
            "symbol": "O₂",
            "meaning": "oxygen"
          },
          {
            "symbol": "CO₂",
            "meaning": "carbon dioxide"
          },
          {
            "symbol": "H₂O",
            "meaning": "water"
          }
        ]
      },
      {
        "label": "General complete combustion of a hydrocarbon",
        "latex": "\\mathrm{C}_x\\mathrm{H}_y + \\left(x + \\frac{y}{4}\\right)\\mathrm{O_2} \\rightarrow x\\mathrm{CO_2} + \\frac{y}{2}\\mathrm{H_2O}",
        "variables": [
          {
            "symbol": "x",
            "meaning": "number of carbon atoms"
          },
          {
            "symbol": "y",
            "meaning": "number of hydrogen atoms"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "types-of-chemical-reactions",
      "redox-reactions",
      "reaction-rates-and-collision-theory"
    ],
    "wikipediaTitle": "Combustion",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Combustion — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Combustion"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "precipitation-reactions",
    "title": "Precipitation reactions",
    "subject": "chemistry",
    "category": "reactions",
    "summary": "A precipitation reaction occurs when two soluble salts react to form an insoluble product that separates as a solid. Solubility rules predict which ion combinations will precipitate, and the solid can be filtered out.",
    "aliases": [
      "precipitation",
      "insoluble salt formation"
    ],
    "keyConcepts": [
      {
        "term": "Precipitate",
        "definition": "An insoluble solid that forms in solution when dissolved ions combine so that their ion product exceeds the solubility product."
      },
      {
        "term": "Solubility rules",
        "definition": "Most nitrates, acetates and group 1 salts are soluble, whereas most silver, lead and mercury(I) salts are insoluble, and barium sulfate is the standard insoluble barium salt."
      },
      {
        "term": "Spectator ions",
        "definition": "Ions that stay dissolved and unchanged on both sides are cancelled when writing the net ionic equation."
      }
    ],
    "equations": [
      {
        "label": "Silver nitrate solution with sodium chloride solution",
        "latex": "\\mathrm{AgNO_3}(aq) + \\mathrm{NaCl}(aq) \\rightarrow \\mathrm{AgCl}(s) + \\mathrm{NaNO_3}(aq)",
        "variables": [
          {
            "symbol": "AgNO₃",
            "meaning": "soluble silver nitrate"
          },
          {
            "symbol": "NaCl",
            "meaning": "soluble sodium chloride"
          },
          {
            "symbol": "AgCl",
            "meaning": "insoluble white precipitate"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "types-of-chemical-reactions",
      "ionic-bonding",
      "chemical-equilibrium",
      "acid-base-reaction",
      "solubility-product-ksp"
    ],
    "wikipediaTitle": "Precipitation (chemistry)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Precipitation (chemistry) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Precipitation_(chemistry)"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "redox-reactions",
    "title": "Redox reactions",
    "subject": "chemistry",
    "category": "reactions",
    "summary": "Redox reactions transfer electrons from a reducing agent to an oxidising agent. Oxidation is loss of electrons and reduction is gain, so the two always occur together while oxidation numbers track the electron bookkeeping.",
    "aliases": [
      "oxidation-reduction",
      "oxidation–reduction reaction"
    ],
    "keyConcepts": [
      {
        "term": "Oxidation and reduction",
        "definition": "Oxidation is loss of electrons and reduction is gain; the species that is oxidised acts as the reducing agent."
      },
      {
        "term": "Oxidation number",
        "definition": "A bookkeeping charge assigned by set rules; an increase signals oxidation and a decrease signals reduction."
      },
      {
        "term": "Half-reactions",
        "definition": "Splitting a redox reaction into oxidation and reduction half-equations makes the electron transfer and its balance explicit."
      },
      {
        "term": "Disproportionation",
        "definition": "One element is simultaneously oxidised and reduced, as chlorine is in its reaction with cold dilute alkali."
      }
    ],
    "equations": [
      {
        "label": "Zinc displacing copper(II) ions",
        "latex": "\\mathrm{Zn}(s) + \\mathrm{Cu^{2+}}(aq) \\rightarrow \\mathrm{Zn^{2+}}(aq) + \\mathrm{Cu}(s)",
        "variables": [
          {
            "symbol": "Zn",
            "meaning": "zinc metal (reducing agent)"
          },
          {
            "symbol": "Cu²⁺",
            "meaning": "copper(II) ion (oxidising agent)"
          }
        ]
      },
      {
        "label": "Oxidation half-reaction of zinc",
        "latex": "\\mathrm{Zn}(s) \\rightarrow \\mathrm{Zn^{2+}}(aq) + 2e^{-}",
        "variables": [
          {
            "symbol": "Zn²⁺",
            "meaning": "zinc ion formed"
          },
          {
            "symbol": "e⁻",
            "meaning": "electrons released"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "types-of-chemical-reactions",
      "transition-metals",
      "combustion",
      "ionic-bonding"
    ],
    "wikipediaTitle": "Redox",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Redox — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Redox"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "reaction-rates-and-collision-theory",
    "title": "Reaction rates and collision theory",
    "subject": "chemistry",
    "category": "reactions",
    "summary": "Reaction rate measures how quickly reactants become products. Collision theory explains it: particles must collide with enough energy and the right orientation, so concentration, temperature, surface area and pressure all change the rate.",
    "aliases": [
      "chemical kinetics",
      "rate of reaction",
      "collision theory"
    ],
    "keyConcepts": [
      {
        "term": "Collision theory",
        "definition": "A reaction occurs only when molecules collide with sufficient kinetic energy and a suitable orientation."
      },
      {
        "term": "Activation energy",
        "definition": "The minimum collision energy needed for bonds to break and products to form on the reaction pathway."
      },
      {
        "term": "Rate law",
        "definition": "An experimentally determined expression relating rate to reactant concentrations, whose orders are not simply the balanced-equation coefficients."
      },
      {
        "term": "Temperature effect",
        "definition": "Heating increases both collision frequency and the fraction of molecules with energy above the activation energy, so rates rise steeply."
      }
    ],
    "equations": [
      {
        "label": "Rate law for a general reaction",
        "latex": "\\text{rate} = k[\\mathrm{A}]^m[\\mathrm{B}]^n",
        "variables": [
          {
            "symbol": "rate",
            "meaning": "change in concentration per unit time"
          },
          {
            "symbol": "k",
            "meaning": "rate constant at a given temperature"
          },
          {
            "symbol": "m, n",
            "meaning": "experimental reaction orders"
          }
        ]
      },
      {
        "label": "Arrhenius equation",
        "latex": "k = A e^{-E_a/(RT)}",
        "variables": [
          {
            "symbol": "k",
            "meaning": "rate constant"
          },
          {
            "symbol": "A",
            "meaning": "pre-exponential (frequency) factor"
          },
          {
            "symbol": "Eₐ",
            "meaning": "activation energy"
          },
          {
            "symbol": "R",
            "meaning": "gas constant (8.314 J mol⁻¹ K⁻¹)"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "catalysts-and-catalysis",
      "chemical-equilibrium",
      "combustion",
      "types-of-chemical-reactions"
    ],
    "wikipediaTitle": "Reaction rate",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Reaction rate — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Reaction_rate"
      },
      {
        "label": "Collision theory — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Collision_theory"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "catalysts-and-catalysis",
    "title": "Catalysts and catalysis",
    "subject": "chemistry",
    "category": "reactions",
    "summary": "A catalyst speeds up a reaction by providing an alternative pathway with lower activation energy, without being consumed overall. Homogeneous catalysts share the reactants' phase, heterogeneous ones form a separate phase, and enzymes are biological catalysts.",
    "aliases": [
      "catalytic action",
      "catalyst"
    ],
    "keyConcepts": [
      {
        "term": "Catalyst",
        "definition": "A substance that increases reaction rate by lowering the activation energy and is regenerated at the end of the reaction."
      },
      {
        "term": "Homogeneous catalysis",
        "definition": "Catalyst and reactants are in the same phase, as with acid catalysis of esterification in solution."
      },
      {
        "term": "Heterogeneous catalysis",
        "definition": "The catalyst is in a different phase; reactant molecules adsorb onto its surface, where bonds weaken and reaction proceeds."
      },
      {
        "term": "Catalyst and equilibrium",
        "definition": "A catalyst accelerates the forward and reverse reactions equally, so it shortens the time to reach equilibrium without changing its position."
      }
    ],
    "equations": [
      {
        "label": "Catalytic decomposition of hydrogen peroxide by manganese dioxide",
        "latex": "2\\mathrm{H_2O_2}(aq) \\rightarrow 2\\mathrm{H_2O}(l) + \\mathrm{O_2}(g)",
        "variables": [
          {
            "symbol": "H₂O₂",
            "meaning": "hydrogen peroxide"
          },
          {
            "symbol": "MnO₂",
            "meaning": "solid catalyst (not consumed)"
          },
          {
            "symbol": "O₂",
            "meaning": "oxygen gas released"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "reaction-rates-and-collision-theory",
      "chemical-equilibrium",
      "transition-metals",
      "types-of-chemical-reactions"
    ],
    "wikipediaTitle": "Catalysis",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Catalysis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Catalysis"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "chemical-equilibrium",
    "title": "Chemical equilibrium",
    "subject": "chemistry",
    "category": "reactions",
    "summary": "Chemical equilibrium is a dynamic state in which forward and reverse reactions proceed at equal rates, so concentrations stay constant. The equilibrium constant K expresses the ratio of product to reactant concentrations at that point.",
    "aliases": [
      "dynamic equilibrium",
      "equilibrium reaction"
    ],
    "keyConcepts": [
      {
        "term": "Dynamic equilibrium",
        "definition": "Both forward and reverse reactions continue at equal rates; concentrations stay constant but are not necessarily equal."
      },
      {
        "term": "Equilibrium constant",
        "definition": "Kc is the product of product concentrations raised to their stoichiometric coefficients divided by the same expression for reactants."
      },
      {
        "term": "Reaction quotient",
        "definition": "Q has the same form as K but uses current concentrations; Q below K drives the reaction forward and Q above K drives it in reverse."
      },
      {
        "term": "Dependence on temperature",
        "definition": "For a given reaction K depends only on temperature; changing concentration or pressure shifts the position but not the value of K."
      }
    ],
    "equations": [
      {
        "label": "Equilibrium constant for aA + bB ⇌ cC + dD",
        "latex": "K_c = \\frac{[\\mathrm{C}]^c[\\mathrm{D}]^d}{[\\mathrm{A}]^a[\\mathrm{B}]^b}",
        "variables": [
          {
            "symbol": "K_c",
            "meaning": "equilibrium constant in terms of concentration"
          },
          {
            "symbol": "[A]–[D]",
            "meaning": "equilibrium molar concentrations"
          },
          {
            "symbol": "a–d",
            "meaning": "stoichiometric coefficients"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "le-chateliers-principle",
      "reaction-rates-and-collision-theory",
      "catalysts-and-catalysis",
      "acid-base-reaction"
    ],
    "wikipediaTitle": "Chemical equilibrium",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Chemical equilibrium — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chemical_equilibrium"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "le-chateliers-principle",
    "title": "Le Chatelier's principle",
    "subject": "chemistry",
    "category": "reactions",
    "summary": "Le Chatelier's principle states that a system at equilibrium shifts to oppose a change in conditions. Adding a reactant, removing a product, or changing pressure or temperature moves the equilibrium position in a predictable direction.",
    "aliases": [
      "Le Chatelier–Braun principle",
      "Le Chatelier's rule"
    ],
    "keyConcepts": [
      {
        "term": "Concentration change",
        "definition": "Adding a reactant shifts equilibrium toward products; removing a product does the same by lowering the reaction quotient."
      },
      {
        "term": "Pressure and volume",
        "definition": "Compressing a gaseous system shifts equilibrium toward the side with fewer gas molecules, where the pressure increase is partly relieved."
      },
      {
        "term": "Temperature change",
        "definition": "Heating favours the endothermic direction and cooling favours the exothermic direction, altering the value of K itself."
      },
      {
        "term": "Catalyst",
        "definition": "A catalyst changes the rate at which equilibrium is reached but does not change its position."
      }
    ],
    "equations": [
      {
        "label": "Haber process (exothermic in the forward direction)",
        "latex": "\\mathrm{N_2}(g) + 3\\mathrm{H_2}(g) \\rightleftharpoons 2\\mathrm{NH_3}(g)",
        "variables": [
          {
            "symbol": "N₂",
            "meaning": "nitrogen from air"
          },
          {
            "symbol": "H₂",
            "meaning": "hydrogen"
          },
          {
            "symbol": "NH₃",
            "meaning": "ammonia product"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "chemical-equilibrium",
      "reaction-rates-and-collision-theory",
      "catalysts-and-catalysis",
      "acid-base-reaction"
    ],
    "wikipediaTitle": "Le Chatelier's principle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Le Chatelier's principle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Le_Chatelier%27s_principle"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "ph-and-poh-scales",
    "title": "pH and pOH scales",
    "subject": "chemistry",
    "category": "acids-and-bases",
    "summary": "The pH scale expresses acidity as the negative base-10 logarithm of the hydrogen-ion concentration, so a one-unit drop means ten times more H⁺. pOH does the same for hydroxide, and in water at 25 °C the two always add to 14.00.",
    "aliases": [
      "pH scale",
      "pOH",
      "acidity scale"
    ],
    "keyConcepts": [
      {
        "term": "pH",
        "definition": "The negative base-10 logarithm of the molar hydrogen-ion concentration. Because the scale is logarithmic, a solution at pH 4 has ten times the hydrogen-ion concentration of one at pH 5."
      },
      {
        "term": "Neutral point",
        "definition": "At 25 °C pure water has [H⁺] = [OH⁻] = 1.0 × 10⁻⁷ mol dm⁻³, so pH = 7.00. The neutral pH shifts with temperature because the ion product of water changes."
      },
      {
        "term": "pOH",
        "definition": "pOH = −log₁₀[OH⁻]. Since Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25 °C, pH + pOH = 14.00 at that temperature."
      },
      {
        "term": "Measuring pH",
        "definition": "Indicators change colour over a narrow range, while a glass-electrode pH meter responds to H⁺ activity with about 59 mV per pH unit at 25 °C and is calibrated against standard buffers."
      }
    ],
    "equations": [
      {
        "label": "Definition of pH",
        "latex": "\\text{pH} = -\\log_{10}[\\mathrm{H}^+]",
        "variables": [
          {
            "symbol": "pH",
            "meaning": "acidity measure, dimensionless"
          },
          {
            "symbol": "[H⁺]",
            "meaning": "hydrogen-ion concentration (mol dm⁻³)"
          }
        ]
      },
      {
        "label": "pH and pOH in water at 25 °C",
        "latex": "\\text{pH} + \\text{pOH} = 14.00",
        "variables": [
          {
            "symbol": "pH",
            "meaning": "−log₁₀[H⁺]"
          },
          {
            "symbol": "pOH",
            "meaning": "−log₁₀[OH⁻]"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "acid-base-reaction",
      "strong-and-weak-acids-and-bases",
      "buffer-solutions"
    ],
    "wikipediaTitle": "pH",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "pH — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/pH"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "strong-and-weak-acids-and-bases",
    "title": "Strong and weak acids and bases",
    "subject": "chemistry",
    "category": "acids-and-bases",
    "summary": "Strong acids such as HCl and strong bases such as NaOH ionise essentially completely in water, whereas weak acids such as acetic acid release only a small fraction of their protons. The acid dissociation constant Ka measures that extent and therefore sets the pH of a given concentration.",
    "aliases": [
      "acid strength",
      "acid dissociation constant",
      "degree of ionisation"
    ],
    "keyConcepts": [
      {
        "term": "Strong acid",
        "definition": "An acid that transfers essentially all of its protons to water, so [H⁺] roughly equals the acid's formal concentration; HCl, HBr, HI, HNO₃ and H₂SO₄ (first proton) behave this way."
      },
      {
        "term": "Weak acid",
        "definition": "An acid that establishes an equilibrium with water and ionises only partly, so [H⁺] is much smaller than the formal concentration and the pH is higher than a strong acid of the same molarity."
      },
      {
        "term": "Ka and pKa",
        "definition": "Ka is the equilibrium constant for HA + H₂O ⇌ H₃O⁺ + A⁻. A larger Ka (smaller pKa) means a stronger acid; pKa values compare acids without depending on concentration."
      },
      {
        "term": "Base strength",
        "definition": "Bases are compared by Kb for B + H₂O ⇌ BH⁺ + OH⁻. For a conjugate acid–base pair, Ka × Kb = Kw, so a stronger acid always has a weaker conjugate base."
      }
    ],
    "equations": [
      {
        "label": "Acid dissociation constant",
        "latex": "K_a = \\frac{[\\mathrm{H}^+][\\mathrm{A}^-]}{[\\mathrm{HA}]}",
        "variables": [
          {
            "symbol": "K_a",
            "meaning": "acid dissociation constant"
          },
          {
            "symbol": "[H⁺]",
            "meaning": "hydrogen-ion concentration"
          },
          {
            "symbol": "[A⁻]",
            "meaning": "conjugate base concentration"
          },
          {
            "symbol": "[HA]",
            "meaning": "undissociated acid concentration"
          }
        ]
      },
      {
        "label": "pKa from Ka",
        "latex": "\\text{p}K_a = -\\log_{10} K_a",
        "variables": [
          {
            "symbol": "pKa",
            "meaning": "logarithmic acid strength"
          },
          {
            "symbol": "K_a",
            "meaning": "acid dissociation constant"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "acid-base-reaction",
      "ph-and-poh-scales",
      "buffer-solutions",
      "neutralisation-reactions"
    ],
    "wikipediaTitle": "Acid strength",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Acid strength — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Acid_strength"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "acid-base-titration",
    "title": "Acid–base titration",
    "subject": "chemistry",
    "category": "acids-and-bases",
    "summary": "A titration adds a standard solution from a burette until it has reacted exactly with a measured volume of analyte. The equivalence point is located with an indicator or a pH meter, and the delivered volume then yields the unknown concentration through the balanced equation.",
    "aliases": [
      "titration",
      "volumetric analysis",
      "titrimetry"
    ],
    "keyConcepts": [
      {
        "term": "Standard solution",
        "definition": "A solution whose concentration is known accurately, prepared from a primary standard such as potassium hydrogen phthalate or by standardising against one."
      },
      {
        "term": "Equivalence point",
        "definition": "The point at which the moles of added titrant exactly match the stoichiometry of the analyte; it is a property of the reaction, not of the indicator."
      },
      {
        "term": "End point and indicator",
        "definition": "The observed colour change. An indicator is chosen so its transition range covers the steep part of the titration curve, keeping the end point close to the equivalence point."
      },
      {
        "term": "Titration curve",
        "definition": "A plot of pH against added volume. Strong acid–strong base curves jump sharply around pH 7, while weak acid curves have a buffered region and an equivalence pH above 7."
      }
    ],
    "equations": [
      {
        "label": "Equivalence for a 1:1 acid–base reaction",
        "latex": "c_a V_a = c_b V_b",
        "variables": [
          {
            "symbol": "c_a",
            "meaning": "acid concentration (mol dm⁻³)"
          },
          {
            "symbol": "V_a",
            "meaning": "acid volume (dm³)"
          },
          {
            "symbol": "c_b",
            "meaning": "base concentration (mol dm⁻³)"
          },
          {
            "symbol": "V_b",
            "meaning": "base volume (dm³)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "neutralisation-reactions",
      "strong-and-weak-acids-and-bases",
      "concentration-and-molarity",
      "ph-and-poh-scales"
    ],
    "wikipediaTitle": "Titration",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Titration — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Titration"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "buffer-solutions",
    "title": "Buffer solutions",
    "subject": "chemistry",
    "category": "acids-and-bases",
    "summary": "A buffer resists pH change when small amounts of acid or base are added because it holds a weak acid and its conjugate base in comparable amounts. Added H⁺ is consumed by the base and added OH⁻ by the acid, so the ratio in the Henderson–Hasselbalch expression barely moves.",
    "aliases": [
      "buffer",
      "pH buffer",
      "buffer system"
    ],
    "keyConcepts": [
      {
        "term": "Buffer composition",
        "definition": "A weak acid plus its conjugate base (for example acetic acid and sodium acetate), or a weak base plus its conjugate acid (ammonia and ammonium chloride), in roughly equal amounts."
      },
      {
        "term": "Henderson–Hasselbalch equation",
        "definition": "pH = pKa + log₁₀([A⁻]/[HA]). The pH sits close to the pKa and changes only logarithmically as the ratio shifts."
      },
      {
        "term": "Buffer capacity",
        "definition": "The amount of acid or base a buffer can absorb before its pH changes appreciably. Capacity grows with the absolute concentrations, while the pH depends on their ratio."
      },
      {
        "term": "Biological buffering",
        "definition": "Blood is held near pH 7.4 mainly by the H₂CO₃/HCO₃⁻ pair, with haemoglobin and phosphate contributing; proteins and phosphate buffers do the same inside cells."
      }
    ],
    "equations": [
      {
        "label": "Henderson–Hasselbalch equation",
        "latex": "\\text{pH} = \\text{p}K_a + \\log_{10}\\frac{[\\mathrm{A}^-]}{[\\mathrm{HA}]}",
        "variables": [
          {
            "symbol": "pH",
            "meaning": "buffer pH"
          },
          {
            "symbol": "pKa",
            "meaning": "acid dissociation constant of the weak acid"
          },
          {
            "symbol": "[A⁻]",
            "meaning": "conjugate base concentration"
          },
          {
            "symbol": "[HA]",
            "meaning": "weak acid concentration"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "strong-and-weak-acids-and-bases",
      "ph-and-poh-scales",
      "neutralisation-reactions"
    ],
    "wikipediaTitle": "Buffer solution",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Buffer solution — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Buffer_solution"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "neutralisation-reactions",
    "title": "Neutralisation reactions",
    "subject": "chemistry",
    "category": "acids-and-bases",
    "summary": "Neutralisation is the reaction of an acid with a base to form a salt and usually water. In dilute aqueous solution the net change is simply H⁺ + OH⁻ → H₂O, releasing about 57 kJ per mole of water formed.",
    "aliases": [
      "neutralisation reaction",
      "acid–base neutralisation",
      "salt formation",
      "neutralization",
      "neutralization reaction"
    ],
    "keyConcepts": [
      {
        "term": "Net ionic equation",
        "definition": "Spectator ions such as Na⁺ and Cl⁻ appear on both sides and are cancelled, leaving H⁺(aq) + OH⁻(aq) → H₂O(l) for any strong acid with any strong base."
      },
      {
        "term": "Salt naming",
        "definition": "The cation comes from the base and the anion from the acid: hydrochloric acid gives chlorides, sulfuric acid gives sulfates, nitric acid gives nitrates."
      },
      {
        "term": "Enthalpy of neutralisation",
        "definition": "For a strong acid and strong base the value is close to −57.3 kJ mol⁻¹ because the same reaction, formation of water from H⁺ and OH⁻, is occurring. Weak acids release less heat because energy is used to ionise them."
      },
      {
        "term": "Reactions with carbonates",
        "definition": "Acids with carbonates or hydrogencarbonates give a salt, water and carbon dioxide gas, which is why vinegar fizzes on baking soda."
      }
    ],
    "equations": [
      {
        "label": "Hydrochloric acid with sodium hydroxide",
        "latex": "\\mathrm{HCl} + \\mathrm{NaOH} \\rightarrow \\mathrm{NaCl} + \\mathrm{H_2O}",
        "variables": [
          {
            "symbol": "HCl",
            "meaning": "hydrochloric acid"
          },
          {
            "symbol": "NaOH",
            "meaning": "sodium hydroxide"
          },
          {
            "symbol": "NaCl",
            "meaning": "sodium chloride (salt)"
          },
          {
            "symbol": "H₂O",
            "meaning": "water"
          }
        ]
      },
      {
        "label": "Net ionic change in dilute solution",
        "latex": "\\mathrm{H}^+ + \\mathrm{OH}^- \\rightarrow \\mathrm{H_2O} \\qquad \\Delta H \\approx -57.3\\ \\mathrm{kJ\\,mol^{-1}}",
        "variables": [
          {
            "symbol": "H⁺",
            "meaning": "hydrogen ion"
          },
          {
            "symbol": "OH⁻",
            "meaning": "hydroxide ion"
          },
          {
            "symbol": "ΔH",
            "meaning": "enthalpy change per mole of water"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "acid-base-reaction",
      "strong-and-weak-acids-and-bases",
      "acid-base-titration",
      "enthalpy-and-enthalpy-changes"
    ],
    "wikipediaTitle": "Neutralization (chemistry)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Neutralization (chemistry) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neutralization_(chemistry)"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "solubility-and-dissolution",
    "title": "Solubility and dissolution",
    "subject": "chemistry",
    "category": "solutions",
    "summary": "Dissolving separates solute particles and surrounds them with solvent molecules. For an ionic solid the hydration enthalpy must outweigh the lattice enthalpy, while the entropy gained by dispersing the ions usually helps, so the sign of ΔG_soln decides whether dissolution is favourable. Polar solvents dissolve ionic and polar solutes, while non-polar solvents dissolve non-polar ones.",
    "aliases": [
      "dissolution",
      "dissolving",
      "solvation"
    ],
    "keyConcepts": [
      {
        "term": "Solubility",
        "definition": "The maximum amount of solute that dissolves in a given amount of solvent at a stated temperature, usually quoted in grams per 100 g of water or as molar concentration."
      },
      {
        "term": "Lattice and hydration energy",
        "definition": "An ionic solid must first have its lattice energy overcome, then the separated ions are stabilised by hydration enthalpy. The overall sign is set by ΔG_soln = ΔH_soln − TΔS_soln: dissolution is favourable when the hydration enthalpy released outweighs the lattice enthalpy, and because dispersing ions raises entropy, an endothermic dissolution such as ammonium nitrate can still be spontaneous."
      },
      {
        "term": "Like dissolves like",
        "definition": "Polar and ionic solutes dissolve in polar solvents because ion–dipole and hydrogen-bond interactions replace the attractions that were broken; non-polar solutes mix with non-polar solvents for the same reason."
      },
      {
        "term": "Temperature and pressure",
        "definition": "Most solids become more soluble as the solvent warms, though some, such as cerium(III) sulfate, become less soluble. Gas solubility falls with rising temperature and rises with the partial pressure of the gas above the liquid."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "solubility-product-ksp",
      "concentration-and-molarity",
      "states-of-matter",
      "electrolytes-and-conductivity"
    ],
    "wikipediaTitle": "Solubility",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Solubility — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Solubility"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "concentration-and-molarity",
    "title": "Concentration and molarity",
    "subject": "chemistry",
    "category": "solutions",
    "summary": "Concentration records how much solute is present in a given amount of solution. Molarity, the number of moles of solute per litre of solution, is the unit used most in solution stoichiometry, and dilution changes the volume while leaving the number of moles unchanged.",
    "aliases": [
      "molarity",
      "molar concentration",
      "amount concentration"
    ],
    "keyConcepts": [
      {
        "term": "Molarity",
        "definition": "Moles of solute divided by litres of solution, written mol dm⁻³ or M. The volume is that of the final solution, not of the solvent added."
      },
      {
        "term": "Dilution",
        "definition": "Adding solvent lowers the concentration but conserves solute, so c₁V₁ = c₂V₂ for the same solution before and after dilution."
      },
      {
        "term": "Molality and mole fraction",
        "definition": "Molality is moles of solute per kilogram of solvent and does not change with temperature, which is why it is used in colligative calculations. Mole fraction is the ratio of one component's moles to the total."
      },
      {
        "term": "Mass percent and ppm",
        "definition": "Mass percent compares solute mass with total solution mass, and parts per million scales the same ratio by 10⁶ for very dilute samples."
      }
    ],
    "equations": [
      {
        "label": "Molarity",
        "latex": "c = \\frac{n}{V}",
        "variables": [
          {
            "symbol": "c",
            "meaning": "molar concentration (mol dm⁻³)"
          },
          {
            "symbol": "n",
            "meaning": "amount of solute (mol)"
          },
          {
            "symbol": "V",
            "meaning": "volume of solution (dm³)"
          }
        ]
      },
      {
        "label": "Dilution of a solution",
        "latex": "c_1 V_1 = c_2 V_2",
        "variables": [
          {
            "symbol": "c₁, c₂",
            "meaning": "concentrations before and after dilution"
          },
          {
            "symbol": "V₁, V₂",
            "meaning": "volumes before and after dilution"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "the-mole-and-avogadros-number",
      "solubility-and-dissolution",
      "acid-base-titration"
    ],
    "wikipediaTitle": "Molar concentration",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Molar concentration — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Molar_concentration"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "electrolytes-and-conductivity",
    "title": "Electrolytes and conductivity",
    "subject": "chemistry",
    "category": "solutions",
    "summary": "An electrolyte conducts electricity when molten or dissolved because it dissociates into mobile ions. Strong electrolytes ionise completely and conduct well, weak electrolytes only partly, and non-electrolytes such as sugar conduct essentially not at all.",
    "aliases": [
      "electrolyte",
      "electrolytic conduction",
      "ionic conduction"
    ],
    "keyConcepts": [
      {
        "term": "Electrolyte",
        "definition": "A substance that produces mobile ions in solution or on melting, so charge is carried by ions rather than by electrons as in a metal."
      },
      {
        "term": "Strong and weak electrolytes",
        "definition": "Salts and strong acids are fully ionised, so conductivity is high. Weak acids and bases are mostly undissociated and conduct only slightly; their molar conductivity rises on dilution because the degree of ionisation increases."
      },
      {
        "term": "Conductivity and cell constant",
        "definition": "Conductivity κ is conductance corrected for the geometry of the cell by a cell constant l/A. Molar conductivity Λ = κ/c falls with concentration for strong electrolytes because ion–ion interactions slow the ions."
      },
      {
        "term": "Applications",
        "definition": "Electrolyte balance matters in the body, conductivity is used to check water purity, and the same mobile ions carry charge in batteries and electroplating baths."
      }
    ],
    "equations": [
      {
        "label": "Conductance of a cell",
        "latex": "G = \\kappa \\frac{A}{l}",
        "variables": [
          {
            "symbol": "G",
            "meaning": "conductance (siemens)"
          },
          {
            "symbol": "κ",
            "meaning": "conductivity (S m⁻¹)"
          },
          {
            "symbol": "A",
            "meaning": "electrode area (m²)"
          },
          {
            "symbol": "l",
            "meaning": "distance between electrodes (m)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "strong-and-weak-acids-and-bases",
      "solubility-and-dissolution",
      "electrolysis"
    ],
    "wikipediaTitle": "Electrolyte",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Electrolyte — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electrolyte"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "colligative-properties",
    "title": "Colligative properties",
    "subject": "chemistry",
    "category": "solutions",
    "summary": "Colligative properties depend on the number of dissolved particles rather than on their identity. A dissolved solute lowers the vapour pressure and freezing point, raises the boiling point, and creates osmotic pressure across a semipermeable membrane.",
    "aliases": [
      "colligative property",
      "osmotic pressure",
      "freezing-point depression"
    ],
    "keyConcepts": [
      {
        "term": "Colligative effect",
        "definition": "Vapour-pressure lowering, boiling-point elevation, freezing-point depression and osmotic pressure all scale with the total molality of dissolved particles, not with their mass or chemical nature."
      },
      {
        "term": "Raoult's law",
        "definition": "The vapour pressure of a solvent above an ideal solution equals its pure vapour pressure multiplied by its mole fraction, so adding solute always lowers the vapour pressure."
      },
      {
        "term": "van 't Hoff factor",
        "definition": "The number of particles one formula unit produces in solution: 1 for glucose, 2 for NaCl, 3 for CaCl₂. Real values fall slightly below the ideal because of ion pairing."
      },
      {
        "term": "Osmosis",
        "definition": "Solvent passes through a semipermeable membrane from the more dilute to the more concentrated side until the applied osmotic pressure balances the flow; this drives water uptake in plant roots and red blood cell behaviour."
      }
    ],
    "equations": [
      {
        "label": "Freezing-point depression",
        "latex": "\\Delta T_f = i K_f m",
        "variables": [
          {
            "symbol": "ΔT_f",
            "meaning": "freezing-point depression (K)"
          },
          {
            "symbol": "i",
            "meaning": "van 't Hoff factor"
          },
          {
            "symbol": "K_f",
            "meaning": "cryoscopic constant of the solvent (K kg mol⁻¹)"
          },
          {
            "symbol": "m",
            "meaning": "molality of solute (mol kg⁻¹)"
          }
        ]
      },
      {
        "label": "Osmotic pressure",
        "latex": "\\pi = iMRT",
        "variables": [
          {
            "symbol": "π",
            "meaning": "osmotic pressure (Pa)"
          },
          {
            "symbol": "i",
            "meaning": "van 't Hoff factor"
          },
          {
            "symbol": "M",
            "meaning": "molar concentration (mol m⁻³)"
          },
          {
            "symbol": "R",
            "meaning": "gas constant (8.314 J mol⁻¹ K⁻¹)"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature (K)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "solubility-and-dissolution",
      "concentration-and-molarity",
      "states-of-matter"
    ],
    "wikipediaTitle": "Colligative properties",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Colligative properties — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Colligative_properties"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "solubility-product-ksp",
    "title": "Solubility product (Ksp)",
    "subject": "chemistry",
    "category": "solutions",
    "summary": "For a sparingly soluble salt in contact with its saturated solution, the product of the ion concentrations raised to their stoichiometric powers is a constant at a given temperature, called Ksp. Comparing the reaction quotient Q with Ksp predicts whether a precipitate will form.",
    "aliases": [
      "solubility product",
      "Ksp",
      "solubility product constant"
    ],
    "keyConcepts": [
      {
        "term": "Ksp expression",
        "definition": "The product of the dissolved ion concentrations, each raised to its coefficient in the dissolution equation; the solid itself does not appear because its activity is constant."
      },
      {
        "term": "Molar solubility",
        "definition": "For AgCl, Ksp = s², so s = √Ksp. For a salt such as CaF₂ the relation is Ksp = 4s³, so the stoichiometry must be used before comparing solubilities."
      },
      {
        "term": "Q versus Ksp",
        "definition": "The ion product Q is calculated from the current concentrations. Q < Ksp means the solution is unsaturated and more solid can dissolve; Q > Ksp means it is supersaturated and precipitate forms until Q = Ksp."
      },
      {
        "term": "Common ion effect",
        "definition": "Adding a salt that shares an ion with the precipitate increases that ion's concentration, so the equilibrium shifts back toward solid and solubility falls."
      }
    ],
    "equations": [
      {
        "label": "Solubility product of silver chloride",
        "latex": "K_{sp} = [\\mathrm{Ag}^+][\\mathrm{Cl}^-]",
        "variables": [
          {
            "symbol": "Ksp",
            "meaning": "solubility product constant (25 °C: 1.8 × 10⁻¹⁰)"
          },
          {
            "symbol": "[Ag⁺]",
            "meaning": "silver-ion concentration (mol dm⁻³)"
          },
          {
            "symbol": "[Cl⁻]",
            "meaning": "chloride concentration (mol dm⁻³)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "solubility-and-dissolution",
      "concentration-and-molarity",
      "electrolytes-and-conductivity"
    ],
    "wikipediaTitle": "Solubility equilibrium",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Solubility equilibrium — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Solubility_equilibrium"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "the-mole-and-avogadros-number",
    "title": "The mole and Avogadro's number",
    "subject": "chemistry",
    "category": "stoichiometry",
    "summary": "The mole is the SI unit of amount of substance and holds exactly 6.022 140 76 × 10²³ entities, the fixed value of the Avogadro constant. It links the countable world of atoms and molecules to the weighable amounts used in the laboratory.",
    "aliases": [
      "mole",
      "Avogadro constant",
      "amount of substance"
    ],
    "keyConcepts": [
      {
        "term": "Definition of the mole",
        "definition": "Since the 2019 SI revision, one mole contains exactly 6.022 140 76 × 10²³ specified elementary entities; the number is fixed by definition rather than measured."
      },
      {
        "term": "Avogadro constant",
        "definition": "NA = 6.022 140 76 × 10²³ mol⁻¹, the number of entities per mole. It converts a count of particles into an amount in moles."
      },
      {
        "term": "Molar volume of a gas",
        "definition": "One mole of any ideal gas occupies about 22.4 dm³ at 0 °C and 1 atm, or 22.7 dm³ at 0 °C and 100 kPa, because volume depends on conditions rather than on the gas identity."
      },
      {
        "term": "Counting by weighing",
        "definition": "Dividing a measured mass by molar mass gives moles, and multiplying by NA gives the number of particles, which is how a balance is used to count atoms."
      }
    ],
    "equations": [
      {
        "label": "Amount from number of entities",
        "latex": "n = \\frac{N}{N_A}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "amount of substance (mol)"
          },
          {
            "symbol": "N",
            "meaning": "number of entities"
          },
          {
            "symbol": "N_A",
            "meaning": "Avogadro constant (6.022 × 10²³ mol⁻¹)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "molar-mass",
      "concentration-and-molarity",
      "empirical-and-molecular-formulas",
      "limiting-reagents"
    ],
    "wikipediaTitle": "Mole (unit)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Mole (unit) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mole_(unit)"
      },
      {
        "label": "OpenStax Chemistry: Atoms First 2e",
        "url": "https://openstax.org/books/chemistry-atoms-first-2e"
      }
    ]
  },
  {
    "slug": "molar-mass",
    "title": "Molar mass",
    "subject": "chemistry",
    "category": "stoichiometry",
    "summary": "Molar mass is the mass of one mole of a substance, numerically equal to its relative molecular or formula mass in grams per mole. It converts between a mass weighed on a balance and the amount in moles used in every stoichiometric calculation.",
    "aliases": [
      "molecular weight",
      "molar weight",
      "formula mass"
    ],
    "keyConcepts": [
      {
        "term": "Definition",
        "definition": "Molar mass M is mass divided by amount of substance, in g mol⁻¹. For a compound it is the sum of the relative atomic masses of all atoms in the formula."
      },
      {
        "term": "Relative atomic mass scale",
        "definition": "Atomic masses are measured relative to carbon-12, defined as exactly 12 units. The molar mass of carbon-12 is therefore 12 g mol⁻¹."
      },
      {
        "term": "Formula mass for ionic solids",
        "definition": "Ionic compounds have no discrete molecules, so their molar mass is a formula mass calculated from the empirical formula, such as 58.44 g mol⁻¹ for NaCl."
      },
      {
        "term": "Hydrates and mixtures",
        "definition": "Water of crystallisation is included in the formula mass, so CuSO₄·5H₂O is 249.7 g mol⁻¹ rather than 159.6 g mol⁻¹ for the anhydrous salt."
      }
    ],
    "equations": [
      {
        "label": "Molar mass",
        "latex": "M = \\frac{m}{n}",
        "variables": [
          {
            "symbol": "M",
            "meaning": "molar mass (g mol⁻¹)"
          },
          {
            "symbol": "m",
            "meaning": "mass of sample (g)"
          },
          {
            "symbol": "n",
            "meaning": "amount of substance (mol)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "the-mole-and-avogadros-number",
      "empirical-and-molecular-formulas",
      "percentage-yield"
    ],
    "wikipediaTitle": "Molar mass",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Molar mass — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Molar_mass"
      },
      {
        "label": "OpenStax Chemistry: Atoms First 2e",
        "url": "https://openstax.org/books/chemistry-atoms-first-2e"
      }
    ]
  },
  {
    "slug": "limiting-reagents",
    "title": "Limiting reagents",
    "subject": "chemistry",
    "category": "stoichiometry",
    "summary": "The limiting reagent is the reactant that runs out first because it is present below the stoichiometric amount, and it therefore fixes the maximum product obtainable. The excess reagent is left partly unreacted, so mole ratios must be applied before any product mass is predicted.",
    "aliases": [
      "limiting reactant",
      "stoichiometric limiting reactant"
    ],
    "keyConcepts": [
      {
        "term": "Limiting versus excess",
        "definition": "Compare the mole ratio actually supplied with the ratio demanded by the balanced equation; the reactant whose supply falls short of its requirement limits the reaction."
      },
      {
        "term": "Systematic method",
        "definition": "Convert every reactant mass to moles, divide each by its coefficient, and the smallest quotient identifies the limiting reagent. Then use that reactant's moles with the product coefficient."
      },
      {
        "term": "Theoretical yield",
        "definition": "The product amount calculated from the limiting reagent assuming complete conversion; it is the upper bound any real experiment is compared against."
      },
      {
        "term": "Why it matters",
        "definition": "Adding more of the excess reagent cannot raise the yield, which is why industrial processes tune reactant ratios and recycle the excess."
      }
    ],
    "equations": [
      {
        "label": "Product from limiting reagent in aA → bP",
        "latex": "n_{\\text{product}} = n_{\\text{limiting}} \\times \\frac{b}{a}",
        "variables": [
          {
            "symbol": "n_product",
            "meaning": "moles of product formed"
          },
          {
            "symbol": "n_limiting",
            "meaning": "moles of limiting reagent"
          },
          {
            "symbol": "a",
            "meaning": "coefficient of limiting reagent"
          },
          {
            "symbol": "b",
            "meaning": "coefficient of product"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "percentage-yield",
      "molar-mass",
      "the-mole-and-avogadros-number"
    ],
    "wikipediaTitle": "Limiting reagent",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Limiting reagent — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Limiting_reagent"
      },
      {
        "label": "OpenStax Chemistry: Atoms First 2e",
        "url": "https://openstax.org/books/chemistry-atoms-first-2e"
      }
    ]
  },
  {
    "slug": "empirical-and-molecular-formulas",
    "title": "Empirical and molecular formulas",
    "subject": "chemistry",
    "category": "stoichiometry",
    "summary": "An empirical formula gives the simplest whole-number ratio of atoms in a compound, while the molecular formula gives the actual number of atoms per molecule and is a whole-number multiple of it. Percent composition by mass converts to mole ratios, and molar mass supplies the multiplier.",
    "aliases": [
      "empirical formula",
      "molecular formula",
      "simplest formula"
    ],
    "keyConcepts": [
      {
        "term": "Empirical formula",
        "definition": "The lowest whole-number ratio of atoms, such as CH₂O for glucose. Ionic compounds are always written as empirical formulas because they form extended lattices."
      },
      {
        "term": "Molecular formula",
        "definition": "The actual atom count per molecule, such as C₆H₁₂O₆ for glucose; it is the empirical formula multiplied by an integer n."
      },
      {
        "term": "From percent composition",
        "definition": "Divide each mass percentage by the atomic mass to get moles, divide through by the smallest value, then scale to whole numbers."
      },
      {
        "term": "Combustion analysis",
        "definition": "Burning an organic sample and weighing the CO₂ and H₂O absorbed gives the carbon and hydrogen masses; oxygen is found by difference, and molar mass from another experiment fixes n."
      }
    ],
    "equations": [
      {
        "label": "Multiplier from molar masses",
        "latex": "n = \\frac{M_{\\text{molecular}}}{M_{\\text{empirical}}}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "whole-number multiplier"
          },
          {
            "symbol": "M_molecular",
            "meaning": "molar mass of the compound (g mol⁻¹)"
          },
          {
            "symbol": "M_empirical",
            "meaning": "molar mass of the empirical formula (g mol⁻¹)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "molar-mass",
      "the-mole-and-avogadros-number",
      "percentage-yield"
    ],
    "wikipediaTitle": "Empirical formula",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Empirical formula — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Empirical_formula"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "percentage-yield",
    "title": "Percentage yield",
    "subject": "chemistry",
    "category": "stoichiometry",
    "summary": "Percentage yield compares the product mass actually isolated with the theoretical maximum calculated from the limiting reagent. Side reactions, incomplete conversion, and losses during filtration or transfer all push the measured yield below 100 %.",
    "aliases": [
      "percent yield",
      "reaction yield",
      "yield"
    ],
    "keyConcepts": [
      {
        "term": "Theoretical yield",
        "definition": "The mass of product expected if the limiting reagent is converted completely according to the balanced equation; it is calculated, never measured."
      },
      {
        "term": "Actual yield",
        "definition": "The mass of purified product obtained in practice, weighed after isolation and drying."
      },
      {
        "term": "Percentage yield",
        "definition": "Actual yield divided by theoretical yield, expressed as a percentage. Values above 100 % signal a weighing error or an impure, wet product."
      },
      {
        "term": "Atom economy",
        "definition": "The fraction of reactant mass that ends up in the desired product, calculated from molar masses. A reaction can have high yield but poor atom economy if it produces large amounts of by-product."
      }
    ],
    "equations": [
      {
        "label": "Percentage yield",
        "latex": "\\text{Percentage yield} = \\frac{\\text{actual yield}}{\\text{theoretical yield}} \\times 100\\%",
        "variables": [
          {
            "symbol": "actual yield",
            "meaning": "mass of product obtained (g)"
          },
          {
            "symbol": "theoretical yield",
            "meaning": "maximum mass possible from the limiting reagent (g)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "limiting-reagents",
      "molar-mass",
      "the-mole-and-avogadros-number"
    ],
    "wikipediaTitle": "Yield (chemistry)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Yield (chemistry) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Yield_(chemistry)"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "alkanes-and-hydrocarbons",
    "title": "Alkanes and hydrocarbons",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "Alkanes are saturated hydrocarbons with the general formula CnH2n+2, in which each carbon forms four single bonds in a tetrahedral arrangement. They are largely unreactive toward acids, bases, and oxidising agents but burn readily, making them the main component of fuels.",
    "aliases": [
      "alkanes",
      "saturated hydrocarbons",
      "paraffins"
    ],
    "keyConcepts": [
      {
        "term": "Homologous series",
        "definition": "Successive members differ by one CH₂ unit, so physical properties such as boiling point rise smoothly with chain length while chemical behaviour stays similar."
      },
      {
        "term": "Tetrahedral geometry",
        "definition": "Each carbon is sp³ hybridised with bond angles near 109.5°, and rotation about C–C single bonds makes the chains flexible."
      },
      {
        "term": "Boiling point and branching",
        "definition": "Longer chains have larger induced-dipole forces and higher boiling points; branched isomers are more compact, so they boil lower than straight-chain isomers of the same formula."
      },
      {
        "term": "Reactivity",
        "definition": "Alkanes undergo free-radical substitution with halogens under UV light and complete combustion with oxygen, but they do not decolourise bromine water or react with acids and bases."
      }
    ],
    "equations": [
      {
        "label": "Complete combustion of an alkane",
        "latex": "\\mathrm{C}_n\\mathrm{H}_{2n+2} + \\frac{3n+1}{2}\\,\\mathrm{O}_2 \\rightarrow n\\,\\mathrm{CO}_2 + (n+1)\\,\\mathrm{H}_2\\mathrm{O}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of carbon atoms"
          },
          {
            "symbol": "C_nH_2n+2",
            "meaning": "alkane formula"
          },
          {
            "symbol": "O₂",
            "meaning": "oxygen required"
          },
          {
            "symbol": "CO₂, H₂O",
            "meaning": "combustion products"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "functional-groups",
      "structural-isomers",
      "enthalpy-and-enthalpy-changes"
    ],
    "wikipediaTitle": "Alkane",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Alkane — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Alkane"
      },
      {
        "label": "PubChem",
        "url": "https://pubchem.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "slug": "functional-groups",
    "title": "Functional groups",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "A functional group is an atom or small group of atoms that gives a family of organic compounds its characteristic reactions. The –OH of alcohols, the C=O of aldehydes and ketones, the –COOH of carboxylic acids and the –NH₂ of amines each dictate behaviour largely independent of the carbon skeleton.",
    "aliases": [
      "functional group",
      "characteristic group",
      "reactive group"
    ],
    "keyConcepts": [
      {
        "term": "Group defines the family",
        "definition": "Compounds sharing a functional group form a homologous series with similar reactions and a common IUPAC suffix, such as -ol for alcohols and -oic acid for carboxylic acids."
      },
      {
        "term": "Polarity and physical properties",
        "definition": "Hydrogen-bonding groups raise boiling points and water solubility, while non-polar groups such as alkyl chains do the opposite; a long chain can overwhelm a single hydroxyl group."
      },
      {
        "term": "Common groups",
        "definition": "Hydroxyl (–OH), carbonyl (C=O in aldehydes and ketones), carboxyl (–COOH), amino (–NH₂), ester (–COO–), and halogen substituents cover most introductory organic chemistry."
      },
      {
        "term": "Reaction sites",
        "definition": "Functional groups are where reactions occur: the C=C of alkenes adds bromine, carboxylic acids donate H⁺, and alcohols can be oxidised to aldehydes or acids."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "alcohols-and-ethers",
      "alkanes-and-hydrocarbons",
      "structural-isomers"
    ],
    "wikipediaTitle": "Functional group",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Functional group — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Functional_group"
      },
      {
        "label": "PubChem",
        "url": "https://pubchem.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "slug": "structural-isomers",
    "title": "Structural isomers",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "Structural isomers share a molecular formula but differ in how their atoms are connected, so they are separate compounds with different boiling points and reactivity. Butane and 2-methylpropane, or ethanol and dimethyl ether, are standard examples.",
    "aliases": [
      "structural isomerism",
      "constitutional isomers",
      "skeletal isomers"
    ],
    "keyConcepts": [
      {
        "term": "Definition",
        "definition": "Same atoms and same molecular formula, different connectivity. Because the bonds differ, the molecules are distinct substances rather than different arrangements of one substance."
      },
      {
        "term": "Chain isomers",
        "definition": "The carbon skeleton is branched differently, as in butane versus 2-methylpropane; branching lowers boiling point by reducing surface contact between molecules."
      },
      {
        "term": "Position isomers",
        "definition": "The same functional group sits at a different place on the skeleton, as in propan-1-ol and propan-2-ol."
      },
      {
        "term": "Functional-group isomers",
        "definition": "The same formula gives different functional groups entirely, as with ethanol (C₂H₆O, an alcohol, b.p. 78 °C) and dimethyl ether (an ether, b.p. −25 °C)."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "alkanes-and-hydrocarbons",
      "functional-groups",
      "empirical-and-molecular-formulas"
    ],
    "wikipediaTitle": "Structural isomer",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Structural isomer — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Structural_isomer"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "polymers",
    "title": "Polymers",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "Polymers are long molecules built by repeatedly joining small monomers, either by addition across double bonds or by condensation with loss of a small molecule such as water. Chain length, branching, and cross-links decide whether the material is a flexible thermoplastic or a rigid thermoset.",
    "aliases": [
      "polymer",
      "macromolecule",
      "macromolecular compound"
    ],
    "keyConcepts": [
      {
        "term": "Monomer and repeat unit",
        "definition": "The monomer is the small molecule that polymerises; the repeat unit is the fragment that recurs along the chain, and the degree of polymerisation counts how many units it contains."
      },
      {
        "term": "Addition polymerisation",
        "definition": "Monomers with C=C double bonds join without losing any atoms, as in ethene forming polythene or styrene forming polystyrene."
      },
      {
        "term": "Condensation polymerisation",
        "definition": "Monomers with two reactive groups join with elimination of a small molecule, as in the formation of polyesters and polyamides such as nylon."
      },
      {
        "term": "Thermoplastics and thermosets",
        "definition": "Linear or branched chains held by weak forces soften on heating and can be remoulded, while covalently cross-linked networks cannot flow and char instead of melting."
      }
    ],
    "equations": [
      {
        "label": "Addition polymerisation of ethene",
        "latex": "n\\,\\mathrm{CH_2{=}CH_2} \\rightarrow \\mathrm{(CH_2CH_2)}_n",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of monomer units"
          },
          {
            "symbol": "CH₂=CH₂",
            "meaning": "ethene monomer"
          },
          {
            "symbol": "(CH₂CH₂)ₙ",
            "meaning": "polythene repeat unit"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "alkanes-and-hydrocarbons",
      "functional-groups",
      "structural-isomers"
    ],
    "wikipediaTitle": "Polymer",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Polymer — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Polymer"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "alcohols-and-ethers",
    "title": "Alcohols and ethers",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "Alcohols carry an –OH group on an sp³ carbon and hydrogen-bond with one another, giving high boiling points and, for short chains, good water solubility. Ethers have an oxygen bridging two carbon groups but no O–H bond, so they cannot donate hydrogen bonds and are far more volatile than isomeric alcohols.",
    "aliases": [
      "alcohols",
      "ethers",
      "alkanols"
    ],
    "keyConcepts": [
      {
        "term": "Hydroxyl group",
        "definition": "The O–H bond is strongly polar, so alcohols act as hydrogen-bond donors and acceptors; this raises boiling points well above those of comparable alkanes."
      },
      {
        "term": "Primary, secondary, tertiary",
        "definition": "An alcohol is classified by how many carbon atoms are attached to the carbon bearing –OH, which controls whether oxidation gives an aldehyde, a ketone, or no reaction."
      },
      {
        "term": "Ether properties",
        "definition": "The C–O–C linkage is polar but has no hydrogen to donate, so ethers have lower boiling points than alcohols and are only sparingly soluble in water; they are relatively inert and often used as solvents."
      },
      {
        "term": "Dehydration and oxidation",
        "definition": "Acid-catalysed dehydration of an alcohol gives an alkene, and oxidation with dichromate or permanganate converts primary alcohols to aldehydes and then carboxylic acids and secondary alcohols to ketones."
      }
    ],
    "equations": [
      {
        "label": "Acid-catalysed dehydration of ethanol",
        "latex": "\\mathrm{C_2H_5OH} \\rightarrow \\mathrm{C_2H_4} + \\mathrm{H_2O}",
        "variables": [
          {
            "symbol": "C₂H₅OH",
            "meaning": "ethanol"
          },
          {
            "symbol": "C₂H₄",
            "meaning": "ethene"
          },
          {
            "symbol": "H₂O",
            "meaning": "water eliminated"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "functional-groups",
      "alkanes-and-hydrocarbons",
      "structural-isomers"
    ],
    "wikipediaTitle": "Alcohol (chemistry)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Alcohol (chemistry) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Alcohol_(chemistry)"
      },
      {
        "label": "PubChem",
        "url": "https://pubchem.ncbi.nlm.nih.gov/"
      },
      {
        "label": "Ether — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ether"
      }
    ]
  },
  {
    "slug": "aromatic-compounds-and-benzene",
    "title": "Aromatic compounds and benzene",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "Benzene, C₆H₆, is a planar six-carbon ring in which six π electrons are delocalised around the whole ring, satisfying Hückel's 4n+2 rule. That delocalisation makes benzene about 150 kJ mol⁻¹ more stable than a hypothetical cyclohexatriene, so it undergoes substitution rather than addition.",
    "aliases": [
      "aromaticity",
      "arenes",
      "benzene ring"
    ],
    "keyConcepts": [
      {
        "term": "Delocalised π system",
        "definition": "Each carbon contributes one p electron to a continuous π cloud above and below the ring, so all six C–C bonds are identical, with lengths between single and double bonds."
      },
      {
        "term": "Hückel's rule",
        "definition": "A planar, cyclic, fully conjugated system with 4n+2 π electrons is aromatic; benzene has six (n = 1), while cyclobutadiene with four is antiaromatic."
      },
      {
        "term": "Resonance stability",
        "definition": "The measured enthalpy of hydrogenation of benzene is much less exothermic than three times that of cyclohexene, and the difference is the resonance energy that makes the ring unreactive toward addition."
      },
      {
        "term": "Electrophilic substitution",
        "definition": "Reagents such as NO₂⁺ or Br⁺ replace a ring hydrogen, restoring the aromatic system; nitration, halogenation, and Friedel–Crafts alkylation are typical examples."
      }
    ],
    "equations": [
      {
        "label": "Nitration of benzene",
        "latex": "\\mathrm{C_6H_6} + \\mathrm{HNO_3} \\rightarrow \\mathrm{C_6H_5NO_2} + \\mathrm{H_2O}",
        "variables": [
          {
            "symbol": "C₆H₆",
            "meaning": "benzene"
          },
          {
            "symbol": "HNO₃",
            "meaning": "nitric acid (with H₂SO₄ catalyst)"
          },
          {
            "symbol": "C₆H₅NO₂",
            "meaning": "nitrobenzene"
          },
          {
            "symbol": "H₂O",
            "meaning": "water"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "structural-isomers",
      "alkanes-and-hydrocarbons",
      "functional-groups"
    ],
    "wikipediaTitle": "Aromatic compound",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Aromatic compound — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Aromatic_compound"
      },
      {
        "label": "PubChem",
        "url": "https://pubchem.ncbi.nlm.nih.gov/"
      }
    ]
  },
  {
    "slug": "enthalpy-and-enthalpy-changes",
    "title": "Enthalpy and enthalpy changes",
    "subject": "chemistry",
    "category": "thermochemistry",
    "summary": "Enthalpy H is the heat content of a system at constant pressure, so a reaction's enthalpy change ΔH equals the heat exchanged with the surroundings when pressure stays constant. Exothermic reactions have negative ΔH, endothermic ones positive, and tabulated formation enthalpies allow ΔH to be calculated.",
    "aliases": [
      "enthalpy",
      "heat of reaction",
      "reaction enthalpy"
    ],
    "keyConcepts": [
      {
        "term": "Enthalpy as a state function",
        "definition": "H = U + PV depends only on the current state, not on the path taken, which is why ΔH for a reaction is fixed by the initial and final substances."
      },
      {
        "term": "Sign convention",
        "definition": "ΔH is negative when the system releases heat and the surroundings warm up (exothermic), and positive when the system absorbs heat (endothermic). The reverse reaction has the same magnitude with the opposite sign."
      },
      {
        "term": "Standard enthalpy of formation",
        "definition": "The enthalpy change when one mole of a compound forms from its elements in their standard states at 298 K and 1 bar; elements in their standard states are assigned zero."
      },
      {
        "term": "Bond enthalpy estimate",
        "definition": "Breaking bonds costs energy and forming bonds releases it, so ΔH is roughly the sum of bonds broken minus the sum of bonds formed; the estimate is less accurate than formation data because bond enthalpies are averaged."
      }
    ],
    "equations": [
      {
        "label": "Enthalpy change at constant pressure (per mole: ΔH = q_p/n)",
        "latex": "\\Delta H = q_p",
        "variables": [
          {
            "symbol": "ΔH",
            "meaning": "enthalpy change (kJ), or kJ mol⁻¹ after dividing by moles"
          },
          {
            "symbol": "q_p",
            "meaning": "heat exchanged at constant pressure (J)"
          }
        ]
      },
      {
        "label": "Reaction enthalpy from formation enthalpies",
        "latex": "\\Delta H^{\\circ}_{\\text{rxn}} = \\sum \\Delta H^{\\circ}_{f}(\\text{products}) - \\sum \\Delta H^{\\circ}_{f}(\\text{reactants})",
        "variables": [
          {
            "symbol": "ΔH°rxn",
            "meaning": "standard reaction enthalpy"
          },
          {
            "symbol": "ΔH°f",
            "meaning": "standard enthalpy of formation"
          },
          {
            "symbol": "Σ",
            "meaning": "sum over all species, weighted by coefficients"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "hess-law",
      "calorimetry",
      "gibbs-free-energy-and-spontaneity"
    ],
    "wikipediaTitle": "Enthalpy",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Enthalpy — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Enthalpy"
      },
      {
        "label": "NIST Chemistry WebBook",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ]
  },
  {
    "slug": "hess-law",
    "title": "Hess's law",
    "subject": "chemistry",
    "category": "thermochemistry",
    "summary": "Hess's law states that the enthalpy change of a reaction is the same whichever route is taken, because enthalpy is a state function. An unknown ΔH can therefore be found by adding the enthalpy changes of known steps that sum to the overall change.",
    "aliases": [
      "Hess law",
      "law of constant heat summation",
      "Hess's law of heat summation"
    ],
    "keyConcepts": [
      {
        "term": "State function argument",
        "definition": "Enthalpy depends only on the initial and final states, so any sequence of steps connecting them must give the same total ΔH."
      },
      {
        "term": "Adding known steps",
        "definition": "Choose reactions with tabulated ΔH, such as combustion or formation reactions, and combine them so the intermediates cancel."
      },
      {
        "term": "Manipulating equations",
        "definition": "Reversing a step changes the sign of its ΔH, and multiplying a step multiplies its ΔH by the same factor."
      },
      {
        "term": "Energy cycle diagrams",
        "definition": "A cycle with one unknown arrow lets the unknown be found by closing the loop, a method used for lattice enthalpy and hydration enthalpy."
      }
    ],
    "equations": [
      {
        "label": "Total enthalpy change over a route",
        "latex": "\\Delta H_{\\text{overall}} = \\sum \\Delta H_{\\text{steps}}",
        "variables": [
          {
            "symbol": "ΔH_overall",
            "meaning": "enthalpy change of the overall reaction"
          },
          {
            "symbol": "ΔH_steps",
            "meaning": "enthalpy change of each individual step"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "enthalpy-and-enthalpy-changes",
      "calorimetry",
      "gibbs-free-energy-and-spontaneity"
    ],
    "wikipediaTitle": "Hess's law",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Hess's law — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hess%27s_law"
      },
      {
        "label": "NIST Chemistry WebBook",
        "url": "https://webbook.nist.gov/chemistry/"
      }
    ]
  },
  {
    "slug": "calorimetry",
    "title": "Calorimetry",
    "subject": "chemistry",
    "category": "thermochemistry",
    "summary": "Calorimetry measures the heat exchanged in a physical or chemical change from the temperature change of a known mass of water or of a calibrated calorimeter. A coffee-cup calorimeter works at constant pressure, while a bomb calorimeter measures the heat released at constant volume.",
    "aliases": [
      "calorimeter",
      "bomb calorimetry",
      "heat measurement"
    ],
    "keyConcepts": [
      {
        "term": "Heat and temperature change",
        "definition": "The heat gained or lost by a substance is q = mcΔT, where m is its mass, c its specific heat capacity, and ΔT the temperature change; this relation is the prerequisite from physics, and chemistry applies it to find reaction enthalpies."
      },
      {
        "term": "Calibrating the calorimeter",
        "definition": "The heat capacity of the apparatus itself is found by an electrical calibration or by a known reaction, then q = CΔT corrects for heat absorbed by the container."
      },
      {
        "term": "Constant pressure versus constant volume",
        "definition": "A coffee-cup calorimeter open to the air measures ΔH. A sealed bomb measures ΔU, which differs from ΔH by the small PV work term when gases are produced or consumed."
      },
      {
        "term": "Heat loss",
        "definition": "Uninsulated calorimeters lose heat to the room, so values are corrected by extrapolating the temperature–time curve or by using a calibration run under the same conditions."
      }
    ],
    "equations": [
      {
        "label": "Heat absorbed by a substance",
        "latex": "q = mc\\Delta T",
        "variables": [
          {
            "symbol": "q",
            "meaning": "heat transferred (J)"
          },
          {
            "symbol": "m",
            "meaning": "mass (g)"
          },
          {
            "symbol": "c",
            "meaning": "specific heat capacity (J g⁻¹ K⁻¹)"
          },
          {
            "symbol": "ΔT",
            "meaning": "temperature change (K)"
          }
        ]
      },
      {
        "label": "Heat absorbed by the calorimeter",
        "latex": "q_{\\text{cal}} = C_{\\text{cal}}\\Delta T",
        "variables": [
          {
            "symbol": "q_cal",
            "meaning": "heat absorbed by apparatus (J)"
          },
          {
            "symbol": "C_cal",
            "meaning": "heat capacity of calorimeter (J K⁻¹)"
          },
          {
            "symbol": "ΔT",
            "meaning": "temperature change (K)"
          }
        ]
      },
      {
        "label": "Enthalpy change per mole from calorimeter data",
        "latex": "\\Delta H = -\\frac{q_{\\text{cal}}}{n}",
        "variables": [
          {
            "symbol": "ΔH",
            "meaning": "reaction enthalpy (J mol⁻¹)"
          },
          {
            "symbol": "q_cal",
            "meaning": "heat measured by the calorimeter (J)"
          },
          {
            "symbol": "n",
            "meaning": "amount of limiting reactant (mol)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "enthalpy-and-enthalpy-changes",
      "hess-law",
      "gibbs-free-energy-and-spontaneity",
      "specific-heat-capacity"
    ],
    "wikipediaTitle": "Calorimetry",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Calorimetry — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Calorimetry"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "gibbs-free-energy-and-spontaneity",
    "title": "Gibbs free energy and spontaneity",
    "subject": "chemistry",
    "category": "thermochemistry",
    "summary": "The Gibbs free energy G = H − TS combines enthalpy and entropy, and at constant temperature and pressure a process is spontaneous in the forward direction when ΔG is negative. An endothermic reaction can still go if its entropy increase is large enough at the working temperature.",
    "aliases": [
      "Gibbs energy",
      "free enthalpy",
      "Gibbs function"
    ],
    "keyConcepts": [
      {
        "term": "Criterion for spontaneity",
        "definition": "ΔG < 0 means the forward process is spontaneous, ΔG = 0 means equilibrium, and ΔG > 0 means the reverse process is spontaneous."
      },
      {
        "term": "Competing terms",
        "definition": "The enthalpy term ΔH favours exothermic processes and the entropy term −TΔS favours increasing disorder; temperature acts as the weighting factor between them."
      },
      {
        "term": "Crossover temperature",
        "definition": "When ΔH and ΔS have the same sign, the reaction changes direction at T = ΔH/ΔS. Ice melting above 0 °C and water boiling above 100 °C are everyday crossovers at 1 atm."
      },
      {
        "term": "Link to equilibrium",
        "definition": "ΔG° = −RT ln K, so a large negative ΔG° corresponds to a large equilibrium constant and a reaction that proceeds nearly to completion."
      }
    ],
    "equations": [
      {
        "label": "Gibbs free energy change",
        "latex": "\\Delta G = \\Delta H - T\\Delta S",
        "variables": [
          {
            "symbol": "ΔG",
            "meaning": "change in Gibbs free energy (kJ mol⁻¹)"
          },
          {
            "symbol": "ΔH",
            "meaning": "change in enthalpy (kJ mol⁻¹)"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature (K)"
          },
          {
            "symbol": "ΔS",
            "meaning": "change in entropy (kJ mol⁻¹ K⁻¹ — divide tabulated J mol⁻¹ K⁻¹ values by 1000)"
          }
        ]
      },
      {
        "label": "Standard free energy and equilibrium",
        "latex": "\\Delta G^{\\circ} = -RT\\ln K",
        "variables": [
          {
            "symbol": "ΔG°",
            "meaning": "standard Gibbs free energy change"
          },
          {
            "symbol": "R",
            "meaning": "gas constant (8.314 J mol⁻¹ K⁻¹)"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature (K)"
          },
          {
            "symbol": "K",
            "meaning": "equilibrium constant"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "enthalpy-and-enthalpy-changes",
      "hess-law",
      "galvanic-voltaic-cells"
    ],
    "wikipediaTitle": "Gibbs free energy",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Gibbs free energy — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Gibbs_free_energy"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "galvanic-voltaic-cells",
    "title": "Galvanic (voltaic) cells",
    "subject": "chemistry",
    "category": "electrochemistry",
    "summary": "A galvanic cell turns the free energy of a spontaneous redox reaction into electrical work: oxidation at the anode sends electrons through an external circuit to reduction at the cathode. A salt bridge or porous separator completes the circuit by carrying ions and keeping each half-cell electrically neutral.",
    "aliases": [
      "galvanic cell",
      "voltaic cell",
      "electrochemical cell"
    ],
    "keyConcepts": [
      {
        "term": "Anode and cathode",
        "definition": "Oxidation always occurs at the anode and reduction at the cathode. In a galvanic cell the anode is the negative electrode because it releases electrons."
      },
      {
        "term": "Half-cells and salt bridge",
        "definition": "Each half-cell contains a redox couple; the salt bridge lets ions migrate to balance charge without mixing the solutions, so the reaction can keep running."
      },
      {
        "term": "Cell notation",
        "definition": "A cell diagram writes anode | anode solution || cathode solution | cathode, with a single bar for a phase boundary and a double bar for the salt bridge."
      },
      {
        "term": "EMF and free energy",
        "definition": "The cell potential measured under zero current is the electromotive force, and ΔG° = −nFE°cell links it to the thermodynamics of the reaction."
      }
    ],
    "equations": [
      {
        "label": "Standard cell potential",
        "latex": "E^{\\circ}_{\\text{cell}} = E^{\\circ}_{\\text{cathode}} - E^{\\circ}_{\\text{anode}}",
        "variables": [
          {
            "symbol": "E°cell",
            "meaning": "standard cell potential (V)"
          },
          {
            "symbol": "E°cathode",
            "meaning": "standard reduction potential of cathode couple"
          },
          {
            "symbol": "E°anode",
            "meaning": "standard reduction potential of anode couple"
          }
        ]
      },
      {
        "label": "Free energy from cell potential",
        "latex": "\\Delta G^{\\circ} = -nFE^{\\circ}_{\\text{cell}}",
        "variables": [
          {
            "symbol": "ΔG°",
            "meaning": "standard Gibbs free energy change (J)"
          },
          {
            "symbol": "n",
            "meaning": "moles of electrons transferred"
          },
          {
            "symbol": "F",
            "meaning": "Faraday constant (96 485 C mol⁻¹)"
          },
          {
            "symbol": "E°cell",
            "meaning": "standard cell potential (V)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "standard-electrode-potentials",
      "electrolysis",
      "gibbs-free-energy-and-spontaneity"
    ],
    "wikipediaTitle": "Galvanic cell",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Galvanic cell — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Galvanic_cell"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "electrolysis",
    "title": "Electrolysis",
    "subject": "chemistry",
    "category": "electrochemistry",
    "summary": "Electrolysis uses an external power supply to drive a non-spontaneous redox reaction, oxidising species at the anode and reducing them at the cathode. The amount of substance converted is proportional to the charge passed, which Faraday's laws express through the Faraday constant.",
    "aliases": [
      "electrolytic cell",
      "electrolytic decomposition"
    ],
    "keyConcepts": [
      {
        "term": "Forcing the reaction",
        "definition": "An applied voltage above the cell's reversible potential plus any overpotential reverses the spontaneous direction, so electrical energy is stored as chemical change."
      },
      {
        "term": "Competing electrode reactions",
        "definition": "In aqueous solution water can be oxidised to oxygen or reduced to hydrogen, so the species that reacts is the one requiring the least extra potential; overpotential on a particular metal can change the outcome."
      },
      {
        "term": "Faraday's laws",
        "definition": "The mass deposited or liberated is proportional to the charge passed and to the molar mass, and inversely proportional to the number of electrons per ion."
      },
      {
        "term": "Industrial examples",
        "definition": "Chlor-alkali electrolysis makes chlorine and sodium hydroxide from brine, and the Hall–Héroult process reduces alumina dissolved in cryolite to aluminium metal."
      }
    ],
    "equations": [
      {
        "label": "Charge passed",
        "latex": "Q = It",
        "variables": [
          {
            "symbol": "Q",
            "meaning": "charge (C)"
          },
          {
            "symbol": "I",
            "meaning": "current (A)"
          },
          {
            "symbol": "t",
            "meaning": "time (s)"
          }
        ]
      },
      {
        "label": "Mass deposited by electrolysis",
        "latex": "m = \\frac{MIt}{zF}",
        "variables": [
          {
            "symbol": "m",
            "meaning": "mass deposited (g)"
          },
          {
            "symbol": "M",
            "meaning": "molar mass (g mol⁻¹)"
          },
          {
            "symbol": "I",
            "meaning": "current (A)"
          },
          {
            "symbol": "t",
            "meaning": "time (s)"
          },
          {
            "symbol": "z",
            "meaning": "electrons per ion"
          },
          {
            "symbol": "F",
            "meaning": "Faraday constant (96 485 C mol⁻¹)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "electrolytes-and-conductivity",
      "galvanic-voltaic-cells",
      "standard-electrode-potentials"
    ],
    "wikipediaTitle": "Electrolysis",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Electrolysis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Electrolysis"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "standard-electrode-potentials",
    "title": "Standard electrode potentials",
    "subject": "chemistry",
    "category": "electrochemistry",
    "summary": "A standard electrode potential E° is the potential of a half-cell measured against the standard hydrogen electrode at 298 K with unit activity. More positive E° means a greater tendency to be reduced, and combining two half-cell values gives the cell potential and, through ΔG° = −nFE°, the reaction's free energy.",
    "aliases": [
      "standard reduction potential",
      "electrode potential",
      "reduction potential"
    ],
    "keyConcepts": [
      {
        "term": "The hydrogen reference",
        "definition": "The standard hydrogen electrode, H₂ at 1 bar bubbled over platinum in 1 mol dm⁻³ H⁺, is assigned exactly 0.00 V, and all other values are quoted relative to it."
      },
      {
        "term": "Sign convention",
        "definition": "E° is always tabulated as a reduction potential. A negative value such as −0.76 V for Zn²⁺/Zn means zinc is a stronger reducing agent than hydrogen and is oxidised when paired with it."
      },
      {
        "term": "Combining half-cells",
        "definition": "E°cell = E°cathode − E°anode uses both values as written for reduction; the difference, not the sum, is taken because both are referred to the same reference."
      },
      {
        "term": "Nernst equation",
        "definition": "Outside standard conditions the potential shifts with concentration and pressure according to the reaction quotient, which is why a cell voltage falls as reactants are consumed."
      }
    ],
    "equations": [
      {
        "label": "Cell potential from standard reduction potentials",
        "latex": "E^{\\circ}_{\\text{cell}} = E^{\\circ}_{\\text{cathode}} - E^{\\circ}_{\\text{anode}}",
        "variables": [
          {
            "symbol": "E°cell",
            "meaning": "standard cell potential (V)"
          },
          {
            "symbol": "E°cathode",
            "meaning": "reduction potential at the cathode"
          },
          {
            "symbol": "E°anode",
            "meaning": "reduction potential at the anode"
          }
        ]
      },
      {
        "label": "Nernst equation",
        "latex": "E = E^{\\circ} - \\frac{RT}{nF}\\ln Q",
        "variables": [
          {
            "symbol": "E",
            "meaning": "cell potential under non-standard conditions"
          },
          {
            "symbol": "E°",
            "meaning": "standard cell potential"
          },
          {
            "symbol": "R",
            "meaning": "gas constant (8.314 J mol⁻¹ K⁻¹)"
          },
          {
            "symbol": "T",
            "meaning": "absolute temperature (K)"
          },
          {
            "symbol": "n",
            "meaning": "moles of electrons transferred"
          },
          {
            "symbol": "F",
            "meaning": "Faraday constant"
          },
          {
            "symbol": "Q",
            "meaning": "reaction quotient"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "galvanic-voltaic-cells",
      "electrolysis",
      "gibbs-free-energy-and-spontaneity"
    ],
    "wikipediaTitle": "Standard electrode potential",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Standard electrode potential — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Standard_electrode_potential"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "alkenes-and-alkynes",
    "title": "Alkenes and alkynes",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "Alkenes contain a carbon–carbon double bond and alkynes a triple bond, so both are unsaturated and react by addition rather than substitution. The extra bond makes them more reactive than alkanes, and the geometry around a double bond is planar while a triple bond is linear.",
    "aliases": [
      "unsaturated hydrocarbons",
      "double and triple bonds"
    ],
    "keyConcepts": [
      {
        "term": "Addition reactions",
        "definition": "The π bond opens to add atoms across the double or triple bond: hydrogen gives an alkane, a halogen such as bromine gives a dibromoalkane, and water with acid catalyst gives an alcohol."
      },
      {
        "term": "Geometric isomerism",
        "definition": "A double bond cannot rotate, so each carbon’s substituents are locked in cis (same side) or trans (opposite sides) arrangements with different physical properties."
      },
      {
        "term": "Bromine water test",
        "definition": "Bromine water is orange-brown and decolourises when added to an alkene or alkyne as bromine adds across the multiple bond; alkanes leave the colour unchanged in the dark."
      },
      {
        "term": "Ethene as a feedstock",
        "definition": "Ethene is the highest-volume organic chemical, polymerised into polyethylene and converted into ethanol, ethylene oxide, and many other products."
      }
    ],
    "equations": [
      {
        "label": "Hydrogenation of ethene",
        "latex": "\\mathrm{C_2H_4} + \\mathrm{H_2} \\rightarrow \\mathrm{C_2H_6}",
        "variables": [
          {
            "symbol": "C₂H₄",
            "meaning": "ethene (ethylene)"
          },
          {
            "symbol": "H₂",
            "meaning": "hydrogen"
          },
          {
            "symbol": "C₂H₆",
            "meaning": "ethane"
          }
        ]
      },
      {
        "label": "Bromine addition to ethene",
        "latex": "\\mathrm{C_2H_4} + \\mathrm{Br_2} \\rightarrow \\mathrm{CH_2BrCH_2Br}",
        "variables": [
          {
            "symbol": "Br₂",
            "meaning": "bromine (orange-brown)"
          },
          {
            "symbol": "CH₂BrCH₂Br",
            "meaning": "1,2-dibromoethane (colourless)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "alkanes-and-hydrocarbons",
      "structural-isomers",
      "polymers",
      "functional-groups"
    ],
    "wikipediaTitle": "Alkene",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Alkene — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Alkene"
      },
      {
        "label": "Alkyne — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Alkyne"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "carboxylic-acids-and-esters",
    "title": "Carboxylic acids and esters",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "Carboxylic acids contain a –COOH group that donates a proton, making them weak acids, and react with alcohols under acid catalysis to form esters. Esters are the volatile compounds behind many fruit and flower smells and are hydrolysed back to acid and alcohol by water.",
    "aliases": [
      "carboxylic acids",
      "esterification"
    ],
    "keyConcepts": [
      {
        "term": "Acidity of the carboxyl group",
        "definition": "The C=O withdraws electron density and the resulting carboxylate ion is resonance-stabilised, so carboxylic acids are far stronger acids than alcohols but still weak overall (ethanoic acid has pKa ≈ 4.76)."
      },
      {
        "term": "Esterification",
        "definition": "A carboxylic acid and an alcohol condense with a trace of strong acid catalyst to give an ester and water; the reaction is reversible, so removing water drives it forward."
      },
      {
        "term": "Fats and oils",
        "definition": "Natural fats and oils are triesters of glycerol with long-chain fatty acids; hydrolysis with base (saponification) gives soap and glycerol."
      },
      {
        "term": "Ester hydrolysis",
        "definition": "Water, especially with acid or base, cleaves an ester back into a carboxylic acid (or its salt) and an alcohol, the reverse of esterification."
      }
    ],
    "equations": [
      {
        "label": "Fischer esterification of ethanoic acid with methanol",
        "latex": "\\mathrm{CH_3COOH} + \\mathrm{CH_3OH} \\rightleftharpoons \\mathrm{CH_3COOCH_3} + \\mathrm{H_2O}",
        "variables": [
          {
            "symbol": "CH₃COOH",
            "meaning": "ethanoic (acetic) acid"
          },
          {
            "symbol": "CH₃OH",
            "meaning": "methanol"
          },
          {
            "symbol": "CH₃COOCH₃",
            "meaning": "methyl ethanoate (an ester)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "alcohols-and-ethers",
      "functional-groups",
      "ph-and-poh-scales",
      "polymers"
    ],
    "wikipediaTitle": "Carboxylic acid",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Carboxylic acid — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Carboxylic_acid"
      },
      {
        "label": "Ester — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ester"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  },
  {
    "slug": "amines-and-amides",
    "title": "Amines and amides",
    "subject": "chemistry",
    "category": "organic-chemistry",
    "summary": "Amines are organic derivatives of ammonia with a nitrogen bearing a lone pair, so they act as bases and nucleophiles. Amides place that nitrogen next to a carbonyl group, which delocalises the lone pair and makes amides neutral rather than basic — the linkage that joins amino acids in proteins.",
    "aliases": [
      "amines",
      "amides",
      "amino compounds"
    ],
    "keyConcepts": [
      {
        "term": "Basicity of amines",
        "definition": "The nitrogen lone pair accepts a proton, so amines turn damp red litmus blue; aliphatic amines are stronger bases than ammonia because alkyl groups donate electron density."
      },
      {
        "term": "Amide resonance",
        "definition": "In an amide the nitrogen lone pair is delocalised into the C=O π system, so the nitrogen is not basic and the C–N bond has partial double-bond character, which makes amides planar and rigid."
      },
      {
        "term": "Peptide bonds",
        "definition": "A peptide bond is an amide formed between the carboxyl group of one amino acid and the amino group of the next, releasing water; its rigidity shapes protein backbones."
      },
      {
        "term": "Amine salts",
        "definition": "Amines react with acids to give ammonium salts, which are water-soluble; adding base liberates the free amine again, the basis of extracting amines from mixtures."
      }
    ],
    "equations": [
      {
        "label": "Methylamine acting as a base in water",
        "latex": "\\mathrm{CH_3NH_2} + \\mathrm{H_2O} \\rightleftharpoons \\mathrm{CH_3NH_3^+} + \\mathrm{OH^-}",
        "variables": [
          {
            "symbol": "CH₃NH₂",
            "meaning": "methylamine (a primary amine)"
          },
          {
            "symbol": "CH₃NH₃⁺",
            "meaning": "methylammonium ion"
          },
          {
            "symbol": "OH⁻",
            "meaning": "hydroxide ion, so the solution is basic"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "functional-groups",
      "carboxylic-acids-and-esters",
      "structural-isomers",
      "chemical-bonding"
    ],
    "wikipediaTitle": "Amine",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Amine — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Amine"
      },
      {
        "label": "Amide — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Amide"
      },
      {
        "label": "OpenStax Chemistry 2e",
        "url": "https://openstax.org/books/chemistry-2e"
      }
    ]
  }
];
