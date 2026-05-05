export const CALENDLY_URL =
  "https://calendly.com/allison-jaffe/30minintrocall?primary_color=2f818f";

// All imagery is stock (Unsplash + Emergent placeholder) — replace with
// your own licensed photography before going live.

const IMG = {
  cinematicLiving:
    "https://static.prod-images.emergentagent.com/jobs/52b501c0-ad18-4cc7-83a9-d38a6b645362/images/19de4428b5cc835248095761861aef970d2f03b49bb7262796efa487943b0b9e.png",
  charcoalMarble:
    "https://static.prod-images.emergentagent.com/jobs/52b501c0-ad18-4cc7-83a9-d38a6b645362/images/684c8579769214d1b84207d3ee52cf4a47a1db599cf533a97ae7d392f1aff37f.png",
  modernDarkKitchen:
    "https://images.unsplash.com/photo-1765766601592-ac2936aa87e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBtb2Rlcm4lMjBkYXJrJTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc3NzY0NDI2NXww&ixlib=rb-4.1.0&q=85",
  darkLivingRoom:
    "https://images.unsplash.com/photo-1773867567872-3ad1fa481082?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBkYXJrJTIwaW50ZXJpb3IlMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc3NzY0NDI2NXww&ixlib=rb-4.1.0&q=85",
  darkKitchenMarble:
    "https://images.unsplash.com/photo-1765766601532-90e9b96320c8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBraXRjaGVuJTIwZGFyayUyMG1hcmJsZXxlbnwwfHx8fDE3Nzc2NDQyNjV8MA&ixlib=rb-4.1.0&q=85",
  moodyBedroom:
    "https://images.unsplash.com/photo-1648415198825-7c805bfa043e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBiZWRyb29tJTIwZGFyayUyMG1vb2R5JTIwbGlnaHRpbmd8ZW58MHx8fHwxNzc3NjQ0MjY1fDA&ixlib=rb-4.1.0&q=85",
  marbleKitchenAlt:
    "https://images.unsplash.com/photo-1776935359448-fb11f63c375d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwZGFyayUyMG1hcmJsZXxlbnwwfHx8fDE3Nzc2NDQyNjV8MA&ixlib=rb-4.1.0&q=85",
  designerPortrait:
    "https://images.unsplash.com/photo-1762843353757-3e4c2e85d4ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBwb3J0cmFpdCUyMGx1eHVyeSUyMHN0dWRpb3xlbnwwfHx8fDE3Nzc2NDQyNzl8MA&ixlib=rb-4.1.0&q=85",
};

export const heroSlides = [
  {
    url: IMG.cinematicLiving,
    eyebrow: "Allison Jaffe Interior Design",
    title: "Curated moments. Timeless design.",
    subtitle:
      "Award-winning, full-service interior design from Austin, Texas — for homes that are unmistakably, beautifully yours.",
  },
  {
    url: IMG.charcoalMarble,
    eyebrow: "Remodel · New Build · Furnish",
    title: "Smart design that lives beautifully.",
    subtitle:
      "Where imagination and practicality meet — every detail captured, every decision considered, every space made to feel inevitable.",
  },
  {
    url: IMG.modernDarkKitchen,
    eyebrow: "Full-Service Studio",
    title: "From first concept to the final pillow.",
    subtitle:
      "We manage the major and minute design details that turn a house into a home — concept, drawings, sourcing, ordering, install.",
  },
];

export const projects = [
  {
    id: "buckminster",
    title: "The Buckminster Residence",
    category: "Family Room",
    location: "Westlake, TX",
    year: "2025",
    scope: "Full-Home Remodel",
    duration: "11 months",
    image: IMG.darkLivingRoom,
    span: "lg:col-span-8 lg:row-span-2",
    height: "h-[60vh] lg:h-[80vh]",
    intro:
      "A Westlake family came to us with a generous shell and a soft brief: somewhere quiet to land at the end of the day, somewhere worthy of slow weekends. We answered with a clean, transitional family room — a black architectural fireplace, layered linens, and lighting that tunes the mood from morning coffee to a glass of wine after eight.",
    narrative: [
      "We rebuilt the spatial logic first. Doorways were realigned, the ceiling plane simplified, and the fireplace promoted to the role of anchor. Everything else softens around it.",
      "Material choices stay restrained: smoke-stained oak, plaster, blackened steel, a deep wool rug. The palette is intentionally narrow so light and shadow do most of the design work.",
      "We managed the build alongside the contractor — drawings, selections, ordering, installation — so the family only had two real decisions to make once construction began.",
    ],
    materials: [
      "Smoke-stained white oak millwork",
      "Hand-troweled lime plaster walls",
      "Blackened steel fireplace surround",
      "Custom wool & linen sectional",
      "Vintage Tabriz rug, restored",
    ],
    gallery: [IMG.darkLivingRoom, IMG.cinematicLiving, IMG.moodyBedroom],
  },
  {
    id: "groundhog-way",
    title: "Groundhog Way",
    category: "Custom New Build",
    location: "Austin, TX",
    year: "2025",
    scope: "New Construction",
    duration: "16 months",
    image: IMG.darkKitchenMarble,
    span: "lg:col-span-4",
    height: "h-[40vh] lg:h-[39vh]",
    intro:
      "A new build in West Austin where the brief was simple: 'don't make it look new.' We worked with the architect from day one to land on a plan that reads as evolved — as though the house has lived through three quiet decades already.",
    narrative: [
      "The kitchen carries the story: a single slab of midnight onyx pulled from a Vermont quarry, paired with cerused oak and unlacquered brass that we trust to age.",
      "Lighting was specified before the slab was poured. Switching, dimming and zone scenes were programmed during framing — by the time the family moved in, everything just worked.",
    ],
    materials: [
      "Midnight onyx slab island",
      "Cerused oak rift-cut cabinetry",
      "Unlacquered brass fixtures",
      "Limewashed plaster hood",
      "Reclaimed terra cotta floor",
    ],
    gallery: [IMG.darkKitchenMarble, IMG.marbleKitchenAlt, IMG.modernDarkKitchen],
  },
  {
    id: "silver-mountain",
    title: "Silver Mountain Drive",
    category: "Primary Suite",
    location: "Austin, TX",
    year: "2025",
    scope: "Primary Suite Renovation",
    duration: "5 months",
    image: IMG.moodyBedroom,
    span: "lg:col-span-4",
    height: "h-[40vh] lg:h-[39vh]",
    intro:
      "A retreat for two — quiet, low and shadowed. The bedroom is wrapped in a single mohair velvet from floor to ceiling so the room feels held rather than decorated.",
    narrative: [
      "We removed two walls to give the suite a single graceful arc — bedroom, dressing, bath. Sightlines are uninterrupted; thresholds are intentional.",
      "Lighting is layered low: bedside reading, perimeter wash, a single sculptural pendant. There is no overhead light in the bedroom on purpose.",
    ],
    materials: [
      "Mohair velvet wall upholstery",
      "Smoked oak floor, oil-finished",
      "Honed Calacatta Viola en suite",
      "Custom sculptural brass pendant",
      "Linen drapery, double-lined",
    ],
    gallery: [IMG.moodyBedroom, IMG.charcoalMarble, IMG.darkLivingRoom],
  },
  {
    id: "wimberley-vault",
    title: "Wimberley Stone & Wood",
    category: "Kitchen & Hearth",
    location: "Wimberley, TX",
    year: "2024",
    scope: "Kitchen + Great Room",
    duration: "9 months",
    image: IMG.marbleKitchenAlt,
    span: "lg:col-span-8",
    height: "h-[60vh] lg:h-[80vh]",
    intro:
      "A Hill Country home where the architecture is mostly stone and the brief was to keep it that way. We added warm wood, gold-toned brass and a bar that pulls the room together at night.",
    narrative: [
      "The structural cleanup was the heaviest lift — we removed a wall, lowered a ceiling, and re-clad the original stone in a darker, more saturated tone.",
      "The bar was conceived as a piece of furniture rather than a built-in: solid walnut, brass inlay, and a back-painted glass that throws warmth across the room every evening.",
    ],
    materials: [
      "Walnut bar with brass inlay",
      "Honed Pietra Cardosa countertops",
      "Hand-carved limestone hearth",
      "Antique English oak ceiling beams",
      "Vintage brass pendants, refinished",
    ],
    gallery: [IMG.marbleKitchenAlt, IMG.darkKitchenMarble, IMG.cinematicLiving],
  },
];

export const aboutImage = IMG.designerPortrait;

export const testimonials = [
  {
    quote:
      "Allison and her team translated a feeling we couldn't put into words. Every room feels intentional — and somehow more like us than we knew how to be.",
    author: "Westlake Family",
    role: "Full-Home Remodel",
  },
  {
    quote:
      "The level of detail is extraordinary. Drawings, selections, ordering, install — everything was handled. We just lived our lives until it was time to move back in.",
    author: "K. & M. Patel",
    role: "Custom New Build, Austin",
  },
  {
    quote:
      "What sets AJID apart is taste — and the discipline to hold it across a year of decisions. Our home is calmer, warmer, and undeniably more beautiful.",
    author: "Lauren Whitman",
    role: "Furnishings Project, Tarrytown",
  },
  {
    quote:
      "We interviewed several designers. Allison was the only one who told us what *not* to do. That honesty saved us money and gave us a home we love.",
    author: "Daniel & Eve Reyes",
    role: "Hill Country Residence",
  },
];

export const services = [
  "Remodeling & Renovations",
  "New Construction Consulting",
  "Furnishings & Sourcing",
  "Space Planning",
  "Custom Cabinetry",
  "Lighting Design",
];

export const steps = [
  {
    n: "01",
    title: "Conceptual Design",
    desc: "We define scope, develop the design intent, build floor plans and curate the material direction. Roughly an eight-week phase.",
  },
  {
    n: "02",
    title: "Detailed Design",
    desc: "Every elevation, finish, fixture and selection is documented so the contractor has everything they need. About eight weeks.",
  },
  {
    n: "03",
    title: "Purchasing & Execution",
    desc: "We manage purchasing, logistics, installation and the construction liaison — so you can focus on living, not on logistics.",
  },
];

export const awards = [
  { name: "ASID Texas Chapter", detail: "Design Excellence Award" },
  { name: "Luxe RED Awards", detail: "Finalist — Residential Interior" },
  { name: "Austin Home", detail: "Designer of the Year, Shortlist" },
  { name: "House Beautiful", detail: "Featured — Hill Country Edition" },
  { name: "Domino Magazine", detail: "Editor's Pick" },
  { name: "AD Pro Directory", detail: "Listed Designer" },
];

export const projectTypes = [
  "Remodel / Renovation",
  "New Construction",
  "Furnishings Only",
  "Kitchen & Bath",
  "Not sure yet",
];

export const budgetRanges = [
  "Under $150K",
  "$150K – $500K",
  "$500K – $1M",
  "$1M – $3M",
  "$3M+",
];

export const faqs = [
  {
    q: "What does Allison Jaffe Interior Design offer?",
    a: "Full-service interior design — including remodels, new construction consulting, kitchens and baths, custom cabinetry, space planning, fabrics and upholstery, lighting design, window treatments, art and accessories, and a deep network of trusted trades.",
  },
  {
    q: "What does your full-service process look like?",
    a: "Three phases: Conceptual Design, Detailed Design, and Purchasing & Execution. We manage your project from initial concept through installation — designing your home down to the final detail.",
  },
  {
    q: "How long does each phase take?",
    a: "Conceptual Design typically runs ~8 weeks. Detailed Design also runs ~8 weeks. Purchasing & Execution is dependent on scope and contractor schedule.",
  },
  {
    q: "How much should I expect to invest in design services?",
    a: "It varies with scope. As general guidance: a 15–30% design investment for projects up to ~$150K, and 1–15% for projects above ~$150K. We'll discuss specifics in our first call.",
  },
  {
    q: "How do you bill?",
    a: "A hybrid of flat-rate and retainer. The first phase is flat-rate (scope, plans, material curation). Once design is finalized we switch to a retainer that covers purchasing, ordering logistics, coordination and installation.",
  },
  {
    q: "Do we need a separate architect for an interior design project?",
    a: "Usually no — unless you're adding square footage, changing the rooflines, or moving an exterior wall. With our interior design license we can design and stamp plans for permitting; for load-bearing changes we bring in a structural engineer.",
  },
  {
    q: "Can you recommend a contractor?",
    a: "Yes — and reliable ones. We hand-select a contractor that fits your timeline and personality. You're free to use your own, of course, but our trusted partners tend to make the project smoother.",
  },
  {
    q: "How long does a typical project last?",
    a: "It depends on size and scope. With permitting and construction, remodels typically run 4–8 months. Furnishings depend on lead times — larger custom pieces can take 12–24 weeks.",
  },
  {
    q: "What is the designer's role during construction?",
    a: "We stay deeply involved — providing the contractor with information, acting as the main liaison, managing expectations on both sides, and being a trusted advisor during a phase that can be very disruptive to your home life.",
  },
];
