import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const editorialZineCaseStudy = {
  kind: "minor",
  slug: "editorial-zine",
  hook: {
    quickFacts: {
      role: "Editorial design",
      scope: "Layout + art direction",
      timeline: "4 weeks",
    },
  },
  sections: {
    brief: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "24-page risograph zine on migration stories—tight grid, generous margins, photography-led spreads.",
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
            { src: "", alt: "Opening spread — portrait + pull quote" },
            { src: "", alt: "Text-heavy spread — two-column rhythm" },
          ],
        },
      ],
    },
    outcome: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Master layouts exported for riso separations; printer signed off on ink limits and registration.",
          ],
        },
      ],
    },
    tradeoffs: {
      blocks: [
        {
          type: "callout",
          title: "Ink budget",
          body: "Limited to two inks per spread—photography treated with duotone instead of full CMYK.",
        },
      ],
    },
    reflection: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Spread pairs in the gallery mirror how readers experience the zine—not isolated pages.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default editorialZineCaseStudy;
