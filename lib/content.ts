// All site copy that is shared between pages, carried over from the original site's facts.
// Claims are kept to the brand's one defensible claim; see docs/brand/brand-kit.md.

export const CORE_CLAIM =
  "Products carrying Harmonic Energy help the body’s natural energy field hold a balanced, steady state for as long as the product is present.";

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
  "Concentrate: add 3–5 drops to any bottle up to 16 oz, such as shampoo, lotion, hand soap, dish soap, floor cleaner or a water bottle.",
];

export const kits: Kit[] = [
  {
    slug: "small-personal-kit",
    name: "Small Personal Kit",
    short: "A pendant, a concentrate and a phone rider. The easiest way to start.",
    badge: "Best first step",
    description:
      "Everything you need to try all three ways of carrying Harmonic Energy for a few weeks: one to wear, one to add to what you already use, and one for your phone.",
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
    forWhom: "First-timers, and anyone buying a gift.",
    price: null,
    checkoutEnv: "NEXT_PUBLIC_CHECKOUT_SMALL_KIT",
  },
  {
    slug: "full-personal-kit",
    name: "Full Personal Kit",
    short: "The full household set: wear it, add it, spray it on food, plants and flowers.",
    badge: "Most complete",
    description:
      "Everything in the Small Kit and more: raw cells for your own jewelry, a BioLux pendant, and three sprays for food and drinks, houseplants and cut flowers. Add three extra Small Kits to share with family.",
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
    forWhom: "Households that want to bring it into every room.",
    price: null,
    checkoutEnv: "NEXT_PUBLIC_CHECKOUT_FULL_KIT",
  },
  {
    slug: "tech-sample-set",
    name: "Tech Sample Set",
    short: "All 22 carrier formats in one box, for product developers.",
    badge: "For brands",
    description:
      "Every format we make, for teams evaluating Harmonic Energy for their own products: cells, signal riders, liquids, oils and finishes for people, animals, plants and produce.",
    contents: [
      "Cells: B-Cell, A-Cell, P-Cell, Pr-Cell",
      "Signal cells: E B-Cell, E A-Cell, E P-Cell, E Pr-Cell",
      "Finishes: B-Reflect, B-Refract, B-BioLux, B-Enamel",
      "Liquilight: B, A, P and Pr, each as ready-to-use and concentrate (-C)",
      "Oils: B-Oil and B-Oil-C",
    ],
    howToUse: [
      "Each format comes with a short description of where it fits in production.",
      "Book a call and we’ll walk your team through which carrier suits your materials.",
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
    body: "The original compositions, recorded on real instruments. Still the source of everything else.",
    where: "Albums and the Chromatones library",
  },
  {
    name: "Cells",
    year: "2003",
    product: "BioCell",
    body: "A confetti-sized tag that echoes the pattern off your own field. No battery, nothing to charge.",
    where: "Pendants, bracelets, labels, clothing",
  },
  {
    name: "Signal",
    year: "2009",
    product: "E-BioCell / Wave Rider",
    body: "A tag that rides the Wi-Fi, Bluetooth and phone signals already around you, so it reaches a whole room.",
    where: "Phones, chargers, home and car sets",
  },
  {
    name: "Light & water",
    year: "2012",
    product: "Liquilight",
    body: "Water infused with the pattern by our Electromagnetic Pattern Infuser, then added to things you already use.",
    where: "Dyes, inks, cosmetics, food, sprays",
  },
  {
    name: "Pairs",
    year: "2021",
    product: "QUID",
    body: "Paired products that stay linked to each other after they leave our studio.",
    where: "Sets and multi-item programs",
  },
];

export const timeline = [
  { year: "1990s", title: "Curiosity and research", body: "Measurements of how molecules bond and pulse are turned into ratios, rhythms and tones." },
  { year: "1998", title: "The music", body: "The first album, Rhythm of the Light, is released after an early trial in a hospital emergency department." },
  { year: "2003", title: "BioCell", body: "The pattern moves off the speaker and into a tag you can wear." },
  { year: "2009", title: "E-BioCell", body: "Wave Riders carry the pattern on everyday wireless signals." },
  { year: "2012", title: "Liquilight", body: "Pattern-infused water makes it possible to add Harmonic Energy to almost anything liquid or dyed." },
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
  { name: "NanoVibe", body: "A partner brand building Harmonic Energy into its own product line." },
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
    { title: "Full albums", body: "Music for driving, training, meditation and background, recorded on real instruments." },
    { title: "Seven color programs", body: "Programs built around the seven colors of the visible spectrum." },
    { title: "Programs by activity and mood", body: "Pick by what you’re doing: workouts, focus, winding down, the commute." },
    { title: "Beam it or pour it", body: "Use your phone’s flashlight to beam a program, or transfer it to a glass of water with the Wave Rider 4i1." },
    { title: "Video library", body: "Seminars, interviews and how-to videos from the people behind the music." },
    { title: "A Wave Rider every month", body: "A new rider in the mail each month, so the pattern travels with you when you’re not listening." },
  ],
  riderUses: ["Phones and tablets", "Laptops", "Game controllers", "Power tools", "Whole-home sets", "Car sets"],
};

export const faqs = [
  {
    q: "What is Harmonic Energy?",
    a: "It’s the name for a tone we composed in the 1990s from measurements of how molecules bond and pulse, set to the twelve-note musical scale. Everything we make carries that original composition.",
  },
  {
    q: "What does it actually do?",
    a: CORE_CLAIM + " We don’t claim to diagnose, treat or cure anything.",
  },
  {
    q: "Do I need to believe in it for it to work?",
    a: "No. Pick a kit, use it the way the card describes for a month, and notice what changes. The Snapshot gives you a baseline to compare against.",
  },
  {
    q: "Does anything need charging or batteries?",
    a: "No. Cells and Wave Riders are passive tags, and Liquilight is a liquid you add to what you already use.",
  },
  {
    q: "Can I use it with pets and plants?",
    a: "We make separate A-series products for animals and P-series for plants, so each gets its own version. If you have a specific health concern, ask your doctor or vet first.",
  },
  {
    q: "Where else can I buy it?",
    a: "Partner brands build it into their own products, including Life Armor in North America and NanoVibe. Those stores are independent and set their own terms.",
  },
  {
    q: "I make products. Can I add it to mine?",
    a: "Yes. That’s most of what we do. Tell us what you make and we’ll recommend a carrier, send samples, and talk through licensing by territory.",
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
