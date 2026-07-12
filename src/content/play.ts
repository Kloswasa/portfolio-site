/** Editorial page copy — types live in `src/lib/play/types.ts`. Runtime sketches in `src/lib/play/sketches.ts`. */
import type {
  PlayEndCopy,
  PlayFilterOption,
  PlayHeroMeta,
  PlayMediumSection,
  PlayWork,
} from "@/src/lib/play/types";

/** Toggle creative-coding section, filter, and works on the play page. */
export const PLAY_SHOW_CODE = false;

const ALL_PLAY_FILTER_OPTIONS: PlayFilterOption[] = [
  { key: "all", label: "All play" },
  { key: "illustration", label: "Illustration" },
  { key: "code", label: "Creative coding" },
];

const ALL_PLAY_MEDIUM_SECTIONS: PlayMediumSection[] = [
  {
    medium: "illustration",
    title: "Illustration",
    infoStrong: "Digital",
    infoDetail: "6 plates · mixed media",
  },
  {
    medium: "code",
    title: "Creative Coding",
    infoStrong: "Generative · Live",
    infoDetail: "6 sketches · HTML Canvas",
  },
];

const ALL_PLAY_HERO_META: PlayHeroMeta = {
  eyebrow: "The Laboratory · Studies & Experiments",
  titleLine1: "Made for its",
  titleLine2: "own sake",
  description:
    "Off-hours illustration and live generative sketches. No brief, no client, no deadline. Just the pleasure of making the thing. The coded pieces are running as you read this.",
  stats: [
    { label: "Illustrations", value: "6" },
    { label: "Live sketches", value: "6" },
    { label: "Tools", value: "Canvas · SVG" },
    { label: "Since", value: "2021" },
  ],
};

const PLAY_HERO_META_ILLUSTRATION_ONLY: PlayHeroMeta = {
  ...ALL_PLAY_HERO_META,
  description:
  "On and off the clock illustrations .\n Some from client work, \nsome made simply for the pleasure of it. \nClick to see the full image of each collection.",
   stats: [
    { label: "Illustrations", value: "6" },
    { label: "Media", value: "Digital" },
    { label: "Tools", value: "Procreate" },
    { label: "Since", value: "2021" },
  ],
};

export const PLAY_FILTER_OPTIONS = PLAY_SHOW_CODE
  ? ALL_PLAY_FILTER_OPTIONS
  : ALL_PLAY_FILTER_OPTIONS.filter((option) => option.key !== "code");

export const PLAY_HERO_META = PLAY_SHOW_CODE
  ? ALL_PLAY_HERO_META
  : PLAY_HERO_META_ILLUSTRATION_ONLY;

export const PLAY_MEDIUM_SECTIONS = PLAY_SHOW_CODE
  ? ALL_PLAY_MEDIUM_SECTIONS
  : ALL_PLAY_MEDIUM_SECTIONS.filter((section) => section.medium !== "code");

export const PLAY_PAGE_DESCRIPTION = PLAY_SHOW_CODE
  ? "Off-hours illustration and live generative sketches."
  : "Off-hours illustration studies and experiments.";

const ALL_PLAY_WORKS: PlayWork[] = [
  {
    id: "au-call",
    medium: "illustration",
    index: "I·01",
    title: "Australia Calls illustrations",
    meta: "Digital · 2025",
    dim: "Quiz game · 2025",
    description:
      "Australia Calls quiz game illustration collection. From character design to a quiz background a personality representation character that merge identity and Australian cultural together makes cultural feel like a conversation, not just a label.",
    projectSlug: "quiz-game",
    cardDescription: "Illustration series for the Australia Calls quiz game.",
    tools: ["Procreate", "Digital", "Illustration", "Quiz game"],
    tag: "Collection",
    cardTools: "Digital · 2025",
    imageSrc: "play/illustration/illustration-AUcall-cover.png",
    imageAlt: "Australia Calls illustrations",
    imageWidth: 595,
    imageHeight: 650,
    images: [
      {
        src: "play/illustration/illustration-AUcall-cover.png",
        alt: "AU Call — overall",
        width: 595,
        height: 650,
      },
      {
        src: "play/illustration/illustration-AUcall-characters.png",
        alt: "AU Call — characters",
        width: 595,
        height: 842,
      },
      {
        src: "play/illustration/illustration-AUcall-quizes.png",
        alt: "AU Call — quizes",
        width: 1458,
        height: 1934,
      },
      {
        src: "play/illustration/illustration-AUcall-quizes-2.png",
        alt: "AU Call — quizes-2",
        width: 1458,
        height: 1934,
      },
      {
        src: "play/illustration/illustration-AUcall-scenes.png",
        alt: "AU Call — scenes",
        width: 1458,
        height: 837,
      },
    ],
  },
  {
    id: "ganesha",
    medium: "illustration",
    index: "I·02",
    title: "Ganesha",
    meta: "Digital · 2020",
    dim: "Deity study · 2020",
    description:
      "A hand-rendered Ganesha study, ornamental line work balanced against open negative space. Inspired by my Bachelor degree university logo.",
    cardDescription: "An illustration of Ganesha inpried from my university logo.",
    tools: ["Illustrator", "Photoshop", "Cultural"],
    tag: "Cultural",
    cardTools: "Digital · 2020",
    imageSrc: "play/illustration/illustration-ganesha.png",
    imageAlt: "Ganesha illustration",
  },
  {
    id: "thai-hom",
    medium: "illustration",
    index: "I·03",
    title: "Thai Hom",
    meta: "Digital · 2019",
    dim: "Home fragrance · 2019",
    description:
      "Illustration exploring Thai home aroma ingredients from a wide range of scents, arrange in the inforgraphic booklet form.",
    projectSlug: "thai-hom",
    cardDescription: "Thai home aroma ingredients for the infographic booklet.",
    tools: ["Digital", "Heritage", "Illustrator", "Photoshop"],
    tag: "Heritage",
    cardTools: "Digital · 2019",
    imageSrc: "play/illustration/illustration-thhom.png",
    imageAlt: "Thai Hom infographic booklet illustration",
    images: [
      {
        src: "play/illustration/illustration-thhom.png",
        alt: "Thai Hom — cover spread",
      },
      {
        src: "play/illustration/illustration-thhom-work.png",
        alt: "Thai Hom — infographic booklet",
      },
    ],
  },
  {
    id: "compose-zone",
    medium: "illustration",
    index: "I·04",
    title: "Compose Zone",
    meta: "Digital · 2023",
    dim: "Booth design · 2023",
    description:
      "A composition illustration in composition retail booth, the illustration apply to both backdrop and infographic signage.",
    projectSlug: "kuendee",
    cardDescription: "Illustration for the composition retail booth",
    tools: [ "Photoshop", "Printing"],
    tag: "Booth design",
    cardTools: "Digital · 2023",
    imageSrc: "play/illustration/illustration-kuendee-backdrop.png",
    imageAlt: "Compose Zone illustration",
    images: [
      {
        src: "play/illustration/illustration-kuendee-backdrop.png",
        alt: "Compose Zone — backdrop",
      },
      {
        src: "play/illustration/illustration-kuendee-infoboard.png",
        alt: "Compose Zone — infoboard",
      },
    ],
  },
  {
    id: "in-the-garden",
    medium: "illustration",
    index: "I·05",
    title: "In the Garden illustration",
    meta: "Digital · 2023",
    dim: "Packaging · 2023",
    description:
      "A packaging illustration for the local entrepreneur's product. A quiet garden scene, layered foliage, dappled light, and small moments of growth observed at walking pace.",
    projectSlug: "bupha",
    cardDescription: "Packaging illustration for the local entrepreneur's product.",
    tools: ["Photoshop", "Procreate"],
    tag: "Packaging",
    cardTools: "Digital · 2023",
    imageSrc: "play/illustration/illustration-bupha.png",
    imageAlt: "Bupha packaging illustration",
  },
  {
    id: "thai-agriculture",
    medium: "illustration",
    index: "I·06",
    title: "Thai AgTech editorial calendar",
    meta: "Digital · 2023",
    dim: "Editorial calendar · 2023",
    description:
      "An editorial calendar illustration in Thai AgTech theme, field patterns, crop cycles, and rural labour rendered as an infographic landscape.",
    cardDescription: "Editorial calendar illustration in Thai AgTech theme.",
    tools: ["Illustrator"],
    tag: "Editorial",
    cardTools: "Digital · 2023",
    imageSrc: "play/illustration/illustration-thargriculture.png",
    imageAlt: "Thai Agriculture editorial calendar illustration",
    images: [
      {
        src: "play/illustration/illustration-thargriculture.png",
        alt: "Thai Agriculture — cover spread",
      },
      {
        src: "play/illustration/illustration-thargriculture-calendar.png",
        alt: "Thai Agriculture — crop cycle diagram",
      },
    ],
  },
  {
    id: "phyllotaxis",
    medium: "code",
    index: "C·01",
    title: "Phyllotaxis",
    meta: "Canvas · Golden angle",
    dim: "Generative · 2024",
    description:
      "Each of 900 florets sits at a fixed turn of 137.5° — the golden angle — with radius growing as √n. The packing sunflowers, pinecones and daisies all use.",
    cardDescription: "900 florets placed at 137.5° — the angle sunflowers use.",
    tools: ["Canvas 2D", "~12 lines", "Golden angle"],
    tag: "Live",
    cardTools: "Canvas · Golden angle",
    sketch: "phyllotaxis",
    code: `const PHI = Math.PI * (3 - Math.sqrt(5))  // 137.5°
for (let i = 0; i < 900; i++) {
  const a = i * PHI
  const r = c * Math.sqrt(i)
  dot(cx + r*Math.cos(a),
      cy + r*Math.sin(a))
}`,
  },
  {
    id: "flow",
    medium: "code",
    index: "C·02",
    title: "Currents",
    meta: "Canvas · Flow field",
    dim: "Generative · 2024",
    description:
      "130 particles each read an angle from a layered-sine field and step forward, leaving low-opacity ink trails that accumulate into visible currents.",
    cardDescription: "Particles tracing a noise field, leaving ink trails.",
    tools: ["Canvas 2D", "Flow field", "Trails"],
    tag: "Live",
    cardTools: "Canvas · Flow field",
    sketch: "flow",
    code: `const angle = field(p.x, p.y, t)
p.x += Math.cos(angle) * 1.2
p.y += Math.sin(angle) * 1.2
line(p.prev, p)   // faint ink trail`,
  },
  {
    id: "constellation",
    medium: "code",
    index: "C·03",
    title: "Constellations",
    meta: "Canvas · Proximity graph",
    dim: "Generative · 2023",
    description:
      "Points drift and bounce; any two within 92 pixels draw a link that fades with distance. The brightest few become twinkling amber stars.",
    cardDescription: "Drifting points link when near; the brightest twinkle.",
    tools: ["Canvas 2D", "O(n²) links", "Twinkle"],
    tag: "Live",
    cardTools: "Canvas · Proximity graph",
    sketch: "constellation",
    code: `for (const [a, b] of pairs) {
  const d = dist(a, b)
  if (d < 92)
    stroke(a, b, { alpha: 1 - d/92 })
}`,
  },
  {
    id: "ripple",
    medium: "code",
    index: "C·04",
    title: "Interference",
    meta: "Canvas · Wave fronts",
    dim: "Generative · 2023",
    description:
      "Two fixed sources emit expanding rings that fade with radius. Where fronts overlap, the classic two-source interference pattern appears.",
    cardDescription: "Two sources, expanding rings — after the water study.",
    tools: ["Canvas 2D", "Waves", "Two-source"],
    tag: "Live",
    cardTools: "Canvas · Wave fronts",
    sketch: "ripple",
    code: `for (const s of sources)
  for (let k = 0; k < 7; k++) {
    const r = (t*0.04 + k*26) % 170
    ring(s.x, s.y, r, { alpha: 1 - r/170 })
  }`,
  },
  {
    id: "bloom",
    medium: "code",
    index: "C·05",
    title: "Recursive Bloom",
    meta: "Canvas · Recursion",
    dim: "Generative · 2022",
    description:
      "One function calls itself twice at every tip, branching eight levels deep. A sine term sways the whole structure as a breeze would.",
    cardDescription: "A branching system swaying — eight levels deep.",
    tools: ["Canvas 2D", "Recursion", "8 levels"],
    tag: "Live",
    cardTools: "Canvas · Recursion",
    sketch: "bloom",
    code: `function branch(x, y, len, ang, depth) {
  if (depth === 0) return
  const [x2, y2] = step(x, y, ang + sway, len)
  line(x, y, x2, y2)
  branch(x2, y2, len*0.72, ang - 0.5, depth-1)
  branch(x2, y2, len*0.72, ang + 0.5, depth-1)
}`,
  },
  {
    id: "orrery",
    medium: "code",
    index: "C·06",
    title: "Orrery",
    meta: "Canvas · Orbital motion",
    dim: "Generative · 2021",
    description:
      "Four bodies circle a gilded centre at different speeds, each carrying a small moon — a toy solar system, quietly turning.",
    cardDescription: "Four bodies and their moons, quietly orbiting.",
    tools: ["Canvas 2D", "Epicycles", "Celestial"],
    tag: "Live",
    cardTools: "Canvas · Orbital motion",
    sketch: "orrery",
    code: `for (const [i, orbit] of orbits) {
  const a = t * orbit.speed + i
  const x = cx + Math.cos(a) * orbit.r
  const y = cy + Math.sin(a) * orbit.r
  planet(x, y); moon(x, y, a * 3.4)
}`,
  },
];

export const PLAY_WORKS = PLAY_SHOW_CODE
  ? ALL_PLAY_WORKS
  : ALL_PLAY_WORKS.filter((work) => work.medium !== "code");


export const PLAY_END_COPY: PlayEndCopy = {
  kicker: "The end of the record",
  titleLead: "If this is not enough,",
  titleAccent: "let\u2019s see my curated projects.",
  actions: [
    { label: "See the works →", href: "/work", variant: "primary" },
  ],
};