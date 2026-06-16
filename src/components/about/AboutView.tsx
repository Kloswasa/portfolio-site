import { GalleryHero } from "@/src/components/gallery/GalleryHero";
import { AboutEnd } from "@/src/components/about/AboutEnd";
import { AboutInstruments } from "@/src/components/about/AboutInstruments";
import { AboutQuote } from "@/src/components/about/AboutQuote";
import { AboutStory } from "@/src/components/about/AboutStory";
import { AboutTimeline } from "@/src/components/about/AboutTimeline";
import type {
  AboutBlock,
  AboutCurrentlyColumn,
  AboutEndCopy,
  AboutHeroMeta,
  AboutInstrumentGroup,
  AboutPrinciple,
  AboutQuote as AboutQuoteData,
  AboutSpecimen,
  AboutStory as AboutStoryData,
  AboutTimelineEntry,
} from "@/src/lib/about/types";

interface AboutViewProps {
  heroMeta: AboutHeroMeta;
  storyBlock: AboutBlock;
  story: AboutStoryData;
  principlesBlock: AboutBlock;
  principles: AboutPrinciple[];
  timelineBlock: AboutBlock;
  timeline: AboutTimelineEntry[];
  instrumentsBlock: AboutBlock;
  instruments: AboutInstrumentGroup[];
  specimensBlock: AboutBlock;
  specimens: AboutSpecimen[];
  quote: AboutQuoteData;
  currentlyBlock: AboutBlock;
  currently: AboutCurrentlyColumn[];
  endCopy: AboutEndCopy;
}

export function AboutView({
  heroMeta,
  storyBlock,
  story,
  timelineBlock,
  timeline,
  instrumentsBlock,
  instruments,
  quote,
  endCopy,
}: AboutViewProps) {
  return (
    <div className="about-page">
      <GalleryHero meta={heroMeta} watermark={heroMeta.watermark} />

      <div className="about-body about-container">
        <AboutStory block={storyBlock} story={story} />
        <AboutInstruments block={instrumentsBlock} groups={instruments} />
        <AboutQuote quote={quote} />
        <AboutTimeline block={timelineBlock} entries={timeline} />
      </div>

      <AboutEnd copy={endCopy} />
    </div>
  );
}
