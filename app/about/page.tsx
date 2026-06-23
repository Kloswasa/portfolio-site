import "@/src/styles/about.css";
import { AboutView } from "@/src/components/about/AboutView";
import {
  ABOUT_END_COPY,
  ABOUT_HERO_META,
  ABOUT_INSTRUMENTS,
  ABOUT_INSTRUMENTS_BLOCK,
  ABOUT_QUOTE,
  ABOUT_STORY,
  ABOUT_STORY_BLOCK,
  ABOUT_TIMELINE,
  ABOUT_TIMELINE_BLOCK,
} from "@/src/lib/about";

export const metadata = {
  title: "About",
  description:
    "Klaus W — a product designer and creative technologist in Melbourne. The practice, the path, and the influences behind the archive.",
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
        instrumentsBlock={ABOUT_INSTRUMENTS_BLOCK}
        instruments={ABOUT_INSTRUMENTS}
        quote={ABOUT_QUOTE}
        endCopy={ABOUT_END_COPY}
      />
    </main>
  );
}
