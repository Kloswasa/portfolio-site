import type { DesignerCaseStudy } from "@/src/lib/case-studies/types";

const quizGameCaseStudy = {
  kind: "designer",
  slug: "quiz-game",
  hero: {
    breadcrumb: "Australia Calls",
    eyebrow: "001 · Product design · Education",
    titleLine1: "Australia",
    titleLine2: "Calls",
    summary:
      "A quiz game that helps new Australians learn about the country and its culture — designed to feel welcoming on a five-minute train ride, not like a citizenship exam.",
    meta: [
      { label: "Client", value: "Personal project" },
      { label: "Role", value: "Product design + frontend" },
      { label: "Timeline", value: "8 weeks · 2025" },
      { label: "Platform", value: "Responsive web" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "New arrivals. New country.",
      titleEm: "Same small-talk gap.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Australia Calls started from conversations with friends who had recently moved to Melbourne. They could navigate visa paperwork and rental listings — but felt behind on the cultural layer: slang in the break room, references in the news, landmarks people assumed everyone knew.",
            "Existing resources skewed toward citizenship test prep — accurate, but heavy. Learners wanted something they could open for five minutes on the tram and still walk away with a usable fact or phrase.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "12", label: "Learner interviews", variant: "dark" },
            { value: "3", label: "Competitor audits", variant: "mid" },
            { value: "5", label: "Content themes", variant: "mid" },
            { value: "8", label: "Week build", variant: "light" },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "I scoped the project as end-to-end product design plus React implementation, working with a small volunteer content team to draft question packs across history, geography, slang, and everyday culture.",
          ],
        },
      ],
    },
    problem: {
      eyebrow: "02 — The problem",
      title: "What exactly",
      titleEm: "felt broken?",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Before sketching screens, I mapped how people actually studied — and where they dropped off. The pattern was consistent: formal quiz UIs created performance anxiety, while flashcard apps felt too thin to stick.",
          ],
        },
        {
          type: "pullquote",
          text: "I don't need another test. I need something that makes me feel like I belong in the conversation.",
          source: "Learner interview · Week 1",
        },
        {
          type: "prose",
          paragraphs: [
            "Four friction points emerged. High-stakes framing made wrong answers feel punitive. Timers punished careful reading — especially for ESL learners. Score screens emphasised failure over learning. And nothing was built for sharing wins back to community groups on WhatsApp.",
          ],
        },
        {
          type: "findings",
          items: [
            {
              num: "A",
              label: "Friction 01",
              title: "Exam-style framing",
              body: "Users associated progress bars with pass/fail gates. Abandon rate spiked on the first wrong answer in test-style prototypes.",
            },
            {
              num: "B",
              label: "Friction 02",
              title: "Timer pressure",
              body: "Countdown clocks helped arcade modes but hurt comprehension. ESL participants requested 40% more time on average.",
            },
            {
              num: "C",
              label: "Friction 03",
              title: "Punitive feedback",
              body: "Red error states and harsh copy reduced retry rate. Users wanted encouragement with optional depth on misses.",
            },
            {
              num: "D",
              label: "Friction 04",
              title: "No social loop",
              body: "Community organisers wanted shareable result cards — a lightweight way to celebrate progress in group chats.",
            },
          ],
        },
        {
          type: "annotation",
          text: "The citizenship-prep apps weren't wrong for their audience — but they optimised for accuracy under pressure. Australia Calls needed to optimise for confidence and return visits.",
        },
      ],
    },
    research: {
      eyebrow: "03 — Research",
      title: "Understanding learners",
      titleEm: "in the wild",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "I ran a two-week research sprint: contextual interviews with new arrivals, a competitive audit of study apps, and three rounds of moderated playtests on paper prototypes and coded builds.",
          ],
        },
        {
          type: "artifact",
          variant: "audit-map",
          label: "Artifact · Experience audit map",
          caption:
            "Journey map across onboarding, rounds, feedback, results, and sharing. Amber = friction requiring a design response.",
          captionMeta: "Figma · Jan 2025",
        },
        {
          type: "prose",
          paragraphs: [
            "Playtests surfaced a language shift that stuck: reframing quiz rounds as \"calls\" — short challenges you pick up and put down — lowered perceived stakes without reducing learning intent.",
          ],
        },
        {
          type: "twoCol",
          items: [
            {
              label: "Learner research · n=12",
              body: "9 of 12 participants said they would use a cultural quiz weekly if sessions stayed under seven minutes and wrong answers included a one-line explanation.",
            },
            {
              label: "Playtesting · n=8",
              body: "Progress-strip UI without a timer improved completion rate by 28% versus countdown variants. Celebratory micro-copy on correct answers increased replay taps.",
            },
          ],
        },
        {
          type: "ornament",
        },
        {
          type: "prose",
          paragraphs: [
            "Content volunteers flagged that question tone mattered as much as difficulty — phrasing like \"Which city…\" felt school-like; \"You hear someone say 'arvo' — what do they mean?\" felt conversational.",
          ],
        },
      ],
    },
    process: {
      eyebrow: "04 — Process",
      title: "From calls to",
      titleEm: "components",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "I resisted jumping straight to visual polish. The sequence was: define round structure, validate tone in copy, then build a token-backed UI that could scale as question packs grew.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Round architecture",
              body: "Single-question screens, optional hint layer, immediate feedback, and a soft landing on results — no hard stop on wrong answers.",
            },
            {
              num: "02",
              title: "Voice & content",
              body: "Conversational prompts, plain-language explanations, and celebratory micro-states tested with writers before visual design locked.",
            },
            {
              num: "03",
              title: "Token-backed UI",
              body: "Colour, type, and spacing tokens mirrored in Tailwind so design and code stayed aligned as components multiplied.",
            },
            {
              num: "04",
              title: "Ship & iterate",
              body: "Responsive web build with offline-friendly packs, share cards, and analytics hooks for return-rate tracking.",
            },
          ],
        },
        {
          type: "callout",
          label: "Design principle",
          title: "Feel like a conversation, not an exam",
          body: "Every screen was evaluated against this line. If a state felt like being graded, we reworked copy, colour, or motion until it felt like encouragement with optional depth.",
        },
        {
          type: "artifact",
          variant: "token-hierarchy",
          label: "Artifact · Token hierarchy",
          caption:
            "Primitive → semantic → component tokens for cards, buttons, and round shells. Changes at the primitive level cascade automatically.",
          captionMeta: "Tokens Studio · Feb 2025",
        },
      ],
    },
    foundations: {
      eyebrow: "05 — Foundations",
      title: "Warmth without",
      titleEm: "losing clarity",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The visual system borrowed from the portfolio's indigo-and-gold language — trustworthy navy surfaces, ivory backgrounds, and saffron accents reserved for celebration and progress, not body text.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Typography paired Fraunces for display moments (round titles, results) with DM Sans for UI chrome and question body copy. Syne handled labels and metadata at small sizes.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Motion stayed subtle: progress strip fills, card entrances on correct answers, and reduced-motion fallbacks everywhere. No countdown tick animations — they read as stress cues in testing.",
          ],
        },
      ],
    },
    components: {
      eyebrow: "06 — Components",
      title: "Eight patterns.",
      titleEm: "One voice.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The UI distilled into a small set of composable patterns — each specified with default, hover, focus, disabled, and celebration states before content packs expanded.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Round card (question shell), answer chip row, progress strip, hint drawer, feedback banner, results summary, share card, and pack selector cover the full session loop from open to share.",
          ],
        },
        {
          type: "annotation",
          text: "The hint drawer was the most debated component — opening hints too easily reduced challenge, hiding them entirely frustrated ESL learners. We settled on one optional hint per round with transparent copy about trade-offs.",
        },
      ],
    },
    outcomes: {
      eyebrow: "07 — Outcomes",
      title: "What actually",
      titleEm: "changed",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Six weeks post-launch, I reviewed session analytics and ran a short follow-up survey with early community groups. Numbers are modest — this is a personal project — but directionally encouraging.",
          ],
        },
        {
          type: "outcomes",
          items: [
            {
              value: "~6m",
              label: "Avg. session length",
              body: "Sessions clustered around five to seven minutes — matching the original \"tram ride\" design target.",
            },
            {
              value: "42%",
              label: "Week-2 return rate",
              body: "Nearly half of first-week users opened a second pack within fourteen days. Share cards drove a noticeable bump from community organisers.",
            },
            {
              value: "AA",
              label: "Accessibility target",
              body: "Large tap targets, focus-visible states, and reduced-motion paths. Colour contrast checked against WCAG AA for core flows.",
            },
          ],
        },
        {
          type: "pullquote",
          text: "For the first time I felt like I was learning Australia for living here — not for a test I'll forget after.",
          source: "Beta participant · Post-launch survey",
        },
        {
          type: "prose",
          paragraphs: [
            "Shipped a responsive web app with offline-friendly question packs and shareable result cards. The biggest qualitative win: users describing the app as \"friendly\" unprompted — the tone goal landing in their words, not mine.",
          ],
        },
      ],
    },
    reflections: {
      eyebrow: "08 — Reflections",
      title: "What I'd do",
      titleEm: "differently",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Eight weeks was enough to ship, but tight for content depth. A longer runway would have let us test more regional packs beyond Victoria-first questions.",
          ],
        },
        {
          type: "reflections",
          items: [
            "I'd prototype the content authoring flow earlier so writers could test voice in situ — too much copy was rewritten after visual states were already built.",
            "I'd involve community organisers in week one, not week four. Their sharing workflows shaped the result card more than any UI polish pass.",
            "I'd ship a public beta sooner. Waiting for \"complete\" packs delayed feedback that would have trimmed scope faster.",
            "I'd document hint-drawer behaviour in the content guidelines — engineers and writers both made different assumptions about when hints unlock.",
          ],
        },
        {
          type: "callout",
          label: "The one thing",
          title: "Tone is infrastructure",
          body: "Warm copy and celebratory micro-states weren't decoration — they were the mechanism that made learners return. Treating tone with the same rigour as layout or performance is the lesson I'd carry to the next project.",
        },
      ],
    },
  },
} satisfies DesignerCaseStudy;

export default quizGameCaseStudy;
