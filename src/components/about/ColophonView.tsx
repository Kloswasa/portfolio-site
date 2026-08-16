import { ColophonBrief } from "@/src/components/about/ColophonBrief";
import { ColophonLayers } from "@/src/components/about/ColophonLayers";
import { ColophonPipelines } from "@/src/components/about/ColophonPipelines";
import { ColophonPullquote } from "@/src/components/about/ColophonPullquote";
import { ColophonStack } from "@/src/components/about/ColophonStack";
import { PageEndSection } from "@/src/components/ui/PageEndSection";
import { WorkHero } from "@/src/components/work/WorkHero";
import type {
  AboutBlock,
  AboutEndCopy,
  AboutHeroMeta,
  ColophonBrief as ColophonBriefData,
  ColophonLayer,
  ColophonPipeline,
  ColophonPullquote as ColophonPullquoteData,
  ColophonStackGroup,
} from "@/src/lib/colophon/types";

interface ColophonViewProps {
  heroMeta: AboutHeroMeta;
  briefBlock: AboutBlock;
  brief: ColophonBriefData;
  stackBlock: AboutBlock;
  stack: ColophonStackGroup[];
  quote: ColophonPullquoteData;
  pipelinesBlock: AboutBlock;
  pipelines: ColophonPipeline[];
  layersBlock: AboutBlock;
  layers: ColophonLayer[];
  endCopy: AboutEndCopy;
}

export function ColophonView({
  heroMeta,
  briefBlock,
  brief,
  stackBlock,
  stack,
  quote,
  pipelinesBlock,
  pipelines,
  layersBlock,
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
        <ColophonStack block={stackBlock} groups={stack} />
        <ColophonPipelines block={pipelinesBlock} pipelines={pipelines} />
        <ColophonPullquote quote={quote} />
        <ColophonLayers block={layersBlock} layers={layers} />
      </div>

      <PageEndSection copy={endCopy} />
    </div>
  );
}
