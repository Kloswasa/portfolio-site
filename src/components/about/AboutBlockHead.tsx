import { SectionBlockHead } from "@/src/components/ui/SectionBlockHead";
import type { AboutBlock } from "@/src/lib/about/types";

interface AboutBlockHeadProps {
  block: AboutBlock;
}

export function AboutBlockHead({ block }: AboutBlockHeadProps) {
  return (
    <SectionBlockHead
      title={block.title}
      infoStrong={block.infoStrong}
      infoDetail={block.infoDetail}
    />
  );
}
