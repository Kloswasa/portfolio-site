import { SectionBlockHead } from "@/src/components/ui/SectionBlockHead";
import type { AboutBlock } from "@/src/lib/about/types";

interface AboutBlockHeadProps {
  block: AboutBlock;
}

export function AboutBlockHead({ block }: AboutBlockHeadProps) {
  return (
    <SectionBlockHead
      kicker={block.kicker}
      title={block.title}
      infoStrong={block.infoStrong}
      infoDetail={block.infoDetail}
    />
  );
}
