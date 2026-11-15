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
    "title": "Cell theory",
    "subject": "biology",
    "summary": "Cells are the smallest units that carry out the processes of life. Nearly all living things are built from cells, which take in nutrients, release energy, grow, and reproduce, and which group together into tissues, organs, and systems.",
    "aliases": [
      "cell biology",
      "cells"
    ],
    "keyConcepts": [
      {
        "term": "Cell theory",
        "definition": "All living organisms are made of one or more cells, the cell is the basic unit of structure and function, and all cells arise from existing cells."
      },
      {
        "term": "Cell size and scale",
        "definition": "Most cells are micrometres across — bacteria around 1 µm, animal cells 10–100 µm — so their surface-area-to-volume ratio limits how large a single cell can grow."
      },
      {
        "term": "Prokaryotes and eukaryotes",
        "definition": "Prokaryotes lack a membrane-bound nucleus, while eukaryotes enclose DNA in a nucleus and run membrane-bound organelles; both kinds are cells."
      },
      {
        "term": "Levels of organisation",
        "definition": "Similar cells form tissues, tissues form organs, and organs work together as systems, the same hierarchy used throughout anatomy and physiology."
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
      "photosynthesis",
      "prokaryotic-and-eukaryotic-cells",
      "cell-membrane-and-transport",
      "cell-organelles"
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
    "category": "human-biology",
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
        "term": "Genotype and phenotype",
        "definition": "An organism’s genotype is its combination of alleles; its phenotype is the observable trait, which depends on the genotype and on the environment."
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
      "ecology-and-ecosystems",
      "dominant-and-recessive-alleles",
      "mendelian-inheritance"
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
      "ecosystems"
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
        "term": "Biome",
        "definition": "A large-scale community shaped by climate, such as tropical rainforest, desert, grassland, or tundra, with characteristic plants and animals."
      },
      {
        "term": "Energy and matter flow",
        "definition": "Energy enters an ecosystem as sunlight and leaves as heat, while matter cycles between organisms and the non-living environment; the detailed food chains are covered under food webs and trophic levels."
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
      "genetics-basics",
      "food-webs-and-trophic-levels",
      "carbon-cycle"
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
  },
  {
    "slug": "cell-membrane-and-transport",
    "title": "Cell membrane and transport",
    "subject": "biology",
    "category": "cells",
    "summary": "The plasma membrane is a phospholipid bilayer studded with proteins that separates a cell from its surroundings and controls what crosses it. Small nonpolar molecules diffuse straight through the bilayer, while ions and larger polar molecules depend on channel proteins, carrier proteins, pumps, or vesicles.",
    "aliases": [
      "plasma membrane",
      "membrane transport",
      "cell membrane"
    ],
    "keyConcepts": [
      {
        "term": "Phospholipid bilayer",
        "definition": "Two sheets of phospholipids with hydrophilic heads facing the water outside and inside the cell and hydrophobic tails pointing inward; the oily core blocks most polar solutes."
      },
      {
        "term": "Diffusion and osmosis",
        "definition": "Net movement of particles from higher to lower concentration. Osmosis is the diffusion of water across a selectively permeable membrane towards the side with more dissolved solute."
      },
      {
        "term": "Facilitated diffusion",
        "definition": "Passive movement of ions and polar molecules through channel or carrier proteins, down their concentration gradient and without any ATP input."
      },
      {
        "term": "Active transport",
        "definition": "Pumps such as the sodium–potassium ATPase move ions against their gradient by hydrolysing ATP; the resulting gradients power nerve impulses and secondary transport."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "cell-biology",
      "cell-organelles",
      "prokaryotic-and-eukaryotic-cells"
    ],
    "wikipediaTitle": "Cell membrane",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Cell membrane — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cell_membrane"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "cell-organelles",
    "title": "Cell organelles",
    "subject": "biology",
    "category": "cells",
    "summary": "Eukaryotic cells divide their chemistry among membrane-bound compartments. The nucleus holds the DNA, mitochondria (and, in plants, chloroplasts) supply energy, the endoplasmic reticulum and Golgi apparatus build and ship proteins and lipids, and lysosomes digest worn-out material.",
    "aliases": [
      "organelles",
      "subcellular structures"
    ],
    "keyConcepts": [
      {
        "term": "Nucleus",
        "definition": "Double-membraned organelle that stores chromatin, carries out transcription, and exports mRNA through nuclear pores."
      },
      {
        "term": "Mitochondrion",
        "definition": "Organelle with a folded inner membrane where the electron transport chain and ATP synthase generate most of the cell's ATP; it carries its own small genome."
      },
      {
        "term": "Endoplasmic reticulum and Golgi apparatus",
        "definition": "The rough ER folds and modifies new proteins, the smooth ER makes lipids, and the Golgi sorts, tags, and dispatches them in vesicles."
      },
      {
        "term": "Lysosome",
        "definition": "Acid-filled vesicle containing hydrolytic enzymes that break down damaged organelles, engulfed particles, and macromolecules."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "cell-biology",
      "prokaryotic-and-eukaryotic-cells",
      "cell-membrane-and-transport",
      "proteins-and-amino-acids"
    ],
    "wikipediaTitle": "Organelle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Organelle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Organelle"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "mitosis-and-the-cell-cycle",
    "title": "Mitosis and the cell cycle",
    "subject": "biology",
    "category": "cells",
    "summary": "The cell cycle alternates interphase — growth plus DNA replication — with mitotic division, which splits the duplicated chromosomes into two genetically identical daughter cells. Checkpoints in G1, G2, and metaphase stall the cycle when DNA is damaged or chromosomes are not correctly attached to the spindle.",
    "aliases": [
      "cell cycle",
      "mitotic division",
      "somatic cell division"
    ],
    "keyConcepts": [
      {
        "term": "Interphase",
        "definition": "The G1, S, and G2 phases between divisions; DNA is copied during S phase, so each chromosome ends up as two sister chromatids."
      },
      {
        "term": "Mitotic phases",
        "definition": "Prophase: chromatin condenses and the spindle forms. Metaphase: chromosomes align at the equator. Anaphase: chromatids separate. Telophase: nuclei re-form."
      },
      {
        "term": "Cytokinesis",
        "definition": "Division of the cytoplasm after mitosis — a cleavage furrow in animal cells, a cell plate in plant cells — giving two separate daughter cells."
      },
      {
        "term": "Checkpoints",
        "definition": "Quality-control points that pause the cycle until conditions are met; loss of checkpoint control, for example through mutated p53, allows unchecked division."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "cell-biology",
      "meiosis",
      "stem-cells",
      "chromosomes-and-karyotypes"
    ],
    "wikipediaTitle": "Cell cycle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Cell cycle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cell_cycle"
      },
      {
        "label": "Mitosis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mitosis"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "meiosis",
    "title": "Meiosis",
    "subject": "biology",
    "category": "cells",
    "summary": "Meiosis is a two-round division that halves the chromosome number, producing four haploid cells that give rise to gametes or spores. Crossing over between homologues in prophase I and their independent assortment in metaphase I reshuffle alleles, so each product carries a different combination.",
    "aliases": [
      "reduction division",
      "meiotic division"
    ],
    "keyConcepts": [
      {
        "term": "Homologous chromosomes",
        "definition": "A maternally and a paternally inherited chromosome of the same pair, carrying the same genes at the same loci but possibly different alleles."
      },
      {
        "term": "Crossing over",
        "definition": "Exchange of segments between non-sister chromatids of a homologous pair at chiasmata during prophase I, creating new allele combinations."
      },
      {
        "term": "Independent assortment",
        "definition": "In metaphase I each homologous pair orients independently of the others, so 2^n gamete combinations are possible for n chromosome pairs."
      },
      {
        "term": "Haploid and diploid",
        "definition": "Haploid cells carry one chromosome set (n, human gametes have 23); diploid cells carry two sets (2n, human body cells have 46)."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "mitosis-and-the-cell-cycle",
      "mendelian-inheritance",
      "chromosomes-and-karyotypes"
    ],
    "wikipediaTitle": "Meiosis",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Meiosis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Meiosis"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "prokaryotic-and-eukaryotic-cells",
    "title": "Prokaryotic and eukaryotic cells",
    "subject": "biology",
    "category": "cells",
    "summary": "Prokaryotes — bacteria and archaea — have no membrane-bound nucleus and keep their DNA in a nucleoid, whereas eukaryotes enclose DNA in a nucleus and run membrane-bound organelles such as mitochondria. Prokaryotic ribosomes are 70S and eukaryotic cytosolic ribosomes 80S, a difference some antibiotics exploit.",
    "aliases": [
      "prokaryotes and eukaryotes",
      "prokaryotic vs eukaryotic cells"
    ],
    "keyConcepts": [
      {
        "term": "Nucleoid",
        "definition": "The region of a prokaryotic cell where the usually circular chromosome lies, not enclosed by a membrane and associated with few proteins."
      },
      {
        "term": "Peptidoglycan cell wall",
        "definition": "Mesh of sugar chains cross-linked by short peptides that surrounds most bacteria and gives the cell shape and osmotic protection; its thickness underlies Gram staining."
      },
      {
        "term": "Ribosome size",
        "definition": "Prokaryotic ribosomes sediment at 70S (30S and 50S subunits); eukaryotic cytosolic ribosomes are 80S (40S and 60S), which lets drugs target bacterial translation selectively."
      },
      {
        "term": "Endosymbiotic theory",
        "definition": "The idea that mitochondria and chloroplasts descend from engulfed bacteria, supported by their double membranes, circular DNA, and bacteria-like ribosomes and gene sequences."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "cell-biology",
      "bacteria",
      "cell-organelles",
      "viruses"
    ],
    "wikipediaTitle": "Prokaryote",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Prokaryote — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Prokaryote"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      },
      {
        "label": "Eukaryote — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Eukaryote"
      }
    ]
  },
  {
    "slug": "stem-cells",
    "title": "Stem cells",
    "subject": "biology",
    "category": "cells",
    "summary": "Stem cells both renew themselves and differentiate into specialised cell types. Embryonic stem cells are pluripotent and can form any tissue of the body, while adult stem cells such as haematopoietic stem cells are multipotent and normally produce only the cell types of their own tissue.",
    "aliases": [
      "stem cell",
      "stem cell biology"
    ],
    "keyConcepts": [
      {
        "term": "Potency",
        "definition": "The range of cell types a stem cell can become: totipotent (any cell plus placenta), pluripotent (any body cell), multipotent (several related types), or unipotent."
      },
      {
        "term": "Asymmetric division",
        "definition": "A division in which one daughter keeps the stem-cell fate while the other commits to differentiation, maintaining the stem-cell pool."
      },
      {
        "term": "Haematopoietic stem cell",
        "definition": "Bone-marrow stem cell that gives rise to all blood cell lineages; its transplant is a standard treatment for some leukaemias."
      },
      {
        "term": "Induced pluripotent stem cells",
        "definition": "Adult cells reprogrammed to a pluripotent state by introducing transcription factors such as Oct4, Sox2, Klf4, and c-Myc."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "cell-biology",
      "mitosis-and-the-cell-cycle",
      "gene-expression-regulation"
    ],
    "wikipediaTitle": "Stem cell",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Stem cell — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Stem_cell"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "dna-structure-and-replication",
    "title": "DNA structure and replication",
    "subject": "biology",
    "category": "molecular-biology",
    "summary": "DNA is a double helix of two antiparallel strands joined by hydrogen bonds between complementary bases, adenine with thymine and guanine with cytosine. Replication is semi-conservative: helicase unwinds the duplex, DNA polymerase adds nucleotides to a 3′ end, and the lagging strand is built in short Okazaki fragments.",
    "aliases": [
      "dna replication",
      "dna double helix"
    ],
    "keyConcepts": [
      {
        "term": "Complementary base pairing",
        "definition": "A pairs with T through two hydrogen bonds and G with C through three, so each strand can act as a template for the other."
      },
      {
        "term": "Semi-conservative replication",
        "definition": "Each new double helix keeps one original strand and one newly made strand, as shown by the Meselson–Stahl density-gradient experiment."
      },
      {
        "term": "Directionality",
        "definition": "Strands run antiparallel (5′→3′ opposite 3′→5′), and DNA polymerase can only extend a 3′ end, so the two strands are copied by different strategies."
      },
      {
        "term": "Okazaki fragments",
        "definition": "Short pieces synthesised discontinuously on the lagging strand after primase lays down RNA primers; DNA ligase then seals the gaps into one strand."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "genetics-basics",
      "transcription",
      "gene-mutations",
      "chromosomes-and-karyotypes"
    ],
    "wikipediaTitle": "DNA",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "DNA — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/DNA"
      },
      {
        "label": "DNA replication — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/DNA_replication"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "transcription",
    "title": "Transcription",
    "subject": "biology",
    "category": "molecular-biology",
    "summary": "Transcription copies a gene's DNA into RNA. RNA polymerase binds a promoter, unwinds the template strand, and adds complementary ribonucleotides in the 5′→3′ direction until a terminator releases the transcript; eukaryotic pre-mRNA is then capped, spliced, and given a poly-A tail.",
    "aliases": [
      "rna synthesis",
      "gene transcription"
    ],
    "keyConcepts": [
      {
        "term": "Promoter",
        "definition": "DNA sequence upstream of a gene where RNA polymerase and its helper factors bind and where the start site is fixed."
      },
      {
        "term": "Template and coding strands",
        "definition": "RNA polymerase reads the template strand, so the RNA matches the coding strand except that uracil replaces thymine."
      },
      {
        "term": "RNA polymerase",
        "definition": "Enzyme that links ribonucleotides by phosphodiester bonds; bacteria use one core enzyme with sigma factors, eukaryotes use RNA polymerase I, II, or III."
      },
      {
        "term": "RNA processing",
        "definition": "Eukaryotic pre-mRNA gains a 5′ cap, has introns removed by the spliceosome, and receives a poly-A tail before export to the cytoplasm."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "dna-structure-and-replication",
      "translation-and-the-genetic-code",
      "gene-expression-regulation"
    ],
    "wikipediaTitle": "Transcription (biology)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Transcription (biology) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Transcription_(biology)"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "translation-and-the-genetic-code",
    "title": "Translation and the genetic code",
    "subject": "biology",
    "category": "molecular-biology",
    "summary": "Ribosomes translate mRNA into protein by reading three-base codons, each matched by a tRNA carrying a specific amino acid. The code is redundant, unambiguous, and nearly universal, with AUG as the start codon and UAA, UAG, and UGA as stop codons.",
    "aliases": [
      "protein synthesis",
      "mrna translation"
    ],
    "keyConcepts": [
      {
        "term": "Codon",
        "definition": "A triplet of mRNA bases that specifies one amino acid or a stop signal; 61 of the 64 codons encode the 20 standard amino acids and three are stop codons."
      },
      {
        "term": "tRNA and anticodon",
        "definition": "Transfer RNA folds into a cloverleaf, carries one amino acid at its 3′ end, and pairs its anticodon with the mRNA codon in the ribosome."
      },
      {
        "term": "Ribosome sites",
        "definition": "The A site receives the incoming tRNA, the P site holds the growing peptide chain, and the E site releases the spent tRNA."
      },
      {
        "term": "Reading frame",
        "definition": "The grouping of bases into codons set by the start codon; an insertion or deletion that shifts the frame changes every downstream amino acid."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "transcription",
      "proteins-and-amino-acids",
      "gene-mutations"
    ],
    "wikipediaTitle": "Translation (biology)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Translation (biology) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Translation_(biology)"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "proteins-and-amino-acids",
    "title": "Proteins and amino acids",
    "subject": "biology",
    "category": "molecular-biology",
    "summary": "Proteins are polymers of amino acids linked by peptide bonds. The order of the 20 standard amino acids determines how the chain folds into α-helices and β-sheets, then into a stable three-dimensional shape that sets what the protein can do.",
    "aliases": [
      "protein structure",
      "polypeptides"
    ],
    "keyConcepts": [
      {
        "term": "Peptide bond",
        "definition": "Covalent bond formed by a condensation reaction between the carboxyl group of one amino acid and the amino group of the next, releasing water."
      },
      {
        "term": "Levels of structure",
        "definition": "Primary = amino acid sequence; secondary = local helices and sheets; tertiary = overall 3D fold; quaternary = assembly of several polypeptide subunits."
      },
      {
        "term": "Side chains",
        "definition": "The variable R group of each amino acid may be acidic, basic, polar, or nonpolar, and these interactions drive folding and set active-site chemistry."
      },
      {
        "term": "Denaturation",
        "definition": "Loss of a protein's shape by heat, extreme pH, or solvents, which breaks the weak bonds holding the fold and usually destroys function irreversibly."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "translation-and-the-genetic-code",
      "enzymes",
      "gene-expression-regulation"
    ],
    "wikipediaTitle": "Protein",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Protein — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Protein"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "enzymes",
    "title": "Enzymes",
    "subject": "biology",
    "category": "molecular-biology",
    "summary": "Most enzymes are proteins, though some RNA molecules (ribozymes) also catalyse reactions; enzymes bind substrates in an active site and lower a reaction’s activation energy without being consumed. Rate rises with substrate concentration until the enzyme is saturated, and each enzyme works best within a narrow temperature and pH range.",
    "aliases": [
      "biological catalysts",
      "biocatalysts"
    ],
    "keyConcepts": [
      {
        "term": "Active site",
        "definition": "The pocket where substrate binds, lined with residues that position the substrate and stabilise the transition state; shape is often complementary rather than rigid."
      },
      {
        "term": "Activation energy",
        "definition": "The energy barrier a reaction must clear; enzymes lower it by providing a favourable reaction pathway, speeding both forward and reverse directions equally."
      },
      {
        "term": "Saturation and Km",
        "definition": "Rate plateaus when all active sites are occupied. Km is the substrate concentration giving half-maximal rate and is a rough inverse measure of substrate affinity."
      },
      {
        "term": "Inhibition",
        "definition": "Competitive inhibitors bind the active site and are overcome by more substrate; non-competitive inhibitors bind elsewhere and reduce Vmax without changing Km."
      },
      {
        "term": "Ribozymes",
        "definition": "Some RNA molecules catalyse reactions, including the ribosome’s peptidyl transferase centre; these RNA enzymes are called ribozymes, so catalysis is not limited to proteins."
      }
    ],
    "equations": [
      {
        "label": "Michaelis–Menten equation",
        "latex": "v = \\frac{V_{\\max}\\,[S]}{K_m + [S]}",
        "variables": [
          {
            "symbol": "v",
            "meaning": "initial reaction rate"
          },
          {
            "symbol": "Vmax",
            "meaning": "maximum rate when the enzyme is saturated"
          },
          {
            "symbol": "[S]",
            "meaning": "substrate concentration"
          },
          {
            "symbol": "Km",
            "meaning": "substrate concentration at half of Vmax"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "proteins-and-amino-acids",
      "cellular-respiration-and-atp",
      "catalysts-and-catalysis"
    ],
    "wikipediaTitle": "Enzyme",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Enzyme — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Enzyme"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "cellular-respiration-and-atp",
    "title": "Cellular respiration and ATP",
    "subject": "biology",
    "category": "molecular-biology",
    "summary": "Cellular respiration releases energy from glucose in three stages: glycolysis in the cytosol, the citric acid cycle in the mitochondrial matrix, and oxidative phosphorylation on the inner membrane, where the electron transport chain builds a proton gradient that ATP synthase taps to make ATP.",
    "aliases": [
      "aerobic respiration",
      "cell respiration"
    ],
    "keyConcepts": [
      {
        "term": "Glycolysis",
        "definition": "Ten cytosolic enzyme steps that split one glucose into two pyruvate molecules, netting 2 ATP and 2 NADH without needing oxygen."
      },
      {
        "term": "Citric acid cycle",
        "definition": "Cyclic pathway that oxidises acetyl-CoA to CO2, capturing energy as NADH, FADH2, and a little GTP or ATP per turn."
      },
      {
        "term": "Chemiosmosis",
        "definition": "Protons pumped into the intermembrane space return through ATP synthase, whose rotation phosphorylates ADP; oxygen is the final electron acceptor in aerobic cells."
      },
      {
        "term": "Anaerobic fermentation",
        "definition": "When oxygen is scarce, cells regenerate NAD+ by reducing pyruvate to lactate or ethanol, which keeps glycolysis running with far lower ATP yield."
      }
    ],
    "equations": [
      {
        "label": "Overall aerobic oxidation of glucose",
        "latex": "\\mathrm{C_6H_{12}O_6} + 6\\,\\mathrm{O_2} \\rightarrow 6\\,\\mathrm{CO_2} + 6\\,\\mathrm{H_2O} + \\text{energy}",
        "variables": [
          {
            "symbol": "C₆H₁₂O₆",
            "meaning": "glucose"
          },
          {
            "symbol": "O₂",
            "meaning": "oxygen, the final electron acceptor"
          },
          {
            "symbol": "CO₂",
            "meaning": "carbon dioxide released"
          },
          {
            "symbol": "energy",
            "meaning": "stored in ATP, roughly 30–32 ATP per glucose in eukaryotes"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "enzymes",
      "cell-organelles",
      "photosynthesis"
    ],
    "wikipediaTitle": "Cellular respiration",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Cellular respiration — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cellular_respiration"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "mendelian-inheritance",
    "title": "Mendelian inheritance",
    "subject": "biology",
    "category": "genetics",
    "summary": "Mendel's laws describe how alleles pass from parents to offspring: alleles segregate so each gamete receives one copy of each gene, and genes on different chromosomes assort independently. A cross of two heterozygotes gives a 3:1 phenotype ratio, and a dihybrid cross gives 9:3:3:1.",
    "aliases": [
      "mendel's laws",
      "mendelian genetics"
    ],
    "keyConcepts": [
      {
        "term": "Law of segregation",
        "definition": "The two alleles of a gene separate during meiosis, so each gamete carries just one; fertilisation restores the pair in the offspring."
      },
      {
        "term": "Law of independent assortment",
        "definition": "Alleles of genes on different chromosomes are distributed to gametes independently, generating new combinations each generation."
      },
      {
        "term": "Punnett square",
        "definition": "A grid listing gamete genotypes on each axis and their combinations in the cells, used to predict offspring genotype and phenotype ratios."
      },
      {
        "term": "Test cross",
        "definition": "Crossing an individual of unknown genotype with a homozygous recessive partner: any recessive offspring prove the unknown parent was heterozygous."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "genetics-basics",
      "meiosis",
      "dominant-and-recessive-alleles",
      "pedigree-analysis"
    ],
    "wikipediaTitle": "Mendelian inheritance",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Mendelian inheritance — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mendelian_inheritance"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "chromosomes-and-karyotypes",
    "title": "Chromosomes and karyotypes",
    "subject": "biology",
    "category": "genetics",
    "summary": "A chromosome is one DNA molecule wrapped around histone proteins. Human body cells carry 46 chromosomes — 22 homologous pairs plus two sex chromosomes — and a karyotype arranges them by size and banding pattern, revealing extra or missing chromosomes such as trisomy 21.",
    "aliases": [
      "karyotype",
      "karyotyping"
    ],
    "keyConcepts": [
      {
        "term": "Chromatid and chromosome",
        "definition": "After replication a chromosome consists of two identical sister chromatids joined at the centromere; each chromatid becomes a chromosome once they separate."
      },
      {
        "term": "Centromere and telomere",
        "definition": "The centromere is the constriction where spindle fibres attach; telomeres are repetitive DNA caps that protect chromosome ends from erosion and fusion."
      },
      {
        "term": "Ploidy",
        "definition": "The number of chromosome sets: haploid (n), diploid (2n), or polyploid (3n and above), which is common in flowering plants."
      },
      {
        "term": "Karyotype analysis",
        "definition": "Chromosomes from a dividing cell are stained, photographed, and sorted into pairs to detect aneuploidy, translocations, and large deletions."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "genetics-basics",
      "mitosis-and-the-cell-cycle",
      "meiosis",
      "sex-linked-inheritance"
    ],
    "wikipediaTitle": "Chromosome",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Chromosome — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Chromosome"
      },
      {
        "label": "Karyotype — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Karyotype"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "gene-mutations",
    "title": "Gene mutations",
    "subject": "biology",
    "category": "genetics",
    "summary": "Mutations are changes in DNA sequence. A substitution may be silent, missense (one amino acid swapped, as in sickle-cell haemoglobin) or nonsense (a premature stop), while insertions or deletions that are not multiples of three shift the reading frame and usually destroy the protein.",
    "aliases": [
      "mutation",
      "point mutation"
    ],
    "keyConcepts": [
      {
        "term": "Substitution",
        "definition": "Replacement of one base pair by another; the effect ranges from none (silent, thanks to redundancy in the code) to a single altered amino acid or a truncated protein."
      },
      {
        "term": "Frameshift",
        "definition": "Insertion or deletion of a number of bases not divisible by three, which re-groups every downstream codon and typically yields a non-functional protein."
      },
      {
        "term": "Mutagens and repair",
        "definition": "UV light, radiation, and certain chemicals raise mutation rates; mismatch repair, base excision repair, and nucleotide excision repair normally correct most damage."
      },
      {
        "term": "Germline versus somatic",
        "definition": "Germline mutations occur in gametes and can be inherited; somatic mutations affect only the individual's own cells and can contribute to cancer."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "dna-structure-and-replication",
      "translation-and-the-genetic-code",
      "genetic-engineering-and-crispr"
    ],
    "wikipediaTitle": "Mutation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Mutation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Mutation"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "dominant-and-recessive-alleles",
    "title": "Dominant and recessive alleles",
    "subject": "biology",
    "category": "genetics",
    "summary": "A dominant allele shows its effect in the heterozygous state, while a recessive allele is expressed only when both copies are recessive. Dominance is about allele interaction, not frequency or strength: a rare allele can be dominant, and many traits show incomplete dominance, codominance, or multiple alleles.",
    "aliases": [
      "dominance in genetics",
      "dominant and recessive genes"
    ],
    "keyConcepts": [
      {
        "term": "Genotype and phenotype",
        "definition": "Genotype is the pair of alleles an individual carries; phenotype is the observable trait produced by that genotype together with the environment."
      },
      {
        "term": "Homozygous and heterozygous",
        "definition": "Homozygous means two identical alleles at a locus; heterozygous means two different alleles, one of which may mask the other's effect."
      },
      {
        "term": "Incomplete dominance",
        "definition": "The heterozygote shows an intermediate phenotype, as when red and white snapdragon parents give pink offspring rather than either parental colour."
      },
      {
        "term": "Codominance and multiple alleles",
        "definition": "Both alleles are fully expressed at once, as in AB blood type; the ABO gene has three common alleles (IA, IB, i) although each person carries only two."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "mendelian-inheritance",
      "genetics-basics",
      "pedigree-analysis"
    ],
    "wikipediaTitle": "Dominance (genetics)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Dominance (genetics) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dominance_(genetics)"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "sex-linked-inheritance",
    "title": "Sex-linked inheritance",
    "subject": "biology",
    "category": "genetics",
    "summary": "Sex-linked traits are controlled by genes on the sex chromosomes, most often the X. Because males carry one X and one Y, a single recessive allele on the X is enough to produce the trait in males, while females need two copies — which is why X-linked red–green colour blindness and haemophilia are far more common in men.",
    "aliases": [
      "x-linked inheritance",
      "sex linkage"
    ],
    "keyConcepts": [
      {
        "term": "X and Y chromosomes",
        "definition": "Human females are XX and males XY; the X carries roughly 900–1,000 protein-coding genes, whereas the much smaller Y carries mainly male-determining and fertility genes."
      },
      {
        "term": "Hemizygosity",
        "definition": "Males have only one X, so X-linked alleles are never masked by a second copy — the basis of the different inheritance pattern in the two sexes."
      },
      {
        "term": "Carrier females",
        "definition": "A heterozygous female carries one recessive X-linked allele without showing the trait but passes the allele to half her sons and half her daughters."
      },
      {
        "term": "Pedigree signature",
        "definition": "X-linked recessive traits appear mostly in males, pass from carrier mothers to sons, and are never transmitted from father to son."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "mendelian-inheritance",
      "chromosomes-and-karyotypes",
      "pedigree-analysis"
    ],
    "wikipediaTitle": "Sex linkage",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Sex linkage — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sex_linkage"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "genetic-engineering-and-crispr",
    "title": "Genetic engineering and CRISPR",
    "subject": "biology",
    "category": "genetics",
    "summary": "Genetic engineering alters DNA deliberately. CRISPR–Cas9 uses a guide RNA to direct the Cas9 nuclease to a matching ~20-nucleotide target beside a PAM sequence and cuts both strands; the cell's own repair then either disables the gene or inserts a supplied template.",
    "aliases": [
      "crispr",
      "gene editing",
      "recombinant dna technology"
    ],
    "keyConcepts": [
      {
        "term": "Guide RNA and Cas9",
        "definition": "The guide RNA base-pairs with the target DNA, positioning the Cas9 nuclease to cut both strands about three bases upstream of the PAM."
      },
      {
        "term": "PAM sequence",
        "definition": "A short motif next to the target that Cas9 must recognise — NGG for the commonly used Streptococcus pyogenes Cas9 — which limits which sites can be edited."
      },
      {
        "term": "Repair outcome",
        "definition": "Non-homologous end joining often deletes or inserts a few bases and knocks the gene out; homology-directed repair can install a precise sequence if a template is supplied."
      },
      {
        "term": "Delivery and off-target effects",
        "definition": "Editing tools reach cells by plasmid, viral vector, or lipid nanoparticle; unintended cuts at similar sequences are a recognised risk that guide design and screening aim to reduce."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "dna-structure-and-replication",
      "gene-mutations",
      "gene-expression-regulation"
    ],
    "wikipediaTitle": "CRISPR gene editing",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "CRISPR gene editing — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/CRISPR_gene_editing"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "gene-expression-regulation",
    "title": "Gene expression regulation",
    "subject": "biology",
    "category": "genetics",
    "summary": "Cells control when and how strongly each gene is expressed. Bacteria use operons such as the lac operon, where a repressor blocks transcription until an inducer releases it; eukaryotes combine transcription factors, enhancers, chromatin modification, and alternative splicing.",
    "aliases": [
      "gene regulation",
      "gene expression control"
    ],
    "keyConcepts": [
      {
        "term": "Operon",
        "definition": "A cluster of co-transcribed bacterial genes with one promoter and operator. The lac operon is switched on by lactose (via allolactose, which releases the repressor) and switched off by glucose, which lowers cAMP so the CAP–cAMP activator cannot bind — catabolite repression."
      },
      {
        "term": "Transcription factors and enhancers",
        "definition": "Activators and repressors bind enhancer or silencer DNA and recruit or block RNA polymerase, often from a distance through DNA looping."
      },
      {
        "term": "Chromatin and epigenetics",
        "definition": "DNA methylation and histone acetylation or methylation change how tightly chromatin is packed, making genes more or less accessible without altering the sequence."
      },
      {
        "term": "Alternative splicing",
        "definition": "Different exon combinations from one gene produce several mRNA variants, allowing a single genome to encode far more proteins than it has genes."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "transcription",
      "translation-and-the-genetic-code",
      "stem-cells"
    ],
    "wikipediaTitle": "Regulation of gene expression",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Regulation of gene expression — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Regulation_of_gene_expression"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "pedigree-analysis",
    "title": "Pedigree analysis",
    "subject": "biology",
    "category": "genetics",
    "summary": "A pedigree chart uses standard symbols — squares for males, circles for females, shaded shapes for affected individuals — to trace a trait across generations. The pattern of affected relatives indicates whether a trait is autosomal or sex-linked and dominant or recessive; two unaffected parents with an affected child, for instance, point to a recessive allele.",
    "aliases": [
      "pedigree chart",
      "pedigrees"
    ],
    "keyConcepts": [
      {
        "term": "Pedigree symbols",
        "definition": "Squares are males, circles females, a horizontal line joins partners, a vertical line leads to offspring, shading marks the affected phenotype, and a half-shaded symbol marks a carrier."
      },
      {
        "term": "Autosomal recessive clues",
        "definition": "The trait can skip generations, appears in both sexes about equally, and affected children can be born to unaffected parents who are both carriers."
      },
      {
        "term": "Autosomal dominant clues",
        "definition": "Every affected person usually has an affected parent, the trait appears in about half the offspring of an affected heterozygote, and it affects both sexes."
      },
      {
        "term": "X-linked clues",
        "definition": "Affected fathers pass the allele to all daughters but no sons, affected males greatly outnumber affected females, and the trait often reappears through carrier mothers."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "mendelian-inheritance",
      "dominant-and-recessive-alleles",
      "sex-linked-inheritance"
    ],
    "wikipediaTitle": "Pedigree chart",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Pedigree chart — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Pedigree_chart"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "bacteria",
    "title": "Bacteria",
    "subject": "biology",
    "category": "microorganisms",
    "summary": "Bacteria are single-celled prokaryotes, usually with a peptidoglycan cell wall, a circular chromosome, and often additional plasmids. They divide by binary fission and exchange genes by conjugation, transformation, and transduction, and they occupy nearly every habitat, including the human gut.",
    "aliases": [
      "bacterium"
    ],
    "keyConcepts": [
      {
        "term": "Peptidoglycan and Gram staining",
        "definition": "Thick peptidoglycan retains crystal violet in Gram-positive cells; the thinner layer of Gram-negative cells loses it and takes the pink counterstain, and they also have an outer membrane."
      },
      {
        "term": "Binary fission",
        "definition": "Asexual division in which the chromosome replicates, the cell elongates, and a septum divides it into two daughter cells; under good conditions some species double every 20 minutes."
      },
      {
        "term": "Horizontal gene transfer",
        "definition": "Conjugation passes plasmid DNA through a pilus, transformation takes up free DNA from the environment, and transduction moves genes via bacteriophages."
      },
      {
        "term": "Plasmid",
        "definition": "Small extra circular DNA molecule replicated independently of the chromosome, often carrying useful genes such as antibiotic resistance or metabolic pathways."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "prokaryotic-and-eukaryotic-cells",
      "antibiotic-resistance",
      "viruses"
    ],
    "wikipediaTitle": "Bacteria",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Bacteria — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bacteria"
      },
      {
        "label": "OpenStax Microbiology",
        "url": "https://openstax.org/books/microbiology"
      }
    ]
  },
  {
    "slug": "viruses",
    "title": "Viruses",
    "subject": "biology",
    "category": "microorganisms",
    "summary": "A virus is an infectious, acellular particle of DNA or RNA wrapped in a protein capsid, sometimes inside a lipid envelope. It has no metabolism of its own, so it must enter a host cell and use that cell’s ribosomes and enzymes to replicate; the lytic cycle bursts the cell, while the lysogenic cycle inserts viral DNA into the host genome.",
    "aliases": [
      "virus particle"
    ],
    "keyConcepts": [
      {
        "term": "Capsid and envelope",
        "definition": "The capsid is a protein shell built from repeating subunits that protects the genome; enveloped viruses wrap themselves in a lipid bilayer taken from the host, studded with viral glycoproteins."
      },
      {
        "term": "Host specificity",
        "definition": "A virus attaches only to cells displaying the matching surface receptor, which is why many viruses infect just one or a few species or tissues."
      },
      {
        "term": "Lytic and lysogenic cycles",
        "definition": "In the lytic cycle the virus replicates and lyses the cell; in the lysogenic cycle its DNA integrates as a prophage and is copied along with the host genome until reactivation."
      },
      {
        "term": "Reverse transcription",
        "definition": "Retroviruses such as HIV carry reverse transcriptase, which copies their RNA genome into DNA that then integrates into the host chromosome."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "bacteria",
      "antibiotic-resistance",
      "prokaryotic-and-eukaryotic-cells"
    ],
    "wikipediaTitle": "Virus",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Virus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Virus"
      },
      {
        "label": "OpenStax Microbiology",
        "url": "https://openstax.org/books/microbiology"
      }
    ]
  },
  {
    "slug": "fungi",
    "title": "Fungi",
    "subject": "biology",
    "category": "microorganisms",
    "summary": "Fungi are eukaryotes that digest food outside their bodies and then absorb the products. Most are microscopic yeasts and moulds that grow as branching filaments called hyphae, have cell walls of chitin, and spread by spores; the kingdom also includes mushrooms, and its members range from decomposers to mycorrhizal partners to pathogens.",
    "aliases": [
      "fungus"
    ],
    "keyConcepts": [
      {
        "term": "Hyphae and mycelium",
        "definition": "Hyphae are long branching filaments, often divided by septa with pores; a mass of hyphae is a mycelium, which gives fungi a very high surface area for absorption."
      },
      {
        "term": "Chitin cell wall",
        "definition": "Fungal walls are reinforced with chitin, the same nitrogen-containing polysaccharide found in insect exoskeletons, rather than the cellulose of plants."
      },
      {
        "term": "Absorptive heterotrophy",
        "definition": "Fungi secrete hydrolytic enzymes onto their substrate and absorb the released sugars and amino acids, so they grow on or in their food rather than ingesting it."
      },
      {
        "term": "Spores and budding",
        "definition": "Moulds release vast numbers of airborne spores from sporangia or conidiophores, while yeasts such as Saccharomyces cerevisiae mainly divide by budding."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ecology-and-ecosystems",
      "bacteria",
      "antibiotic-resistance"
    ],
    "wikipediaTitle": "Fungus",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Fungus — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fungus"
      },
      {
        "label": "OpenStax Microbiology",
        "url": "https://openstax.org/books/microbiology"
      }
    ]
  },
  {
    "slug": "antibiotic-resistance",
    "title": "Antibiotic resistance",
    "subject": "biology",
    "category": "microorganisms",
    "summary": "Antibiotic resistance develops when bacteria survive a drug and pass on the genes that let them do so. It spreads through mutation plus horizontal gene transfer on plasmids, and common mechanisms include β-lactamase enzymes that destroy the drug, efflux pumps that expel it, and altered targets the drug can no longer bind.",
    "aliases": [
      "antimicrobial resistance"
    ],
    "keyConcepts": [
      {
        "term": "Selection pressure",
        "definition": "Any drug exposure kills susceptible cells and leaves resistant ones to multiply, so resistance spreads fastest where antibiotics are used heavily or incompletely."
      },
      {
        "term": "Horizontal gene transfer",
        "definition": "Resistance genes often sit on transmissible plasmids or transposons, allowing them to jump between species, including from harmless gut bacteria to pathogens."
      },
      {
        "term": "Resistance mechanisms",
        "definition": "Enzymes such as β-lactamases inactivate the drug, efflux pumps lower intracellular concentration, target proteins mutate, and reduced membrane permeability keeps the drug out."
      },
      {
        "term": "Stewardship",
        "definition": "Using antibiotics only when needed, at the prescribed dose and duration, and not for viral infections slows resistance; combination therapy and surveillance are also used."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "bacteria",
      "viruses"
    ],
    "wikipediaTitle": "Antimicrobial resistance",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Antimicrobial resistance — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Antimicrobial_resistance"
      },
      {
        "label": "OpenStax Microbiology",
        "url": "https://openstax.org/books/microbiology"
      }
    ]
  },
  {
    "slug": "plant-tissues-and-organs",
    "title": "Plant tissues and organs",
    "subject": "biology",
    "category": "plants",
    "summary": "Flowering plants build three tissue systems: dermal tissue for protection, ground tissue for storage and support, and vascular tissue — xylem and phloem — for transport. These are organised into roots, stems, and leaves, with new growth coming from meristems.",
    "aliases": [
      "plant anatomy",
      "plant tissue systems"
    ],
    "keyConcepts": [
      {
        "term": "Epidermis and cuticle",
        "definition": "The outer dermal layer, covered by a waxy cuticle that limits water loss; stomata with guard cells punctuate it to allow gas exchange."
      },
      {
        "term": "Ground tissue types",
        "definition": "Parenchyma cells are thin-walled and metabolically active, collenchyma cells have uneven thickened walls for flexible support, and sclerenchyma cells are lignified and dead at maturity for strength."
      },
      {
        "term": "Xylem and phloem",
        "definition": "Xylem vessels and tracheids carry water and minerals upward from roots and are dead at maturity; phloem sieve tubes with companion cells carry sugars in either direction."
      },
      {
        "term": "Meristems",
        "definition": "Regions of undifferentiated dividing cells: apical meristems lengthen roots and shoots, lateral meristems such as the vascular cambium thicken stems."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "photosynthesis",
      "transpiration-and-water-transport",
      "plant-hormones"
    ],
    "wikipediaTitle": "Plant anatomy",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Plant anatomy — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Plant_anatomy"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "transpiration-and-water-transport",
    "title": "Transpiration and water transport",
    "subject": "biology",
    "category": "plants",
    "summary": "Water travels from soil to leaves because evaporation from stomata creates tension in the xylem. Cohesion between water molecules and adhesion to xylem walls hold the column together as it is pulled upward, and the same stream carries dissolved minerals while cooling the leaf.",
    "aliases": [
      "cohesion-tension theory",
      "xylem transport"
    ],
    "keyConcepts": [
      {
        "term": "Stomata and guard cells",
        "definition": "Pores in the leaf epidermis bounded by two guard cells; when they take up water the pore opens, and when they lose water it closes to conserve moisture."
      },
      {
        "term": "Cohesion–tension mechanism",
        "definition": "Transpiration pulls on water in the leaf, the tensile strength of water transmits that pull down the xylem, and cohesion stops the column breaking under tension."
      },
      {
        "term": "Root pressure",
        "definition": "Active ion uptake into root xylem draws water in osmotically, pushing a small volume upward; it contributes mainly at night when transpiration is low."
      },
      {
        "term": "Water potential",
        "definition": "Water moves from higher to lower water potential; solute potential is negative and pressure potential positive, so a leaf with very negative potential draws water in."
      }
    ],
    "equations": [
      {
        "label": "Water potential components",
        "latex": "\\Psi_w = \\Psi_s + \\Psi_p",
        "variables": [
          {
            "symbol": "Ψw",
            "meaning": "water potential"
          },
          {
            "symbol": "Ψs",
            "meaning": "solute potential, usually negative"
          },
          {
            "symbol": "Ψp",
            "meaning": "pressure potential, positive in turgid cells"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "photosynthesis",
      "plant-tissues-and-organs",
      "plant-hormones"
    ],
    "wikipediaTitle": "Transpiration",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Transpiration — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Transpiration"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "plant-hormones",
    "title": "Plant hormones",
    "subject": "biology",
    "category": "plants",
    "summary": "Plant hormones are signalling molecules that coordinate growth, development, and responses to the environment. Auxin drives cell elongation and phototropism, gibberellins promote stem growth and seed germination, cytokinins stimulate division, ethylene ripens fruit, and abscisic acid closes stomata and enforces dormancy.",
    "aliases": [
      "phytohormones",
      "plant growth regulators"
    ],
    "keyConcepts": [
      {
        "term": "Auxin",
        "definition": "Indole-3-acetic acid moves polarly away from shoot tips. In shoots it promotes elongation on the shaded side, bending the shoot towards light; in roots, auxin accumulating on the lower side inhibits elongation, so the root bends downward."
      },
      {
        "term": "Gibberellins",
        "definition": "Promote stem elongation, cell division, and the mobilisation of seed reserves that ends dormancy and triggers germination."
      },
      {
        "term": "Cytokinins",
        "definition": "Stimulate cell division and shoot formation, delay leaf senescence, and are produced mainly in root tips and developing seeds."
      },
      {
        "term": "Ethylene and abscisic acid",
        "definition": "Ethylene is a gaseous hormone that ripens fruit and triggers leaf and fruit drop; abscisic acid closes stomata under drought and maintains seed dormancy."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "plant-tissues-and-organs",
      "transpiration-and-water-transport",
      "flowering-plant-reproduction"
    ],
    "wikipediaTitle": "Plant hormone",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Plant hormone — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Plant_hormone"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "flowering-plant-reproduction",
    "title": "Flowering plant reproduction",
    "subject": "biology",
    "category": "plants",
    "summary": "A flower's stamens produce pollen and its carpel houses ovules. Pollination carries pollen to the stigma, a pollen tube grows down to the ovule, and double fertilisation yields a diploid zygote plus a triploid endosperm that nourishes the seed, which develops inside a fruit formed from the ovary.",
    "aliases": [
      "angiosperm reproduction",
      "flower reproduction"
    ],
    "keyConcepts": [
      {
        "term": "Stamen and carpel",
        "definition": "The stamen is the male part (anther on a filament) that makes pollen; the carpel is the female part (stigma, style, ovary) containing ovules."
      },
      {
        "term": "Pollination and pollen tube",
        "definition": "Pollen lands on the stigma, germinates, and grows a tube through the style guided by chemical signals to the micropyle of an ovule."
      },
      {
        "term": "Double fertilisation",
        "definition": "One sperm fuses with the egg to form the diploid zygote while a second fuses with two polar nuclei to form triploid endosperm — a feature of angiosperms."
      },
      {
        "term": "Seed and fruit",
        "definition": "The ovule becomes the seed, its integuments the seed coat, and the ovary wall becomes the fruit, which aids dispersal; seeds remain dormant until moisture and temperature allow germination."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "photosynthesis",
      "plant-hormones",
      "plant-tissues-and-organs"
    ],
    "wikipediaTitle": "Plant reproduction",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Plant reproduction — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Plant_reproduction"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "natural-selection",
    "title": "Natural selection",
    "subject": "biology",
    "category": "evolution",
    "summary": "Natural selection is the process by which individuals with heritable traits that improve survival and reproduction in a given environment leave more offspring, so those traits become more common in later generations. Fitness here means reproductive success, not physical strength.",
    "aliases": [
      "Darwinian selection"
    ],
    "keyConcepts": [
      {
        "term": "Heritable variation",
        "definition": "Differences among individuals that are passed from parents to offspring. Without heritable variation, selection has nothing to act on and cannot change a population."
      },
      {
        "term": "Differential reproductive success",
        "definition": "Some variants leave more surviving offspring than others in the current environment, so their alleles increase in frequency."
      },
      {
        "term": "Fitness",
        "definition": "An organism's relative contribution of offspring to the next generation. It is measured by reproductive output, not by strength, size, or lifespan alone."
      },
      {
        "term": "Selective pressure",
        "definition": "An environmental factor such as a predator, disease, or drought that favours some variants over others and therefore shifts allele frequencies."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "genetics-basics",
      "adaptation",
      "speciation"
    ],
    "wikipediaTitle": "Natural selection",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Natural selection — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Natural_selection"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "evidence-for-evolution",
    "title": "Evidence for evolution",
    "subject": "biology",
    "category": "evolution",
    "summary": "Independent lines of evidence — the fossil record, comparative anatomy, embryology, biogeography, and molecular sequences — converge on the conclusion that living species share common ancestors and have changed over time.",
    "aliases": [
      "evidence of common descent",
      "evidence for common ancestry"
    ],
    "keyConcepts": [
      {
        "term": "Fossil record",
        "definition": "Fossils document extinct species and transitional forms, and their order in rock layers generally matches the sequence of relationships inferred from other evidence. Radiometric dating gives the layers absolute ages."
      },
      {
        "term": "Homologous structures",
        "definition": "Body parts with the same underlying anatomy but different functions, such as the human arm, bat wing, and whale flipper, which indicate inheritance from a shared ancestor."
      },
      {
        "term": "Vestigial structures",
        "definition": "Remnants with reduced or no current function, such as the human coccyx, the pelvic bones of some whales, and the wings of flightless birds, which are best explained as inherited from ancestors that used them."
      },
      {
        "term": "Molecular homology",
        "definition": "Shared DNA and protein sequences. The more recently two species diverged, the more similar their sequences tend to be, and the pattern matches trees built from anatomy."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "natural-selection",
      "phylogenetics-and-the-tree-of-life",
      "genetics-basics"
    ],
    "wikipediaTitle": "Evidence of common descent",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Evidence of common descent — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Evidence_of_common_descent"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "speciation",
    "title": "Speciation",
    "subject": "biology",
    "category": "evolution",
    "summary": "Speciation is the formation of new species when populations become reproductively isolated and accumulate genetic differences, most often after geographic separation (allopatric) or within the same area (sympatric).",
    "aliases": [
      "species formation",
      "cladogenesis"
    ],
    "keyConcepts": [
      {
        "term": "Reproductive isolation",
        "definition": "Barriers that stop members of different populations from interbreeding and producing fertile offspring, such as differing mating times, incompatible gametes, or sterile hybrids."
      },
      {
        "term": "Allopatric speciation",
        "definition": "Speciation after a physical barrier, such as a mountain range, river, or sea, separates populations that then diverge independently."
      },
      {
        "term": "Sympatric speciation",
        "definition": "Speciation without geographic separation, for example through polyploidy in plants or shifts to a new host or habitat within the same region."
      },
      {
        "term": "Species concepts",
        "definition": "The biological species concept defines a species by interbreeding, but it fails for asexual organisms and fossils, where morphological or genetic criteria are used instead."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "natural-selection",
      "adaptation",
      "phylogenetics-and-the-tree-of-life"
    ],
    "wikipediaTitle": "Speciation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Speciation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Speciation"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "hardy-weinberg-equilibrium",
    "title": "Hardy–Weinberg equilibrium",
    "subject": "biology",
    "category": "evolution",
    "summary": "The Hardy–Weinberg principle states that allele and genotype frequencies in a large, randomly mating population stay constant from generation to generation when no mutation, migration, selection, or genetic drift acts.",
    "aliases": [
      "Hardy–Weinberg principle",
      "HW equilibrium",
      "Hardy-Weinberg equilibrium",
      "Hardy-Weinberg principle"
    ],
    "keyConcepts": [
      {
        "term": "Allele frequency",
        "definition": "The proportion of all copies of a gene in a population that are a particular allele, usually written p or q."
      },
      {
        "term": "Genotype frequency",
        "definition": "The proportion of individuals in a population with a given combination of alleles, such as AA, Aa, or aa."
      },
      {
        "term": "Equilibrium conditions",
        "definition": "No mutation, no migration, random mating, a very large population, and no selection. Real populations rarely meet all five, so the model is a null expectation rather than a description."
      },
      {
        "term": "Detecting evolutionary change",
        "definition": "If observed genotype frequencies depart from Hardy–Weinberg expectations, at least one evolutionary force is acting on the population."
      }
    ],
    "equations": [
      {
        "label": "Allele frequencies sum to one",
        "latex": "p + q = 1",
        "variables": [
          {
            "symbol": "p",
            "meaning": "frequency of allele A"
          },
          {
            "symbol": "q",
            "meaning": "frequency of allele a"
          }
        ]
      },
      {
        "label": "Hardy–Weinberg genotype frequencies",
        "latex": "p^{2} + 2pq + q^{2} = 1",
        "variables": [
          {
            "symbol": "p²",
            "meaning": "expected frequency of AA homozygotes"
          },
          {
            "symbol": "2pq",
            "meaning": "expected frequency of Aa heterozygotes"
          },
          {
            "symbol": "q²",
            "meaning": "expected frequency of aa homozygotes"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "genetics-basics",
      "natural-selection",
      "population-dynamics"
    ],
    "wikipediaTitle": "Hardy–Weinberg principle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Hardy–Weinberg principle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hardy–Weinberg_principle"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "phylogenetics-and-the-tree-of-life",
    "title": "Phylogenetics and the tree of life",
    "subject": "biology",
    "category": "evolution",
    "summary": "Phylogenetics reconstructs evolutionary relationships by comparing shared derived characters, usually DNA sequences, and represents them as branching trees read from the root to the tips.",
    "aliases": [
      "phylogeny",
      "tree of life"
    ],
    "keyConcepts": [
      {
        "term": "Clade",
        "definition": "A group containing a common ancestor and all of its descendants, such as mammals or flowering plants. Groups that leave some descendants out are not clades."
      },
      {
        "term": "Shared derived character",
        "definition": "A trait that evolved in a common ancestor and is inherited by its descendants (a synapomorphy), which is the strongest evidence for grouping lineages together."
      },
      {
        "term": "Homoplasy",
        "definition": "Similar traits that evolved independently, such as wings in bats and birds. Homoplasy can mislead tree building if it is mistaken for shared ancestry."
      },
      {
        "term": "Molecular clock",
        "definition": "The observation that mutations accumulate at a roughly steady rate in some genes, which allows divergence dates to be estimated when calibrated with fossils."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "evidence-for-evolution",
      "biodiversity",
      "speciation"
    ],
    "wikipediaTitle": "Phylogenetics",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Phylogenetics — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Phylogenetics"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "adaptation",
    "title": "Adaptation",
    "subject": "biology",
    "category": "evolution",
    "summary": "An adaptation is a heritable trait that has spread in a population because it improves performance in a particular environment; it is the product of natural selection, not a purposeful response by an individual.",
    "aliases": [
      "evolutionary adaptation",
      "adaptive trait"
    ],
    "keyConcepts": [
      {
        "term": "Adaptation versus acclimatisation",
        "definition": "Acclimatisation is a reversible physiological adjustment within an individual's lifetime, such as producing more red blood cells at altitude. It is not inherited and is not evolution."
      },
      {
        "term": "Trade-off",
        "definition": "An adaptation rarely improves every function at once; gains in one area often carry costs, such as a larger brain requiring more energy and a longer development period."
      },
      {
        "term": "Exaptation",
        "definition": "A trait co-opted for a new function, such as feathers that probably first served insulation or display and were later used in flight."
      },
      {
        "term": "Convergent evolution",
        "definition": "Independent evolution of similar adaptations in unrelated lineages under similar selection pressures, such as streamlined bodies in dolphins and sharks."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "natural-selection",
      "speciation",
      "homeostasis"
    ],
    "wikipediaTitle": "Adaptation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Adaptation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Adaptation"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "food-webs-and-trophic-levels",
    "title": "Food webs and trophic levels",
    "subject": "biology",
    "category": "ecology",
    "summary": "A food web maps who eats whom in a community, grouping organisms into trophic levels — producers, primary consumers, and higher consumers — through which energy and matter pass.",
    "aliases": [
      "trophic levels",
      "feeding relationships"
    ],
    "keyConcepts": [
      {
        "term": "Trophic level",
        "definition": "A feeding position in a food web: producers at level 1, herbivores at level 2, and carnivores at level 3 or higher. One species can occupy different levels in different chains."
      },
      {
        "term": "Producer",
        "definition": "An autotroph, usually a photosynthetic plant, alga, or cyanobacterium, that builds organic molecules from inorganic ones and starts almost every food chain."
      },
      {
        "term": "Apex predator",
        "definition": "A predator with no predators of its own in the web, such as a wolf or an orca, whose numbers are limited mainly by prey availability."
      },
      {
        "term": "Keystone species",
        "definition": "A species whose removal reshapes the community far more than its abundance suggests, for example sea otters controlling sea urchin grazing on kelp."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ecology-and-ecosystems",
      "energy-flow-in-ecosystems",
      "photosynthesis"
    ],
    "wikipediaTitle": "Food web",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Food web — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Food_web"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "energy-flow-in-ecosystems",
    "title": "Energy flow in ecosystems",
    "subject": "biology",
    "category": "ecology",
    "summary": "Energy enters most ecosystems as sunlight captured by photosynthesis, passes between trophic levels as organisms are eaten, and leaves as heat, so only a small fraction reaches top predators.",
    "aliases": [
      "ecological energetics",
      "energy flow"
    ],
    "keyConcepts": [
      {
        "term": "Gross and net primary production",
        "definition": "Gross primary production is the total energy fixed by producers; net primary production is that minus the energy producers use in their own respiration, and it is what consumers can eat."
      },
      {
        "term": "Trophic efficiency",
        "definition": "The percentage of energy at one trophic level that is passed to the next. It is often around 10% in many ecosystems, but ranges widely with the organisms and conditions."
      },
      {
        "term": "Heat loss",
        "definition": "Respiration converts much of the chemical energy to heat at every step, so food chains are usually short and top predators are comparatively rare."
      },
      {
        "term": "Decomposers",
        "definition": "Fungi and bacteria break down dead matter and wastes, releasing heat and returning nutrients to the soil and water; the microbial biomass itself then supports detritivores and their predators."
      }
    ],
    "equations": [
      {
        "label": "Trophic transfer efficiency",
        "latex": "\\eta = \\frac{E_{n+1}}{E_n} \\times 100\\%",
        "variables": [
          {
            "symbol": "η",
            "meaning": "transfer efficiency between levels"
          },
          {
            "symbol": "E_{n+1}",
            "meaning": "energy assimilated at the next level"
          },
          {
            "symbol": "E_n",
            "meaning": "energy available at the lower level"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "food-webs-and-trophic-levels",
      "photosynthesis",
      "carbon-cycle"
    ],
    "wikipediaTitle": "Energy flow (ecology)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Energy flow (ecology) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Energy_flow_(ecology)"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "carbon-cycle",
    "title": "The carbon cycle",
    "subject": "biology",
    "category": "ecology",
    "summary": "The carbon cycle moves carbon between the atmosphere, oceans, soils, rocks, and living organisms through photosynthesis, respiration, decomposition, combustion, and the weathering of carbonate rocks.",
    "aliases": [
      "global carbon cycle",
      "carbon cycling"
    ],
    "keyConcepts": [
      {
        "term": "Photosynthesis and respiration",
        "definition": "Producers remove carbon dioxide from the air to build organic matter, while respiration by producers, consumers, and decomposers returns carbon dioxide to the atmosphere."
      },
      {
        "term": "Carbon sinks and sources",
        "definition": "A sink stores more carbon than it releases, such as forests, soils, and the deep ocean; a source releases more than it stores, such as burning fossil fuels or deforested land."
      },
      {
        "term": "Fossil carbon",
        "definition": "Carbon locked in coal, oil, and gas for millions of years is released in decades when burned, which is why it accumulates in the atmosphere faster than the slow geological cycle removes it."
      },
      {
        "term": "Ocean buffering",
        "definition": "Seawater absorbs carbon dioxide and forms carbonic acid, which buffers atmospheric levels but lowers ocean pH and can hamper shell-forming organisms."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "photosynthesis",
      "energy-flow-in-ecosystems",
      "ecology-and-ecosystems"
    ],
    "wikipediaTitle": "Carbon cycle",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Carbon cycle — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Carbon_cycle"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "population-dynamics",
    "title": "Population dynamics",
    "subject": "biology",
    "category": "ecology",
    "summary": "Population dynamics studies how population size and structure change through births, deaths, immigration, and emigration, and how resources, competition, and predators limit growth.",
    "aliases": [
      "population ecology",
      "population growth"
    ],
    "keyConcepts": [
      {
        "term": "Carrying capacity",
        "definition": "The maximum population size an environment can sustain given its food, space, and other resources, usually written K. It can change as conditions change."
      },
      {
        "term": "Exponential growth",
        "definition": "Growth at a constant per-capita rate, producing a J-shaped curve while resources are effectively unlimited."
      },
      {
        "term": "Logistic growth",
        "definition": "Growth that slows as the population approaches carrying capacity, producing an S-shaped curve, because resources per individual decline."
      },
      {
        "term": "Density-dependent and density-independent factors",
        "definition": "Competition, disease, and predators act more strongly at high density; weather, fire, and disasters affect survival regardless of density."
      }
    ],
    "equations": [
      {
        "label": "Exponential growth",
        "latex": "\\frac{dN}{dt} = rN",
        "variables": [
          {
            "symbol": "N",
            "meaning": "population size"
          },
          {
            "symbol": "r",
            "meaning": "per-capita growth rate"
          },
          {
            "symbol": "t",
            "meaning": "time"
          }
        ]
      },
      {
        "label": "Logistic growth",
        "latex": "\\frac{dN}{dt} = rN\\left(1 - \\frac{N}{K}\\right)",
        "variables": [
          {
            "symbol": "N",
            "meaning": "population size"
          },
          {
            "symbol": "r",
            "meaning": "per-capita growth rate"
          },
          {
            "symbol": "K",
            "meaning": "carrying capacity"
          },
          {
            "symbol": "t",
            "meaning": "time"
          },
          {
            "symbol": "N/K",
            "meaning": "share of carrying capacity in use"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ecology-and-ecosystems",
      "hardy-weinberg-equilibrium",
      "biodiversity"
    ],
    "wikipediaTitle": "Population dynamics",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Population dynamics — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Population_dynamics"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "symbiosis",
    "title": "Symbiosis",
    "subject": "biology",
    "category": "ecology",
    "summary": "Symbiosis is a close, sustained relationship between organisms of different species, ranging from mutualism, where both benefit, through commensalism, to parasitism, where one benefits at the other's expense.",
    "aliases": [
      "symbiotic relationship",
      "symbiotic association"
    ],
    "keyConcepts": [
      {
        "term": "Mutualism",
        "definition": "An interaction in which both partners gain fitness benefits, such as mycorrhizal fungi supplying phosphorus to a plant in exchange for sugars from photosynthesis."
      },
      {
        "term": "Commensalism",
        "definition": "An interaction in which one partner benefits while the other is essentially unaffected, such as barnacles attaching to a whale's skin."
      },
      {
        "term": "Parasitism",
        "definition": "A parasite lives on or in a host, taking resources and usually reducing host fitness without immediately killing it, because a dead host is a dead habitat."
      },
      {
        "term": "Endosymbiosis",
        "definition": "One organism living inside another, such as coral polyps housing photosynthetic zooxanthellae. The separate endosymbiotic theory for the origin of mitochondria and chloroplasts is covered under prokaryotic and eukaryotic cells."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ecology-and-ecosystems",
      "biodiversity",
      "food-webs-and-trophic-levels",
      "prokaryotic-and-eukaryotic-cells"
    ],
    "wikipediaTitle": "Symbiosis",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Symbiosis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Symbiosis"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "biodiversity",
    "title": "Biodiversity",
    "subject": "biology",
    "category": "ecology",
    "summary": "Biodiversity is the variety of life at genetic, species, and ecosystem levels; it is highest in the tropics and underpins services such as pollination, nutrient cycling, and climate regulation.",
    "aliases": [
      "biological diversity"
    ],
    "keyConcepts": [
      {
        "term": "Species richness and evenness",
        "definition": "Richness counts the species present in a community; evenness describes how similar their abundances are. Two sites can share richness but differ greatly in evenness."
      },
      {
        "term": "Genetic diversity",
        "definition": "Variation in alleles within and among populations, which gives species the raw material to adapt and helps resist disease."
      },
      {
        "term": "Ecosystem services",
        "definition": "Benefits people obtain from ecosystems, including food, clean water, pollination, flood control, and carbon storage."
      },
      {
        "term": "Biodiversity hotspot",
        "definition": "A region with exceptional numbers of endemic species that has already lost a large share of its original habitat, such as the Atlantic Forest or the Cape Floristic Region."
      }
    ],
    "equations": [
      {
        "label": "Shannon diversity index",
        "latex": "H = -\\sum_{i=1}^{S} p_i \\ln p_i",
        "variables": [
          {
            "symbol": "H",
            "meaning": "diversity index"
          },
          {
            "symbol": "p_i",
            "meaning": "proportion of individuals in species i"
          },
          {
            "symbol": "S",
            "meaning": "number of species present"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ecology-and-ecosystems",
      "ecological-succession",
      "phylogenetics-and-the-tree-of-life"
    ],
    "wikipediaTitle": "Biodiversity",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Biodiversity — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Biodiversity"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "ecological-succession",
    "title": "Ecological succession",
    "subject": "biology",
    "category": "ecology",
    "summary": "Ecological succession is the directional change in community composition over time, from pioneer species on bare ground or after a disturbance toward a more mature community.",
    "aliases": [
      "community succession",
      "vegetation succession"
    ],
    "keyConcepts": [
      {
        "term": "Primary succession",
        "definition": "Succession on newly exposed substrate with no soil, such as a lava flow or a retreating glacier. Lichens and mosses are often the first colonisers."
      },
      {
        "term": "Secondary succession",
        "definition": "Succession after a disturbance removes vegetation but leaves soil and seeds, as after a fire or abandoned farmland, so recovery is much faster."
      },
      {
        "term": "Pioneer species",
        "definition": "Hardy early colonisers that tolerate harsh conditions, grow quickly, and help build soil for later species."
      },
      {
        "term": "Climax community",
        "definition": "The traditional idea of a final stable community is now treated as an idealisation; many ecosystems are kept in flux by disturbance, grazing, and climate."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ecology-and-ecosystems",
      "biodiversity",
      "carbon-cycle"
    ],
    "wikipediaTitle": "Ecological succession",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Ecological succession — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ecological_succession"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "human-digestive-system",
    "title": "Human digestive system",
    "subject": "biology",
    "category": "human-biology",
    "summary": "The human digestive system breaks food into molecules small enough to absorb: chewing and churning, acid and enzyme digestion in the stomach and small intestine, then water recovery in the colon.",
    "aliases": [
      "digestive tract",
      "gastrointestinal tract"
    ],
    "keyConcepts": [
      {
        "term": "Peristalsis",
        "definition": "Waves of muscle contraction in the walls of the tract that push food and waste along it, independent of gravity."
      },
      {
        "term": "Digestive enzymes",
        "definition": "Amylases break starch into sugars, proteases break proteins into amino acids, and lipases split fats into fatty acids and glycerol. Most chemical digestion and absorption happen in the small intestine."
      },
      {
        "term": "Villi and microvilli",
        "definition": "Finger-like folds and surface projections of the small intestine that multiply its absorptive area enormously."
      },
      {
        "term": "Liver and pancreas",
        "definition": "The liver makes bile, which emulsifies fats, and the pancreas releases digestive enzymes and bicarbonate into the duodenum. Absorbed nutrients reach the liver through the hepatic portal vein."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "human-circulatory-system",
      "homeostasis",
      "cell-biology"
    ],
    "wikipediaTitle": "Human digestive system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Human digestive system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Human_digestive_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "human-respiratory-system",
    "title": "Human respiratory system",
    "subject": "biology",
    "category": "human-biology",
    "summary": "The respiratory system moves air through the airways into alveoli, where oxygen diffuses into the blood and carbon dioxide diffuses out, while the diaphragm and rib muscles drive ventilation.",
    "aliases": [
      "respiratory tract",
      "breathing system"
    ],
    "keyConcepts": [
      {
        "term": "Alveoli",
        "definition": "Tiny air sacs — roughly 300 million in the two adult lungs — with walls one cell thick and a combined surface area of about 70 square metres, suited to rapid gas exchange."
      },
      {
        "term": "Partial pressure gradient",
        "definition": "Gas exchange depends on differences in partial pressure: oxygen is higher in alveolar air than in arriving blood, and carbon dioxide is higher in blood than in air."
      },
      {
        "term": "Ventilation mechanics",
        "definition": "The diaphragm contracts and flattens while rib muscles lift the chest, lowering pressure in the thorax so air flows in; relaxation and elastic recoil drive exhalation."
      },
      {
        "term": "Haemoglobin",
        "definition": "The iron-containing protein in red blood cells that binds oxygen in the lungs and releases it in tissues; most carbon dioxide travels as bicarbonate in plasma."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "human-circulatory-system",
      "homeostasis",
      "blood-and-blood-groups"
    ],
    "wikipediaTitle": "Respiratory system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Respiratory system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Respiratory_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "human-nervous-system",
    "title": "Human nervous system",
    "subject": "biology",
    "category": "human-biology",
    "summary": "The nervous system detects stimuli, processes information, and produces rapid responses, using neurons that carry electrical signals and synapses that pass them to other cells through neurotransmitters.",
    "aliases": [
      "nervous system",
      "neural system"
    ],
    "keyConcepts": [
      {
        "term": "Neuron",
        "definition": "A cell with dendrites that receive input, a cell body, and an axon that conducts impulses; some axons are wrapped in myelin, which speeds conduction."
      },
      {
        "term": "Action potential",
        "definition": "A rapid reversal of membrane voltage caused by ion channels opening, which regenerates along an axon and carries a signal without decaying."
      },
      {
        "term": "Synapse",
        "definition": "A junction where a neuron releases neurotransmitters onto another neuron, a muscle cell, or a gland, converting an electrical signal into a chemical one."
      },
      {
        "term": "Central and peripheral divisions",
        "definition": "The brain and spinal cord form the central nervous system; cranial and spinal nerves and ganglia form the peripheral nervous system, which links the centre to the body."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "homeostasis",
      "endocrine-system",
      "vision"
    ],
    "wikipediaTitle": "Nervous system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Nervous system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Nervous_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "immune-system",
    "title": "Immune system",
    "subject": "biology",
    "category": "human-biology",
    "summary": "The immune system defends the body in layers: barriers such as skin and mucus, fast innate responses including inflammation and phagocytes, and adaptive B and T cell responses that target specific pathogens and form memory.",
    "aliases": [
      "immunity",
      "immune response",
      "human immune system"
    ],
    "keyConcepts": [
      {
        "term": "Innate immunity",
        "definition": "Non-specific defences present from birth, including physical barriers, phagocytes, inflammation, fever, and antimicrobial proteins. It responds within hours and lacks the antigen-specific, long-lived memory of adaptive immunity, although innate cells can show short-lived trained-immunity effects after some exposures."
      },
      {
        "term": "Adaptive immunity",
        "definition": "Lymphocytes recognise specific antigens: B cells produce antibodies, and T cells kill infected cells or help other immune cells. It takes days to peak but is highly specific."
      },
      {
        "term": "Antibodies",
        "definition": "Y-shaped proteins that bind antigens, neutralising pathogens or marking them for destruction by phagocytes and complement proteins."
      },
      {
        "term": "Immunological memory",
        "definition": "Long-lived memory B and T cells make a second response to the same pathogen faster and stronger, which is the basis of vaccination."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "lymphatic-system",
      "blood-and-blood-groups",
      "homeostasis"
    ],
    "wikipediaTitle": "Immune system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Immune system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Immune_system"
      },
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/books/biology-2e"
      }
    ]
  },
  {
    "slug": "endocrine-system",
    "title": "Endocrine system",
    "subject": "biology",
    "category": "human-biology",
    "summary": "The endocrine system uses hormones released into the blood to regulate growth, metabolism, reproduction, and stress, usually through negative feedback loops that hold hormone levels within a range.",
    "aliases": [
      "hormonal system",
      "human endocrine system"
    ],
    "keyConcepts": [
      {
        "term": "Hormone",
        "definition": "A chemical messenger secreted by a gland or specialised cell that travels in the blood and acts on target cells carrying matching receptors."
      },
      {
        "term": "Negative feedback",
        "definition": "A rise in a hormone or its effect suppresses further release, stabilising the system; thyroid hormone and cortisol are both controlled this way."
      },
      {
        "term": "Insulin and glucagon",
        "definition": "Pancreatic hormones with opposite actions: insulin lowers blood glucose by promoting uptake and storage, while glucagon raises it by releasing glucose from the liver."
      },
      {
        "term": "Hypothalamus and pituitary",
        "definition": "The hypothalamus releases hormones that control the pituitary, and the pituitary releases hormones that regulate other glands such as the thyroid, adrenal cortex, and gonads."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "homeostasis",
      "human-nervous-system",
      "human-reproductive-system"
    ],
    "wikipediaTitle": "Endocrine system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Endocrine system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Endocrine_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "urinary-system",
    "title": "Urinary system",
    "subject": "biology",
    "category": "human-biology",
    "summary": "The urinary system filters blood in the kidneys, reabsorbs water and useful solutes, and excretes the rest as urine, regulating water balance, blood pH, and blood pressure.",
    "aliases": [
      "renal system",
      "human urinary system"
    ],
    "keyConcepts": [
      {
        "term": "Nephron",
        "definition": "The kidney's functional unit: a glomerulus filters plasma, and a tubule reabsorbs useful solutes and water while secreting wastes into the forming urine."
      },
      {
        "term": "Glomerular filtration",
        "definition": "Blood pressure pushes water and small solutes through the glomerular filter; cells and large proteins stay in the blood. About 180 litres of filtrate are produced daily in an adult."
      },
      {
        "term": "Tubular reabsorption",
        "definition": "Most filtered water, glucose, and ions return to the blood along the tubule, leaving wastes such as urea concentrated in the urine."
      },
      {
        "term": "ADH and aldosterone",
        "definition": "Antidiuretic hormone increases water reabsorption in the collecting ducts, and aldosterone increases sodium reabsorption; both raise blood volume and pressure."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "homeostasis",
      "human-circulatory-system",
      "endocrine-system"
    ],
    "wikipediaTitle": "Urinary system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Urinary system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Urinary_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "homeostasis",
    "title": "Homeostasis",
    "subject": "biology",
    "category": "human-biology",
    "summary": "Homeostasis is the maintenance of stable internal conditions — temperature, pH, blood glucose, and water balance — by feedback loops that sense deviation and trigger a corrective response.",
    "aliases": [
      "internal balance",
      "physiological regulation"
    ],
    "keyConcepts": [
      {
        "term": "Negative feedback loop",
        "definition": "A sensor detects a change, a control centre compares it with a set point, and an effector reverses the change, returning the variable toward its target."
      },
      {
        "term": "Set point",
        "definition": "The value a regulatory system aims to maintain, such as a core body temperature near 37 °C in humans. Set points can shift, as in fever."
      },
      {
        "term": "Thermoregulation",
        "definition": "Sweating and widening skin blood vessels increase heat loss; shivering, narrowing vessels, and raising fur or hair conserve heat."
      },
      {
        "term": "Positive feedback",
        "definition": "A response that amplifies the initial change instead of reversing it, as when oxytocin strengthens uterine contractions during labour or clotting accelerates clot formation."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "human-nervous-system",
      "endocrine-system",
      "human-circulatory-system"
    ],
    "wikipediaTitle": "Homeostasis",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Homeostasis — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Homeostasis"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "skeletal-system",
    "title": "Human skeletal system",
    "subject": "biology",
    "category": "anatomy-and-physiology",
    "summary": "The human skeleton of 206 bones supports the body, protects organs, gives muscles levers to pull, stores calcium and phosphate, and produces blood cells in bone marrow.",
    "aliases": [
      "skeleton",
      "human skeletal system"
    ],
    "keyConcepts": [
      {
        "term": "Compact and spongy bone",
        "definition": "Compact bone forms the dense outer shell; spongy bone is a lattice of trabeculae that resists stress while keeping the bone light."
      },
      {
        "term": "Osteoblasts and osteoclasts",
        "definition": "Osteoblasts build new bone matrix, osteoclasts break it down, and their balance remodels bone throughout life and repairs fractures."
      },
      {
        "term": "Joint types",
        "definition": "Fibrous joints barely move, as in skull sutures; cartilaginous joints allow slight movement, as between vertebrae; synovial joints such as the knee move freely."
      },
      {
        "term": "Bone marrow",
        "definition": "Red marrow in spongy bone produces red blood cells, white blood cells, and platelets; yellow marrow stores fat in long bones."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "muscular-system",
      "homeostasis",
      "blood-and-blood-groups"
    ],
    "wikipediaTitle": "Human skeleton",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Human skeleton — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Human_skeleton"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "muscular-system",
    "title": "Muscular system",
    "subject": "biology",
    "category": "anatomy-and-physiology",
    "summary": "Muscles produce movement by contracting: skeletal muscle pulls on bones through tendons under voluntary control, cardiac muscle pumps the heart, and smooth muscle moves substances through organs involuntarily.",
    "aliases": [
      "musculature",
      "human muscular system",
      "muscles"
    ],
    "keyConcepts": [
      {
        "term": "Sliding filament mechanism",
        "definition": "Myosin heads bind actin and pull the filaments past each other, shortening each sarcomere. Calcium and ATP are both required for the cycle to run."
      },
      {
        "term": "Antagonistic pairs",
        "definition": "Muscles can only pull, so movement usually requires opposing pairs, such as the biceps and triceps at the elbow."
      },
      {
        "term": "Motor unit",
        "definition": "A motor neuron and all the muscle fibres it stimulates. Recruiting more units, and firing them faster, increases force."
      },
      {
        "term": "Three muscle types",
        "definition": "Skeletal muscle is striated and voluntary, cardiac muscle is striated and involuntary, and smooth muscle is non-striated and involuntary, lining blood vessels and the gut."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "skeletal-system",
      "human-circulatory-system",
      "homeostasis"
    ],
    "wikipediaTitle": "Muscular system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Muscular system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Muscular_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "blood-and-blood-groups",
    "title": "Blood and blood groups",
    "subject": "biology",
    "category": "anatomy-and-physiology",
    "summary": "Blood carries oxygen, nutrients, hormones, and heat and removes carbon dioxide and wastes. Red cells carry haemoglobin, platelets help clotting, and white cells defend the body; ABO and Rh groups set transfusion compatibility.",
    "aliases": [
      "blood types",
      "ABO blood group system"
    ],
    "keyConcepts": [
      {
        "term": "Plasma",
        "definition": "The liquid part of blood, mostly water with dissolved proteins, nutrients, hormones, and wastes; it also carries heat around the body."
      },
      {
        "term": "ABO blood group",
        "definition": "Antigens A and B on red cells, with matching antibodies in plasma. Type A has A antigen and anti-B, type B the reverse, type AB both antigens and no antibodies, and type O neither antigen but both antibodies."
      },
      {
        "term": "Rh factor",
        "definition": "The D antigen on red cells. Rh-negative people can become sensitised to Rh-positive blood, which matters in pregnancy and transfusion."
      },
      {
        "term": "Haemostasis",
        "definition": "Platelets adhere to damaged vessel walls and a cascade of plasma proteins converts fibrinogen to fibrin, forming a clot that seals the break."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "human-circulatory-system",
      "immune-system",
      "human-respiratory-system"
    ],
    "wikipediaTitle": "Blood",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Blood — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Blood"
      },
      {
        "label": "Blood type — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Blood_type"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "vision",
    "title": "Vision",
    "subject": "biology",
    "category": "anatomy-and-physiology",
    "summary": "Vision begins when the cornea and lens focus light onto the retina, where rod and cone photoreceptors convert it into electrical signals that travel along the optic nerve to the brain.",
    "aliases": [
      "sight",
      "visual perception"
    ],
    "keyConcepts": [
      {
        "term": "Rods and cones",
        "definition": "Rods work in dim light and detect shape and movement without colour; cones provide colour vision and sharp detail in bright light and cluster in the fovea."
      },
      {
        "term": "Accommodation",
        "definition": "The lens changes shape, controlled by ciliary muscles, to focus on near or distant objects. Loss of flexibility with age causes presbyopia."
      },
      {
        "term": "Phototransduction",
        "definition": "Light isomerises retinal in the pigment rhodopsin, triggering a cascade that changes the receptor cell's membrane potential and reduces neurotransmitter release."
      },
      {
        "term": "Optic nerve and blind spot",
        "definition": "Retinal ganglion cell axons leave the eye as the optic nerve. Where the nerve exits there are no photoreceptors, creating a small blind spot the brain fills in."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "human-nervous-system",
      "hearing-and-balance",
      "homeostasis"
    ],
    "wikipediaTitle": "Visual system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Visual system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Visual_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "hearing-and-balance",
    "title": "Hearing and balance",
    "subject": "biology",
    "category": "anatomy-and-physiology",
    "summary": "The ear converts sound into nerve impulses: the outer ear gathers sound, the middle ear's ossicles amplify vibrations into the cochlea, and the vestibular apparatus senses head position and motion.",
    "aliases": [
      "sense of hearing",
      "equilibrioception"
    ],
    "keyConcepts": [
      {
        "term": "Ossicles",
        "definition": "The malleus, incus, and stapes transmit vibrations from the eardrum to the oval window of the cochlea, amplifying pressure to match the fluid inside."
      },
      {
        "term": "Cochlea",
        "definition": "A fluid-filled spiral where hair cells along the basilar membrane convert vibration into nerve signals; different positions respond best to different frequencies."
      },
      {
        "term": "Hair cells",
        "definition": "Sensory cells with stereocilia that bend when fluid moves, opening ion channels and generating a receptor potential. Cochlear hair cells in humans do not regenerate, so damage causes permanent hearing loss."
      },
      {
        "term": "Vestibular system",
        "definition": "Semicircular canals detect rotational acceleration, while the utricle and saccule detect linear acceleration and head tilt, supporting balance and gaze stabilisation."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "human-nervous-system",
      "vision",
      "homeostasis"
    ],
    "wikipediaTitle": "Ear",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Ear — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Ear"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "lymphatic-system",
    "title": "Lymphatic system",
    "subject": "biology",
    "category": "anatomy-and-physiology",
    "summary": "The lymphatic system returns excess tissue fluid to the blood, absorbs fats from the small intestine, and supports immunity by carrying lymphocytes and exposing pathogens to lymph nodes.",
    "aliases": [
      "lymph system"
    ],
    "keyConcepts": [
      {
        "term": "Lymph",
        "definition": "Fluid that leaks from capillaries into tissues and is collected by lymphatic vessels, carrying cells and proteins back to the bloodstream."
      },
      {
        "term": "Lymph nodes",
        "definition": "Bean-shaped filters packed with lymphocytes that trap pathogens and cancer cells; they often swell during an infection."
      },
      {
        "term": "Lymphocytes",
        "definition": "White blood cells, including T cells and B cells, that carry out specific immune responses and circulate between blood, lymph, and lymphoid organs."
      },
      {
        "term": "Thoracic duct and spleen",
        "definition": "The thoracic duct returns most lymph to the blood at the left subclavian vein; the spleen filters blood and removes aged red cells."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "immune-system",
      "human-circulatory-system",
      "homeostasis"
    ],
    "wikipediaTitle": "Lymphatic system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Lymphatic system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Lymphatic_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "human-reproductive-system",
    "title": "Human reproductive system",
    "subject": "biology",
    "category": "anatomy-and-physiology",
    "summary": "The human reproductive system produces gametes and sex hormones: the testes make sperm and testosterone, while the ovaries make eggs, oestrogen, and progesterone, and the uterus supports pregnancy.",
    "aliases": [
      "reproductive system"
    ],
    "keyConcepts": [
      {
        "term": "Gametogenesis",
        "definition": "Meiosis halves the chromosome number, producing haploid sperm and eggs, so that fertilisation restores the diploid number of 46 in humans."
      },
      {
        "term": "Menstrual cycle",
        "definition": "Cyclic changes driven by FSH, LH, oestrogen, and progesterone that thicken the uterine lining and release an egg roughly every 28 days in a typical cycle."
      },
      {
        "term": "Fertilisation",
        "definition": "A sperm fuses with an egg in the fallopian tube, forming a zygote that divides and implants in the uterine lining about a week later."
      },
      {
        "term": "Placenta",
        "definition": "The organ where fetal and maternal blood exchange gases, nutrients, and wastes through adjacent surfaces; the two blood supplies do not mix directly."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "endocrine-system",
      "homeostasis",
      "genetics-basics"
    ],
    "wikipediaTitle": "Human reproductive system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Human reproductive system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Human_reproductive_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  },
  {
    "slug": "skin-and-integumentary-system",
    "title": "Skin and the integumentary system",
    "subject": "biology",
    "category": "anatomy-and-physiology",
    "summary": "The skin is the body's largest organ: the epidermis forms a waterproof barrier, the dermis holds vessels, nerves, and glands, and the hypodermis insulates, while skin also makes vitamin D and senses touch.",
    "aliases": [
      "integumentary system",
      "integument"
    ],
    "keyConcepts": [
      {
        "term": "Epidermis",
        "definition": "Keratinocytes divide in the basal layer and move outward, flattening and filling with keratin before being shed, so the whole epidermis is replaced over weeks."
      },
      {
        "term": "Melanin",
        "definition": "A pigment made by melanocytes and transferred to keratinocytes that absorbs ultraviolet radiation and protects DNA from damage."
      },
      {
        "term": "Thermoregulation by skin",
        "definition": "Sweat glands cool the body as sweat evaporates, and blood vessels in the dermis dilate to lose heat or constrict to conserve it."
      },
      {
        "term": "Keratin",
        "definition": "A tough structural protein that waterproofs skin and forms hair and nails, limiting water loss and blocking many microbes."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "homeostasis",
      "immune-system",
      "human-nervous-system"
    ],
    "wikipediaTitle": "Integumentary system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Integumentary system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Integumentary_system"
      },
      {
        "label": "OpenStax Anatomy and Physiology 2e",
        "url": "https://openstax.org/books/anatomy-and-physiology-2e"
      }
    ]
  }
];
