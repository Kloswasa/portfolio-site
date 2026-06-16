import type { MajorCaseStudy } from "@/src/lib/case-studies/types";

const dementiaAppCaseStudy = {
  kind: "major",
  slug: "dementia-app",
  hero: {
    breadcrumb: "Dementia App",
    eyebrow: "002 · Product design · Health",
    titleLine1: "Dementia",
    titleLine2: "App",
    summary:
      "A companion app to help people with dementia stay connected with family through simple, repeatable rituals — not another complex medical dashboard.",
    meta: [
      { label: "Client", value: "Concept project" },
      { label: "Role", value: "UX + UI design, research" },
      { label: "Timeline", value: "10 weeks" },
      { label: "Deliverable", value: "High-fidelity prototype" },
    ],
  },
  sections: {
    brief: {
      eyebrow: "01 — Brief",
      title: "Families need moments,",
      titleEm: "not more charts.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The product goal was dignity-first: fewer features, clearer daily paths, and interfaces that work when memory and motor skills vary.",
            "Caregivers described guilt and fatigue from apps that assume high literacy and long setup. People living with dementia needed fewer decisions per session, not more data entry.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "2", label: "Caregiver interviews", variant: "dark" },
            { value: "3", label: "Core daily actions", variant: "mid" },
            { value: "56px", label: "Minimum tap target", variant: "mid" },
            { value: "10", label: "Week sprint", variant: "light" },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Before sketching screens, I mapped how caregivers and families actually stayed in touch — and where existing health apps created friction instead of connection.",
          ],
        },
        {
          type: "pullquote",
          text: "I don't need another dashboard. I need to know she opened the photo I sent — and that she knows I'm thinking of her.",
          source: "Caregiver interview · Week 1",
        },
        {
          type: "findings",
          items: [
            {
              num: "A",
              label: "Friction 01",
              title: "Portal complexity",
              body: "Tab-heavy health apps assumed caregivers could configure settings, manage logs, and interpret charts — overwhelming during stressful weeks.",
            },
            {
              num: "B",
              label: "Friction 02",
              title: "Cognitive load",
              body: "People living with dementia needed one clear path per session. Multiple navigation choices increased abandonment in paper tests.",
            },
            {
              num: "C",
              label: "Friction 03",
              title: "Clinical framing",
              body: "Medical charting optimised for clinicians, not families. Daily rituals — a photo, a voice note, a one-tap check-in — were buried or absent.",
            },
          ],
        },
        {
          type: "callout",
          label: "Role",
          title: "Lead UX through validation",
          body: "Lead UX with two caregiver interviews, IA, UI, and a high-fidelity prototype for stakeholder review.",
        },
      ],
    },
    research: {
      eyebrow: "02 — Research",
      title: "Listening to",
      titleEm: "caregivers first",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Discovery focused on caregiver workflows: how families shared updates, what counted as a good day, and where guilt showed up in existing tools.",
          ],
        },
        {
          type: "artifact",
          variant: "audit-map",
          label: "Artifact · Experience audit map",
          caption:
            "Journey map across onboarding, daily check-in, memory lane, and family notifications. Amber = friction requiring a design response.",
          captionMeta: "Figma · Discovery phase",
        },
        {
          type: "twoCol",
          items: [
            {
              label: "Caregiver interviews · n=2",
              body: "Both participants wanted under-two-minute onboarding and a single home screen their relative could use without coaching.",
            },
            {
              label: "Paper prototype tests",
              body: "Daily check-in completion improved when the home screen offered three large actions instead of a dashboard of widgets.",
            },
          ],
        },
        {
          type: "ornament",
        },
      ],
    },
    concept: {
      eyebrow: "03 — Concept",
      title: "From dashboard",
      titleEm: "to daily ritual",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "V1 mirrored health portals — tabs, settings, logs. V2 collapsed to a single home with three large actions and a memory lane carousel fed by family uploads.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Audit & interviews",
              body: "Mapped caregiver pain points and existing clinical tool patterns. Identified dignity-first constraints before visual exploration.",
            },
            {
              num: "02",
              title: "IA collapse",
              body: "Reduced navigation to one home with three actions: check in, view memory lane, listen to a voice note.",
            },
            {
              num: "03",
              title: "Prototype & test",
              body: "High-fidelity clickable flows validated with caregivers. Onboarding trimmed to essential steps only.",
            },
            {
              num: "04",
              title: "Handoff spec",
              body: "Annotated prototype and phase-two backlog for optional logging — deferred from MVP to protect simplicity.",
            },
          ],
        },
        {
          type: "callout",
          label: "Design principle",
          title: "Dignity before data",
          body: "If a feature increased cognitive load without strengthening connection, it left the MVP — even when stakeholders asked for charts.",
        },
      ],
    },
    craft: {
      eyebrow: "04 — Craft",
      title: "Accessible by",
      titleEm: "default",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "We standardised tap targets at 56px minimum with high-contrast focus states. Type sizes and spacing prioritised legibility over information density.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Colour contrast was checked for core flows. Reduced-motion paths were specified for carousel and check-in animations.",
          ],
        },
        {
          type: "annotation",
          text: "Medical charting was dropped from MVP entirely — a deliberate scope cut that kept the product feeling like a companion, not a clinic.",
        },
      ],
    },
    build: {
      eyebrow: "05 — Build",
      title: "Three actions.",
      titleEm: "One home.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The UI distilled into a small set of patterns: action tiles on home, memory lane carousel, voice note player, and a lightweight family notification strip.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Each component was specified with default, focus, and active states sized for variable motor skills — no hover-dependent interactions on core paths.",
          ],
        },
        {
          type: "callout",
          label: "Why this won",
          title: "Two-minute onboarding",
          body: "Caregivers could onboard a relative in under two minutes; daily check-in completion improved in paper prototype tests.",
        },
      ],
    },
    outcome: {
      eyebrow: "06 — Outcome",
      title: "What shipped",
      titleEm: "in ten weeks",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "<2m",
              label: "Onboarding time",
              body: "Caregivers completed setup in under two minutes in moderated tests — a key success metric from discovery.",
            },
            {
              value: "3",
              label: "Core screens",
              body: "Home, memory lane detail, and check-in confirmation cover the primary daily loop without nested navigation.",
            },
            {
              value: "2",
              label: "Caregiver validations",
              body: "Interview and prototype feedback cycles informed IA collapse and component sizing before handoff.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Delivered a clickable prototype and annotated spec for engineering handoff, with a phase-two backlog for optional logging.",
          ],
        },
        {
          type: "reflections",
          items: [
            "Co-design earlier would have surfaced voice-first preferences sooner — both caregivers mentioned audio before we prototyped voice notes.",
            "I'd run more sessions with people living with dementia directly, not only through caregiver proxies.",
            "The designer format helped separate research narrative from UI evidence — I'd keep that structure for stakeholder reviews.",
          ],
        },
        {
          type: "callout",
          label: "The one thing",
          title: "Moments beat metrics",
          body: "Families optimise for connection — a photo, a voice note, a one-tap I'm okay. Designing for those moments first kept the product humane.",
        },
      ],
    },
  },
} satisfies MajorCaseStudy;

export default dementiaAppCaseStudy;
