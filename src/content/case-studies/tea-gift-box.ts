import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const teaGiftBoxCaseStudy = {
  kind: "minor",
  slug: "tea-gift-box",
  hook: {
    quickFacts: {
      role: "Packaging design",
      scope: "Concept → print-ready",
      timeline: "2 weeks",
    },
  },
  sections: {
    brief: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A giftable trio box for single-origin teas—must read premium on shelf and survive mailing without inner plastic.",
          ],
        },
      ],
    },
    iterations: {
      blocks: [
        {
          type: "gallery",
          columns: 2,
          items: [
            { src: "", alt: "Unfolded dieline — foil accents" },
            { src: "", alt: "Shelf mock — three-tin reveal" },
          ],
        },
      ],
    },
    outcome: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Print-ready dieline with soy-based inks and pulp insert; client used assets for a limited holiday drop.",
          ],
        },
      ],
    },
    tradeoffs: {
      blocks: [
        {
          type: "callout",
          title: "Cost vs. reveal",
          body: "Magnetic closure cut for tuck-tab; interior illustration carries the unboxing moment instead.",
        },
      ],
    },
    reflection: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Minor format fit packaging: lead with structure photos and one paragraph on material choices.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default teaGiftBoxCaseStudy;
