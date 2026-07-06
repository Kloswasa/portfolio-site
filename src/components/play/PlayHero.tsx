import { WorkHero } from "@/src/components/work/WorkHero";
import type { PlayHeroMeta } from "@/src/lib/play/types";

interface PlayHeroProps {
  meta: PlayHeroMeta;
}

export function PlayHero({ meta }: PlayHeroProps) {
  return (
    <WorkHero meta={meta} watermark=" 'Play' " illustration="chrysanthemum" />
  );
}
