import { ColophonBrief } from "@/src/components/about/ColophonBrief";
import { ColophonIdeas } from "@/src/components/about/ColophonIdeas";
import { ColophonPullquote } from "@/src/components/about/ColophonPullquote";
import { ColophonStack } from "@/src/components/about/ColophonStack";
import { ColophonSystem } from "@/src/components/about/ColophonSystem";
import { PageEndSection } from "@/src/components/ui/PageEndSection";
import { WorkHero } from "@/src/components/work/WorkHero";
import type {
  AboutBlock,
  AboutEndCopy,
  AboutHeroMeta,
  ColophonBrief as ColophonBriefData,
  ColophonIdea,
  ColophonLayer,
  ColophonPipeline,
  ColophonPullquote as ColophonPullquoteData,
  ColophonStackGroup,
} from "@/src/lib/colophon/types";

interface ColophonViewProps {
  heroMeta: AboutHeroMeta;
  briefBlock: AboutBlock;
  brief: ColophonBriefData;
  ideasBlock: AboutBlock;
  ideas: ColophonIdea[];
  stackBlock: AboutBlock;
  stack: ColophonStackGroup[];
  quote: ColophonPullquoteData;
  systemBlock: AboutBlock;
  pipelines: ColophonPipeline[];
  layers: ColophonLayer[];
  endCopy: AboutEndCopy;
}

export function ColophonView({
  heroMeta,
  briefBlock,
  brief,
  ideasBlock,
  ideas,
  stackBlock,
  stack,
  quote,
  systemBlock,
  pipelines,
  layers,
  endCopy,
}: ColophonViewProps) {
  return (
    <div className="about-page colophon-page">
      <WorkHero
        meta={heroMeta}
        watermark={heroMeta.watermark}
        illustration="chrysanthemum"
      />

      <div className="about-body about-container">
        <ColophonBrief block={briefBlock} brief={brief} />
        <ColophonIdeas block={ideasBlock} ideas={ideas} />
        <ColophonPullquote quote={quote} />
        <ColophonStack block={stackBlock} groups={stack} />
        <ColophonSystem
          block={systemBlock}
          pipelines={pipelines}
          layers={layers}
        />
      </div>

      <PageEndSection copy={endCopy} />
    </div>
  );
}
