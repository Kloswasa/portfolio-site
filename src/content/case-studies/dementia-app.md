---
kind: major
slug: dementia-app
hero:
  breadcrumb: Dementia Caregiver
  eyebrow: "UX Research · Healthtech · 2024 / 2026"
  titleLine1: Dementia
  titleLine2: Caregiver
  summary: A usability evaluation of a caregiver monitoring app, and the re-analysis I ran a year later that reframed the findings as a trust and safety problem.
  image:
    src: /projects/dementia-app/Dementia-head-cover.png
    alt: The prototype's home screen alongside a study of the eight tasks the evaluation tested
  meta:
    - label: Role
      value: 2024 · designed and ran the team evaluation. 2026 · solo re-analysis into a redesign brief.
    - label: Team
      value: Team of four in 2024. Solo for the 2026 re-analysis.
    - label: Duration
      value: 6-week evaluation in 2024. Re-analysis in 2026.
    - label: Status
      value: Evaluation complete. Re-analysis complete. 2026 redesign in progress.
---

# brief

eyebrow: 01 · Brief
title: An evaluation,
titleEm: and a second look, a year later

## prose

Many caregivers don't live with the person they care for. The person with dementia is home; the caregiver is at work, or across town. Background research described the pattern: leaving work mid-shift when something felt wrong, and a low background dread on the quiet days. The not-knowing was its own cost.

In 2024 my team evaluated a caregiver monitoring prototype. In 2026 I re-analysed the same data alone, and it reframed everything. This case study documents both passes.

## stats

- value: "8"
  label: Tasks evaluated
  variant: dark

- value: "4"
  label: Participants
  variant: dark

- value: "81.5"
  label: SUS score
  variant: dark

# research

eyebrow: 02 · Research
title: A five-second promise,
titleEm: and my job in evaluating it

## prose

The prototype was a mobile app built on a single promise, call it the five-second rule: within seconds of opening it, the caregiver should know where the person with dementia is. Every feature either delivered that or supported it.

## twoCol

- label: GPS tracking
  body: Live location from a personal device carried by the PwD.
- label: Geofencing
  body: The caregiver draws safe and dangerous zones on a map.
- label: Alerts
  body: Fire the moment the PwD crosses into a dangerous zone.
- label: Emergency contacts
  body: One tap to the people who can actually respond.
- label: Home camera
  body: A live feed for a direct look when the status isn't enough.

## image

src: /projects/dementia-app/Dementia-screen-home.png
alt: The prototype's home screen, David's status card at the top, four core feature tiles below
caption: The status card sits above the fold, so the caregiver's first glance answers "is everything okay" before anything else loads.

## prose

The project was a team of four; research, concepts, and prototyping were shared. In the final week I unified our high-fidelity screens under one iOS-based system. The evaluation itself was mine, I designed the eight tasks, wrote the questionnaires, ran every session and interview, and authored the report.

## image

src: /projects/dementia-caregiver/team-figma-cover.png
alt: The team's unified high-fidelity Figma prototype, cover frame
caption: One iOS-based system, unified in the final week, so the evaluation tested a coherent product rather than four people's separate screens.

# concept

eyebrow: 03 · Concept
title: An evaluation with targets,
titleEm: not just observations

## prose

The evaluation tested all eight features against targets set in advance. For a safety-critical app, success can't be defined after the fact: if a caregiver can't check location in under fifteen seconds, or set a geofence without help, calling those tasks "usable" in hindsight means nothing. The targets forced a definition of success before a single participant arrived.

## process

- num: "01"
  title: Task performance
  body: Eight tasks, each with a pre-set target for completion, time, and difficulty.
- num: "02"
  title: SUS
  body: A System Usability Scale score for the prototype overall.
- num: "03"
  title: Interviews
  body: Semi-structured and post-task, to explain what the numbers couldn't.

## prose

Four participants worked the Figma prototype remotely, screen-shared. Eight tasks ran against the targets. Three are worth watching.

## image

src: /projects/dementia-app/Dementia-evaluation.png
alt: A remote evaluation session, split screen with prototype on one side and task instructions on the other
caption: Remote, split-screen sessions, prototype one side, task script the other, so participants worked naturally while their misses were captured live.

# craft

eyebrow: 04 · Craft
title: Three tasks worth watching

## prose

The SUS was 81.5; six of eight tasks passed target; three of four participants said they'd recommend the app. On its own terms, the prototype did well. But three tasks are worth watching, one that passed cleanly, one that failed on the numbers, and one that passed the numbers while the stopwatch disagreed. The distance between those last two is the rest of this case study.

## image

src: /projects/dementia-app/target-vs-actual.svg
alt: A comparison of tasks 1, 4 and 8 showing what the metric said against what the participant actually did
caption: Against target, Task 1 clears and Task 4 fails outright, but Task 8 clears the metric while hiding a 1.27-minute search beneath it.

## video

src: /projects/dementia-caregiver/task-4-danger-zone.mp4
poster: /projects/dementia-caregiver/task-4-danger-zone-poster.png
alt: A participant setting up the danger zone task, missing the Safe/Dangerous toggle at the top of the map
caption: The Safe / Dangerous toggle read as a header, not a choice, so half the participants built the wrong kind of zone before noticing.

## image

src: /projects/dementia-caregiver/task-8-notification-centre.png
alt: The notification centre with two tabs at the top, Notification on the left, Alert on the right
caption: The alert tab was obvious once found; the failure was expecting it here at all, so P4 searched the menu bar first.

## prose

The other five tasks echoed these at smaller scale, two shared Task 4's discoverability problem, three passed as cleanly as Task 1.

# build

eyebrow: 05 · Build
title: Eight problems,
titleEm: three underlying causes

## prose

The evaluation was finished; the data wasn't. Task 8 kept coming back to me. The metrics answer one question, can the user do the thing, and Task 8 passed it: three of four completed it unassisted, P4 rated it easy.

## prose

But there's a second question the metrics never ask: does the user's confidence match reality. P4 said easy and spent 1.27 minutes finding the alert. In a low-stakes app that gap is minor friction. In an app whose whole promise is finding the person in seconds, it's the failure the numbers can't see.

## pullquote

text: One participant said the task was easy. She spent 1.27 minutes finding the alert.
source: Observation, 2024 evaluation

## prose

Once I had that lens, Task 8 stopped looking like a one-off. The same gap ran through the evaluation, and grouped by the kind of gap, eight scattered task problems collapsed into three root causes.

## image

src: /projects/dementia-app/tasks-collapse.svg
alt: Eight evaluation tasks grouped into three root causes, with Task 8 spanning two of them
caption: Grouped by the gap between metric and behaviour, eight task problems collapse into three root causes, Task 8, which started it, spans two.

## findings

- num: "01"
  label: Status trust
  title: Silent failure of critical status
  body: >-
    Tasks 1, 6, and 8 all passed on the metrics, and all three let the caregiver form confidence about location, battery, or an alert without confirming it matched reality. The failure mode isn't a wrong answer, it's not knowing when to doubt a right-looking one.

- num: "02"
  label: Geofencing
  title: Dual-mode cognitive load in geofencing
  body: >-
    Tasks 2 and 4 asked participants to learn two things at once: the safe / dangerous distinction (a toggle that read as a header) and the drag gesture to set radius (with no numeric confirmation). Two new mental models in one flow was the shared failure.

- num: "03"
  label: Urgency
  title: Urgency-mismatched flows
  body: >-
    Tasks 5 and 8 were the most time-critical flows in the app, yet carried the visual weight of ordinary settings. For a stressed caregiver, that friction becomes the reason the app gets bypassed for a direct 000 call.

# outcome

eyebrow: 06 · Outcome
title: A report, a brief,
titleEm: and a redesign in progress

## prose

The 2024 phase produced a graded, mixed-methods report. The 2026 phase produced what the report couldn't: a compact analytical brief, three root causes, each tied to specific tasks, each with a design implication clear enough to build from. Those three causes are the brief for the redesign I'm on now.

## outcomes

- value: "81.5"
  label: SUS score
  body: The 2024 mixed-methods report was submitted, graded, and closed.
- value: "8 → 3"
  label: Root causes
  body: Eight tasks were reframed into the three root causes that form the 2026 redesign brief.

## reflections

title: Reflection

- The 2024 evaluation was rigorous in method but small in sample: four participants, all female, none with real dementia caregiving experience. The findings held internally, but before any of them generalise they need users who actually live the problem. Rigour of method is not rigour of sample.

- Coming back to my own data a year later, with different questions, changed what I could see. That wasn't luck; it was distance. In future evaluations I want to build the "come back later with fresh questions" step in on purpose, not by accident.

- The distinction I ended up drawing, between whether the user can do the thing and whether their confidence matches reality, isn't specific to this app. Any interface with real-world stakes benefits from asking both. That's the lens I take forward.
