import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const flomCaseStudy = {
  kind: "minor",
  slug: "flomax",
  approachLabel: "The Decision",
  hero: {
    breadcrumb: "Flomax Kid's Packaging",
    eyebrow: "004 · Graphic design · Packaging",
    titleLine1: "Flomax",
    titleLine2: "Kid's Packaging",
    summary:
      "An alternative graphic style for a secondary product packaging line — fresh energy under an established brand identity without breaking recognition.",
    meta: [
      { label: "Client", value: "Consumer brand · Thailand" },
      { label: "Role", value: "Graphic design" },
      { label: "Timeline", value: "4 weeks" },
      { label: "Deliverable", value: "Packaging graphic system" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "Same brand,",
      titleEm: "new shelf story.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "FloM is a secondary product line under an existing parent brand — same logo, different audience and price tier. The brief asked for packaging graphics that feel lighter and more contemporary without orphaning the line from brand recognition.",
            "Shelf context mattered: FloM would sit beside the flagship line in the same retail bay. Differentiation had to come from graphic rhythm and colour temperature, not a new logo.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "1", label: "Parent identity", variant: "dark" },
            { value: "3", label: "SKU variants", variant: "mid" },
            { value: "4", label: "Week sprint", variant: "light" },
          ],
        },
      ],
    },
    approach: {
      eyebrow: "02 — The Decision",
      title: "Temperature shift,",
      titleEm: "not logo shift.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Early explorations changed typography and logo lockup — all failed recognition tests. The winning direction kept the master brand mark and shifted graphic temperature: warmer accent palette, looser illustration style, more whitespace.",
          ],
        },
        {
          type: "callout",
          label: "Tradeoff",
          title: "Recognition vs. freshness",
          body: "Logo and primary type locked; differentiation moved to secondary graphics, border treatment, and accent colour family.",
        },
      ],
    },
    work: {
      eyebrow: "03 — Work",
      title: "Graphic system",
      titleEm: "across SKUs.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A shared grid governs all three SKU faces — logo zone, product name, variant colour band, and illustration panel. Each variant swaps accent hue and illustration motif while maintaining identical structural hierarchy.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Identity audit",
              body: "Mapped parent brand lockups, minimum sizes, and forbidden zones before exploration.",
            },
            {
              num: "02",
              title: "Graphic exploration",
              body: "Three temperature directions tested in context on shelf mock — warm illustration won.",
            },
            {
              num: "03",
              title: "SKU rollout",
              body: "Variant colour bands, print specs, and vendor handoff for three pack sizes.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Line launched",
      titleEm: "on shelf.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "3",
              label: "SKU pack system",
              body: "Consistent grid with variant colour and illustration swaps across the FloM line.",
            },
            {
              value: "✓",
              label: "Brand compliance",
              body: "Parent identity team approved lockups — no logo modification required.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "FloM reads as a sibling line, not a stranger — the graphic temperature shift does the differentiation work while the master brand carries trust.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default flomCaseStudy;
