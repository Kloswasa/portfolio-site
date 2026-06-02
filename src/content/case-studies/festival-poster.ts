import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const festivalPosterCaseStudy = {
  kind: "minor",
  slug: "festival-poster",
  hook: {
    quickFacts: {
      role: "Graphic design",
      scope: "Poster series",
      timeline: "1 week",
    },
  },
  sections: {
    brief: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Poster series for a lantern festival night market—readable at distance, vibrant in low light, bilingual headline.",
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
            { src: "", alt: "A2 hero poster" },
            { src: "", alt: "Social crop variants" },
          ],
        },
      ],
    },
    outcome: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Three-format kit (A2, A3, story) handed to print vendor with bleed and color notes.",
          ],
        },
      ],
    },
    tradeoffs: {
      blocks: [
        {
          type: "callout",
          title: "Detail vs. distance",
          body: "Simplified lantern motif for legibility; intricate pattern moved to border only.",
        },
      ],
    },
    reflection: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Graphic minors work best when iteration boards show scale context (street pole mock, not just flat art).",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default festivalPosterCaseStudy;
