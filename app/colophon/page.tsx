import { ColophonView } from "@/src/components/about/ColophonView";
import {
  COLOPHON_BRIEF,
  COLOPHON_BRIEF_BLOCK,
  COLOPHON_END_COPY,
  COLOPHON_HERO_META,
  COLOPHON_IDEAS,
  COLOPHON_IDEAS_BLOCK,
  COLOPHON_LAYERS,
  COLOPHON_PIPELINES,
  COLOPHON_QUOTE,
  COLOPHON_STACK,
  COLOPHON_STACK_BLOCK,
  COLOPHON_SYSTEM_BLOCK,
} from "@/src/lib/colophon";

export const metadata = {
  title: "this site",
  description:
    "How this portfolio was made: editorial, collectible, and cyanotype botanical ideas, built in Cursor with Figma as a layout check.",
};

export default function ColophonPage() {
  return (
    <main>
      <ColophonView
        heroMeta={COLOPHON_HERO_META}
        briefBlock={COLOPHON_BRIEF_BLOCK}
        brief={COLOPHON_BRIEF}
        ideasBlock={COLOPHON_IDEAS_BLOCK}
        ideas={COLOPHON_IDEAS}
        stackBlock={COLOPHON_STACK_BLOCK}
        stack={COLOPHON_STACK}
        quote={COLOPHON_QUOTE}
        systemBlock={COLOPHON_SYSTEM_BLOCK}
        pipelines={COLOPHON_PIPELINES}
        layers={COLOPHON_LAYERS}
        endCopy={COLOPHON_END_COPY}
      />
    </main>
  );
}
