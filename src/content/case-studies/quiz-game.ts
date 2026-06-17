import type { MajorCaseStudy } from "@/src/lib/case-studies/types";

const quizGameCaseStudy = {
  kind: "major",
  slug: "quiz-game",
  hero: {
    breadcrumb: "Australia Call",
    eyebrow: "001 · Product Design · Illustration",
    titleLine1: "Australia",
    titleLine2: "Call",
    summary:
      "A personality quiz that helps newcomers to Australia find a travel style and a first trip that suits them.",
    image: {
      src: "/projects/quiz-game/quiz-game-cover.png",
      alt: "Wildlife illustrations representing Australia Call personality types, painted in a soft palette",
    },
    meta: [
      { label: "Role", value: "Designer, illustrator, developer" },
      { label: "Team", value: "Solo · weekly supervisor review" },
      { label: "Duration", value: "3 months · 2025 internship" },
      { label: "Status", value: "Shipped and live" },
    ],
  },
  sections: {
    brief: {
      eyebrow: "01 — Brief",
      title: "The brief",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Design a quiz that helps newcomers to Australia (Melbourne and Sydney) find their travel style, using Holland's personality model as the framework.",
            "Two things in that brief made it harder than a normal quiz. First, Holland's model is a vocational interest framework. It was built to match people to careers, not to trips. Bridging it to travel was a translation problem, not a styling problem. Even the type names had to be recast for the context (Holland's \"Investigative\" became \"the Curious Explorer\"). Second, the audience hadn't been to Australia, so being told you are \"the Curious Explorer\" is useless on its own. The differentiator had to live on the output side: turn the result page into something that helps a stranger know where to go and what to expect.",
          ],
        },
        
      ],
    },
    research: {
      eyebrow: "02 — Research",
      title: "What the research",
      titleEm: "changed",
      blocks: [
        {
          type: "pullquote",
          text: "I do not know, maybe a big spider.",
          source:
            "Prospective Australia traveller, asked to name wildlife beyond koalas and kangaroos",
        },
        {
          type: "prose",
          paragraphs: [
            "The pause before that answer lasted several seconds. Wildlife was named as Australia's signature in every interview (five people, all planning a trip to Australia from overseas), but recognition stopped at two animals. The same interviews surfaced three further demands: hidden destinations over famous ones (\"a destination that is unique and quiet\"), tips that read as practical rather than generic, and trivia that explained without exaggerating.",
            "What I took out of it: a one-word personality type wasn't going to do the work. The result page needed four pieces of content per type (animal, destination, tips, trivia), all researched from the angles people had actually asked for. The differentiator was no longer in the quiz. It was in the curation.",
          ],
        },
      ],
    },
    concept: {
      eyebrow: "03 — Concept",
      title: "Wildlife as identity,",
      titleEm: "scene as backdrop",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "In a personality quiz, the result is the moment the user came for. It can't be abstract; it has to feel like a representation of the person, not a word labelling them. The interviews named two things as Australian identity, wildlife and natural scenes, so I split them by job: scenes became the ambient backdrop of the quiz, and the animal became the identity carrier on the result page, where the personal weight had to live.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Each personality type was matched to a native Australian animal using two lenses: the animal's natural behaviour, and the meaning the animal carries in Aboriginal belief. The pairings had to hold under both. Six animals were used, one per type: Platypus, Brolga, Kangaroo, Wombat, Southern Right Whale, Dingo.",
            "The research process was AI-assisted (ChatGPT and Gemini surfaced candidate stories and symbolism), then cross-referenced against Indigenous-affiliated online sources (Mooditj Boodja, Kullilla Art, Kinyalerrk), institutional cultural sources (WWF Australia, ABC Science), and peer-reviewed academic work (University of Melbourne, ScienceDirect). Where the AI surfaced a claim about traditional symbolism, I kept it only when I could trace it to one of those sources.",
            "What was outside scope: direct community consultation, paid cultural advisor review, and identification of the specific traditional Country each animal is connected to. A mature version of this work would require those. With a budget, the version I'd want to ship would involve a cultural advisor or collaborator co-authoring the matching, not just verifying it after the fact.",
          ],
        },
        {
          type: "imagePair",
          items: [
            {
              src: "/projects/quiz-game/platypus.png",
              alt: "Illustration of a platypus, representing the Curious Explorer personality type",
              caption:
                "Platypus → the Curious Explorer. Symbol of individuality and being at peace alone.",
            },
            {
              src: "/projects/quiz-game/quiz-game-identical-brolga.png",
              alt: "Illustration of a brolga mid-dance, representing the Inspiration Seeker personality type",
              caption:
                "Brolga → the Inspiration Seeker. Linked to ceremonial dance, beauty, creativity, resilience.",
            },
          ],
        },
      ],
    },
    craft: {
      eyebrow: "04 — Craft",
      title: "Beyond",
      titleEm: "the animal",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Three other pieces of content sat on each result page: a destination, a tip, and a trivia line. Each was curated for the type, not generic. For the Curious Explorer (Platypus), the destination was the Sydney Opera House Architectural Tour, which trades the postcard view for insider access: off-limits areas, vantage points the public doesn't reach, and the kind of architectural depth an investigative type would actually want. The tip was a behavioural nudge for the way this type travels (\"Zoom out regularly, don't get stuck in details that slow you down\"), not generic travel advice. The trivia grounded the trip in something bigger (\"Aboriginal culture is the oldest continuous culture on Earth, at least 65,000 years\").",
          ],
        },
      ],
    },
    build: {
      eyebrow: "05 — Build",
      title: "Two render strategies",
      titleEm: "for two moments",
      blocks: [
        {
          type: "video",
          src: "/projects/quiz-game/result-page.mp4",
          poster: "/projects/quiz-game/result-page-poster.png",
          alt: "A 10-15 second zoom across the Curious Explorer result page, showing the platypus illustration, recommended destination, tip, and trivia",
          caption:
            "A 10-15 second zoom across one result page, showing the animal, destination, tip, and trivia as a unified output.",
        },
        {
          type: "prose",
          paragraphs: [
            "The quiz and the result page do different jobs, so they got different render strategies.",
            "The quiz is a client component: it fetches the questions via API, and in parallel runs a preload pass to warm the browser cache with every background, answer GIF, and result image the user might encounter. A loading screen covers the wait. The point wasn't to hide loading, it was that nothing flickered or popped in once the quiz began.",
            "The result page is a React Server Component, so Prisma queries run on the server and the page arrives at the browser already populated. No spinner on the moment that matters most. Per-type content (animal, destinations, tips, trivia) lives in the database, not in code, so the company's team can update copy and add types without a redeploy after I leave.",
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "06 — Outcome",
      title: "Shipped and",
      titleEm: "learned",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Shipped to ~10+ users. The wildlife-and-destination pairing was the strongest signal (one user who doubted her personality match changed her mind reading the destinations: \"that was where I wanna go\"); tips and trivia got less attention, likely because they were text-only. With more time and resourcing, I'd bring in a cultural advisor to scale the matching responsibly, and revise the premade quiz questions (not mine to write the first time) that some users found inconsistent.",
          ],
        },
        {
          type: "reflections",
          items: [
            "The differentiator lived in curation, not quiz mechanics. Personality labels alone weren't enough; destinations, tips, and trivia had to answer what travellers actually asked for in research.",
            "Wildlife carried identity; scenes carried atmosphere. Splitting those jobs kept the quiz immersive without making the result feel abstract.",
            "Cultural symbolism required traceable sources and honest scope limits. AI helped surface candidates, but shipping claims needed Indigenous-affiliated, institutional, or academic backing.",
            "Two render strategies matched two moments. Preloading for the quiz; server-rendered results for the payoff page.",
          ],
        },
      ],
    },
  },
} satisfies MajorCaseStudy;

export default quizGameCaseStudy;
