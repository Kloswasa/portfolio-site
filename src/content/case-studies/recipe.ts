import type { MajorCaseStudy } from "@/src/lib/case-studies/types";

const recipeCaseStudy = {
  kind: "major",
  slug: "recipe",
  hook: {
    quickFacts: {
      role: "Product design + frontend",
      scope: "Research → design → build",
      timeline: "12 weeks",
    },
  },
  sections: {
    overview: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Family Recipes is a recipe app for saving, sharing, and cooking dishes passed down across generations—with photos, stories, and measurements that match how people actually cook.",
            "Unlike generic recipe aggregators, the experience centers the cook and the family context behind each dish.",
          ],
        },
      ],
    },
    context: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Interviewees stored recipes in Notes, WhatsApp, and handwritten cards. Search failed across formats; scaling servings and unit conversion caused friction at cook time.",
          ],
        },
        {
          type: "callout",
          title: "Problem",
          body: "Recipes are social objects, not database rows—people wanted lineage (who taught whom) as much as ingredients.",
        },
        {
          type: "callout",
          title: "Role",
          body: "End-to-end product design and Next.js implementation with a small beta group of five families.",
        },
      ],
    },
    iterations: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Early IA copied meal-kit apps (browse → cart). We pivoted to a library model: collections by family branch, with cook mode as a fullscreen, hands-friendly step view.",
          ],
        },
        {
          type: "gallery",
          columns: 2,
          items: [
            { src: "", alt: "Library view — collections by family" },
            { src: "", alt: "Cook mode — large type, step focus" },
          ],
        },
      ],
    },
    decisions: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Chose structured steps with optional voice notes per step instead of a single blob of text. Imperial/metric toggle lives in cook mode only to reduce authoring friction.",
          ],
        },
        {
          type: "callout",
          title: "Why this won",
          body: "Beta cooks completed recipes with fewer mid-session exits when steps were one per screen and timers were one tap away.",
        },
      ],
    },
    outcome: {
      blocks: [
        {
          type: "metrics",
          items: [
            { label: "Beta families", value: "5" },
            { label: "Recipes imported", value: "120+" },
            { label: "Cook mode completion", value: "↑ vs. v1" },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Shipped responsive web app with share links for relatives without accounts and print-friendly recipe cards.",
          ],
        },
      ],
    },
    reflection: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Investing in import flows (photo of handwritten card → draft) would be the next bet. Major format gave room to show both IA shifts and cook-mode rationale.",
          ],
        },
      ],
    },
  },
} satisfies MajorCaseStudy;

export default recipeCaseStudy;
