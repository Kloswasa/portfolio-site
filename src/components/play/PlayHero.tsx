import { GalleryHero } from "@/src/components/gallery/GalleryHero";
import type { PlayHeroMeta } from "@/src/lib/play/types";

interface PlayHeroProps {
  meta: PlayHeroMeta;
}

export function PlayHero({ meta }: PlayHeroProps) {
  return <GalleryHero meta={meta} watermark=" 'Play' " />;
}
