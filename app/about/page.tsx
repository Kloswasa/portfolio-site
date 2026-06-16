import "@/src/styles/about.css";
import { AboutView } from "@/src/components/about/AboutView";
import {
  ABOUT_CURRENTLY,
  ABOUT_CURRENTLY_BLOCK,
  ABOUT_END_COPY,
  ABOUT_HERO_META,
  ABOUT_INSTRUMENTS,
  ABOUT_INSTRUMENTS_BLOCK,
  ABOUT_PRINCIPLES,
  ABOUT_PRINCIPLES_BLOCK,
  ABOUT_QUOTE,
  ABOUT_SPECIMENS,
  ABOUT_SPECIMENS_BLOCK,
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
        principlesBlock={ABOUT_PRINCIPLES_BLOCK}
        principles={ABOUT_PRINCIPLES}
        timelineBlock={ABOUT_TIMELINE_BLOCK}
        timeline={ABOUT_TIMELINE}
        instrumentsBlock={ABOUT_INSTRUMENTS_BLOCK}
        instruments={ABOUT_INSTRUMENTS}
        specimensBlock={ABOUT_SPECIMENS_BLOCK}
        specimens={ABOUT_SPECIMENS}
        quote={ABOUT_QUOTE}
        currentlyBlock={ABOUT_CURRENTLY_BLOCK}
        currently={ABOUT_CURRENTLY}
        endCopy={ABOUT_END_COPY}
      />
    </main>
  );
}
