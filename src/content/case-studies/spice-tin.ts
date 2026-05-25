import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const spiceTinCaseStudy = {
  kind: "minor",
  slug: "spice-tin",
  hook: {
    quickFacts: {
      role: "Brand + packaging",
      scope: "Rebrand → label system",
      timeline: "3 weeks",
    },
  },
  sections: {
    brief: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Rebrand for a small-batch spice line: tins must scan quickly in a crowded market aisle and work at two sizes.",
          ],
        },
      ],
    },
    iterations: {
      blocks: [
        {
          type: "gallery",
          columns: 3,
          items: [
            { src: "", alt: "Before — generic label" },
            { src: "", alt: "Color system by region" },
            { src: "", alt: "Large + small tin family" },
          ],
        },
      ],
    },
    outcome: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Delivered label templates, typography spec, and 3D mocks for investor decks.",
          ],
        },
      ],
    },
    tradeoffs: {
      blocks: [
        {
          type: "callout",
          title: "Illustration vs. type",
          body: "Dropped illustrated spices for bold type hierarchy—better legibility at arm’s length.",
        },
      ],
    },
    reflection: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A three-column gallery carried the rebrand story faster than a long write-up.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default spiceTinCaseStudy;
