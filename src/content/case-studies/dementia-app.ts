import type { MajorCaseStudy } from "@/src/lib/case-studies/types";

const dementiaAppCaseStudy = {
  kind: "major",
  slug: "dementia-app",
  hook: {
    quickFacts: {
      role: "UX + UI design, research",
      scope: "Discovery → prototype → validation",
      timeline: "10 weeks",
    },
  },
  sections: {
    overview: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A companion app to help people with dementia stay connected with family through simple, repeatable rituals—not another complex medical dashboard.",
            "The product goal was dignity-first: fewer features, clearer daily paths, and interfaces that work when memory and motor skills vary.",
          ],
        },
      ],
    },
    context: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Caregivers described guilt and fatigue from apps that assume high literacy and long setup. People living with dementia needed fewer decisions per session, not more data entry.",
          ],
        },
        {
          type: "callout",
          title: "Problem",
          body: "Clinical tools optimize for charts; families optimize for moments—a photo, a voice note, a one-tap “I’m okay.”",
        },
        {
          type: "callout",
          title: "Role",
          body: "Lead UX with two caregiver interviews, IA, UI, and a high-fidelity prototype for stakeholder review.",
        },
      ],
    },
    iterations: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "V1 mirrored health portals (tabs, settings, logs). V2 collapsed to a single home with three large actions and a “memory lane” carousel fed by family uploads.",
          ],
        },
        {
          type: "gallery",
          columns: 3,
          items: [
            { src: "", alt: "V1 — dashboard-style home" },
            { src: "", alt: "V2 — three-action home" },
            { src: "", alt: "Memory lane detail" },
          ],
        },
      ],
    },
    decisions: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "We dropped medical charting from MVP and standardized tap targets at 56px minimum with high-contrast focus states.",
          ],
        },
        {
          type: "callout",
          title: "Why this won",
          body: "Caregivers could onboard a relative in under two minutes; daily check-in completion improved in paper prototype tests.",
        },
      ],
    },
    outcome: {
      blocks: [
        {
          type: "metrics",
          items: [
            { label: "Onboarding", value: "< 2 min" },
            { label: "Core flow", value: "3 screens" },
            { label: "Validation", value: "2 caregiver interviews" },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Delivered a clickable prototype and annotated spec for engineering handoff, with a phase-two backlog for optional logging.",
          ],
        },
      ],
    },
    reflection: {
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Co-design earlier would have surfaced voice-first preferences sooner. The major case study format helped separate research narrative from UI evidence.",
          ],
        },
      ],
    },
  },
} satisfies MajorCaseStudy;

export default dementiaAppCaseStudy;
