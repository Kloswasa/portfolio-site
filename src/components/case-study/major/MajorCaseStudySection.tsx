import { MajorContentBlocks } from "@/src/components/case-study/major/MajorContentBlocks";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import type { MajorSectionContent } from "@/src/lib/case-studies/types";

export function MajorCaseStudySection({
  id,
  section,
}: {
  id: string;
  section: MajorSectionContent;
}) {
  return (
    <section className="cs-major__section" id={id}>
      <SnapSectionReveal amount={0.1}>
        <SnapItem>
          <div className="eyebrow mb-3">{section.eyebrow}</div>
        </SnapItem>
        <SnapItem>
          <h2 className="cs-major__section-title">
            {section.title}
            {section.titleEm && (
              <>
                <br />
                <em>{section.titleEm}</em>
              </>
            )}
          </h2>
        </SnapItem>
      </SnapSectionReveal>

      <MajorContentBlocks blocks={section.blocks} />
    </section>
  );
}
