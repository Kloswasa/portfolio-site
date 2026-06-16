import type {
  PlayFilterOption,
  PlayHeroMeta,
  PlayMediumSection,
  PlayWork,
} from "@/src/lib/play/types";

export const PLAY_FILTER_OPTIONS: PlayFilterOption[] = [
  { key: "all", label: "All play" },
  { key: "illustration", label: "Illustration" },
  { key: "code", label: "Creative coding" },
];

export const PLAY_HERO_META: PlayHeroMeta = {
  eyebrow: "The Laboratory · Studies & Experiments",
  titleLine1: "Made for its",
  titleLine2: "own sake",
  description:
    "Off-hours experiments — hand-drawn cyanotype illustration and live generative sketches. No brief, no client, no deadline. Just the pleasure of making the thing. The coded pieces are running as you read this.",
  stats: [
    { label: "Illustrations", value: "6" },
    { label: "Live sketches", value: "6" },
    { label: "Tools", value: "Canvas · SVG" },
    { label: "Since", value: "2021" },
  ],
};

export const PLAY_MEDIUM_SECTIONS: PlayMediumSection[] = [
  {
    medium: "illustration",
    title: "Illustration",
    infoStrong: "Hand-drawn · Cyanotype",
    infoDetail: "6 plates · SVG & ink",
  },
  {
    medium: "code",
    title: "Creative Coding",
    infoStrong: "Generative · Live",
    infoDetail: "6 sketches · HTML Canvas",
  },
];

export const PLAY_WORKS: PlayWork[] = [
  {
    id: "fern",
    medium: "illustration",
    index: "I·01",
    title: "Fern Frond",
    meta: "Cyanotype · SVG",
    dim: "Specimen study · 2023",
    description:
      "A pinnate frond drawn the way Anna Atkins printed them in 1843 — every leaflet placed by hand, white on Prussian ground.",
    cardDescription: "A pinnate study after Atkins — drawn vein by vein.",
    tools: ["SVG", "Hand-vectored", "After Atkins"],
    tag: "Botanical",
    cardTools: "Cyanotype · SVG",
    illustration: "fern",
  },
  {
    id: "star-chart",
    medium: "illustration",
    index: "I·02",
    title: "Star Chart",
    meta: "Cyanotype · SVG",
    dim: "Nocturne, Plate VII · 2023",
    description:
      "An invented constellation laid over a faint coordinate grid. Two stars are gilded in amber to anchor the eye against the cool field.",
    cardDescription: "An invented constellation, two stars gilded.",
    tools: ["SVG", "Invented sky", "Gilded"],
    tag: "Celestial",
    cardTools: "Cyanotype · SVG",
    illustration: "star-chart",
  },
  {
    id: "luna-moth",
    medium: "illustration",
    index: "I·03",
    title: "Luna Moth",
    meta: "Cyanotype · SVG",
    dim: "Study III · 2022",
    description:
      "Built around a single axis of bilateral symmetry; the eyespots are the only warm notes in an otherwise cool specimen.",
    cardDescription: "Bilateral symmetry, eyespots picked out in amber.",
    tools: ["SVG", "Symmetry", "Entomology"],
    tag: "Entomology",
    cardTools: "Cyanotype · SVG",
    illustration: "luna-moth",
  },
  {
    id: "nautilus",
    medium: "illustration",
    index: "I·04",
    title: "Nautilus",
    meta: "Cyanotype · SVG",
    dim: "ϕ spiral · 2023",
    description:
      "A logarithmic spiral chambered by hand — the same growth ratio the living shell follows as it grows.",
    cardDescription: "A logarithmic spiral chambered by hand.",
    tools: ["SVG", "Golden ratio", "Marine"],
    tag: "Marine",
    cardTools: "Cyanotype · SVG",
    illustration: "nautilus",
  },
  {
    id: "magnolia",
    medium: "illustration",
    index: "I·05",
    title: "Magnolia",
    meta: "Cyanotype · SVG",
    dim: "Study V · 2024",
    description:
      "Five overlapping petals layered front to back, with the stamens flecked amber at the throat of the bloom.",
    cardDescription: "Layered petals, stamens in amber.",
    tools: ["SVG", "Botanical", "Layered"],
    tag: "Botanical",
    cardTools: "Cyanotype · SVG",
    illustration: "magnolia",
  },
  {
    id: "dandelion",
    medium: "illustration",
    index: "I·06",
    title: "Dandelion Clock",
    meta: "Cyanotype · SVG",
    dim: "Dispersal · 2024",
    description:
      "Seventy seeds thrown onto radiating filaments by a small script, then rendered as a single fragile seed head.",
    cardDescription: "Seventy seeds on radiating filaments.",
    tools: ["SVG", "Procedural", "Botanical"],
    tag: "Botanical",
    cardTools: "Cyanotype · SVG",
    illustration: "dandelion",
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

export const PLAY_END_COPY = {
  label: "End of play · 12 experiments · ongoing",
  cta: { label: "See the client work →", href: "/work" },
};
