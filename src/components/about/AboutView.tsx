import { WorkHero } from "@/src/components/work/WorkHero";
import { PageEndSection } from "@/src/components/ui/PageEndSection";
import { AboutInstruments } from "@/src/components/about/AboutInstruments";
import { AboutQuote } from "@/src/components/about/AboutQuote";
import { AboutStory } from "@/src/components/about/AboutStory";
import { AboutTimeline } from "@/src/components/about/AboutTimeline";
import type {
  AboutBlock,
  AboutEndCopy,
  AboutHeroMeta,
  AboutInstrumentGroup,
  AboutQuote as AboutQuoteData,
  AboutStory as AboutStoryData,
  AboutTimelineEntry,
} from "@/src/lib/about/types";

interface AboutViewProps {
  heroMeta: AboutHeroMeta;
  storyBlock: AboutBlock;
  story: AboutStoryData;
  timelineBlock: AboutBlock;
  timeline: AboutTimelineEntry[];
  educationBlock: AboutBlock;
  education: AboutTimelineEntry[];
  instrumentsBlock: AboutBlock;
  instruments: AboutInstrumentGroup[];
  quote: AboutQuoteData;
  endCopy: AboutEndCopy;
}

export function AboutView({
  heroMeta,
  storyBlock,
  story,
  timelineBlock,
  timeline,
  educationBlock,
  education,
  instrumentsBlock,
  instruments,
  quote,
  endCopy,
}: AboutViewProps) {
  return (
    <div className="about-page">
      <WorkHero meta={heroMeta} watermark={heroMeta.watermark} />

      <div className="about-body about-container">
        <AboutStory block={storyBlock} story={story} />
        <AboutInstruments block={instrumentsBlock} groups={instruments} />
        <AboutQuote quote={quote} />
        <AboutTimeline block={timelineBlock} entries={timeline} />
        <AboutTimeline block={educationBlock} entries={education} />
      </div>

      <PageEndSection copy={endCopy} />
    </div>
  );
}
