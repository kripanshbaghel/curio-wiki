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
  },
  {
    "slug": "cpu-instruction-cycle",
    "title": "The CPU and the instruction cycle",
    "subject": "technology",
    "category": "computer-hardware",
    "summary": "The central processing unit runs a program by repeating the instruction cycle: fetch an instruction from memory, decode it, execute it, and write the result back. The program counter tracks the next instruction, while the arithmetic logic unit performs the integer and bitwise operations.",
    "aliases": [
      "processor",
      "central processing unit"
    ],
    "keyConcepts": [
      {
        "term": "Program counter",
        "definition": "A register holding the address of the next instruction to fetch; it normally advances by one instruction after each fetch and is overwritten by jumps, branches, and calls."
      },
      {
        "term": "Fetch, decode, execute",
        "definition": "The repeating sequence in which the control unit reads an instruction from memory, interprets its opcode and operands, then drives the datapath to carry the operation out."
      },
      {
        "term": "Arithmetic logic unit",
        "definition": "The combinational circuit inside the CPU that performs integer addition, subtraction, bitwise AND/OR/XOR, and comparisons on values held in registers."
      },
      {
        "term": "Pipelining",
        "definition": "Overlapping the stages of different instructions so that several are in flight at once; it raises completed instructions per second without shortening the latency of any single instruction."
      }
    ],
    "equations": [
      {
        "label": "CPU execution time",
        "latex": "T_{\\text{cpu}} = I \\times CPI \\times T_{\\text{clk}}",
        "variables": [
          {
            "symbol": "I",
            "meaning": "instruction count executed"
          },
          {
            "symbol": "CPI",
            "meaning": "average clock cycles per instruction"
          },
          {
            "symbol": "T_clk",
            "meaning": "clock period in seconds"
          }
        ]
      },
      {
        "label": "Clock period and frequency",
        "latex": "T_{\\text{clk}} = \\frac{1}{f}",
        "variables": [
          {
            "symbol": "f",
            "meaning": "clock frequency in hertz"
          },
          {
            "symbol": "T_clk",
            "meaning": "duration of one clock cycle"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "computer-hardware-basics",
      "memory-hierarchy",
      "logic-gates-and-boolean-algebra"
    ],
    "wikipediaTitle": "Central processing unit",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Central processing unit — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Central_processing_unit"
      },
      {
        "label": "MIT OpenCourseWare 6.004 — Computation Structures",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      }
    ]
  },
  {
    "slug": "memory-hierarchy",
    "title": "The memory hierarchy",
    "subject": "technology",
    "category": "computer-hardware",
    "summary": "Registers, cache, main memory, and disk form a hierarchy in which each level is larger and slower but far cheaper per byte than the level above. Locality of reference — programs reusing recently touched addresses — is what lets small, fast memories serve most accesses.",
    "aliases": [
      "memory pyramid",
      "storage hierarchy"
    ],
    "keyConcepts": [
      {
        "term": "Locality of reference",
        "definition": "Programs tend to reuse recently accessed addresses (temporal locality) and nearby addresses (spatial locality), so a small fast memory can capture a large share of requests."
      },
      {
        "term": "Cache line",
        "definition": "Data moves between levels in fixed-size blocks, commonly 64 bytes; one miss fetches a whole line, so later accesses to neighbouring bytes hit."
      },
      {
        "term": "Hit rate and miss penalty",
        "definition": "The hit rate is the fraction of accesses served at a level; a miss costs the latency of the next lower level, which dominates total time when misses are frequent."
      },
      {
        "term": "Write policies",
        "definition": "Write-through sends every store immediately to the next level, while write-back defers it until the dirty line is evicted, trading memory traffic for bookkeeping."
      }
    ],
    "equations": [
      {
        "label": "Average memory access time",
        "latex": "\\text{AMAT} = t_{\\text{hit}} + m \\times t_{\\text{miss}}",
        "variables": [
          {
            "symbol": "t_hit",
            "meaning": "latency of a cache hit"
          },
          {
            "symbol": "m",
            "meaning": "miss rate (1 minus hit rate)"
          },
          {
            "symbol": "t_miss",
            "meaning": "extra latency paid to fetch from the next level"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "cpu-instruction-cycle",
      "virtual-memory-and-paging",
      "storage-devices",
      "computer-buses-and-interfaces"
    ],
    "wikipediaTitle": "Memory hierarchy",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Memory hierarchy — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Memory_hierarchy"
      },
      {
        "label": "MIT OpenCourseWare 6.004 — Computation Structures",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      }
    ]
  },
  {
    "slug": "binary-and-hexadecimal",
    "title": "Binary and hexadecimal number systems",
    "subject": "technology",
    "category": "programming",
    "summary": "Binary writes numbers with only the digits 0 and 1, each place worth a power of two, while hexadecimal uses sixteen digits so that one hex digit stands for exactly four bits. Programmers read hex because a byte is always two digits, making bit patterns shorter and easier to check.",
    "aliases": [
      "base 2 and base 16",
      "hex notation"
    ],
    "keyConcepts": [
      {
        "term": "Place value in base b",
        "definition": "Each position counts a power of the base, so binary 1011 equals 8 + 0 + 2 + 1 = 11, and the same rule gives 0xB = 11 in hexadecimal."
      },
      {
        "term": "One hex digit is four bits",
        "definition": "Because 16 = 2⁴, every hexadecimal digit maps to one nibble, so a byte is written with exactly two hex digits: 0xFF = 255 and 0x40 = 64."
      },
      {
        "term": "Two's complement",
        "definition": "A fixed-width negative integer is formed by inverting the bits and adding one, which gives the leading bit a negative weight and lets subtraction reuse the adder."
      },
      {
        "term": "Width and overflow",
        "definition": "An n-bit unsigned integer holds values from 0 to 2ⁿ − 1; a result outside that range wraps modulo 2ⁿ and the carry out of the top bit is discarded."
      }
    ],
    "equations": [
      {
        "label": "Binary to decimal expansion",
        "latex": "N = \\sum_{i=0}^{n-1} d_i \\, 2^i, \\quad d_i \\in \\{0, 1\\}",
        "variables": [
          {
            "symbol": "d_i",
            "meaning": "digit at position i, counting from 0 at the right"
          },
          {
            "symbol": "n",
            "meaning": "number of bits"
          }
        ]
      },
      {
        "label": "Byte, bits, and hex digits",
        "latex": "1 \\text{ byte} = 8 \\text{ bits} = 2 \\text{ hex digits}",
        "variables": [
          {
            "symbol": "byte",
            "meaning": "standard addressable unit of 8 bits"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "logic-gates-and-boolean-algebra",
      "cpu-instruction-cycle",
      "memory-hierarchy"
    ],
    "wikipediaTitle": "Binary number",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Binary number — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Binary_number"
      },
      {
        "label": "MIT OpenCourseWare 6.004 — Computation Structures",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      }
    ]
  },
  {
    "slug": "logic-gates-and-boolean-algebra",
    "title": "Logic gates and Boolean algebra",
    "subject": "technology",
    "category": "computer-hardware",
    "summary": "Logic gates are circuits that compute Boolean functions: AND outputs 1 only when both inputs are 1, OR when either is, and NOT inverts its input. Boolean algebra supplies identities such as De Morgan's laws that let an expression be rewritten into a cheaper circuit.",
    "aliases": [
      "digital logic",
      "switching algebra"
    ],
    "keyConcepts": [
      {
        "term": "Truth tables",
        "definition": "A truth table lists the output for every input combination; a two-input gate has four rows and an n-input function has 2ⁿ rows."
      },
      {
        "term": "Universal gates",
        "definition": "NAND and NOR can each implement every other gate, so a whole design can be fabricated from one well-characterised cell type."
      },
      {
        "term": "Sum of products",
        "definition": "Any Boolean function can be written as an OR of AND terms, one per truth-table row whose output is 1, giving a direct two-level circuit."
      },
      {
        "term": "Karnaugh maps",
        "definition": "Grouping adjacent 1s in a Karnaugh map in powers of two eliminates the variables that change within a group, producing a minimal sum-of-products expression by hand."
      }
    ],
    "equations": [
      {
        "label": "De Morgan's laws",
        "latex": "\\overline{A \\cdot B} = \\overline{A} + \\overline{B}, \\qquad \\overline{A + B} = \\overline{A} \\cdot \\overline{B}",
        "variables": [
          {
            "symbol": "A, B",
            "meaning": "Boolean input signals"
          },
          {
            "symbol": "\\overline{A}",
            "meaning": "NOT of A"
          }
        ]
      },
      {
        "label": "A two-level sum-of-products expression",
        "latex": "Y = A \\cdot B + \\overline{A} \\cdot C",
        "variables": [
          {
            "symbol": "A, B, C",
            "meaning": "Boolean inputs"
          },
          {
            "symbol": "Y",
            "meaning": "output function"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "binary-and-hexadecimal",
      "cpu-instruction-cycle"
    ],
    "wikipediaTitle": "Logic gate",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Logic gate — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Logic_gate"
      },
      {
        "label": "MIT OpenCourseWare 6.004 — Computation Structures",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      }
    ]
  },
  {
    "slug": "storage-devices",
    "title": "Storage devices: hard disks, SSDs, and flash",
    "subject": "technology",
    "category": "computer-hardware",
    "summary": "Hard disk drives store bits as magnetised regions on spinning platters read by a moving head, while solid-state drives hold charge in NAND flash cells with no moving parts. Flash keeps data without power but each block survives only a limited number of erase cycles.",
    "aliases": [
      "secondary storage",
      "mass storage"
    ],
    "keyConcepts": [
      {
        "term": "Hard disk mechanics",
        "definition": "Platters spin at thousands of revolutions per minute; a seek moves the head to the target track and rotational latency waits for the sector, so random access costs milliseconds."
      },
      {
        "term": "NAND flash cells",
        "definition": "A cell stores charge on a floating gate and is read by sensing its threshold voltage; multi-level cells encode several bits per cell at the cost of speed and endurance."
      },
      {
        "term": "Wear levelling and TRIM",
        "definition": "The controller spreads erases across blocks so no block wears out early, and TRIM reports freed blocks so the drive can erase them in the background before they are needed."
      },
      {
        "term": "Latency versus throughput",
        "definition": "Hard disks offer high sequential throughput at low cost per byte, while SSDs trade capacity cost for microsecond access times and resistance to shock."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "memory-hierarchy",
      "file-systems",
      "computer-buses-and-interfaces"
    ],
    "wikipediaTitle": "Computer data storage",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Computer data storage — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computer_data_storage"
      },
      {
        "label": "MIT OpenCourseWare 6.004 — Computation Structures",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      },
      {
        "label": "Solid-state drive — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Solid-state_drive"
      }
    ]
  },
  {
    "slug": "computer-buses-and-interfaces",
    "title": "Computer buses and interfaces",
    "subject": "technology",
    "category": "computer-hardware",
    "summary": "A bus is a shared set of wires carrying addresses, data, and control signals between the processor, memory, and peripherals. Modern systems replace wide shared buses with point-to-point serial links such as PCI Express, where each lane carries data in both directions at once.",
    "aliases": [
      "system bus",
      "expansion bus"
    ],
    "keyConcepts": [
      {
        "term": "Address, data, and control lines",
        "definition": "Address lines select a location, data lines carry the value, and control lines such as read/write, clock, and interrupt say when a transfer starts and what it means."
      },
      {
        "term": "Serial versus parallel",
        "definition": "Parallel buses send many bits at once but suffer skew between wires, while high-speed serial links embed the clock and use differential pairs to reach much higher rates."
      },
      {
        "term": "Memory-mapped I/O",
        "definition": "Devices expose their registers at addresses in the same address space as memory, so ordinary load and store instructions can read and drive hardware."
      },
      {
        "term": "Lanes and links",
        "definition": "PCI Express groups lanes into links such as ×1, ×4, and ×16; each generation roughly doubles the per-lane transfer rate while keeping the connector and software model compatible."
      }
    ],
    "equations": [
      {
        "label": "Bus bandwidth from width and rate",
        "latex": "B = w \\times f",
        "variables": [
          {
            "symbol": "B",
            "meaning": "peak transfer rate in bytes per second"
          },
          {
            "symbol": "w",
            "meaning": "bytes transferred per clock or per transfer"
          },
          {
            "symbol": "f",
            "meaning": "transfers per second"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "cpu-instruction-cycle",
      "memory-hierarchy",
      "storage-devices"
    ],
    "wikipediaTitle": "Bus (computing)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Bus (computing) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Bus_(computing)"
      },
      {
        "label": "MIT OpenCourseWare 6.004 — Computation Structures",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      }
    ]
  },
  {
    "slug": "operating-system-fundamentals",
    "title": "Operating system fundamentals",
    "subject": "technology",
    "category": "operating-systems",
    "summary": "An operating system manages the hardware and gives programs a stable, protected interface: it schedules the processor, allocates memory, and mediates access to disks and devices. The kernel runs in privileged mode, and system calls are the controlled entry points from user programs.",
    "aliases": [
      "OS",
      "system software"
    ],
    "keyConcepts": [
      {
        "term": "Kernel mode and user mode",
        "definition": "Instructions that touch page tables, interrupt vectors, or device registers run only in privileged mode; a trap switches modes so ordinary code cannot corrupt the machine."
      },
      {
        "term": "System calls",
        "definition": "A system call is a deliberate trap into the kernel carrying a request number, such as read or fork, which returns a result and an error code to the caller."
      },
      {
        "term": "Process isolation",
        "definition": "Each process gets its own virtual address space and file descriptor table, so a fault or malicious read in one program cannot touch another's memory."
      },
      {
        "term": "Monolithic and microkernels",
        "definition": "A monolithic kernel keeps drivers and file systems in one privileged image for speed, while a microkernel moves services into user space so a failing driver can be restarted."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "processes-and-threads",
      "virtual-memory-and-paging",
      "file-systems",
      "cpu-scheduling"
    ],
    "wikipediaTitle": "Operating system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Operating system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Operating_system"
      },
      {
        "label": "MIT OpenCourseWare 6.004 — Computation Structures",
        "url": "https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/"
      }
    ]
  },
  {
    "slug": "processes-and-threads",
    "title": "Processes and threads",
    "subject": "technology",
    "category": "operating-systems",
    "summary": "A process is a running program with its own address space, while a thread is a schedulable execution path inside that process sharing its code, heap, and open files. Threads switch faster than processes but must synchronise because they share memory.",
    "aliases": [
      "process vs thread",
      "lightweight process"
    ],
    "keyConcepts": [
      {
        "term": "Process control block",
        "definition": "The kernel’s record of a process: identifier, state, priority, register snapshot, memory map and accounting data. A context switch saves the running register state and, for a process switch, swaps the address space; the scheduler updates the rest of the PCB."
      },
      {
        "term": "Context switch",
        "definition": "Switching processes saves the running register state, swaps address spaces, and reloads the next one, costing time and disturbing caches and the translation lookaside buffer."
      },
      {
        "term": "Shared state in threads",
        "definition": "Threads in one process share memory, so two threads updating the same variable can interleave and lose updates. The synchronisation techniques that prevent this are covered under concurrency and deadlock."
      },
      {
        "term": "Creating processes and threads",
        "definition": "A fork duplicates a process with a copy-on-write address space, whereas creating a thread allocates only a new stack and register context inside the existing process."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "operating-system-fundamentals",
      "cpu-scheduling",
      "concurrency-and-deadlock"
    ],
    "wikipediaTitle": "Process (computing)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Process (computing) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Process_(computing)"
      },
      {
        "label": "Operating Systems: Three Easy Pieces",
        "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/"
      }
    ]
  },
  {
    "slug": "virtual-memory-and-paging",
    "title": "Virtual memory and paging",
    "subject": "technology",
    "category": "operating-systems",
    "summary": "Virtual memory gives each process a private address space that the memory management unit translates into physical frames through page tables. Pages not currently in RAM are held on disk, and a page fault suspends the instruction until the missing page is loaded.",
    "aliases": [
      "paging",
      "demand paging"
    ],
    "keyConcepts": [
      {
        "term": "Page table translation",
        "definition": "A virtual address splits into a page number and an offset; the page table maps the number to a physical frame while the offset is copied through unchanged."
      },
      {
        "term": "Translation lookaside buffer",
        "definition": "A small associative cache of recent translations avoids walking the page table on every access, keeping address translation off the critical path."
      },
      {
        "term": "Page faults",
        "definition": "An access to a page that is absent from RAM traps to the kernel, which loads the page from swap or a file, updates the table, and restarts the faulting instruction."
      },
      {
        "term": "Page replacement",
        "definition": "When no free frame exists, a victim page must be evicted. The optimal policy (Belady’s MIN) evicts the page needed furthest in the future but requires foresight; LRU approximates it using recent history, and clock algorithms approximate LRU with cheaper bookkeeping."
      }
    ],
    "equations": [
      {
        "label": "Effective access time with paging",
        "latex": "t_{\\text{eff}} = (1-p)\\,t_{\\text{mem}} + p\\,t_{\\text{fault}}",
        "variables": [
          {
            "symbol": "p",
            "meaning": "page fault rate, between 0 and 1"
          },
          {
            "symbol": "t_mem",
            "meaning": "time for a normal memory access"
          },
          {
            "symbol": "t_fault",
            "meaning": "time to service a page fault"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "memory-hierarchy",
      "operating-system-fundamentals",
      "file-systems"
    ],
    "wikipediaTitle": "Virtual memory",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Virtual memory — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Virtual_memory"
      },
      {
        "label": "Operating Systems: Three Easy Pieces",
        "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/"
      }
    ]
  },
  {
    "slug": "file-systems",
    "title": "File systems",
    "subject": "technology",
    "category": "operating-systems",
    "summary": "A file system organises a storage device into named files and directories, tracking which blocks belong to each file and which remain free. Metadata records size, ownership, permissions, and timestamps separately from the file's data, so lookups do not scan contents.",
    "aliases": [
      "filesystem",
      "directory structure"
    ],
    "keyConcepts": [
      {
        "term": "Inodes and directory entries",
        "definition": "An inode stores a file's metadata and block pointers, while a directory is a table mapping names to inode numbers, which is why several names can share one file."
      },
      {
        "term": "Block allocation",
        "definition": "Contiguous allocation is fast to read but fragments, whereas indexed allocation through inode block pointers allows random access and growth at the cost of extra metadata."
      },
      {
        "term": "Journalling",
        "definition": "Intended changes are written to a log before being applied, so after a crash the log can be replayed or discarded instead of leaving a half-updated structure."
      },
      {
        "term": "Mounting a namespace",
        "definition": "Each file system is attached at a mount point inside one directory tree, presenting many devices behind a single uniform path namespace."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "storage-devices",
      "operating-system-fundamentals",
      "virtual-memory-and-paging"
    ],
    "wikipediaTitle": "File system",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "File system — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/File_system"
      },
      {
        "label": "Operating Systems: Three Easy Pieces",
        "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/"
      }
    ]
  },
  {
    "slug": "cpu-scheduling",
    "title": "CPU scheduling",
    "subject": "technology",
    "category": "operating-systems",
    "summary": "The scheduler decides which ready process runs next on each core. First-come-first-served is simple but lets long jobs block short ones, shortest-job-first minimises average waiting time when run lengths are known, and round-robin hands each process a fixed time slice for fairness.",
    "aliases": [
      "process scheduling",
      "scheduler"
    ],
    "keyConcepts": [
      {
        "term": "Preemption and time slices",
        "definition": "A preemptive scheduler interrupts a running process when its quantum expires or a higher-priority task becomes ready, while a cooperative scheduler waits for it to yield."
      },
      {
        "term": "Turnaround and waiting time",
        "definition": "Turnaround is completion time minus arrival time, and waiting time is turnaround minus the time actually spent running; schedulers are compared on averages and worst cases."
      },
      {
        "term": "Priority and aging",
        "definition": "Priorities order the ready queue, and aging gradually raises the priority of long-waiting processes so that low-priority work is not starved indefinitely."
      },
      {
        "term": "Multilevel feedback queues",
        "definition": "Processes move between queues based on behaviour: compute-bound tasks drift to lower priority, while interactive tasks that sleep often stay near the top."
      }
    ],
    "equations": [
      {
        "label": "Turnaround time",
        "latex": "T_{\\text{turnaround}} = T_{\\text{completion}} - T_{\\text{arrival}}",
        "variables": [
          {
            "symbol": "T_completion",
            "meaning": "time the process finishes"
          },
          {
            "symbol": "T_arrival",
            "meaning": "time the process entered the system"
          }
        ]
      },
      {
        "label": "Waiting time",
        "latex": "T_{\\text{waiting}} = T_{\\text{turnaround}} - T_{\\text{burst}}",
        "variables": [
          {
            "symbol": "T_turnaround",
            "meaning": "total time from arrival to completion"
          },
          {
            "symbol": "T_burst",
            "meaning": "total time the process spent on the CPU"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "processes-and-threads",
      "operating-system-fundamentals",
      "concurrency-and-deadlock"
    ],
    "wikipediaTitle": "Scheduling (computing)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Scheduling (computing) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Scheduling_(computing)"
      },
      {
        "label": "Operating Systems: Three Easy Pieces",
        "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/"
      }
    ]
  },
  {
    "slug": "concurrency-and-deadlock",
    "title": "Concurrency and deadlock",
    "subject": "technology",
    "category": "operating-systems",
    "summary": "Concurrent threads share resources, and a deadlock occurs when each of them holds one resource while waiting for another in a cycle, so none can proceed. Mutual exclusion, hold-and-wait, no preemption, and circular wait are the four conditions that must all hold for a deadlock.",
    "aliases": [
      "deadlock",
      "process deadlock"
    ],
    "keyConcepts": [
      {
        "term": "Race conditions",
        "definition": "When two threads read, modify, and write shared data without synchronisation, the interleaving decides the outcome, so an increment can be silently lost."
      },
      {
        "term": "Mutual exclusion with locks",
        "definition": "A mutex admits one thread at a time to a critical section; forgetting to release it, or acquiring two locks in opposite orders, produces stalls or deadlock."
      },
      {
        "term": "Coffman conditions",
        "definition": "Deadlock requires mutual exclusion, hold-and-wait, no preemption, and a circular wait; preventing any single one of the four is enough to rule it out."
      },
      {
        "term": "Detection and recovery",
        "definition": "A system can record who waits for whom in a wait-for graph, look for a cycle, then abort or roll back a victim thread to break the cycle."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "processes-and-threads",
      "cpu-scheduling",
      "operating-system-fundamentals"
    ],
    "wikipediaTitle": "Deadlock (computer science)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Deadlock (computer science) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Deadlock_(computer_science)"
      },
      {
        "label": "Operating Systems: Three Easy Pieces",
        "url": "https://pages.cs.wisc.edu/~remzi/OSTEP/"
      }
    ]
  },
  {
    "slug": "variables-and-data-types",
    "title": "Variables and data types",
    "subject": "technology",
    "category": "programming",
    "summary": "A variable is a named storage location whose value can change, and its data type fixes how the stored bits are interpreted and which operations are legal. Integers, floating-point numbers, characters, and booleans differ in range, precision, and cost.",
    "aliases": [
      "data types",
      "typed variables"
    ],
    "keyConcepts": [
      {
        "term": "Type fixes interpretation",
        "definition": "The same 32 bits can be a signed integer, an IEEE 754 float, or four characters; the type tells the machine which representation and operations apply."
      },
      {
        "term": "Fixed-width integers",
        "definition": "An n-bit signed integer spans about −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1, and arithmetic that leaves that range wraps around or raises an overflow depending on the language."
      },
      {
        "term": "Floating-point precision",
        "definition": "A double keeps about 15 to 17 significant decimal digits, and values such as 0.1 have no exact binary form, so testing floats for equality is unreliable."
      },
      {
        "term": "Static and dynamic typing",
        "definition": "Static typing checks types before the program runs, while dynamic typing attaches types to values at run time, trading early error detection for flexibility."
      }
    ],
    "equations": [
      {
        "label": "Range of an n-bit signed integer",
        "latex": "-2^{\\,n-1} \\le x \\le 2^{\\,n-1} - 1",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of bits in the representation"
          },
          {
            "symbol": "x",
            "meaning": "value stored in two's complement"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "conditionals-and-loops",
      "functions-and-scope",
      "arrays-and-lists"
    ],
    "wikipediaTitle": "Data type",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Data type — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Data_type"
      },
      {
        "label": "CS50x — Harvard University",
        "url": "https://cs50.harvard.edu/x/"
      }
    ]
  },
  {
    "slug": "conditionals-and-loops",
    "title": "Conditionals and loops",
    "subject": "technology",
    "category": "programming",
    "summary": "Conditionals choose between alternative paths with if/else or switch, and loops repeat a block while a test holds or once per element of a collection. With plain sequence, these control structures are enough to express any computable procedure.",
    "aliases": [
      "control structures",
      "branching and iteration"
    ],
    "keyConcepts": [
      {
        "term": "Boolean conditions",
        "definition": "A condition evaluates to true or false; short-circuit operators stop as soon as the result is fixed, which avoids needless work and guards against null dereferences."
      },
      {
        "term": "While and for loops",
        "definition": "A while loop repeats while its test holds, whereas a for loop packages initialisation, test, and update, making the number of iterations explicit at the top."
      },
      {
        "term": "Loop invariants",
        "definition": "A property that holds before and after every iteration and is preserved by the body proves the loop's result once its terminating condition is reached."
      },
      {
        "term": "Off-by-one errors",
        "definition": "Boundary mistakes and updates that never falsify the test are the usual culprits; checking the first and last iteration by hand catches most of them."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "variables-and-data-types",
      "functions-and-scope",
      "recursion"
    ],
    "wikipediaTitle": "Control flow",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Control flow — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Control_flow"
      },
      {
        "label": "CS50x — Harvard University",
        "url": "https://cs50.harvard.edu/x/"
      }
    ]
  },
  {
    "slug": "functions-and-scope",
    "title": "Functions and scope",
    "subject": "technology",
    "category": "programming",
    "summary": "A function packages a computation behind a name, takes parameters, and returns a result, so callers can reuse it without knowing its internals. Scope rules decide which names the body can see and how long each local variable lives.",
    "aliases": [
      "procedures and scope",
      "subroutines"
    ],
    "keyConcepts": [
      {
        "term": "Parameters and arguments",
        "definition": "Parameters are the names in the definition and arguments are the values passed at the call, bound either by value (a copy) or by reference (an alias to the caller's variable)."
      },
      {
        "term": "Call stack and frames",
        "definition": "Each call pushes a frame holding parameters, locals, and the return address; returning pops it, which is why very deep recursion can exhaust the stack."
      },
      {
        "term": "Lexical scope",
        "definition": "A name resolves to the nearest enclosing definition in the source text, so an inner function can read outer variables while the outer code cannot see the inner ones."
      },
      {
        "term": "Pure functions",
        "definition": "A pure function's result depends only on its arguments and it changes nothing outside itself, making it easy to test and safe to reorder, cache, or run in parallel."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "variables-and-data-types",
      "recursion",
      "object-oriented-programming"
    ],
    "wikipediaTitle": "Function (computer programming)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Function (computer programming) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Function_(computer_programming)"
      },
      {
        "label": "CS50x — Harvard University",
        "url": "https://cs50.harvard.edu/x/"
      }
    ]
  },
  {
    "slug": "object-oriented-programming",
    "title": "Object-oriented programming",
    "subject": "technology",
    "category": "programming",
    "summary": "Object-oriented programming bundles data with the operations on it into objects, and classes describe the fields and methods those objects have. Encapsulation hides internal state, inheritance reuses behaviour, and polymorphism lets one call site serve many types.",
    "aliases": [
      "OOP",
      "classes and objects"
    ],
    "keyConcepts": [
      {
        "term": "Encapsulation",
        "definition": "Private fields are reachable only through the class's own methods, so invariants can be enforced in one place instead of at every call site in the program."
      },
      {
        "term": "Inheritance",
        "definition": "A subclass inherits fields and methods from a superclass and may override them; the substitution principle requires overrides to honour the base class's contract."
      },
      {
        "term": "Dynamic dispatch",
        "definition": "A call through a base-type reference selects the override belonging to the object's actual class at run time, usually through a per-class table of method addresses."
      },
      {
        "term": "Composition over inheritance",
        "definition": "Assembling objects from smaller collaborating parts avoids deep, fragile hierarchies and the ambiguity that arises when a class inherits from two parents."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "functions-and-scope",
      "arrays-and-lists",
      "variables-and-data-types"
    ],
    "wikipediaTitle": "Object-oriented programming",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Object-oriented programming — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Object-oriented_programming"
      },
      {
        "label": "CS50x — Harvard University",
        "url": "https://cs50.harvard.edu/x/"
      }
    ]
  },
  {
    "slug": "arrays-and-lists",
    "title": "Arrays and lists",
    "subject": "technology",
    "category": "algorithms",
    "summary": "An array stores elements of one type in contiguous memory, so indexing computes an address in constant time, while a linked list chains nodes through pointers and inserts in constant time once the position is known. Each trades random access against flexible growth.",
    "aliases": [
      "arrays and linked lists",
      "sequential collections"
    ],
    "keyConcepts": [
      {
        "term": "Constant-time indexing",
        "definition": "Because elements have equal size and sit next to each other, the address of element i is the base address plus i times the element size, with no search required."
      },
      {
        "term": "Linked-list nodes",
        "definition": "Each node stores a value and a pointer to the next node, so inserting or removing at a known node rewires a couple of pointers and moves no elements."
      },
      {
        "term": "Dynamic arrays",
        "definition": "A growable array doubles its buffer when full and copies the elements across, giving amortised constant-time appends even though individual resizes cost O(n)."
      },
      {
        "term": "Cache behaviour",
        "definition": "Contiguous arrays stream through cache lines predictably, while pointer chasing in a list causes frequent cache misses that can outweigh cheaper insertions."
      }
    ],
    "equations": [
      {
        "label": "Address of an array element",
        "latex": "\\text{addr}(A[i]) = \\text{base} + i \\times s",
        "variables": [
          {
            "symbol": "base",
            "meaning": "address of the first element"
          },
          {
            "symbol": "i",
            "meaning": "zero-based index"
          },
          {
            "symbol": "s",
            "meaning": "size of one element in bytes"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "variables-and-data-types",
      "hash-tables",
      "binary-search"
    ],
    "wikipediaTitle": "Array (data structure)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Array (data structure) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Array_(data_structure)"
      },
      {
        "label": "CS50x — Harvard University",
        "url": "https://cs50.harvard.edu/x/"
      }
    ]
  },
  {
    "slug": "recursion",
    "title": "Recursion",
    "subject": "technology",
    "category": "programming",
    "summary": "A recursive function solves a problem by calling itself on a smaller instance, with one or more base cases that stop the descent. The call stack holds each pending frame, and the shape of the recursion tree determines how much work the function does.",
    "aliases": [
      "recursive functions",
      "recursive definition"
    ],
    "keyConcepts": [
      {
        "term": "Base case and recursive step",
        "definition": "Every recursion needs at least one case solved without recursing, and each call must move strictly closer to it or the stack never unwinds."
      },
      {
        "term": "Call stack depth",
        "definition": "Each pending call keeps a frame, so depth grows with the input; linear recursion over a large range can exhaust the stack even when the logic is correct."
      },
      {
        "term": "Divide and conquer",
        "definition": "Splitting into independent halves, recursing on each, and combining the results gives O(n log n) sorting and O(log n) search on ordered data."
      },
      {
        "term": "Memoisation",
        "definition": "Memoisation caches the result of each subproblem so repeated recursive calls reuse it. The technique and the Fibonacci example are covered under dynamic programming."
      }
    ],
    "equations": [
      {
        "label": "Factorial recurrence",
        "latex": "n! = n \\times (n-1)!, \\qquad 0! = 1",
        "variables": [
          {
            "symbol": "n",
            "meaning": "non-negative integer"
          },
          {
            "symbol": "n!",
            "meaning": "product of all integers from 1 to n"
          }
        ]
      },
      {
        "label": "Depth of a linear recursion",
        "latex": "T(n) = T(n-1) + O(1) = O(n)",
        "variables": [
          {
            "symbol": "T(n)",
            "meaning": "running time or stack depth for input size n"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "mathematical-induction",
      "functions-and-scope",
      "trees-and-binary-search-trees",
      "dynamic-programming"
    ],
    "wikipediaTitle": "Recursion (computer science)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Recursion (computer science) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Recursion_(computer_science)"
      },
      {
        "label": "CS50x — Harvard University",
        "url": "https://cs50.harvard.edu/x/"
      }
    ]
  },
  {
    "slug": "version-control-with-git",
    "title": "Version control with Git",
    "subject": "technology",
    "category": "programming",
    "summary": "Git records snapshots of a project as commits, each identified by a hash of its contents and parents, forming a directed acyclic history. Branches are cheap movable pointers to commits, so separate lines of work can be merged without copying files.",
    "aliases": [
      "git version control",
      "distributed version control"
    ],
    "keyConcepts": [
      {
        "term": "Commits as snapshots",
        "definition": "A commit points to a tree of file contents plus its parent commits; identical content is stored once, and any changed byte produces a different hash."
      },
      {
        "term": "Working tree, index, repository",
        "definition": "Edits live in the working tree, git add copies the chosen version into the index, and git commit turns the index into a permanent snapshot."
      },
      {
        "term": "Branches and three-way merges",
        "definition": "A branch is a reference to one commit; merging two lines finds their common ancestor and combines changes, stopping where both sides edited the same lines."
      },
      {
        "term": "Distributed remotes",
        "definition": "Cloning copies the entire history, and fetch and push exchange objects with other repositories, so history is available offline and no single server is authoritative."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "debugging-and-testing",
      "programming-algorithms"
    ],
    "wikipediaTitle": "Git",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Git — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Git"
      },
      {
        "label": "CS50x — Harvard University",
        "url": "https://cs50.harvard.edu/x/"
      }
    ]
  },
  {
    "slug": "debugging-and-testing",
    "title": "Debugging and testing",
    "subject": "technology",
    "category": "programming",
    "summary": "Debugging is the search for the cause of a defect: reproduce it, shrink the failing input, inspect program state, and fix the cause rather than the symptom. Automated tests encode expected behaviour so a regression is caught as soon as a change breaks it.",
    "aliases": [
      "software testing"
    ],
    "keyConcepts": [
      {
        "term": "Reproduce and minimise",
        "definition": "A reliable reproduction, reduced to the smallest input that still fails, isolates the defect and later proves the fix actually addresses it."
      },
      {
        "term": "Unit tests and assertions",
        "definition": "A unit test calls one piece of code with controlled inputs and asserts the result, running fast and failing with a message that names the expectation."
      },
      {
        "term": "Regression tests",
        "definition": "Every fixed bug earns a test that would have failed before the fix, so the same defect cannot quietly return in a later change."
      },
      {
        "term": "Breakpoints and watches",
        "definition": "A debugger pauses execution at a breakpoint and exposes the call stack and variable values, letting you compare the state you expected with the state you got."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "version-control-with-git",
      "programming-algorithms",
      "functions-and-scope"
    ],
    "wikipediaTitle": "Debugging",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Debugging — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Debugging"
      },
      {
        "label": "CS50x — Harvard University",
        "url": "https://cs50.harvard.edu/x/"
      },
      {
        "label": "Software testing — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Software_testing"
      }
    ]
  },
  {
    "slug": "sorting-algorithms",
    "title": "Sorting algorithms",
    "subject": "technology",
    "category": "algorithms",
    "summary": "Sorting puts items into order; comparison sorts such as quicksort and merge sort need about n log n comparisons, which is the proven lower bound for any method that learns only from pairwise comparisons. Counting and radix sort beat that bound by exploiting the structure of the keys.",
    "aliases": [
      "sorting",
      "comparison sort"
    ],
    "keyConcepts": [
      {
        "term": "Quicksort partitioning",
        "definition": "Pick a pivot and move smaller items left and larger ones right, then recurse on both sides; average time is O(n log n), but a bad pivot on sorted input degrades it to O(n²)."
      },
      {
        "term": "Merge sort",
        "definition": "Split the array in half, sort each half recursively, then merge two sorted runs by repeatedly taking the smaller head, giving guaranteed O(n log n) time and O(n) extra space."
      },
      {
        "term": "Stability",
        "definition": "A stable sort keeps equal keys in their original relative order, which matters when records are sorted by several fields in successive passes."
      },
      {
        "term": "Comparison lower bound",
        "definition": "There are n! possible orderings, so a comparison tree must have at least log₂(n!) leaves, which is about n log₂ n − 1.44n comparisons."
      }
    ],
    "equations": [
      {
        "label": "Comparison-sort lower bound",
        "latex": "\\log_2(n!) = \\Theta(n \\log n)",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of items to sort"
          }
        ]
      },
      {
        "label": "Merge sort recurrence",
        "latex": "T(n) = 2\\,T\\!\\left(\\frac{n}{2}\\right) + O(n) = O(n \\log n)",
        "variables": [
          {
            "symbol": "T(n)",
            "meaning": "comparisons needed for n items"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "programming-algorithms",
      "big-o-notation",
      "binary-search",
      "arrays-and-lists"
    ],
    "wikipediaTitle": "Sorting algorithm",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Sorting algorithm — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Sorting_algorithm"
      },
      {
        "label": "MIT OpenCourseWare 6.006 — Introduction to Algorithms",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "slug": "binary-search",
    "title": "Binary search",
    "subject": "technology",
    "category": "algorithms",
    "summary": "Binary search finds a target in a sorted array by comparing it with the middle element and discarding the half that cannot contain it. Each probe halves the remaining range, so a million sorted items need only about twenty comparisons.",
    "aliases": [
      "binary search algorithm",
      "logarithmic search"
    ],
    "keyConcepts": [
      {
        "term": "Sorted input requirement",
        "definition": "The halving argument depends on ordering, so running binary search on unsorted data returns wrong answers rather than an error."
      },
      {
        "term": "Bound conventions",
        "definition": "Low and high can both be inclusive, or high can be one past the end; mixing the two conventions causes off-by-one errors and infinite loops."
      },
      {
        "term": "Overflow-safe midpoint",
        "definition": "Computing low + (high − low)/2 avoids the overflow that (low + high)/2 can suffer when indices approach the maximum fixed-width integer."
      },
      {
        "term": "Lower and upper bounds",
        "definition": "The same halving locates the first index where a monotone predicate turns true, which answers first-occurrence and insertion-point queries."
      }
    ],
    "equations": [
      {
        "label": "Binary search recurrence",
        "latex": "T(n) = T\\!\\left(\\frac{n}{2}\\right) + O(1) = O(\\log n)",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of sorted items"
          },
          {
            "symbol": "T(n)",
            "meaning": "comparisons needed in the worst case"
          }
        ]
      },
      {
        "label": "Worst-case comparisons",
        "latex": "\\lceil \\log_2(n+1) \\rceil",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of sorted items"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "sorting-algorithms",
      "big-o-notation",
      "arrays-and-lists",
      "trees-and-binary-search-trees"
    ],
    "wikipediaTitle": "Binary search",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Binary search — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Binary_search"
      },
      {
        "label": "MIT OpenCourseWare 6.006 — Introduction to Algorithms",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "slug": "big-o-notation",
    "title": "Big-O notation",
    "subject": "technology",
    "category": "algorithms",
    "summary": "Big-O notation describes how a function grows with its input: f(n) = O(g(n)) means f is eventually bounded above by a constant multiple of g. Ignoring machine-specific constants lets algorithms be compared by how their cost scales.",
    "aliases": [
      "asymptotic complexity",
      "algorithmic complexity"
    ],
    "keyConcepts": [
      {
        "term": "Formal definition",
        "definition": "f(n) = O(g(n)) when there exist a constant c > 0 and a threshold n₀ such that f(n) ≤ c·g(n) for every n ≥ n₀."
      },
      {
        "term": "Growth classes",
        "definition": "O(1), O(log n), O(n), O(n log n), O(n²), and O(2ⁿ) form the usual ladder, and each class eventually dominates every class below it."
      },
      {
        "term": "Upper, lower, and tight bounds",
        "definition": "Big-O gives an upper bound, big-Omega a lower bound, and big-Theta both, so Θ(n log n) is a stronger claim than O(n²) for the same algorithm."
      },
      {
        "term": "Space complexity",
        "definition": "The same notation measures memory, so merge sort needs Θ(n) extra space while heapsort works in Θ(1) space beyond the input array."
      }
    ],
    "equations": [
      {
        "label": "Definition of big-O",
        "latex": "f(n) = O(g(n)) \\iff \\exists\\, c > 0,\\ n_0 : f(n) \\le c\\,g(n) \\ \\ \\forall n \\ge n_0",
        "variables": [
          {
            "symbol": "f, g",
            "meaning": "functions of the input size n"
          },
          {
            "symbol": "c",
            "meaning": "positive constant factor"
          },
          {
            "symbol": "n_0",
            "meaning": "threshold beyond which the bound holds"
          }
        ]
      },
      {
        "label": "Nested-loop growth",
        "latex": "\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2} = O(n^2)",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of iterations of the outer loop"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "programming-algorithms",
      "sorting-algorithms",
      "binary-search",
      "hash-tables"
    ],
    "wikipediaTitle": "Big O notation",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Big O notation — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Big_O_notation"
      },
      {
        "label": "MIT OpenCourseWare 6.006 — Introduction to Algorithms",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "slug": "hash-tables",
    "title": "Hash tables",
    "subject": "technology",
    "category": "algorithms",
    "summary": "A hash table maps keys to values by running each key through a hash function that selects a bucket, giving average constant-time lookup. Collisions are handled by chaining or open addressing, and the load factor controls how many probes an access needs.",
    "aliases": [
      "hash map",
      "associative array"
    ],
    "keyConcepts": [
      {
        "term": "Hash function",
        "definition": "A good hash spreads keys evenly across buckets and is cheap to compute, so lookups touch few buckets and no bucket grows long."
      },
      {
        "term": "Collision resolution",
        "definition": "Chaining keeps a list of colliding entries per bucket, while open addressing probes further slots in a fixed sequence until it finds the key or an empty one."
      },
      {
        "term": "Load factor",
        "definition": "Load factor α = n/m is the ratio of stored entries to buckets; as α approaches 1, open-addressing probe counts rise sharply, so tables resize before then."
      },
      {
        "term": "Resizing and rehashing",
        "definition": "When the load factor passes a threshold, the table allocates a larger bucket array and reinserts every key, which is why individual insertions are amortised O(1)."
      }
    ],
    "equations": [
      {
        "label": "Load factor",
        "latex": "\\alpha = \\frac{n}{m}",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of stored entries"
          },
          {
            "symbol": "m",
            "meaning": "number of buckets"
          }
        ]
      },
      {
        "label": "Expected probes for a successful search (open addressing)",
        "latex": "\\frac{1}{2}\\left(1 + \\frac{1}{1-\\alpha}\\right)",
        "variables": [
          {
            "symbol": "α",
            "meaning": "load factor, 0 ≤ α < 1"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "arrays-and-lists",
      "big-o-notation",
      "trees-and-binary-search-trees"
    ],
    "wikipediaTitle": "Hash table",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Hash table — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hash_table"
      },
      {
        "label": "MIT OpenCourseWare 6.006 — Introduction to Algorithms",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "slug": "trees-and-binary-search-trees",
    "title": "Trees and binary search trees",
    "subject": "technology",
    "category": "algorithms",
    "summary": "A tree is a hierarchical structure of nodes linked from parent to child, and a binary search tree keeps every left descendant smaller and every right descendant larger than its node. That ordering lets search, insert, and delete follow a single root-to-leaf path.",
    "aliases": [
      "BST",
      "ordered binary tree"
    ],
    "keyConcepts": [
      {
        "term": "BST ordering invariant",
        "definition": "For every node, keys in the left subtree are smaller and keys in the right subtree larger, so one comparison at each node eliminates an entire subtree."
      },
      {
        "term": "Height sets the cost",
        "definition": "Search, insert, and delete cost O(h); a balanced tree has h about log₂ n, but inserting keys in sorted order into a plain BST builds a chain with h = n."
      },
      {
        "term": "Traversal orders",
        "definition": "In-order traversal of a BST visits keys in sorted order, while pre-order suits copying a tree and post-order suits deleting one safely."
      },
      {
        "term": "Self-balancing variants",
        "definition": "AVL and red-black trees restore balance with rotations after updates, guaranteeing O(log n) height in exchange for extra bookkeeping per operation."
      }
    ],
    "equations": [
      {
        "label": "Maximum nodes in a binary tree of height h",
        "latex": "N_{\\max} = 2^{h+1} - 1",
        "variables": [
          {
            "symbol": "h",
            "meaning": "height counted in edges on the longest path"
          },
          {
            "symbol": "N",
            "meaning": "number of nodes"
          }
        ]
      },
      {
        "label": "Balanced-tree search cost",
        "latex": "h = \\lfloor \\log_2 n \\rfloor \\ \\Rightarrow\\ O(\\log n)",
        "variables": [
          {
            "symbol": "n",
            "meaning": "number of stored keys"
          },
          {
            "symbol": "h",
            "meaning": "height of a balanced tree"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "graph-traversal",
      "recursion",
      "binary-search",
      "big-o-notation"
    ],
    "wikipediaTitle": "Binary search tree",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Binary search tree — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Binary_search_tree"
      },
      {
        "label": "MIT OpenCourseWare 6.006 — Introduction to Algorithms",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "slug": "graph-traversal",
    "title": "Graph traversal: BFS and DFS",
    "subject": "technology",
    "category": "algorithms",
    "summary": "Breadth-first search explores a graph level by level with a queue and finds shortest paths in unweighted graphs, while depth-first search follows one branch to its end using a stack or recursion. Both visit each vertex once and examine each edge at most twice, in O(V + E) time.",
    "aliases": [
      "BFS and DFS",
      "graph search"
    ],
    "keyConcepts": [
      {
        "term": "Queue versus stack",
        "definition": "BFS takes the oldest discovered vertex from a queue to get level order, while DFS takes the newest from a stack and plunges as deep as possible before backtracking."
      },
      {
        "term": "Visited set",
        "definition": "Marking each vertex when it is first discovered stops the traversal from looping and keeps the running time linear in the size of the graph."
      },
      {
        "term": "BFS shortest paths",
        "definition": "The first time BFS reaches a vertex it has used the fewest edges, so recording each discovery's parent builds a shortest-path tree."
      },
      {
        "term": "DFS timestamps",
        "definition": "Entry and exit times reveal ancestor relationships and support topological sorting, cycle detection, and finding strongly connected components."
      }
    ],
    "equations": [
      {
        "label": "Traversal complexity",
        "latex": "O(V + E)",
        "variables": [
          {
            "symbol": "V",
            "meaning": "number of vertices"
          },
          {
            "symbol": "E",
            "meaning": "number of edges"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "graph-theory",
      "trees-and-binary-search-trees",
      "big-o-notation",
      "dynamic-programming"
    ],
    "wikipediaTitle": "Graph traversal",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Graph traversal — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Graph_traversal"
      },
      {
        "label": "MIT OpenCourseWare 6.006 — Introduction to Algorithms",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "slug": "dynamic-programming",
    "title": "Dynamic programming",
    "subject": "technology",
    "category": "algorithms",
    "summary": "Dynamic programming solves problems with overlapping subproblems by computing each distinct subproblem once and reusing the result, collapsing exponential recomputation to one computation per distinct subproblem — often polynomial, but sometimes still exponential. It applies when a problem has optimal substructure and repeated subproblems.",
    "aliases": [
      "DP",
      "memoised recursion"
    ],
    "keyConcepts": [
      {
        "term": "Overlapping subproblems",
        "definition": "Naive recursive Fibonacci recomputes the same values exponentially often; storing each computed value reduces the work to a linear number of additions."
      },
      {
        "term": "Optimal substructure",
        "definition": "An optimal solution must contain optimal solutions to its subproblems, which is what licenses building a global answer out of stored local ones."
      },
      {
        "term": "Top-down and bottom-up",
        "definition": "Memoised recursion fills the table on demand, while tabulation computes states in dependency order, avoiding deep recursion and often improving memory locality."
      },
      {
        "term": "State design",
        "definition": "The table's dimensions and transition rule define what one subproblem means; a badly chosen state either misses dependencies or stores redundant information."
      }
    ],
    "equations": [
      {
        "label": "Fibonacci recurrence computed by DP",
        "latex": "F(n) = F(n-1) + F(n-2), \\quad F(0) = 0,\\ F(1) = 1",
        "variables": [
          {
            "symbol": "F(n)",
            "meaning": "n-th Fibonacci number"
          },
          {
            "symbol": "n",
            "meaning": "index into the sequence"
          }
        ]
      },
      {
        "label": "Naive versus memoised cost",
        "latex": "O(2^n) \\ \\rightarrow\\ O(n)",
        "variables": [
          {
            "symbol": "n",
            "meaning": "input size, such as the Fibonacci index"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "recursion",
      "greedy-algorithms",
      "big-o-notation"
    ],
    "wikipediaTitle": "Dynamic programming",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Dynamic programming — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Dynamic_programming"
      },
      {
        "label": "MIT OpenCourseWare 6.006 — Introduction to Algorithms",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "slug": "greedy-algorithms",
    "title": "Greedy algorithms",
    "subject": "technology",
    "category": "algorithms",
    "summary": "A greedy algorithm builds a solution step by step, always taking the locally best option and never reconsidering earlier choices. It is fast and simple, but correct only when the problem has the greedy-choice property and optimal substructure, as with minimum spanning trees.",
    "aliases": [
      "greedy method",
      "greedy strategy"
    ],
    "keyConcepts": [
      {
        "term": "Greedy-choice property",
        "definition": "A globally optimal solution can begin with the locally best choice, so no backtracking is needed; establishing this usually requires an exchange argument."
      },
      {
        "term": "Exchange argument",
        "definition": "Take any optimal solution, replace its first choice with the greedy one, and show the result is no worse, which proves the greedy choice never costs optimality."
      },
      {
        "term": "Where greedy fails",
        "definition": "Greedy is optimal only when the greedy-choice and optimal-substructure properties hold. For coin systems that are not canonical, such as {1, 3, 4} with target 6, greedy gives 4 + 1 + 1 (three coins) while the optimum is 3 + 3 (two)."
      },
      {
        "term": "Classic successes",
        "definition": "Kruskal's and Prim's algorithms build minimum spanning trees, Dijkstra's algorithm finds shortest paths with non-negative weights, and Huffman coding builds optimal prefix codes."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "dynamic-programming",
      "graph-traversal",
      "sorting-algorithms"
    ],
    "wikipediaTitle": "Greedy algorithm",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Greedy algorithm — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Greedy_algorithm"
      },
      {
        "label": "MIT OpenCourseWare 6.006 — Introduction to Algorithms",
        "url": "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ]
  },
  {
    "slug": "relational-databases-and-sql",
    "title": "Relational databases and SQL",
    "subject": "technology",
    "category": "databases",
    "summary": "A relational database stores data in tables of rows and columns, with keys linking tables together, and SQL is the declarative language for defining and querying them. You describe the result you want; the engine's planner chooses how to retrieve it.",
    "aliases": [
      "SQL databases",
      "relational model",
      "RDBMS"
    ],
    "keyConcepts": [
      {
        "term": "Relation (table)",
        "definition": "A table of rows and columns. Strictly, SQL tables are multisets — duplicate rows are allowed unless a primary key or UNIQUE constraint forbids them — while the relational model describes sets."
      },
      {
        "term": "Primary and foreign keys",
        "definition": "A primary key uniquely identifies each row. A foreign key references a key in another table, or the same table for self-references such as manager_id; a NULL foreign key means “no reference” and is not checked."
      },
      {
        "term": "Declarative querying",
        "definition": "SQL states which rows and columns are wanted, not how to fetch them; the planner picks join order, indexes and access methods."
      },
      {
        "term": "Joins",
        "definition": "Joins combine rows from two relations by matching key values; inner joins keep matches only, outer joins keep unmatched rows from one or both sides."
      }
    ],
    "equations": [
      {
        "label": "Relational selection operator",
        "latex": "\\sigma_{\\text{condition}}(R)",
        "variables": [
          {
            "symbol": "\\sigma",
            "meaning": "Selection operator that keeps rows matching a predicate"
          },
          {
            "symbol": "R",
            "meaning": "Relation (table) of rows"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "database-normalization",
      "database-indexes-and-query-optimization",
      "transactions-and-acid",
      "nosql-databases"
    ],
    "wikipediaTitle": "Relational database",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Relational database — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Relational_database"
      },
      {
        "label": "PostgreSQL documentation",
        "url": "https://www.postgresql.org/docs/current/"
      }
    ]
  },
  {
    "slug": "database-normalization",
    "title": "Database normalisation",
    "subject": "technology",
    "category": "databases",
    "summary": "Normalisation restructures tables so that each fact is stored in one place, eliminating redundancy that leads to insert, update and delete anomalies. Each normal form forbids a specific kind of dependency, from repeating groups to transitive dependencies.",
    "aliases": [
      "database normalization",
      "normal forms"
    ],
    "keyConcepts": [
      {
        "term": "Functional dependency",
        "definition": "Attribute set Y is functionally dependent on X when any two rows that agree on X must also agree on Y, written X → Y."
      },
      {
        "term": "First normal form",
        "definition": "Every column holds a single atomic value and there are no repeating groups, so each row-column position holds exactly one value."
      },
      {
        "term": "Second and third normal form",
        "definition": "2NF removes attributes that depend on only part of a composite key; 3NF removes transitive dependencies where a non-key attribute determines another non-key attribute."
      },
      {
        "term": "Denormalisation",
        "definition": "Deliberately duplicating data or merging tables to avoid expensive joins, accepting the cost of keeping the copies consistent."
      }
    ],
    "equations": [
      {
        "label": "Functional dependency between attribute sets",
        "latex": "X \\to Y",
        "variables": [
          {
            "symbol": "X",
            "meaning": "Determining attribute set"
          },
          {
            "symbol": "Y",
            "meaning": "Attribute set determined by X"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "relational-databases-and-sql",
      "database-indexes-and-query-optimization",
      "transactions-and-acid"
    ],
    "wikipediaTitle": "Database normalization",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Database normalization — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Database_normalization"
      },
      {
        "label": "PostgreSQL documentation",
        "url": "https://www.postgresql.org/docs/current/"
      }
    ]
  },
  {
    "slug": "database-indexes-and-query-optimization",
    "title": "Database indexes and query optimisation",
    "subject": "technology",
    "category": "databases",
    "summary": "An index is a separate sorted structure, usually a B-tree, that lets the engine jump to matching rows instead of scanning a whole table. Query optimisation uses statistics and cost estimates to choose indexes, join orders and access paths for each query.",
    "aliases": [
      "database index",
      "query planner",
      "index tuning"
    ],
    "keyConcepts": [
      {
        "term": "B-tree index",
        "definition": "A balanced, sorted tree keyed on one or more columns that finds a value in a number of page reads proportional to the logarithm of the row count."
      },
      {
        "term": "Selectivity",
        "definition": "The fraction of rows a condition matches; a highly selective index helps, while returning a large share of the table usually makes a sequential scan cheaper."
      },
      {
        "term": "Covering index",
        "definition": "An index containing every column a query needs, so the engine answers from the index alone without visiting table rows."
      },
      {
        "term": "Cost-based optimisation",
        "definition": "The planner estimates the cost of candidate plans from table and index statistics, then chooses the plan with the lowest estimated cost."
      },
      {
        "term": "Write and space cost",
        "definition": "Every index must be updated on each INSERT, UPDATE and DELETE and occupies storage; indexing a low-selectivity column can make queries slower than a sequential scan."
      }
    ],
    "equations": [
      {
        "label": "Approximate height of a B-tree with branching factor m and N keys",
        "latex": "h \\approx \\lceil \\log_{m} N \\rceil",
        "variables": [
          {
            "symbol": "h",
            "meaning": "Number of tree levels (page reads per lookup)"
          },
          {
            "symbol": "m",
            "meaning": "Maximum number of children per node"
          },
          {
            "symbol": "N",
            "meaning": "Number of indexed keys"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "relational-databases-and-sql",
      "database-normalization",
      "transactions-and-acid"
    ],
    "wikipediaTitle": "Database index",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Database index — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Database_index"
      },
      {
        "label": "PostgreSQL documentation",
        "url": "https://www.postgresql.org/docs/current/"
      }
    ]
  },
  {
    "slug": "transactions-and-acid",
    "title": "Transactions and ACID",
    "subject": "technology",
    "category": "databases",
    "summary": "A transaction groups several statements into one all-or-nothing unit, and ACID names the guarantees: atomicity, consistency, isolation and durability. Isolation levels trade concurrency for protection against anomalies such as dirty reads and lost updates.",
    "aliases": [
      "transaction isolation",
      "database transaction",
      "atomicity consistency isolation durability"
    ],
    "keyConcepts": [
      {
        "term": "Atomicity",
        "definition": "A transaction either commits every change or rolls all of them back, so no partial update survives a failure."
      },
      {
        "term": "Consistency",
        "definition": "The transaction moves the database from one state that satisfies its declared constraints (primary and foreign keys, CHECKs, uniqueness) to another. Unlike atomicity, isolation and durability, consistency is partly the application’s responsibility."
      },
      {
        "term": "Isolation levels",
        "definition": "Settings such as read committed or serialisable control which concurrent anomalies — dirty reads, non-repeatable reads, phantoms — a transaction may observe."
      },
      {
        "term": "Durability",
        "definition": "Committed changes survive crashes because they are written to a write-ahead log and flushed to stable storage before the commit is acknowledged."
      },
      {
        "term": "Serialisability",
        "definition": "The strongest isolation guarantee: concurrent transactions produce a result equivalent to running them one after another in some order."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "relational-databases-and-sql",
      "nosql-databases",
      "database-indexes-and-query-optimization"
    ],
    "wikipediaTitle": "ACID",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "ACID — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/ACID"
      },
      {
        "label": "PostgreSQL documentation",
        "url": "https://www.postgresql.org/docs/current/"
      }
    ]
  },
  {
    "slug": "nosql-databases",
    "title": "NoSQL databases",
    "subject": "technology",
    "category": "databases",
    "summary": "NoSQL databases trade the relational model for document, key–value, column-family, or graph models, and scale horizontally through sharding and replication. Older systems relaxed transactions in favour of tunable consistency; many current products now offer partition-scoped or multi-document ACID transactions, with weaker guarantees mainly across partitions.",
    "aliases": [
      "non-relational databases",
      "NoSQL database"
    ],
    "keyConcepts": [
      {
        "term": "Data models",
        "definition": "Key-value stores map keys to opaque values, document stores hold nested JSON-like documents, wide-column stores group sparse columns by row key, and graph stores hold nodes and edges."
      },
      {
        "term": "Sharding",
        "definition": "Partitioning data across nodes by a shard key so reads and writes spread out instead of concentrating on one machine."
      },
      {
        "term": "Replication and eventual consistency",
        "definition": "Copies of each partition on several nodes keep serving reads during failures; replicas converge on the same value later rather than instantly."
      },
      {
        "term": "CAP trade-off",
        "definition": "When a network partition occurs, a distributed store must choose between refusing some requests to stay consistent or answering with possibly stale data."
      }
    ],
    "equations": [
      {
        "label": "Quorum condition for strongly consistent reads and writes",
        "latex": "R + W > N",
        "variables": [
          {
            "symbol": "R",
            "meaning": "Number of replicas that must answer a read"
          },
          {
            "symbol": "W",
            "meaning": "Number of replicas that must acknowledge a write"
          },
          {
            "symbol": "N",
            "meaning": "Replication factor"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "relational-databases-and-sql",
      "transactions-and-acid",
      "database-indexes-and-query-optimization"
    ],
    "wikipediaTitle": "NoSQL",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "NoSQL — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/NoSQL"
      },
      {
        "label": "PostgreSQL documentation",
        "url": "https://www.postgresql.org/docs/current/"
      }
    ]
  },
  {
    "slug": "osi-and-tcp-ip-models",
    "title": "The OSI and TCP/IP models",
    "subject": "technology",
    "category": "networks",
    "summary": "The OSI model describes networking as seven abstract layers, from physical signalling up to applications, while TCP/IP groups the same work into four. Each layer adds its own header in a process called encapsulation, and peers on two hosts communicate through matching layers.",
    "aliases": [
      "TCP/IP stack",
      "OSI reference model",
      "protocol stack"
    ],
    "keyConcepts": [
      {
        "term": "Seven OSI layers",
        "definition": "Physical, data link, network, transport, session, presentation and application — each with a defined job and a defined interface to its neighbours."
      },
      {
        "term": "Encapsulation",
        "definition": "Each layer wraps the data handed down from above in its own header, and sometimes a trailer, forming a protocol data unit such as a frame, packet or segment."
      },
      {
        "term": "TCP/IP four layers",
        "definition": "Link, internet, transport and application layers cover the same functions with fewer boundaries; IP sits at the internet layer and TCP or UDP at the transport layer."
      },
      {
        "term": "Layered independence",
        "definition": "A layer relies only on the service the layer below offers, so Ethernet, Wi-Fi or fibre can carry IP without changing the layers above."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ip-addressing-and-subnetting",
      "tcp-and-udp",
      "routing-and-packet-switching",
      "http-and-the-web"
    ],
    "wikipediaTitle": "OSI model",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "OSI model — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/OSI_model"
      },
      {
        "label": "RFC 1122 — Requirements for Internet Hosts",
        "url": "https://www.rfc-editor.org/rfc/rfc1122"
      }
    ]
  },
  {
    "slug": "ip-addressing-and-subnetting",
    "title": "IP addressing and subnetting",
    "subject": "technology",
    "category": "networks",
    "summary": "An IP address identifies an interface, and its prefix length splits the bits into a network part and a host part. Subnetting borrows host bits to create smaller networks, while CIDR notation and private ranges with NAT conserve IPv4 space; IPv6 uses 128-bit addresses.",
    "aliases": [
      "subnetting",
      "CIDR",
      "subnet mask"
    ],
    "keyConcepts": [
      {
        "term": "Address and prefix",
        "definition": "An IPv4 address is 32 bits written as four decimal octets; the prefix length states how many leading bits identify the network."
      },
      {
        "term": "Subnet mask",
        "definition": "A mask with the network bits set to 1 and host bits to 0; a bitwise AND with an address yields its network address."
      },
      {
        "term": "CIDR",
        "definition": "Classless inter-domain routing writes a prefix as address/length, allowing any prefix size and letting routers aggregate many networks into one route."
      },
      {
        "term": "Private ranges and NAT",
        "definition": "Blocks such as 10.0.0.0/8 are not routed on the public internet; network address translation lets many hosts share one public address."
      }
    ],
    "equations": [
      {
        "label": "Usable host addresses in an IPv4 subnet with prefix length n",
        "latex": "2^{32-n} - 2",
        "variables": [
          {
            "symbol": "n",
            "meaning": "Prefix length in bits (for prefixes shorter than /31)"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "osi-and-tcp-ip-models",
      "routing-and-packet-switching",
      "tcp-and-udp"
    ],
    "wikipediaTitle": "IP address",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "IP address — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/IP_address"
      },
      {
        "label": "RFC 791 — Internet Protocol",
        "url": "https://www.rfc-editor.org/rfc/rfc791"
      }
    ]
  },
  {
    "slug": "tcp-and-udp",
    "title": "TCP and UDP",
    "subject": "technology",
    "category": "networks",
    "summary": "TCP provides a reliable, ordered byte stream: it opens a connection with a three-way handshake, numbers every byte, acknowledges delivery, retransmits losses and adapts its sending rate to congestion. UDP sends independent datagrams with no handshake or retransmission, leaving reliability to the application.",
    "aliases": [
      "transmission control protocol",
      "user datagram protocol",
      "transport protocols"
    ],
    "keyConcepts": [
      {
        "term": "Three-way handshake",
        "definition": "The client sends SYN with a sequence number, the server replies SYN-ACK, and the client sends ACK, agreeing initial sequence numbers before data flows."
      },
      {
        "term": "Acknowledgements and retransmission",
        "definition": "The receiver acknowledges bytes received; unacknowledged data is resent after a timeout or after repeated duplicate acknowledgements."
      },
      {
        "term": "Congestion control",
        "definition": "The sender grows a congestion window with slow start and additive increase, then cuts it on loss signals, probing for available bandwidth."
      },
      {
        "term": "UDP trade-offs",
        "definition": "UDP has an 8-byte header, no connection state and no retransmission, so it suits DNS queries, telephony and games that prefer fresh data over complete data."
      }
    ],
    "equations": [
      {
        "label": "Upper bound on TCP throughput set by window size and round-trip time",
        "latex": "\\text{throughput} \\le \\frac{W}{RTT}",
        "variables": [
          {
            "symbol": "W",
            "meaning": "Bytes in flight allowed by the window"
          },
          {
            "symbol": "RTT",
            "meaning": "Round-trip time between sender and receiver"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "osi-and-tcp-ip-models",
      "http-and-the-web",
      "domain-name-system",
      "routing-and-packet-switching"
    ],
    "wikipediaTitle": "Transmission Control Protocol",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Transmission Control Protocol — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Transmission_Control_Protocol"
      },
      {
        "label": "RFC 793 — Transmission Control Protocol",
        "url": "https://www.rfc-editor.org/rfc/rfc793"
      },
      {
        "label": "User Datagram Protocol — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/User_Datagram_Protocol"
      }
    ]
  },
  {
    "slug": "domain-name-system",
    "title": "The Domain Name System",
    "subject": "technology",
    "category": "networks",
    "summary": "DNS resolves human-readable names to addresses through a hierarchy of servers: a resolver asks a root server, then a top-level-domain server, then the authoritative server for the zone. Answers are cached for a time-to-live, and record types such as A, AAAA, CNAME, MX and TXT carry different data.",
    "aliases": [
      "DNS",
      "domain name resolution",
      "name resolution"
    ],
    "keyConcepts": [
      {
        "term": "Delegated hierarchy",
        "definition": "The root zone delegates to top-level domains, which delegate to authoritative name servers for each zone, so no single server holds every name."
      },
      {
        "term": "Recursive and iterative resolution",
        "definition": "A recursive resolver does the walking for the client, querying root, TLD and authoritative servers in turn and caching each answer it receives."
      },
      {
        "term": "Resource records",
        "definition": "A maps a name to an IPv4 address, AAAA to IPv6, CNAME to another name, MX to mail servers, NS to name servers and TXT to arbitrary text."
      },
      {
        "term": "Caching and TTL",
        "definition": "Each record carries a time-to-live; resolvers reuse cached answers until it expires, cutting query load but delaying how quickly changes propagate."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "http-and-the-web",
      "tcp-and-udp",
      "osi-and-tcp-ip-models"
    ],
    "wikipediaTitle": "Domain Name System",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Domain Name System — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Domain_Name_System"
      },
      {
        "label": "RFC 1034 — Domain names: concepts and facilities",
        "url": "https://www.rfc-editor.org/rfc/rfc1034"
      }
    ]
  },
  {
    "slug": "http-and-the-web",
    "title": "HTTP and the web",
    "subject": "technology",
    "category": "networks",
    "summary": "HTTP is a stateless request-response protocol: a client sends a method and path with headers, and a server replies with a status code, headers and an optional body. Cookies and caches add state, and HTTPS wraps the same messages in TLS.",
    "aliases": [
      "hypertext transfer protocol",
      "world wide web",
      "HTTP protocol"
    ],
    "keyConcepts": [
      {
        "term": "Request and response",
        "definition": "A request carries a method such as GET or POST, a target path, a version and headers; the response carries a status code, headers and an optional body."
      },
      {
        "term": "Status codes",
        "definition": "Three-digit codes group outcomes: 2xx success, 3xx redirection, 4xx client error and 5xx server error."
      },
      {
        "term": "Headers and cookies",
        "definition": "Headers describe content type, caching and authentication; Set-Cookie and Cookie headers let a stateless protocol carry session state."
      },
      {
        "term": "Statelessness and caching",
        "definition": "Each request stands alone, so servers can be replicated freely; cache headers and validators let clients and proxies reuse responses."
      },
      {
        "term": "Safe and idempotent methods",
        "definition": "GET, HEAD and OPTIONS are safe (no intended state change) and idempotent; PUT and DELETE are idempotent (repeating them has the same effect), while POST is neither, so retrying one is not automatically safe."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "domain-name-system",
      "tcp-and-udp",
      "public-key-cryptography-and-tls"
    ],
    "wikipediaTitle": "HTTP",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "HTTP — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/HTTP"
      },
      {
        "label": "MDN Web Docs — HTTP",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP"
      }
    ]
  },
  {
    "slug": "routing-and-packet-switching",
    "title": "Routing and packet switching",
    "subject": "technology",
    "category": "networks",
    "summary": "Packet switching breaks messages into packets that share links independently, and routers forward each packet hop by hop using a forwarding table built from routing protocols. Longest-prefix matching picks the most specific route, while protocols such as OSPF and BGP distribute reachability information.",
    "aliases": [
      "packet routing",
      "packet forwarding",
      "network routing"
    ],
    "keyConcepts": [
      {
        "term": "Forwarding table",
        "definition": "Each router keeps a table of prefixes and next hops; the most specific matching prefix decides where a packet goes next."
      },
      {
        "term": "Link-state routing",
        "definition": "Routers flood information about their links so every router can build a map of the network and run a shortest-path algorithm such as Dijkstra's."
      },
      {
        "term": "Distance-vector routing",
        "definition": "Routers exchange vectors of distances to destinations and relax them with neighbours' values, converging on shortest paths without a full map."
      },
      {
        "term": "Autonomous systems",
        "definition": "The internet is divided into independently administered networks that exchange reachability with BGP, choosing paths by policy as well as by length."
      }
    ],
    "equations": [
      {
        "label": "Shortest-path relaxation step",
        "latex": "d(v) \\leftarrow \\min\\left(d(v),\\, d(u) + w(u,v)\\right)",
        "variables": [
          {
            "symbol": "d(v)",
            "meaning": "Best known distance from the source to node v"
          },
          {
            "symbol": "w(u,v)",
            "meaning": "Cost of the link from u to v"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "ip-addressing-and-subnetting",
      "osi-and-tcp-ip-models",
      "tcp-and-udp"
    ],
    "wikipediaTitle": "Routing",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Routing — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Routing"
      },
      {
        "label": "RFC 2328 — OSPF Version 2",
        "url": "https://www.rfc-editor.org/rfc/rfc2328"
      }
    ]
  },
  {
    "slug": "cryptography-and-encryption",
    "title": "Cryptography and encryption",
    "subject": "technology",
    "category": "cybersecurity",
    "summary": "Encryption scrambles plaintext into ciphertext with an algorithm and a key, so only a key holder can recover the message. Symmetric ciphers such as AES process data in block or stream modes, and authenticated encryption adds a tag that detects tampering.",
    "aliases": [
      "encryption",
      "cipher",
      "secret-key cryptography"
    ],
    "keyConcepts": [
      {
        "term": "Symmetric cipher",
        "definition": "The same secret key encrypts and decrypts; block ciphers process fixed-size blocks while stream ciphers generate a key stream that is combined with the data."
      },
      {
        "term": "Block cipher modes",
        "definition": "A mode turns a block cipher into a stream over long messages. CBC needs an unpredictable (not secret) IV, while CTR and GCM need a nonce that is never reused under the same key; GCM nonce reuse breaks both confidentiality and authenticity."
      },
      {
        "term": "Kerckhoffs's principle",
        "definition": "Security must rest on the secrecy of the key, not on hiding the algorithm, so public algorithms can be studied and attacked by everyone."
      },
      {
        "term": "Authenticated encryption",
        "definition": "Constructions such as AES-GCM or ChaCha20-Poly1305 produce a tag that lets the receiver detect any modification, preventing silent tampering."
      }
    ],
    "equations": [
      {
        "label": "Symmetric encryption of plaintext with a shared key",
        "latex": "C = E_K(P)",
        "variables": [
          {
            "symbol": "C",
            "meaning": "Ciphertext"
          },
          {
            "symbol": "P",
            "meaning": "Plaintext"
          },
          {
            "symbol": "E_K",
            "meaning": "Encryption function using secret key K"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "public-key-cryptography-and-tls",
      "authentication-and-password-security",
      "firewalls-and-network-security"
    ],
    "wikipediaTitle": "Cryptography",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Cryptography — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cryptography"
      },
      {
        "label": "NIST FIPS 197 — Advanced Encryption Standard",
        "url": "https://csrc.nist.gov/pubs/fips/197/final"
      }
    ]
  },
  {
    "slug": "public-key-cryptography-and-tls",
    "title": "Public-key cryptography and TLS",
    "subject": "technology",
    "category": "cybersecurity",
    "summary": "Public-key cryptography uses matched key pairs: one key encrypts or verifies, the other decrypts or signs. Security rests on trapdoor problems such as integer factorisation and discrete logarithms, and TLS combines key exchange, certificates and authenticated encryption for web traffic.",
    "aliases": [
      "asymmetric cryptography",
      "public-key encryption",
      "asymmetric encryption"
    ],
    "keyConcepts": [
      {
        "term": "Key pairs",
        "definition": "Each party holds a private key kept secret and a public key that can be published; an operation with one key can only be reversed with the other."
      },
      {
        "term": "Trapdoor functions",
        "definition": "Multiplying two large primes is easy while factoring their product is believed hard; similar one-way problems underlie Diffie-Hellman and elliptic-curve schemes."
      },
      {
        "term": "Digital signatures",
        "definition": "Signing hashes a message and transforms the digest with the private key, so anyone holding the public key can verify authenticity and integrity."
      },
      {
        "term": "Certificates and the TLS handshake",
        "definition": "A certificate binds a public key to a domain and is signed by a trusted authority. In TLS 1.3 the client sends a key share in ClientHello, the server replies with its key share, certificate and signature, and both sides derive fresh session keys in one round trip."
      }
    ],
    "equations": [
      {
        "label": "RSA encryption of a message m",
        "latex": "c \\equiv m^{e} \\pmod{n}",
        "variables": [
          {
            "symbol": "c",
            "meaning": "Ciphertext integer"
          },
          {
            "symbol": "m",
            "meaning": "Message encoded as an integer"
          },
          {
            "symbol": "e",
            "meaning": "Public exponent"
          },
          {
            "symbol": "n",
            "meaning": "Modulus, the product of two secret primes"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "cryptography-and-encryption",
      "http-and-the-web",
      "authentication-and-password-security"
    ],
    "wikipediaTitle": "Public-key cryptography",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Public-key cryptography — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Public-key_cryptography"
      },
      {
        "label": "RFC 8446 — TLS 1.3",
        "url": "https://www.rfc-editor.org/rfc/rfc8446"
      }
    ]
  },
  {
    "slug": "authentication-and-password-security",
    "title": "Authentication and password security",
    "subject": "technology",
    "category": "cybersecurity",
    "summary": "Authentication proves that a user or service is who it claims to be, using something you know, something you have or something you are. Passwords are stored as salted, deliberately slow hashes, and multi-factor methods add a second independent check.",
    "aliases": [
      "password hashing",
      "login security",
      "multi-factor authentication"
    ],
    "keyConcepts": [
      {
        "term": "Authentication factors",
        "definition": "Something you know (password, PIN), something you have (token, phone) and something you are (fingerprint, face) are independent kinds of evidence of identity."
      },
      {
        "term": "Salted password hashing",
        "definition": "A random salt per user defeats precomputed tables, and deliberately slow functions such as Argon2, scrypt or bcrypt make each guess expensive."
      },
      {
        "term": "Credential stuffing and rate limits",
        "definition": "Attackers replay leaked username-password pairs across sites; throttling, lockouts and breached-password checks blunt automated guessing."
      },
      {
        "term": "Multi-factor and passkeys",
        "definition": "Requiring a second factor, or replacing passwords with public-key credentials bound to one site, removes the single secret an attacker can steal."
      }
    ],
    "equations": [
      {
        "label": "Entropy of a randomly chosen password",
        "latex": "H = L \\log_2 N",
        "variables": [
          {
            "symbol": "H",
            "meaning": "Entropy in bits"
          },
          {
            "symbol": "L",
            "meaning": "Number of characters"
          },
          {
            "symbol": "N",
            "meaning": "Size of the character alphabet"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "public-key-cryptography-and-tls",
      "cryptography-and-encryption",
      "sql-injection-and-web-vulnerabilities"
    ],
    "wikipediaTitle": "Authentication",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Authentication — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Authentication"
      },
      {
        "label": "NIST SP 800-63B — Digital Identity Guidelines",
        "url": "https://pages.nist.gov/800-63-3/sp800-63b.html"
      }
    ]
  },
  {
    "slug": "malware",
    "title": "Malware",
    "subject": "technology",
    "category": "cybersecurity",
    "summary": "Malware is software written to damage, spy on or take control of a system. Viruses attach to files, worms spread across networks on their own, trojans disguise themselves as useful programs, and ransomware encrypts data for extortion, with persistence mechanisms keeping infections alive.",
    "aliases": [
      "malicious software",
      "malicious code"
    ],
    "keyConcepts": [
      {
        "term": "Classification",
        "definition": "Viruses need a host file to spread, worms propagate over networks by themselves, trojans pose as legitimate software, and ransomware encrypts data for payment."
      },
      {
        "term": "Propagation and persistence",
        "definition": "Infection arrives through malicious attachments, exploits, downloads or removable media, then installs itself in startup routines or scheduled tasks to survive reboots."
      },
      {
        "term": "Payload",
        "definition": "The harmful action — data theft, encryption, remote control, spam sending or lateral movement — is separate from the code that spreads the infection."
      },
      {
        "term": "Detection",
        "definition": "Signature matching recognises known samples by byte patterns, while behavioural and heuristic analysis flags suspicious actions such as mass file encryption."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "firewalls-and-network-security",
      "authentication-and-password-security",
      "sql-injection-and-web-vulnerabilities"
    ],
    "wikipediaTitle": "Malware",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Malware — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Malware"
      },
      {
        "label": "NIST Computer Security Resource Center",
        "url": "https://csrc.nist.gov/"
      }
    ]
  },
  {
    "slug": "sql-injection-and-web-vulnerabilities",
    "title": "SQL injection and web application vulnerabilities",
    "subject": "technology",
    "category": "cybersecurity",
    "summary": "SQL injection occurs when untrusted input is concatenated into a query, so text such as an always-true condition or a UNION clause changes the statement's meaning. Parameterised queries keep code and data separate; related web flaws include cross-site scripting and cross-site request forgery.",
    "aliases": [
      "SQLi",
      "injection attack"
    ],
    "keyConcepts": [
      {
        "term": "Injection mechanism",
        "definition": "When input is pasted into a query string, characters such as a quote or the UNION keyword can end the intended clause and add attacker-chosen SQL."
      },
      {
        "term": "Parameterised queries",
        "definition": "The statement template is parsed first and values are bound as data, so injected text can never become SQL syntax."
      },
      {
        "term": "Escaping and validation",
        "definition": "Escaping is error-prone and type checking only narrows input; neither substitutes for binding parameters or for least-privilege database accounts."
      },
      {
        "term": "Related web flaws",
        "definition": "Cross-site scripting injects script into pages other users view, and cross-site request forgery makes a logged-in browser send requests the user did not intend."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "authentication-and-password-security",
      "http-and-the-web",
      "firewalls-and-network-security"
    ],
    "wikipediaTitle": "SQL injection",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "SQL injection — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/SQL_injection"
      },
      {
        "label": "OWASP Top Ten",
        "url": "https://owasp.org/www-project-top-ten/"
      },
      {
        "label": "Cross-site scripting — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Cross-site_scripting"
      }
    ]
  },
  {
    "slug": "firewalls-and-network-security",
    "title": "Firewalls and network security",
    "subject": "technology",
    "category": "cybersecurity",
    "summary": "A firewall enforces a policy on traffic crossing a boundary, from stateless packet filters that inspect addresses and ports to stateful firewalls that track connections and proxies that understand application protocols. Segmentation, DMZs and logging limit what an attacker can reach after a breach.",
    "aliases": [
      "network firewall",
      "packet filtering",
      "stateful inspection"
    ],
    "keyConcepts": [
      {
        "term": "Packet filtering",
        "definition": "Rules match source and destination addresses, ports and protocol, then accept, drop or reject each packet independently of any other."
      },
      {
        "term": "Stateful inspection",
        "definition": "The firewall remembers established connections so reply traffic is allowed without a rule for every response, and packets that do not fit a known flow are dropped."
      },
      {
        "term": "Application-layer gateways",
        "definition": "Proxies and web application firewalls parse whole requests, blocking malformed or policy-violating traffic that packet filters cannot see."
      },
      {
        "term": "Segmentation and least privilege",
        "definition": "Splitting networks into zones, placing public services in a DMZ and allowing only required flows limits how far an intruder can move."
      }
    ],
    "equations": [],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "tcp-and-udp",
      "ip-addressing-and-subnetting",
      "malware",
      "cryptography-and-encryption"
    ],
    "wikipediaTitle": "Firewall (computing)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Firewall (computing) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Firewall_(computing)"
      },
      {
        "label": "Cisco — What Is a Firewall?",
        "url": "https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html"
      }
    ]
  },
  {
    "slug": "machine-learning-fundamentals",
    "title": "Machine learning fundamentals",
    "subject": "technology",
    "category": "artificial-intelligence",
    "summary": "Machine learning fits a model to examples by minimising a loss function rather than following hand-written rules. Held-out validation and test sets estimate generalisation, and regularisation or more data guards against overfitting the training set.",
    "aliases": [
      "ML",
      "statistical learning"
    ],
    "keyConcepts": [
      {
        "term": "Learning from examples",
        "definition": "Instead of rules written by hand, the algorithm adjusts parameters so that its predictions on training examples match the given labels or targets."
      },
      {
        "term": "Loss and optimisation",
        "definition": "A loss function scores how wrong each prediction is, and an optimiser changes the parameters to reduce the average loss over the data."
      },
      {
        "term": "Overfitting and regularisation",
        "definition": "A model can memorise training noise and fail on new data; more data, simpler models, weight penalties and early stopping restrain this."
      },
      {
        "term": "Data splits",
        "definition": "Training data fits parameters, validation data tunes design choices, and a test set used once estimates performance on unseen cases."
      }
    ],
    "equations": [
      {
        "label": "Empirical risk over n training examples",
        "latex": "\\hat{R}(f) = \\frac{1}{n} \\sum_{i=1}^{n} L\\left(f(x_i),\\, y_i\\right)",
        "variables": [
          {
            "symbol": "\\hat{R}(f)",
            "meaning": "Average training loss of model f"
          },
          {
            "symbol": "L",
            "meaning": "Per-example loss function"
          },
          {
            "symbol": "x_i, y_i",
            "meaning": "Feature vector and label of example i"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "neural-networks",
      "supervised-and-unsupervised-learning",
      "large-language-models",
      "probability-basics"
    ],
    "wikipediaTitle": "Machine learning",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Machine learning — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Machine_learning"
      },
      {
        "label": "Dive into Deep Learning",
        "url": "https://d2l.ai/"
      }
    ]
  },
  {
    "slug": "neural-networks",
    "title": "Neural networks",
    "subject": "technology",
    "category": "artificial-intelligence",
    "summary": "A neural network stacks layers that compute weighted sums followed by non-linear activation functions. Backpropagation applies the chain rule to find the gradient of the loss for every weight, and gradient descent updates those weights step by step.",
    "aliases": [
      "artificial neural network",
      "ANN",
      "multi-layer perceptron"
    ],
    "keyConcepts": [
      {
        "term": "Weighted sums",
        "definition": "Each neuron computes a dot product of its inputs with learned weights plus a bias, combining many input signals into one value."
      },
      {
        "term": "Activation functions",
        "definition": "Non-linearities such as ReLU or sigmoid let stacked layers represent curved decision boundaries; without them the whole stack collapses to one linear map."
      },
      {
        "term": "Backpropagation",
        "definition": "The chain rule propagates the loss gradient backwards through the network, giving the derivative with respect to every weight in one pass."
      },
      {
        "term": "Gradient descent",
        "definition": "Weights move opposite the gradient, scaled by a learning rate; minibatches of examples make each update cheaper but noisier."
      }
    ],
    "equations": [
      {
        "label": "Forward pass through one dense layer",
        "latex": "a^{(l)} = \\sigma\\left(W^{(l)} a^{(l-1)} + b^{(l)}\\right)",
        "variables": [
          {
            "symbol": "a^{(l)}",
            "meaning": "Activations of layer l"
          },
          {
            "symbol": "W^{(l)}",
            "meaning": "Weight matrix of layer l"
          },
          {
            "symbol": "b^{(l)}",
            "meaning": "Bias vector of layer l"
          },
          {
            "symbol": "\\sigma",
            "meaning": "Element-wise activation function"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "machine-learning-fundamentals",
      "supervised-and-unsupervised-learning",
      "computer-vision",
      "large-language-models"
    ],
    "wikipediaTitle": "Neural network (machine learning)",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Neural network (machine learning) — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Neural_network_(machine_learning)"
      },
      {
        "label": "Dive into Deep Learning",
        "url": "https://d2l.ai/"
      }
    ]
  },
  {
    "slug": "supervised-and-unsupervised-learning",
    "title": "Supervised and unsupervised learning",
    "subject": "technology",
    "category": "artificial-intelligence",
    "summary": "Supervised learning fits a mapping from inputs to known labels, while unsupervised learning finds structure in unlabelled data. Supervised models are judged on held-out labelled data, whereas unsupervised methods are judged by held-out likelihood, cluster quality, or downstream usefulness.",
    "aliases": [
      "learning paradigms",
      "supervised learning",
      "unsupervised learning"
    ],
    "keyConcepts": [
      {
        "term": "Classification and regression",
        "definition": "Supervised tasks predict a discrete label or a continuous value, and the loss measures the difference between prediction and target."
      },
      {
        "term": "Clustering",
        "definition": "Unsupervised methods group similar points, as k-means does by alternating assignment to the nearest centroid and recomputation of centroids."
      },
      {
        "term": "Dimensionality reduction",
        "definition": "Techniques such as principal component analysis project data onto fewer directions that retain most of its variance."
      },
      {
        "term": "Evaluation",
        "definition": "Supervised models are scored on held-out labelled data (accuracy, precision/recall, error). Unsupervised methods have no labels, so they are judged by held-out likelihood, cluster quality such as the silhouette score, or performance on a downstream task."
      }
    ],
    "equations": [
      {
        "label": "k-means objective",
        "latex": "J = \\sum_{k=1}^{K} \\sum_{x \\in C_k} \\left\\lVert x - \\mu_k \\right\\rVert^{2}",
        "variables": [
          {
            "symbol": "K",
            "meaning": "Number of clusters"
          },
          {
            "symbol": "C_k",
            "meaning": "Set of points assigned to cluster k"
          },
          {
            "symbol": "\\mu_k",
            "meaning": "Centroid of cluster k"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "machine-learning-fundamentals",
      "neural-networks",
      "probability-basics",
      "standard-deviation"
    ],
    "wikipediaTitle": "Supervised learning",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Supervised learning — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Supervised_learning"
      },
      {
        "label": "Dive into Deep Learning",
        "url": "https://d2l.ai/"
      },
      {
        "label": "Unsupervised learning — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Unsupervised_learning"
      }
    ]
  },
  {
    "slug": "large-language-models",
    "title": "Large language models",
    "subject": "technology",
    "category": "artificial-intelligence",
    "summary": "A large language model is a neural network, usually transformer-based, trained to predict the next token over very large text corpora. Tokenisation splits text into units, learned embeddings map them to vectors, and self-attention lets each position condition on the whole context.",
    "aliases": [
      "LLM",
      "foundation model"
    ],
    "keyConcepts": [
      {
        "term": "Tokens and embeddings",
        "definition": "Text is split into subword tokens, each mapped to a learned vector, so the model works with numbers rather than characters."
      },
      {
        "term": "Self-attention",
        "definition": "Each position scores every other position and forms weighted averages of their value vectors, letting a token use context from far away."
      },
      {
        "term": "Pretraining objective",
        "definition": "The model learns by predicting the next token over huge corpora, which forces it to encode grammar, facts and patterns of reasoning."
      },
      {
        "term": "Alignment and limits",
        "definition": "Instruction tuning and preference-based training shape responses; because output is sampled from learned statistics, models can state falsehoods fluently."
      }
    ],
    "equations": [
      {
        "label": "Scaled dot-product attention",
        "latex": "\\mathrm{Attention}(Q,K,V) = \\mathrm{softmax}\\left(\\frac{QK^{\\top}}{\\sqrt{d_k}}\\right) V",
        "variables": [
          {
            "symbol": "Q, K, V",
            "meaning": "Query, key and value matrices"
          },
          {
            "symbol": "d_k",
            "meaning": "Dimension of each key vector"
          },
          {
            "symbol": "\\mathrm{softmax}",
            "meaning": "Normalisation across positions"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "neural-networks",
      "machine-learning-fundamentals",
      "computer-vision"
    ],
    "wikipediaTitle": "Large language model",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Large language model — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Large_language_model"
      },
      {
        "label": "Dive into Deep Learning",
        "url": "https://d2l.ai/"
      }
    ]
  },
  {
    "slug": "computer-vision",
    "title": "Computer vision",
    "subject": "technology",
    "category": "artificial-intelligence",
    "summary": "Computer vision turns images into decisions: pixels become arrays, convolutional filters detect edges and textures, and pooled, stacked layers build features for classification, object detection and segmentation. Data augmentation and large labelled datasets drive accuracy.",
    "aliases": [
      "machine vision",
      "image understanding"
    ],
    "keyConcepts": [
      {
        "term": "Image representation",
        "definition": "A digital image is a grid of pixels, each with one or more channel values such as red, green and blue, fed to the model as a numeric array."
      },
      {
        "term": "Convolution",
        "definition": "A small learned kernel slides over the image, computing dot products that respond to local patterns such as edges, corners and textures."
      },
      {
        "term": "Hierarchical features",
        "definition": "Stacked convolution and pooling layers widen the receptive field, so later layers combine edges into parts and then into whole objects."
      },
      {
        "term": "Vision tasks",
        "definition": "Classification labels a whole image, detection locates objects with boxes, and segmentation assigns a class to every pixel; intersection over union measures box overlap."
      }
    ],
    "equations": [
      {
        "label": "2-D discrete convolution of an image with a kernel",
        "latex": "S(i,j) = \\sum_{m} \\sum_{n} I(i+m,\\, j+n)\\, K(m,n)",
        "variables": [
          {
            "symbol": "I",
            "meaning": "Input image array"
          },
          {
            "symbol": "K",
            "meaning": "Convolution kernel (filter)"
          },
          {
            "symbol": "S",
            "meaning": "Output feature map"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "neural-networks",
      "machine-learning-fundamentals",
      "large-language-models"
    ],
    "wikipediaTitle": "Computer vision",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Computer vision — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Computer_vision"
      },
      {
        "label": "PyTorch — Training a classifier tutorial",
        "url": "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html"
      }
    ]
  },
  {
    "slug": "reinforcement-learning",
    "title": "Reinforcement learning",
    "subject": "technology",
    "category": "artificial-intelligence",
    "summary": "Reinforcement learning trains an agent that acts in an environment and learns from rewards, balancing exploration of untried actions against exploitation of what it already knows. Value functions and policy gradients estimate the long-run return of actions.",
    "aliases": [
      "RL",
      "reward learning"
    ],
    "keyConcepts": [
      {
        "term": "Markov decision process",
        "definition": "States, actions, transition probabilities and rewards define the problem; the agent seeks a policy that maximises expected discounted return."
      },
      {
        "term": "Value functions",
        "definition": "A state value or action value estimates future reward from a point onward, and the Bellman equations relate each estimate to the one after it."
      },
      {
        "term": "Exploration versus exploitation",
        "definition": "The agent must try unfamiliar actions to discover better rewards while still using what it has learned; epsilon-greedy choice balances the two."
      },
      {
        "term": "Model-free and model-based",
        "definition": "Model-free methods such as Q-learning learn values from experience, while model-based methods learn a model of the environment and plan with it."
      }
    ],
    "equations": [
      {
        "label": "Bellman expectation equation for a policy",
        "latex": "V^{\\pi}(s) = \\sum_{a} \\pi(a \\mid s) \\sum_{s'} P(s' \\mid s, a)\\left[R(s,a,s') + \\gamma V^{\\pi}(s')\\right]",
        "variables": [
          {
            "symbol": "V^{\\pi}(s)",
            "meaning": "Expected return starting in state s under policy π"
          },
          {
            "symbol": "\\pi(a \\mid s)",
            "meaning": "Probability of choosing action a in state s"
          },
          {
            "symbol": "\\gamma",
            "meaning": "Discount factor between 0 and 1"
          },
          {
            "symbol": "P(s' \\mid s,a)",
            "meaning": "Transition probability to state s'"
          },
          {
            "symbol": "R(s,a,s')",
            "meaning": "reward received on the transition from s to s′ under action a"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "machine-learning-fundamentals",
      "supervised-and-unsupervised-learning",
      "control-systems-and-pid-control",
      "probability-basics"
    ],
    "wikipediaTitle": "Reinforcement learning",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Reinforcement learning — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Reinforcement_learning"
      },
      {
        "label": "Sutton and Barto — Reinforcement Learning: An Introduction",
        "url": "http://incompleteideas.net/book/the-book-2nd.html"
      }
    ]
  },
  {
    "slug": "robot-kinematics",
    "title": "Robot kinematics",
    "subject": "technology",
    "category": "robotics",
    "summary": "Robot kinematics describes motion in terms of geometry alone, without forces. Forward kinematics computes the end-effector pose from joint values through a chain of transformations, while inverse kinematics solves the harder reverse problem and may have several solutions.",
    "aliases": [
      "forward kinematics",
      "inverse kinematics",
      "manipulator kinematics"
    ],
    "keyConcepts": [
      {
        "term": "Degrees of freedom",
        "definition": "The number of independent joint motions, typically six for a rigid body in space: three for position and three for orientation."
      },
      {
        "term": "Forward kinematics",
        "definition": "Multiplying one transformation per joint, from base to tool, gives the end-effector position and orientation for a set of joint values."
      },
      {
        "term": "Inverse kinematics",
        "definition": "Finding joint values that place the tool at a desired pose is nonlinear and may have zero, one or many solutions within the joint limits."
      },
      {
        "term": "Jacobian and singularities",
        "definition": "The Jacobian maps joint velocities to tool velocities; where it loses rank the robot cannot move in some direction and control becomes unstable."
      }
    ],
    "equations": [
      {
        "label": "Homogeneous transformation of a rigid body",
        "latex": "T = \\begin{bmatrix} R & t \\\\ 0 & 1 \\end{bmatrix}",
        "variables": [
          {
            "symbol": "R",
            "meaning": "3×3 rotation matrix"
          },
          {
            "symbol": "t",
            "meaning": "3×1 translation vector"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "control-systems-and-pid-control",
      "robot-sensors-and-actuators",
      "matrices-and-matrix-operations"
    ],
    "wikipediaTitle": "Robot kinematics",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Robot kinematics — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Robot_kinematics"
      },
      {
        "label": "ROS 2 tutorials",
        "url": "https://docs.ros.org/en/jazzy/Tutorials.html"
      }
    ]
  },
  {
    "slug": "robot-sensors-and-actuators",
    "title": "Robot sensors and actuators",
    "subject": "technology",
    "category": "robotics",
    "summary": "Robot sensors convert physical quantities such as position, rotation, distance, light and force into signals, while actuators convert electrical commands into motion using motors, gearboxes or pneumatics. Resolution, accuracy, range, noise and latency decide what a robot can perceive and do.",
    "aliases": [
      "robot sensing",
      "sensors and actuators"
    ],
    "keyConcepts": [
      {
        "term": "Proprioceptive and exteroceptive sensing",
        "definition": "Internal sensors measure the robot's own joints and motion, while external sensors such as cameras, LiDAR and range finders measure the surroundings."
      },
      {
        "term": "Encoders and resolution",
        "definition": "Optical or magnetic encoders count increments of shaft rotation, and the count per revolution sets the smallest measurable angle."
      },
      {
        "term": "Motor types",
        "definition": "Brushed DC motors are simple and cheap, brushless DC motors are efficient, steppers move in fixed increments, and servos close a position loop internally."
      },
      {
        "term": "Gearing and trade-offs",
        "definition": "A gearbox multiplies torque while reducing speed and adds backlash and friction; sensor noise, drift and latency bound the precision actually achieved."
      }
    ],
    "equations": [
      {
        "label": "Angular resolution of an incremental encoder",
        "latex": "\\Delta\\theta = \\frac{360^{\\circ}}{N}",
        "variables": [
          {
            "symbol": "\\Delta\\theta",
            "meaning": "Degrees of shaft rotation per count"
          },
          {
            "symbol": "N",
            "meaning": "Counts per full revolution"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "robot-kinematics",
      "control-systems-and-pid-control",
      "transistors-and-amplifiers"
    ],
    "wikipediaTitle": "Robotic sensors",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Robotic sensors — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Robotic_sensors"
      },
      {
        "label": "ROS 2 tutorials",
        "url": "https://docs.ros.org/en/jazzy/Tutorials.html"
      },
      {
        "label": "Actuator — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Actuator"
      }
    ]
  },
  {
    "slug": "control-systems-and-pid-control",
    "title": "Control systems and PID control",
    "subject": "technology",
    "category": "robotics",
    "summary": "A feedback controller compares a measured output with a setpoint and drives an actuator with the error. In PID control the proportional term reacts to present error, the integral term removes persistent offset, and the derivative term damps overshoot; tuning balances speed against stability.",
    "aliases": [
      "PID control",
      "feedback control",
      "PID loop"
    ],
    "keyConcepts": [
      {
        "term": "Open and closed loop",
        "definition": "An open-loop controller acts without measuring the result, while closed-loop feedback measures the output and corrects the error continuously."
      },
      {
        "term": "Proportional, integral, derivative",
        "definition": "P responds to current error, I accumulates past error to remove steady offset, and D reacts to the rate of change to damp oscillation."
      },
      {
        "term": "Tuning",
        "definition": "Gains are chosen experimentally or by rules such as Ziegler-Nichols; too much gain causes overshoot or oscillation, too little leaves a sluggish response."
      },
      {
        "term": "Stability and sampling",
        "definition": "Delays, actuator limits and discrete sampling intervals erode phase margin, so a loop that is stable in theory can oscillate when implemented."
      }
    ],
    "equations": [
      {
        "label": "Parallel PID control law",
        "latex": "u(t) = K_p e(t) + K_i \\int_{0}^{t} e(\\tau)\\, d\\tau + K_d \\frac{de(t)}{dt}",
        "variables": [
          {
            "symbol": "u(t)",
            "meaning": "Control signal sent to the actuator"
          },
          {
            "symbol": "e(t)",
            "meaning": "Setpoint minus measured output"
          },
          {
            "symbol": "K_p, K_i, K_d",
            "meaning": "Proportional, integral and derivative gains"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "robot-kinematics",
      "robot-sensors-and-actuators",
      "reinforcement-learning",
      "derivatives"
    ],
    "wikipediaTitle": "PID controller",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "PID controller — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/PID_controller"
      },
      {
        "label": "ROS 2 tutorials",
        "url": "https://docs.ros.org/en/jazzy/Tutorials.html"
      }
    ]
  },
  {
    "slug": "semiconductors-and-diodes",
    "title": "Semiconductors and diodes",
    "subject": "technology",
    "category": "electronics",
    "summary": "Doping a semiconductor with donor or acceptor impurities creates n-type or p-type material, and joining them forms a p-n junction with a depletion region and a built-in potential. A diode conducts easily in forward bias above its threshold and blocks reverse current, enabling rectification.",
    "aliases": [
      "semiconductor diode",
      "p-n junction",
      "junction diode"
    ],
    "keyConcepts": [
      {
        "term": "Doping",
        "definition": "Adding pentavalent donors yields n-type material with free electrons; adding trivalent acceptors yields p-type material with mobile holes."
      },
      {
        "term": "p-n junction",
        "definition": "At the boundary electrons and holes recombine, leaving fixed ionised dopants that create a depletion region and an internal electric field."
      },
      {
        "term": "Bias",
        "definition": "Forward bias narrows the barrier so current rises exponentially above a threshold voltage; reverse bias widens it and only a small leakage current flows."
      },
      {
        "term": "Applications",
        "definition": "Rectifiers convert AC to DC, Zener diodes regulate voltage in controlled reverse breakdown, and light-emitting diodes emit photons when carriers recombine."
      }
    ],
    "equations": [
      {
        "label": "Shockley diode equation",
        "latex": "I = I_S \\left(e^{\\frac{V}{n V_T}} - 1\\right)",
        "variables": [
          {
            "symbol": "I",
            "meaning": "Diode current"
          },
          {
            "symbol": "I_S",
            "meaning": "Reverse saturation current"
          },
          {
            "symbol": "V",
            "meaning": "Voltage across the junction"
          },
          {
            "symbol": "V_T",
            "meaning": "Thermal voltage, about 26 mV at room temperature"
          },
          {
            "symbol": "n",
            "meaning": "ideality factor, 1 for an ideal diode and typically 1–2 in practice"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "transistors-and-amplifiers",
      "electric-charge",
      "robot-sensors-and-actuators"
    ],
    "wikipediaTitle": "Diode",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Diode — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Diode"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  },
  {
    "slug": "transistors-and-amplifiers",
    "title": "Transistors and amplifiers",
    "subject": "technology",
    "category": "electronics",
    "summary": "A transistor is a three-terminal semiconductor device that uses a small input to control a larger current: bipolar transistors are current-controlled, field-effect transistors voltage-controlled. Biasing sets the operating point so the device can amplify a signal with useful gain and bandwidth.",
    "aliases": [
      "bipolar junction transistor",
      "amplifier circuits",
      "transistor amplifier"
    ],
    "keyConcepts": [
      {
        "term": "Bipolar junction transistor",
        "definition": "Two p-n junctions form emitter, base and collector; a small base current controls a much larger collector current, giving current gain beta."
      },
      {
        "term": "Field-effect transistor",
        "definition": "A gate voltage controls the conductivity of a channel between source and drain, drawing almost no steady gate current."
      },
      {
        "term": "Operating regions",
        "definition": "Cut-off blocks current; the active region (saturation in a MOSFET) gives controlled current for amplification; the ohmic region (saturation in a BJT) behaves like a closed switch."
      },
      {
        "term": "Gain and bandwidth",
        "definition": "Biasing sets a quiescent operating point, and small-signal gain trades against bandwidth; coupling, bypass and feedback shape input impedance, output swing and distortion."
      }
    ],
    "equations": [
      {
        "label": "Bipolar transistor current gain",
        "latex": "I_C = \\beta I_B",
        "variables": [
          {
            "symbol": "I_C",
            "meaning": "Collector current"
          },
          {
            "symbol": "I_B",
            "meaning": "Base current"
          },
          {
            "symbol": "\\beta",
            "meaning": "Forward current gain of the transistor"
          }
        ]
      },
      {
        "label": "Small-signal voltage gain of a common-emitter stage",
        "latex": "A_v = -g_m R_C",
        "variables": [
          {
            "symbol": "A_v",
            "meaning": "Voltage gain"
          },
          {
            "symbol": "g_m",
            "meaning": "Transconductance"
          },
          {
            "symbol": "R_C",
            "meaning": "Collector load resistance"
          }
        ]
      }
    ],
    "relatedExperimentSlugs": [],
    "relatedSlugs": [
      "semiconductors-and-diodes",
      "electric-charge",
      "robot-sensors-and-actuators"
    ],
    "wikipediaTitle": "Transistor",
    "collectionSlugs": [],
    "sources": [
      {
        "label": "Transistor — Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Transistor"
      },
      {
        "label": "OpenStax University Physics, Volume 3",
        "url": "https://openstax.org/books/university-physics-volume-3"
      }
    ]
  }
];
