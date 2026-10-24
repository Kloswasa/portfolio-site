---
kind: major
slug: quiz-game
hero:
  breadcrumb: Australia Calls
  eyebrow: "001 · Product Design · Illustration"
  titleLine1: Australia
  titleLine2: Calls
  summary: A personality quiz that helps newcomers to Australia find a travel style and a first trip that suits them.
  layout: split
  image:
    src: /projects/quiz-game/quiz-game-head-cover.png
    alt: Phone mockup of the Australia Calls quiz on a beach collage, with polaroids, a wildlife sign, and a boomerang
  meta:
    - label: Role
      value: Designer, illustrator, developer
    - label: Team
      value: Solo · weekly supervisor review
    - label: Duration
      value: 6 months · 2025-2026
    - label: Status
      value: Shipped and live
---

# brief

eyebrow: 01 · Brief
title: A career framework,
titleEm: applied to travel

## prose

    **The brief**: design a quiz that helps newcomers to Australia, including in Melbourne and Sydney, find their travel style using Holland's personality model. Two things in that brief made it harder than a normal quiz.



## findings

- num: "01"
  label: Framework
  title: Holland's model
  body: Holland’s model is built for careers, not travel. Adapting it was a translation problem, even for the names, so “Investigative” became “the Curious Explorer”.

  image: /projects/quiz-game/quiz-game-hexagon.png
  imageAlt: Hexagon icon illustrating the Holland framework
- num: "02"
  label: Audience
  title: Strangers to Australia
  body: Newcomers hadn’t been to Australia, so a type name alone meant nothing. The result page had to show them where to go and what to expect.
  image: /projects/quiz-game/quiz-game-question-mark.png
  imageAlt: Question mark icon illustrating unfamiliarity with Australia


# research

eyebrow: 02 · Research
title: What the research
titleEm: changed
## prose
  Interviews with five prospective travellers to Australia revealed clear patterns in what they wanted from a result.

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
  Every interviewee named wildlife and natural scenery as Australia's signature, but few could name an animal beyond two.

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

## pullquote

text: This quiz's result had to represent the person, not label them.
source: Differentiate approach

## prose
**Decision one: split the two symbols of Australia by job.**
  The interviews named two things as Australian identity: wildlife and natural scenes. 
  Scenery became the quiz's backdrop. A native animal (Platypus, Brolga, Kangaroo, Wombat, Southern Right Whale, or Dingo) carried each type's identity on the result page, where the personal weight lives.

## image
src: /projects/quiz-game/quiz-game-natural-scene.gif
alt: The quiz background illustration development
caption: The quiz background illustration development from sketch to final version.
## prose
**Decision two: every pairing had to hold under two lenses.**
  Each animal was matched by natural behaviour and by meaning in Aboriginal belief, and kept only if both agreed.
    
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
body: Direct community consultation, paid cultural advisor review, and Country-specific mapping were beyond an internship's scope. A fuller version would have a cultural advisor co-author the matching from the start, not verify it afterwards.




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
alt: A 12-second zoom across the Curious Explorer result page, showing the platypus illustration, recommended destination, tip, and trivia
caption: The result page sample, everything arrives on one screen, so the result reads as a single recommendation rather than a label with a list appended.

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

  The project was built on a tech stack of Next.js, TypeScript, Prisma, and Tailwind CSS. The quiz and the result page do different jobs, so they got different render strategies that fit that stack.

## image
src: /projects/quiz-game/quiz-game-techstack.png
alt: Diagram of the tech stack for the quiz game project
caption: Tech stack for this quiz game project, including Next.js, TypeScript, and Prisma

## imagePair

- src: /projects/quiz-game/quiz-game-quiz-diagram.png
  alt: Flow diagram showing parallel API fetch and asset preload on the client, converging into a flicker-free quiz
  caption: The quiz is a client component
- src: /projects/quiz-game/quiz-game-resultpage-diagram.png
  alt: Flow diagram showing Prisma querying per-type content on the server and delivering a fully populated result page
  caption: The result page is a React Server Component

## twoCol
- label: The quiz
  body: Questions are fetched via API concurrently with a comprehensive media preload pass. This cache-warming strategy, masked by an initial loading screen, eliminates visual flickering and ensures a seamless user experience once the quiz begins.
- label: The result page
  body: Server-side Prisma queries ensure pages arrive fully populated, eliminating client-side loading latency. Additionally, a database-driven content architecture lets the client update copy and introduce new categories without redeploying code.

# outcome

eyebrow: 06 · Outcome
title: Shipped and
titleEm: learned

## video

src: /projects/quiz-game/quiz-game-teaser.mp4
poster: /projects/quiz-game/quiz-game-teaser-cover.png
alt: A 12-second project teaser
caption: Project teaser showing parts of the quiz journey and result page

## outcomes
- value: "~10+"
  label: Users shipped
  body: Mostly positive, with some constructive feedback.
  
## prose
    The overall quiz performed well visually and in media. On the results, the wildlife-and-destination pairing was the strongest signal. Tips and trivia got less attention, likely because they were text-only.

## button

label: View live site
href: https://australia-call.vision-verse.com.au/
variant: accent

## pullquote

text: That was where I wanna go!
source: User who initially doubted her personality match, on reading her recommended destinations


## reflections

title: Reflection

- The differentiator lived in curation, not quiz mechanics. Personality labels alone weren't enough. Destinations, tips, and trivia had to answer what travellers actually asked for in research.
- Wildlife carried identity. Scenes carried atmosphere. Splitting those jobs kept the quiz immersive without making the result feel abstract.
- Cultural symbolism required traceable sources and honest scope limits. AI helped surface candidates, but shipping claims needed Indigenous-affiliated, institutional, or academic backing.
- Two render strategies matched two moments. Preloading for the quiz. Server-rendered results for the payoff page.
- A fuller version needs more than one internship. Scaling the matching responsibly wants a cultural advisor co-authoring from the outset, and the premade quiz questions some users found inconsistent need a revision pass.

