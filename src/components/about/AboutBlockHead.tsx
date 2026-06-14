import type { AboutBlock } from "@/src/lib/about/types";

interface AboutBlockHeadProps {
  block: AboutBlock;
}

export function AboutBlockHead({ block }: AboutBlockHeadProps) {
  return (
    <div className="about-block__head">
      <div>
        <p className="about-block__kicker">{block.kicker}</p>
        <h2 className="about-block__title">{block.title}</h2>
      </div>
      <p className="about-block__info">
        <strong>{block.infoStrong}</strong>
        <span className="about-block__info-detail">{block.infoDetail}</span>
      </p>
    </div>
  );
}
