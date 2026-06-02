import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import { ContentBlocks } from "@/src/components/case-study/blocks/ContentBlocks";
import { CASE_STUDY_INNER } from "@/src/components/case-study/constants";
import type { CaseStudySectionContent } from "@/src/lib/case-studies/types";

export function CaseStudySection({
  id,
  eyebrow,
  defaultTitle,
  section,
  amount = 0.3,
  dense = false,
}: {
  id: string;
  eyebrow: string;
  defaultTitle: string;
  section: CaseStudySectionContent;
  amount?: number;
  /** Minor studies: tighter vertical rhythm for visual sections */
  dense?: boolean;
}) {
  const title = section.title ?? defaultTitle;

  return (
    <section id={id}>
      <SnapSectionReveal
        className={dense ? `${CASE_STUDY_INNER} pt-12` : CASE_STUDY_INNER}
        amount={amount}
      >
        <SnapItem>
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            {eyebrow}
          </span>
          <h2 className="mt-4 text-heading-2xl">{title}</h2>
        </SnapItem>
        <SnapItem>
          <ContentBlocks blocks={section.blocks} />
        </SnapItem>
      </SnapSectionReveal>
    </section>
  );
}
