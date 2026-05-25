import type { MajorCaseStudy } from "@/src/lib/case-studies/types";

const quizGameCaseStudy = {
  kind: "major",
  slug: "quiz-game",
  hook: {
    quickFacts: {
      role: "Product design + frontend",
      scope: "Discovery → build → ship",
      timeline: "8 weeks",
    },
  },
  sections: {
    overview: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Australia Calls is a quiz game that helps new Australians learn about the country and its culture through short, playful rounds.",
            "The goal was a mobile-first experience that feels welcoming—not exam-like—while still teaching real facts people can use in conversation.",
          ],
        },
      ],
    },
    context: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "New arrivals often want cultural touchpoints beyond paperwork: slang, landmarks, history, and everyday references that show up in media and small talk.",
          ],
        },
        {
          type: "callout",
          title: "Problem",
          body: "Existing study apps skew toward citizenship test prep. Learners wanted something lighter they could open for five minutes on the train.",
        },
        {
          type: "callout",
          title: "Role",
          body: "End-to-end product design and React implementation with a small volunteer content team.",
        },
      ],
    },
    iterations: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Early flows treated every round like a formal test—high stakes, long copy, and a score screen that felt punitive. We reframed rounds as “calls” (quick challenges) with immediate feedback and optional depth.",
          ],
        },
        {
          type: "gallery",
          columns: 2,
          items: [
            { src: "", alt: "Early wireframe — test-style layout" },
            { src: "", alt: "Revised round flow — lighter tone" },
          ],
        },
      ],
    },
    decisions: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "We chose a single-question-per-screen pattern on mobile to reduce cognitive load, paired with a progress strip instead of a countdown timer.",
          ],
        },
        {
          type: "callout",
          title: "Why this won",
          body: "Playtesting showed lower abandon rate when users could see progress without time pressure. Accessibility review favored larger tap targets and one focal question.",
        },
      ],
    },
    outcome: {
      blocks: [
        {
          type: "metrics",
          items: [
            { label: "Session length", value: "~6 min avg." },
            { label: "Return rate", value: "42% week-2" },
            { label: "Accessibility", value: "WCAG AA target" },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Shipped a responsive web app with offline-friendly question packs and shareable result cards for community groups.",
          ],
        },
      ],
    },
    reflection: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Leading with tone (warm copy, celebratory micro-states) mattered as much as information architecture. Next time I would prototype content authoring earlier so writers could test voice in situ.",
          ],
        },
      ],
    },
  },
} satisfies MajorCaseStudy;

export default quizGameCaseStudy;
