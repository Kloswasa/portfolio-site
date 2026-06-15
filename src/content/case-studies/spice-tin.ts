import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const spiceTinCaseStudy = {
  kind: "minor",
  slug: "spice-tin",
  approachLabel: "The Decision",
  hero: {
    breadcrumb: "Spice Tin Rebrand",
    eyebrow: "005 · Brand + packaging · Print",
    titleLine1: "Spice Tin",
    titleLine2: "Rebrand",
    summary:
      "Rebrand for a small-batch spice line: tins must scan quickly in a crowded market aisle and work at two sizes.",
    meta: [
      { label: "Client", value: "Concept project" },
      { label: "Role", value: "Brand + packaging" },
      { label: "Timeline", value: "3 weeks" },
      { label: "Deliverable", value: "Label system + 3D mocks" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "Scan fast",
      titleEm: "in a crowded aisle.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Rebrand for a small-batch spice line: tins must scan quickly in a crowded market aisle and work at two sizes.",
            "Before the rebrand, generic labels with illustrated spices read fine up close but vanished at arm's length — the line needed a shelf-forward identity across large and small formats.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "2", label: "Tin sizes", variant: "dark" },
            { value: "3", label: "Week sprint", variant: "mid" },
            { value: "1", label: "Label system", variant: "light" },
          ],
        },
      ],
    },
    approach: {
      eyebrow: "02 — The Decision",
      title: "Type over",
      titleEm: "illustration.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Illustrated spices competed with type at distance. The rebrand led with bold typographic hierarchy and a color system by region — artwork secondary or dropped entirely.",
          ],
        },
        {
          type: "callout",
          label: "Tradeoff",
          title: "Illustration vs. type",
          body: "Dropped illustrated spices for bold type hierarchy — better legibility at arm's length.",
        },
      ],
    },
    work: {
      eyebrow: "03 — Work",
      title: "Type-led",
      titleEm: "label system.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Bold typographic hierarchy and regional color bands carried flavor identity without illustrated spices. Templates locked type scales, margins, and color spec for large and small tin formats.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Format audit",
              body: "Mapped legibility thresholds at shelf distance for both tin sizes.",
            },
            {
              num: "02",
              title: "Type system",
              body: "Hierarchy and regional color bands replaced illustrated spices.",
            },
            {
              num: "03",
              title: "3D mocks",
              body: "Shelf and investor-deck renders validated the family at scale.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Label family",
      titleEm: "at two scales.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "✓",
              label: "Label templates",
              body: "Print-ready templates for large and small tin with typography and regional color spec.",
            },
            {
              value: "✓",
              label: "3D mocks",
              body: "Investor-deck renders showing shelf context and two-size family coherence.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "A three-column gallery — before, color system, tin family — carried the rebrand story faster than a long write-up.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default spiceTinCaseStudy;
