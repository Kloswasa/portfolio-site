---
kind: major
slug: quiz-game
hero:
  breadcrumb: Australia Call
  eyebrow: "001 · Product Design · Illustration"
  titleLine1: Australia
  titleLine2: Call
  summary: A personality quiz that helps newcomers to Australia find a travel style and a first trip that suits them.
  image:
    src: /projects/quiz-game/quiz-game-cover.png
    alt: Wildlife illustrations representing Australia Call personality types, painted in a soft palette
  meta:
    - label: Role
      value: Designer, illustrator, developer
    - label: Team
      value: Solo · weekly supervisor review
    - label: Duration
      value: 3 months · 2025 internship
    - label: Status
      value: Shipped and live
---

# brief

eyebrow: 01 · Brief
title: A career framework,
titleEm: applied to travel

## prose

A personality quiz result is easy to make and easy to forget. If the output was a one-word label, the product would be played once and closed, and a newcomer to Australia would be no closer to knowing where to go. The result had to earn its usefulness or the whole thing was a horoscope.

    The brief: design a quiz that helps newcomers to Australia, including those in Melbourne and Sydney, identify their travel style, using Holland's personality model as the framework.

Two things in that brief made it harder than a normal quiz.





## findings

- num: "01"
  label: Framework
  title: Holland's model
  body: Holland's model is a framework used mainly for careers, not for trips. Bridging it to travel was a translation challenge, not a styling problem. Even the type names had to be recast for the context. In this project, Holland's "Investigative" became "the Curious Explorer".
  image: /projects/quiz-game/quiz-game-hexagon.png
  imageAlt: Hexagon icon illustrating the Holland framework
- num: "02"
  label: Audience
  title: Strangers to Australia
  body: The audience hadn't been to Australia, so being told you are "the Curious Explorer" is useless on its own. The differentiator had to live on the output side, to turn the result page into something that helps a stranger know where to go and what to expect.
  image: /projects/quiz-game/quiz-game-question-mark.png
  imageAlt: Question mark icon illustrating unfamiliarity with Australia


# research

eyebrow: 02 · Research
title: What the research
titleEm: changed
## prose
Five people, who potential to be a future Australia traveller, are interviewed and pattern of a expectation from result are found from them.

## findings

- num: "01"
  label: Destination
  title: Hidden over famous
  body: Travellers wanted somewhere unique and quiet, not the postcard landmark everyone can already name.
- num: "02"
  label: Tip
  title: Practical, not generic
  body: Advice had to read as something you'd use on the trip, not filler.
- num: "03"
  label: Trivia
  title: Explains, doesn't exaggerate
  body: Facts that grounded the place rather than hyping it, credibility over spectacle.

## prose  
Moving to the Australia aesthetic recognisation, Wildlife and a natural scene were named as Australia's signature in every interview, but a wildlife recognisation stopped at two animals.

## pullquote

text: I do not know, maybe a big spider.
source: Prospective Australia traveller, asked to name wildlife beyond koalas and kangaroos

## callout

label: What I took out of it
title: A one-word type wasn't going to do the work
body: The differentiator was no longer in the quiz. It was in the curation.

# concept

eyebrow: 03 · Concept
title: Wildlife as identity,
titleEm: scene as backdrop

## prose

This quiz's result had to represent the person, not label them.

## prose
**Decision one: split the two symbols of Australia by job.**
  The interviews named two things as Australian identity: wildlife and natural scenes. Scenery became the ambient backdrop of the quiz, while a native animal including Platypus, Brolga, Kangaroo, Wombat, Southern Right Whale, or Dingo, carried each personality type's identity on the result page, where the personal weight had to live.

## image
src: /projects/quiz-game/quiz-game-natural-scene.gif
alt: The quiz background illustration developemnt
caption: The quiz background illustration developemnt from sketch to final version.
## prose
**Decision two: every pairing had to hold under two lenses.**
  Each animal was matched to its type through natural behaviour and meaning in Aboriginal belief, and kept only if it held under both.
    
## imagePair

- src: /projects/quiz-game/quiz-game-identical-platypus.png
  alt: Illustration of a platypus, representing the Curious Explorer personality type
  caption: Platypus as the Curious Explorer. Both lenses agree, a solitary forager by behaviour, a symbol of individuality and being at peace alone in traditional belief.
- src: /projects/quiz-game/quiz-game-identical-brolga.png
  alt: Illustration of a brolga mid-dance, representing the Inspiration Seeker personality type
  caption: Brolga as the Inspiration Seeker. Its ceremonial dance appears in both Dreamtime stories and its actual courtship behaviour, beauty, creativity, resilience.
    
## prose

**Decision three: AI surfaced candidates, sources decided.**
  Research was AI-assisted, but every symbolism claim was cross-checked against Indigenous-affiliated, institutional, and academic sources before inclusion.

## callout

label: Scope
title: What this research was not
body: Direct community consultation, paid cultural advisor review, and Country-specific mapping were outside a three-month internship's scope. A fuller version would build those in, ideally with a cultural advisor co-authoring the matching from the outset, not verifying it after the fact.




# craft

eyebrow: 04 · Craft
title: Beyond
titleEm: the animal

## prose

**Every piece on the result page was curated for the type, not filled.** 
  Take the Curious Explorer (Platypus): three pieces of content sit alongside the animal, each shaped to the type rather than dropped in.

## video

src: /projects/quiz-game/quiz-game-resultpage-video.mp4
poster: /projects/quiz-game/quiz-game-video-resultpage-cover.png
alt: A 12 second zoom across the Curious Explorer result page, showing the platypus illustration, recommended destination, tip, and trivia
caption: Everything arrives on one screen, so the result reads as a single recommendation rather than a label with a list appended.

## twoCol

- label: Destination
  body: Not the postcard Opera House but the Architectural Tour, off-limits vantage points, the investigative depth this type actually travels for.
- label: Tip
  body: Written to how the type moves, not generic advice, "Zoom out regularly, don't get stuck in details that slow you down."
- label: Trivia
  body: Grounds the trip in place, not spectacle, "Aboriginal culture is the oldest continuous culture on Earth, at least 65,000 years."

# build

eyebrow: 05 · Build
title: Two render strategies
titleEm: for two moments



## prose

The project design under the tech stack, including Next.JS, Typescript, Prisma, TailswindCSS. The quiz and the result page do different jobs, so they got different render strategies, which resonace with an assorted techstack.

## image
src: /projects/quiz-game/quiz-game-techstack.png
alt: Description
caption: Tech stack for this quiz game project, including Next.JS, Typescript, Prisma

## imagePair

- src: /projects/quiz-game/quiz-game-quiz-diagram.png
  alt: Flow diagram showing parallel API fetch and asset preload on the client, converging into a flicker-free quiz
  caption: The quiz is a client component
- src: /projects/quiz-game/quiz-game-resultpage-diagram.png
  alt: Flow diagram showing Prisma querying per-type content on the server and delivering a fully populated result page
  caption: The result page is a React Server Component

## twoCol
- label: The quiz
  body: It fetches the questions via API, and in parallel runs a preload pass to warm the browser cache with every background, answer GIF, and result image the user might encounter. A loading screen covers the wait. The point wasn't to hide loading, it was that nothing flickered or popped in once the quiz began.
- label: The result page
  body: Prisma queries run on the server and the page arrives at the browser already populated. No spinner at the moment that matters most. Per-type content, including animal, destinations, tips, and trivia, lives in the database, not in code, so the company's team can update copy and add types without a redeploy after the project is handed over.

# outcome

eyebrow: 06 · Outcome
title: Shipped and
titleEm: learned

## video

src: /projects/quiz-game/quiz-game-teaser.mp4
poster: /projects/quiz-game/quiz-game-teaser-cover.png
alt: A 12 second project teaser.
caption: The project teaser of the quiz game, showing some part of quiz journey and result page

## outcomes
- value: "~10+"
  label: Users shipped
  body: Mostly positive, with some constructive feedback.
  
## prose
    The overall quiz performance is good both in visual and media, but on the results the wildlife-and-destination pairing was the strongest signal. However, tips and trivia got less attention, likely because they were text-only.

## button

label: View live site
href: https://australia-call.vision-verse.com.au/
variant: accent

## pullquote

text: That was where I wanna go!
source: User who initially doubted her personality match, on reading her recommended destinations


## reflections

title: Reflection

- The differentiator lived in curation, not quiz mechanics. Personality labels alone weren't enough; destinations, tips, and trivia had to answer what travellers actually asked for in research.
- Wildlife carried identity; scenes carried atmosphere. Splitting those jobs kept the quiz immersive without making the result feel abstract.
- Cultural symbolism required traceable sources and honest scope limits. AI helped surface candidates, but shipping claims needed Indigenous-affiliated, institutional, or academic backing.
- Two render strategies matched two moments. Preloading for the quiz; server-rendered results for the payoff page.
- A fuller version needs more than one internship. Scaling the matching responsibly wants a cultural advisor co-authoring from the outset, and the premade quiz questions some users found inconsistent need a revision pass.

