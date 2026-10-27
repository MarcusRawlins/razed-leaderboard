// All site copy that is shared between pages, carried over from the original site's facts.
// Claims are kept to the brand's one defensible claim; see docs/brand/brand-kit.md.

export const CORE_CLAIM =
  "Products carrying Harmonic Energy help your body’s natural energy field stay balanced while you carry them.";

export const DISCLAIMER =
  "Our products are not a substitute for the care of a physician. They are not intended to diagnose, treat, cure or prevent any disease. Biofield balancing is not recognized by the FDA, and these statements have not been evaluated by it. If you have a medical condition, talk to your doctor and never stop a prescribed medication. Individual experiences vary, and we make no promise beyond helping the biofield hold its balance.";

export type Kit = {
  slug: string;
  name: string;
  short: string;
  badge?: string;
  description: string;
  contents: string[];
  howToUse: string[];
  forWhom: string;
  // TODO(client): prices and Stripe Payment Links. Without a link the button becomes a reservation form.
  price: string | null;
  checkoutEnv: string;
};

const liquilightUse = [
  "Concentrate: 3–5 drops in any bottle up to 16 oz, like shampoo, lotion, soap or a water bottle.",
];

export const kits: Kit[] = [
  {
    slug: "small-personal-kit",
    name: "Small Personal Kit",
    short: "A pendant, drops and a phone tag. The easiest way to start.",
    badge: "Best first step",
    description:
      "One thing to wear, one to add, one for your phone. Enough to try all three for a month.",
    contents: [
      "B-Cell Pendant",
      "B-Liquilight-C concentrate (90-drop bottle)",
      "Four-in-One Phone Wave Rider",
    ],
    howToUse: [
      "Wear the pendant daily.",
      ...liquilightUse,
      "Attach the Wave Rider to the back of your phone or case.",
    ],
    forWhom: "First-timers and gifts.",
    price: null,
    checkoutEnv: "NEXT_PUBLIC_CHECKOUT_SMALL_KIT",
  },
  {
    slug: "full-personal-kit",
    name: "Full Personal Kit",
    short: "The whole-home set, with sprays for food, plants and flowers.",
    badge: "Most complete",
    description:
      "Everything in the Small Kit, plus raw cells for your own jewelry, a BioLux pendant and three sprays. Add three Small Kits to share.",
    contents: [
      "Two raw B-Cells, to tape to a pendant, bracelet or watch band",
      "Four-in-One Phone Wave Rider",
      "B-Cell / BioLux Pendant",
      "B-Liquilight concentrate",
      "B-Liquilight spray, for food and drinks",
      "P-Liquilight spray, for houseplants",
      "Pr-Liquilight spray, for cut flowers",
      "Optional: three extra Small Personal Kits to share",
    ],
    howToUse: [
      "Raw cells: tape one to the back of a pendant, bracelet or watch face.",
      ...liquilightUse,
      "Food and drinks spray: one or two pumps over a plate or into a glass.",
      "Plant spray: one or two pumps per plant, a few times a week.",
      "Flower spray: one or two pumps a day.",
    ],
    forWhom: "Households and families.",
    price: null,
    checkoutEnv: "NEXT_PUBLIC_CHECKOUT_FULL_KIT",
  },
  {
    slug: "tech-sample-set",
    name: "Tech Sample Set",
    short: "All 22 formats in one box, for product teams.",
    badge: "For brands",
    description:
      "Every format we make, so your team can test them on your own materials: cells, signal tags, liquids, oils and finishes.",
    contents: [
      "Cells: B-Cell, A-Cell, P-Cell, Pr-Cell",
      "Signal cells: E B-Cell, E A-Cell, E P-Cell, E Pr-Cell",
      "Finishes: B-Reflect, B-Refract, B-BioLux, B-Enamel",
      "Liquilight: B, A, P and Pr, each as ready-to-use and concentrate (-C)",
      "Oils: B-Oil and B-Oil-C",
    ],
    howToUse: [
      "Each format comes with a note on where it fits in production.",
      "Book a call and we’ll help you pick the right one.",
    ],
    forWhom: "Manufacturers, product developers and distributors.",
    price: null,
    checkoutEnv: "NEXT_PUBLIC_CHECKOUT_TECH_SET",
  },
];

export const carriers = [
  {
    name: "Sound",
    year: "1998",
    product: "Harmonic Energy music",
    body: "The original music, recorded on real instruments. The source of everything else.",
    where: "Albums and the Chromatones library",
  },
  {
    name: "Cells",
    year: "2003",
    product: "BioCell",
    body: "A tag the size of confetti, set into jewelry, labels and clothing. No battery.",
    where: "Pendants, bracelets, labels, clothing",
  },
  {
    name: "Signal",
    year: "2009",
    product: "E-BioCell / Wave Rider",
    body: "A tag that rides your phone, Wi-Fi and Bluetooth signals to fill a room.",
    where: "Phones, chargers, home and car sets",
  },
  {
    name: "Light & water",
    year: "2012",
    product: "Liquilight",
    body: "Water infused with the music, added to dyes, cosmetics, food and sprays.",
    where: "Dyes, inks, cosmetics, food, sprays",
  },
  {
    name: "Pairs",
    year: "2021",
    product: "QUID",
    body: "Products made in matched pairs that stay linked after they ship.",
    where: "Sets and multi-item programs",
  },
];

export const timeline = [
  { year: "1990s", title: "Curiosity and research", body: "Molecular measurements become ratios, rhythms and tones." },
  { year: "1998", title: "The music", body: "Rhythm of the Light is released after an early trial in a hospital emergency department." },
  { year: "2003", title: "BioCell", body: "The music moves off the speaker and into a wearable tag." },
  { year: "2009", title: "E-BioCell", body: "Wave Riders carry it on everyday wireless signals." },
  { year: "2012", title: "Liquilight", body: "Infused water lets it go into almost anything liquid or dyed." },
  { year: "2021", title: "QUID", body: "Paired products that stay linked after they ship." },
];

export const studyAreas = [
  "Thermography",
  "QEEG brain mapping",
  "Heart rate variability",
  "Gas Discharge Visualization",
  "Dark-field blood microscopy",
  "Athletic strength and flexibility",
  "Hearing (audiogram case study)",
];

// The report titles listed on the original Validation page.
// TODO(client): supply the PDFs, authors, dates and sample sizes; each title then links to its file.
export const studies = [
  "Thermography Study Conclusion Report",
  "Inflammation Research Overview",
  "Thermography Study, Clinical Interpretation: Subject 1",
  "Thermography Study, Clinical Interpretation: Subject 1A",
  "Thermography Study, Clinical Interpretation: Subject 2",
  "Thermography Study, Clinical Interpretation: Subject 2A",
  "Thermography Study, Clinical Interpretation: Subject 3",
  "Thermography Study, Clinical Interpretation: Subject 3A",
  "Thermography Study, Clinical Interpretation: Subject 4",
  "Thermography Study, Clinical Interpretation: Subject 4A",
  "Gas Discharge Visualization Camera Testing of Px Technology",
  "Dose-Effects Study Using Field Area Measurements",
  "Dark Field Microscopy Blood Analysis",
  "Athletic Strength and Flexibility Testing",
  "Audiogram: Beltone Hearing Test (Case Study)",
  "QEEG MMA Champion (Male) Study Conclusion Report",
  "Technical Information: Male Baseline",
  "Technical Information: Male with Px Product 1",
  "Technical Information: Male with Px Product 2",
  "Technical Information: Male with Px Product 3",
  "QEEG Kickboxing Champion (Female) Study Conclusion Report 1",
  "QEEG Kickboxing Champion (Female) Study Conclusion Report 2",
  "Technical Information: Female Baseline",
  "Technical Information: Female with Px Product 1",
  "Technical Information: Female with Px Product 2",
  "Technical Information: Female Mid-50s Baseline",
];

export const testers = [
  { name: "Carl Thompson", role: "CEO, Life Armor Labs, our exclusive North American licensee" },
  { name: "Dr. M. Kelly Miller", role: "Author of Saving Your Brain; leads brain-disorder research facilities" },
];

export const industries = [
  { name: "Apparel and screen printing", body: "Liquilight in dyes and inks; cells in labels and trims." },
  { name: "Cosmetics and personal care", body: "A few drops of Liquilight in lotions, shampoos and soaps." },
  { name: "Jewelry and accessories", body: "Cells, BioLux and enamel finishes set into the piece." },
  { name: "Food and beverage", body: "Liquilight added during production or at the table." },
  { name: "Supplements", body: "Liquilight in the formulation or the packaging." },
  { name: "Home and pet", body: "A- and P-series carriers for animals, plants and the home." },
];

export const partners = [
  { name: "Life Armor Technologies", body: "Exclusive licensee for North America." },
  { name: "NanoVibe", body: "Builds Harmonic Energy into its own product line." },
];

export const naming = [
  { code: "B", meaning: "For people" },
  { code: "A", meaning: "For animals" },
  { code: "P", meaning: "For plants" },
  { code: "Pr", meaning: "For produce and cut flowers" },
  { code: "E", meaning: "Rides on Wi-Fi, Bluetooth and phone signals" },
  { code: "-C", meaning: "Concentrate" },
];

export const chromatones = {
  // TODO(client): plan names and prices, plus the member login URL.
  features: [
    { title: "Full albums", body: "For driving, training, meditation or background. Recorded on real instruments." },
    { title: "Seven color programs", body: "One for each color of the visible spectrum." },
    { title: "Programs by activity", body: "Workouts, focus, the commute, winding down." },
    { title: "Beam it or pour it", body: "Beam a program with your phone’s flashlight, or transfer it to water with the Wave Rider 4i1." },
    { title: "Video library", body: "Talks, interviews and how-tos from the people behind the music." },
    { title: "A Wave Rider every month", body: "A new one in the mail, so the music goes with you when you’re not listening." },
  ],
  riderUses: ["Phones and tablets", "Laptops", "Game controllers", "Power tools", "Whole-home sets", "Car sets"],
};

export const faqs = [
  {
    q: "What is Harmonic Energy?",
    a: "It’s the music at the heart of everything we make. We composed it in the 1990s by setting molecular measurements to the twelve-note scale.",
  },
  {
    q: "What does it actually do?",
    a: CORE_CLAIM + " We don’t claim to diagnose, treat or cure anything.",
  },
  {
    q: "How do I know if it’s for me?",
    a: "Take the Snapshot, use a kit every day for a month, then take the Snapshot again and compare.",
  },
  {
    q: "Does anything need charging or batteries?",
    a: "No. Cells and Wave Riders are passive tags, and Liquilight is a liquid.",
  },
  {
    q: "Can I use it with pets and plants?",
    a: "Yes. A-series products are made for animals and P-series for plants. For a specific health concern, ask your vet.",
  },
  {
    q: "Where else can I buy it?",
    a: "Partner brands, including Life Armor and NanoVibe, build it into their own products. Their stores set their own terms.",
  },
  {
    q: "I make products. Can I add it to mine?",
    a: "Yes, it’s most of what we do. Tell us what you make, and we’ll suggest a format, send samples and quote a license.",
  },
];

export type SnapshotQuestion = { id: string; prompt: string; options: { label: string; score: number }[] };

// TODO(client): the original six questions sit behind a page we couldn't read. These follow the
// same themes (sleep, appetite, calm, energy) and can be swapped one for one.
const scale = (a: string, b: string, c: string, d: string) => [
  { label: a, score: 3 },
  { label: b, score: 2 },
  { label: c, score: 1 },
  { label: d, score: 0 },
];

export const snapshotQuestions: SnapshotQuestion[] = [
  { id: "sleep", prompt: "How do you usually wake up?", options: scale("Rested", "Mostly fine", "Groggy", "Worn out") },
  { id: "energy", prompt: "How steady is your energy through the afternoon?", options: scale("Steady all day", "A small dip", "A real slump", "Running on empty") },
  { id: "calm", prompt: "When something stressful happens, how quickly do you settle?", options: scale("Within minutes", "Within an hour", "It lingers all day", "It stays with me") },
  { id: "appetite", prompt: "How often do you snack when you’re not really hungry?", options: scale("Rarely", "Sometimes", "Often", "Most days") },
  { id: "focus", prompt: "How easy is it to stay with one task?", options: scale("Easy", "Fairly easy", "Hard", "Very hard") },
  { id: "screens", prompt: "How many hours a day are you near a phone, laptop or Wi-Fi router?", options: scale("Under 2", "2 to 5", "5 to 9", "Nearly all day") },
];
