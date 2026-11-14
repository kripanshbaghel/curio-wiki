import type { Experiment } from './types';

/**
 * Physics/chemistry/biology experiment seeds (agent C).
 * Owned by content agent C — extend this array with new entries.
 * Topic slugs available: newtons-laws-of-motion, simple-pendulum, work-energy-theorem,
 * electric-circuits, waves-and-sound, refraction-and-snells-law, atomic-structure, chemical-bonding,
 * states-of-matter, quadratic-equations, trigonometry-basics, probability-basics,
 * photosynthesis, cell-biology, human-circulatory-system, genetics-basics,
 * ecology-and-ecosystems, computer-hardware-basics, programming-algorithms, simple-machines.
 */
export const labExperimentSeeds: Experiment[] = [
  {
    slug: 'ohms-law-circuit',
    title: "Explore Ohm's law with a simple circuit",
    subject: 'physics',
    topic: 'electric-circuits',
    level: 'intermediate',
    supervision: 'none',
    objective:
      'Build a simple circuit with a low-voltage battery pack and a small bulb, then change the resistance and observe how the current — shown by bulb brightness or a multimeter — responds.',
    concept:
      "Ohm's law links current, voltage, and resistance: I = V / R. For a fixed battery voltage, adding resistance reduces the current, so the bulb dims; removing resistance lets the current rise again.",
    materials: [
      'Battery pack using AA cells only (low voltage)',
      'Small bulb in a holder (or an LED with a series resistor)',
      'Connecting wires with crocodile clips',
      'Optional: multimeter to measure current',
      'Optional: spare resistors or a second identical bulb',
      'Tape',
    ],
    procedure: [
      'Check the battery pack uses AA cells only — never connect the circuit to a household mains socket.',
      'Connect the battery pack, wires, and bulb in a single loop so that the bulb lights.',
      'Observe how brightly the bulb glows, or read the current on the multimeter if you have one, and record the value.',
      'Add a second identical bulb in series, or an extra resistor, and observe the change in brightness or current.',
      'Remove the extra component and confirm the first bulb returns to its original brightness.',
      'Sketch the circuit and write down how the brightness or current changed as resistance was added.',
    ],
    observations: [
      'Record bulb brightness or multimeter current for one bulb and then for two bulbs in series.',
      'Note whether the bulb dims when resistance increases even though the battery pack stays the same.',
    ],
    explanation:
      "Ohm's law states that the current I through a metal conductor equals the voltage V across it divided by its resistance R, provided the temperature stays roughly constant (I = V / R). The battery pack provides a fixed voltage, so adding a bulb or resistor in series increases the total resistance of the loop and the current falls. Because a bulb's brightness depends on the current flowing through its filament, a dimmer bulb is direct evidence of a smaller current. A multimeter set to measure current, wired in series, gives a number you can compare instead of relying on brightness alone.",
    safety: [
      'Use low-voltage battery packs (AA cells) only — never household mains electricity, which is lethal.',
      'If the battery pack or wires get warm, disconnect them and ask an adult to check the connections.',
      'Do not leave a closed battery pack short-circuited; the wires and cells can overheat.',
    ],
    durationMinutes: 30,
    relatedVideoQueries: ["Ohm's law experiment for students", 'series circuit resistance bulb brightness'],
    sources: [
      { label: 'Wikipedia: Ohm’s law', url: 'https://en.wikipedia.org/wiki/Ohm%27s_law' },
      {
        label: 'HyperPhysics: Ohm’s law',
        url: 'http://hyperphysics.phy-astr.gsu.edu/hbase/ohmc.html',
      },
    ],
    featured: false,
  },
  {
    slug: 'seeing-sound-rice-drum',
    title: 'See sound with a cling-film rice drum',
    subject: 'physics',
    topic: 'waves-and-sound',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Build a simple drum with cling film and rice grains, then make sounds to watch the rice jump — making the vibrations of sound visible.',
    concept:
      'Sound is a vibration that travels as a wave through the air. When the drum skin vibrates it pushes the rice grains upwards, so their jumping shows where sound energy moves the surface.',
    materials: [
      'Large bowl or empty clean tin',
      'Cling film (plastic wrap)',
      'A pinch of dry rice grains',
      'Rubber band to secure the cling film',
      'A spoon or your finger for tapping',
    ],
    procedure: [
      'Stretch the cling film tightly over the top of the bowl or tin and secure it with the rubber band.',
      'Sprinkle a few rice grains onto the centre of the cling film.',
      'Tap the drum gently with a spoon and watch what the rice grains do.',
      'Hum a low note, or play a steady tone from a phone near — not on — the drum, and observe the grains.',
      'Tap harder and softer, and compare how high the grains jump each time.',
      'Record which sounds make the rice dance the most and sketch your set-up.',
    ],
    observations: [
      'Describe how the rice grains move when you tap the drum compared with when you hum or play a tone.',
      'Note whether louder sounds make the grains jump higher or move faster.',
    ],
    explanation:
      'Sound is made when something vibrates and the vibration travels through the air as a pressure wave. Those waves make the stretched cling film vibrate as well. The film pushes the rice grains upwards each time it moves, so the jumping grains make the invisible vibration of the sound visible. Louder sounds carry more energy, so the film moves further and the grains leap higher. Softer sounds move the film less, and very quiet sounds may not shift the grains at all.',
    safety: [
      'Keep small rice grains away from very young children, who could put them in their ears or mouth.',
      'Wash your hands after handling dry rice; do not taste any of the experiment materials.',
      'Do not stretch cling film over your face or head.',
    ],
    durationMinutes: 15,
    relatedVideoQueries: ['seeing sound rice drum experiment', 'sound vibration rice on drum'],
    sources: [
      { label: 'Wikipedia: Sound', url: 'https://en.wikipedia.org/wiki/Sound' },
      { label: 'Wikipedia: Vibration', url: 'https://en.wikipedia.org/wiki/Vibration' },
    ],
    featured: false,
  },
  {
    slug: 'rainbow-refraction-light',
    title: 'Make a rainbow with water and light',
    subject: 'physics',
    topic: 'refraction-and-snells-law',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Shine a white torch through a glass of water onto white paper to create a small spectrum, showing how white light splits into colours.',
    concept:
      'White light is a mixture of colours. As it enters and leaves the curved glass of water it refracts (bends), and each colour bends by a slightly different amount, spreading the light into a rainbow-like spectrum.',
    materials: [
      'Clear glass or jug filled with water',
      'Small white torch (flashlight)',
      'Sheet of white paper',
      'A table near a wall',
      'Optional: a glass prism if you have one',
    ],
    procedure: [
      'Place the white paper on the floor or against a wall in a dim room.',
      'Fill the glass with water and stand it at the edge of a table, slightly overhanging if it is safe to do so.',
      'Shine the torch beam through the middle of the glass towards the paper.',
      'Move the torch slowly from side to side until a band of colours appears on the paper.',
      'Sketch the colours you see, then try tilting the glass or changing the angle of the torch.',
      'Optional: repeat with a prism, or with different amounts of water, to compare the spectrum.',
    ],
    observations: [
      'Record the order of the colours in the band you create on the paper.',
      'Note how the spectrum changes as you move the torch or tilt the glass.',
    ],
    explanation:
      'The colours that make up white light bend by different amounts as they slow down inside the water — violet light bends the most and red the least. Because the curved glass acts like a prism, the colours spread out into a spectrum instead of staying mixed together. Real rainbows form when sunlight refracts inside millions of raindrops, using the same separation of colours. On a sunny day a glass of water on a windowsill can throw tiny colour patches onto a wall for the same reason.',
    safety: [
      'Never shine any light into anyone’s eyes; keep the torch beam pointed at the paper.',
      'Use a normal torch, not a laser pointer — laser light can permanently damage eyesight.',
      'Wipe up any spilled water so that nobody slips.',
    ],
    durationMinutes: 15,
    relatedVideoQueries: ['water glass rainbow prism experiment', 'light dispersion water torch'],
    sources: [
      {
        label: 'Wikipedia: Dispersion (optics)',
        url: 'https://en.wikipedia.org/wiki/Dispersion_(optics)',
      },
      { label: 'Wikipedia: Rainbow', url: 'https://en.wikipedia.org/wiki/Rainbow' },
    ],
    featured: false,
  },
  {
    slug: 'balloon-static-electricity',
    title: 'Balloon static electricity attraction',
    subject: 'physics',
    topic: 'atomic-structure',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Rub a balloon on dry hair and hold it near tiny pieces of paper to observe an electric charge pulling the paper towards the balloon.',
    concept:
      'Rubbing transfers electrons from hair to the balloon, giving it a negative static charge. That charge pulls on tiny neutral paper pieces, which are light enough to leap up to the balloon.',
    materials: [
      'A latex balloon',
      'Dry hair',
      'Small pieces of torn tissue paper',
      'Scissors to cut the paper (ask an adult if needed)',
      'Optional: a woollen cloth or jumper',
    ],
    procedure: [
      'Tear or cut the tissue paper into pieces smaller than a fingernail and scatter them on a table.',
      'Blow up the balloon and tie it.',
      'Rub the balloon quickly on dry hair for about ten seconds.',
      'Hold the charged balloon just above the paper pieces without touching them and watch.',
      'Touch the balloon to your hair again, then test the paper a second time.',
      'Try rubbing the balloon on a woollen cloth instead of hair and compare the effect.',
      'Sketch what happens and write down how long the effect lasts.',
    ],
    observations: [
      'Describe whether the paper pieces jump to the balloon and how quickly they fall off again.',
      'Compare the attraction after rubbing on hair with the attraction after rubbing on wool.',
    ],
    explanation:
      'Every material is built from atoms containing positive protons and negative electrons. Electrons move more easily than protons, and rubbing the balloon on hair transfers some electrons onto its latex surface, leaving it negatively charged. A charged object can pull on a neutral object by shifting the charges inside it slightly (polarisation), so the paper is attracted to the balloon. Because the paper pieces are very light, the electric pull is strong enough to lift them. The charge slowly leaks away into the air, so the effect fades over minutes.',
    safety: [
      'Latex allergy caution: if anyone nearby has a latex allergy, use a latex-free balloon or foil balloon instead.',
      'Do not stretch the balloon near faces; if it bursts, pick up the pieces so that younger children cannot find them.',
      'Wash your hands after the activity.',
    ],
    durationMinutes: 10,
    relatedVideoQueries: ['balloon static electricity paper experiment', 'static charge balloon hair'],
    sources: [
      {
        label: 'Wikipedia: Static electricity',
        url: 'https://en.wikipedia.org/wiki/Static_electricity',
      },
      { label: 'Wikipedia: Electric charge', url: 'https://en.wikipedia.org/wiki/Electric_charge' },
    ],
    featured: false,
  },
  {
    slug: 'magnetic-field-iron-filings',
    title: 'Map a magnetic field with iron filings',
    subject: 'physics',
    topic: 'electric-circuits',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Sprinkle iron filings over stiff card placed on a bar magnet to reveal the pattern of the magnetic field around the magnet.',
    concept:
      'Iron filings act like tiny compass needles that line up along magnetic field lines, showing the field’s shape and that it is strongest near the magnet’s poles.',
    materials: [
      'A bar magnet',
      'Iron filings (from a science supplier)',
      'Stiff card or plain paper large enough to cover the magnet',
      'A tray or sheet of paper to catch loose filings',
      'A sealed plastic bag to store the filings',
    ],
    procedure: [
      'Place the bar magnet flat on the tray.',
      'Lay the card or paper over the magnet so that the magnet is completely covered.',
      'Pinch a small amount of iron filings and sprinkle them thinly over the card.',
      'Tap the card gently so that the filings are free to move, then step back and look at the pattern.',
      'Sketch the lines of filings, noting how they crowd near the ends of the magnet.',
      'Move the magnet under the card and sprinkle a fresh thin layer to compare the patterns.',
      'Slide all loose filings into the sealed plastic bag and keep the bar magnet away from the bag, electronics, and payment cards.',
    ],
    observations: [
      'Describe the pattern the filings make, especially near the two ends of the magnet.',
      'Note how the pattern changes when you move or rotate the magnet under the card.',
    ],
    explanation:
      'A bar magnet creates a magnetic field in the space around it. Each iron filing becomes a tiny induced magnet in that field and rotates until it lies along the field line it sits on, so thousands of filings trace out the field’s shape: loops that leave one pole, sweep around the magnet, and return to the other pole. The filings bunch up near the poles because the field is strongest there. The pattern is a picture of an invisible field that also acts on compasses and other magnets.',
    safety: [
      'Iron filings are fine dust — do not inhale it. Keep your face away while sprinkling, and clean spills with a damp cloth rather than a dry brush.',
      'Wash your hands after handling filings, and keep them away from very young children.',
      'Keep filings and bar magnets away from computer disks, phones, bank cards, and other electronics that magnets can damage.',
    ],
    durationMinutes: 20,
    relatedVideoQueries: ['iron filings magnetic field lines experiment', 'bar magnet field pattern demonstration'],
    sources: [
      { label: 'Wikipedia: Magnetic field', url: 'https://en.wikipedia.org/wiki/Magnetic_field' },
      { label: 'Wikipedia: Magnet', url: 'https://en.wikipedia.org/wiki/Magnet' },
    ],
    featured: false,
  },
  {
    slug: 'reaction-rate-temperature-baking-soda',
    title: 'How temperature changes a reaction rate',
    subject: 'chemistry',
    topic: 'acid-base-reaction',
    level: 'intermediate',
    supervision: 'adult-required',
    objective:
      'React the same amount of baking soda with vinegar at different water temperatures and time how long each fizz lasts, to see how temperature affects reaction rate.',
    concept:
      'Reaction rate rises with temperature because particles move faster and collide more often with enough energy to react, so warmer vinegar makes the fizz finish sooner.',
    materials: [
      'Baking soda (sodium hydrogencarbonate)',
      'Vinegar',
      'Three clear cups or glasses',
      'Measuring spoon',
      'Cold, room-temperature, and comfortably warm water',
      'Stopwatch or phone timer',
      'Tray to catch spills',
      'Optional: a thermometer',
    ],
    procedure: [
      'Ask an adult to prepare three cups of vinegar, each mixed with a little water at a different temperature: cold, room temperature, and comfortably warm to the touch — never hot.',
      'Add the same spoonful of baking soda to the coldest cup and start the stopwatch at the same moment.',
      'Time how long the vigorous fizzing continues and record it.',
      'Repeat with the room-temperature cup, then the warm cup, using the same amount of baking soda each time.',
      'If you have a thermometer, record the temperature of each cup beside its time.',
      'Plot time against temperature and describe the trend in your own words.',
    ],
    observations: [
      'Record the temperature of each cup and the time its fizz lasted.',
      'Describe how the bubbles looked in the warm cup compared with the cold cup.',
    ],
    explanation:
      'Baking soda (sodium hydrogencarbonate) reacts with the acetic acid in vinegar to release carbon dioxide, which escapes as bubbles. Raising the temperature gives the dissolved particles more kinetic energy, so they collide more often and more forcefully, and a greater share of collisions can overcome the energy barrier for the reaction. The result is a faster production of carbon dioxide: the warm cup fizzes hardest and finishes first, while the cold cup bubbles gently for longer. This is one example of the general rule that reaction rates increase with temperature.',
    safety: [
      'An adult must prepare the temperature-varied liquids — comfortably warm only, never hot enough to scald.',
      'Protect surfaces with a tray; vinegar soaks into fabrics and lingers on worktops.',
      'Do not taste the mixture, and keep it away from eyes; rinse any splash with clean water.',
    ],
    durationMinutes: 30,
    relatedVideoQueries: ['reaction rate temperature baking soda vinegar', 'temperature effect on reaction rate experiment'],
    sources: [
      { label: 'Wikipedia: Reaction rate', url: 'https://en.wikipedia.org/wiki/Reaction_rate' },
      { label: 'Wikipedia: Chemical kinetics', url: 'https://en.wikipedia.org/wiki/Chemical_kinetics' },
    ],
    featured: false,
  },
  {
    slug: 'chromatography-plant-pigments',
    title: 'Separate plant pigments by chromatography',
    subject: 'chemistry',
    topic: 'photosynthesis',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Use paper chromatography to separate the coloured pigments in washable marker ink — or a crushed leaf — and see that a single colour can be a mixture.',
    concept:
      'Chromatography separates pigments because each pigment dissolves in the water and sticks to the paper by a different amount, so they travel different distances. Leaf pigments such as chlorophyll let plants absorb light for photosynthesis.',
    materials: [
      'A coffee filter paper',
      'Washable water-based markers in several colours',
      'Or a fresh green leaf',
      'A glass of clean water',
      'A pencil',
      'Scissors',
      'Tape',
    ],
    procedure: [
      'Cut a strip about two centimetres wide from the coffee filter paper.',
      'Using a pencil, mark a light line about one centimetre above the bottom of the strip.',
      'Draw a thick spot of marker on the line, or press a crushed leaf smear onto the line if you are testing plant pigments.',
      'Stand the strip in the glass so that the bottom edge dips into the water but the coloured spot stays above the water line.',
      'Wait as the water climbs the paper and carries the pigments upwards; remove the strip when the water nears the top.',
      'Dry the strip and mark, with a pencil, how far each colour travelled.',
      'Compare how far each pigment moved and identify any colours that separated into several bands.',
    ],
    observations: [
      'Record the colours that appear for each marker, noting any that split into more than one band.',
      'For a leaf strip, describe the bands from top to bottom and any green pigment that is visible.',
    ],
    explanation:
      'Chromatography works because pigments balance two tendencies: dissolving into the water that climbs the paper by capillary action, and sticking to the cellulose fibres of the filter. Pigments that dissolve easily and stick weakly travel far up the strip; pigments that interact strongly with the paper lag behind. A marker colour that is a mixture therefore splits into separate bands. Green leaves contain several pigments at once — chlorophylls (green), carotenes (orange), and xanthophylls (yellow) — which plants use to absorb light energy for photosynthesis. Separating them shows why a leaf’s colour is a blend, not a single pigment.',
    safety: [
      'Washable markers are non-toxic, but do not drink the chromatography water or put the wet strip in your mouth.',
      'Wash your hands after crushing leaves, and avoid rubbing your eyes until you have.',
      'Ask an adult to help cut the filter strip with scissors.',
    ],
    durationMinutes: 25,
    relatedVideoQueries: ['paper chromatography markers experiment', 'plant pigment chromatography chlorophyll'],
    sources: [
      { label: 'Wikipedia: Chromatography', url: 'https://en.wikipedia.org/wiki/Chromatography' },
      { label: 'Wikipedia: Chlorophyll', url: 'https://en.wikipedia.org/wiki/Chlorophyll' },
    ],
    featured: false,
  },
  {
    slug: 'ph-indicator-red-cabbage',
    title: 'Test acids and bases with red cabbage indicator',
    subject: 'chemistry',
    topic: 'acid-base-reaction',
    level: 'beginner',
    supervision: 'adult-required',
    objective:
      'Make a red cabbage juice indicator and use its colour changes to classify common household liquids as acidic, neutral, or basic.',
    concept:
      'Red cabbage contains anthocyanin pigments that change colour with pH: red or pink in acids, purple near neutral, and blue, green, or yellow in bases — so the juice acts as a natural pH indicator.',
    materials: [
      'A few red cabbage leaves',
      'A saucepan and kettle (adult use)',
      'A sieve or strainer',
      'Clear cups or glasses',
      'Lemon juice',
      'Vinegar',
      'Baking soda dissolved in water',
      'Clean water for comparison',
      'A dropper or spoon',
    ],
    procedure: [
      'Ask an adult to chop a few cabbage leaves, cover them with water, and simmer until the water turns deep purple.',
      'Let the liquid cool, then strain it into a jug — this is your indicator.',
      'Pour a small, equal amount of indicator into each cup.',
      'Add a spoonful of lemon juice to the first cup and stir, then record the colour.',
      'Repeat with vinegar, then the baking soda solution, then clean water as a comparison.',
      'Rank your liquids from most acidic to most basic using the colours you observed.',
    ],
    observations: [
      'Record the indicator colour for each liquid tested.',
      'Note which liquids produced similar colours and which were most different from the neutral water control.',
    ],
    explanation:
      'The purple pigments in red cabbage are anthocyanins, whose molecular structure changes depending on the concentration of hydrogen ions (pH) in the solution. In acidic liquids such as lemon juice the pigments turn red or pink; near neutral pH they stay purple, as with plain water; and in basic solutions such as baking soda water they turn blue-green or yellow. Because each colour corresponds to a pH range, red cabbage juice works as a rough natural indicator — the same kind of job that litmus or universal indicator paper does in a laboratory. The liquids tested here are all food-grade, which keeps the experiment safe and predictable.',
    safety: [
      'An adult must boil the cabbage water and handle the hot saucepan; let everything cool before you touch it.',
      'Test only food-grade liquids such as lemon juice, vinegar, and baking soda water — never mix household cleaners or bleach with the indicator.',
      'Do not taste the indicator or the tested solutions; rinse spills and wash your hands afterwards.',
    ],
    durationMinutes: 40,
    relatedVideoQueries: ['red cabbage pH indicator experiment', 'natural pH indicator household acids bases'],
    sources: [
      { label: 'Wikipedia: pH indicator', url: 'https://en.wikipedia.org/wiki/PH_indicator' },
      { label: 'Wikipedia: Anthocyanin', url: 'https://en.wikipedia.org/wiki/Anthocyanin' },
    ],
    featured: false,
  },
  {
    slug: 'pulse-and-exercise-response',
    title: 'Measure your pulse and exercise response',
    subject: 'biology',
    topic: 'human-circulatory-system',
    level: 'beginner',
    supervision: 'none',
    objective:
      'Measure your resting pulse, do a short burst of star jumps, then track how quickly your pulse returns to rest to see the circulatory system respond to exercise.',
    concept:
      'Exercise increases your muscles’ demand for oxygen, so the heart beats faster to pump more blood. Recovery time shows how quickly your circulatory system returns to its resting state.',
    materials: [
      'Stopwatch or phone timer',
      'Notebook and pencil',
      'A clear space for exercise',
      'Optional: a heart rate monitor or fitness tracker',
    ],
    procedure: [
      'Sit quietly for two minutes so that your body is at rest.',
      'Find your pulse on the side of your neck or on your wrist and count the beats for 30 seconds; multiply by two to get beats per minute.',
      'Write down your resting pulse rate.',
      'Do one minute of star jumps (or step-ups) at a steady pace.',
      'Immediately measure your pulse again for 15 seconds and multiply by four.',
      'Rest and measure your pulse every minute for five minutes, recording each value.',
      'Plot pulse rate against time and describe how your heart rate recovered.',
    ],
    observations: [
      'Record your resting pulse and your pulse straight after exercise.',
      'Describe the shape of your recovery: does the pulse drop quickly at first and then level off?',
    ],
    explanation:
      'Your heart rate rises during exercise because working muscles need more oxygen and glucose delivered by the blood, and more carbon dioxide carried away. The brain and hormones signal the heart to beat faster and more forcefully, raising cardiac output. When you stop, the demand falls immediately, so the heart rate drops quickly at first and then more slowly as your body clears the extra carbon dioxide and re-balances its chemistry. Fitter people often recover faster because their heart and muscles adapt to deliver oxygen more efficiently. Comparing your own recovery over weeks of training is a simple way to see that adaptation.',
    safety: [
      'Stop exercising at once if you feel unwell, dizzy, or unusually breathless, and tell an adult.',
      'Check with a doctor before doing the exercise if you have a heart condition or any medical concern.',
      'Clear a space of furniture, wear suitable footwear, and land softly on the balls of your feet during star jumps.',
    ],
    durationMinutes: 20,
    relatedVideoQueries: ['heart rate recovery after exercise experiment', 'pulse and star jumps circulatory system'],
    sources: [
      { label: 'Wikipedia: Heart rate', url: 'https://en.wikipedia.org/wiki/Heart_rate' },
      {
        label: 'Wikipedia: Physical exercise',
        url: 'https://en.wikipedia.org/wiki/Physical_exercise',
      },
    ],
    featured: false,
  },
];
