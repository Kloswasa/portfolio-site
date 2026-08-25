import { AboutView } from "@/src/components/about/AboutView";
import {
  ABOUT_END_COPY,
  ABOUT_HERO_META,
  ABOUT_INSTRUMENTS,
  ABOUT_INSTRUMENTS_BLOCK,
  ABOUT_QUOTE,
  ABOUT_STORY,
  ABOUT_STORY_BLOCK,
  ABOUT_EDUCATION,
  ABOUT_EDUCATION_BLOCK,
  ABOUT_TIMELINE,
  ABOUT_TIMELINE_BLOCK,
} from "@/src/lib/about";

export const metadata = {
  title: "About",
  description:
    "Klaus W. — product designer in Melbourne who designs and builds, from research and design through to production code.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutView
        heroMeta={ABOUT_HERO_META}
        storyBlock={ABOUT_STORY_BLOCK}
        story={ABOUT_STORY}
        timelineBlock={ABOUT_TIMELINE_BLOCK}
        timeline={ABOUT_TIMELINE}
        educationBlock={ABOUT_EDUCATION_BLOCK}
        education={ABOUT_EDUCATION}
        instrumentsBlock={ABOUT_INSTRUMENTS_BLOCK}
        instruments={ABOUT_INSTRUMENTS}
        quote={ABOUT_QUOTE}
        endCopy={ABOUT_END_COPY}
      />
    </main>
  );
}
