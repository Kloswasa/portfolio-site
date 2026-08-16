import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ColophonSpecimen } from "@/src/components/about/ColophonSpecimen";
import { RichText } from "@/src/components/about/RichText";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { AboutBlock, ColophonBrief as ColophonBriefData } from "@/src/lib/colophon/types";

interface ColophonBriefProps {
  block: AboutBlock;
  brief: ColophonBriefData;
}

export function ColophonBrief({ block, brief }: ColophonBriefProps) {
  return (
    <ScrollReveal as="section" className="colophon-block" revealOnScroll={false}>
      <AboutBlockHead block={block} />

      <p className="colophon-brief__lead">
        <RichText value={brief.lead} />
      </p>

      <div className="colophon-brief__copy">
        {brief.paragraphs.map((paragraph) => (
          <p className="colophon-brief__p" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <ColophonSpecimen
        label={brief.specimenLabel}
        stampValue={brief.stampValue}
        stampLabel={brief.stampLabel}
      />
    </ScrollReveal>
  );
}
