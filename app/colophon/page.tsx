import { ColophonView } from "@/src/components/about/ColophonView";
import {
  COLOPHON_BRIEF,
  COLOPHON_BRIEF_BLOCK,
  COLOPHON_END_COPY,
  COLOPHON_HERO_META,
  COLOPHON_LAYERS,
  COLOPHON_LAYERS_BLOCK,
  COLOPHON_PIPELINES,
  COLOPHON_PIPELINES_BLOCK,
  COLOPHON_QUOTE,
  COLOPHON_STACK,
  COLOPHON_STACK_BLOCK,
} from "@/src/lib/colophon";

export const metadata = {
  title: "this site",
  description:
    "How this portfolio was made: moodboard, a generated first system, then craft in Cursor \u2014 with Figma as a layout check.",
};

export default function ColophonPage() {
  return (
    <main>
      <ColophonView
        heroMeta={COLOPHON_HERO_META}
        briefBlock={COLOPHON_BRIEF_BLOCK}
        brief={COLOPHON_BRIEF}
        stackBlock={COLOPHON_STACK_BLOCK}
        stack={COLOPHON_STACK}
        quote={COLOPHON_QUOTE}
        pipelinesBlock={COLOPHON_PIPELINES_BLOCK}
        pipelines={COLOPHON_PIPELINES}
        layersBlock={COLOPHON_LAYERS_BLOCK}
        layers={COLOPHON_LAYERS}
        endCopy={COLOPHON_END_COPY}
      />
    </main>
  );
}
