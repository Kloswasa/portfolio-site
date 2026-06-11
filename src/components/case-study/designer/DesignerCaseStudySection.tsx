import { DesignerContentBlocks } from "@/src/components/case-study/designer/DesignerContentBlocks";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import type { DesignerSectionContent } from "@/src/lib/case-studies/types";

export function DesignerCaseStudySection({
  id,
  section,
}: {
  id: string;
  section: DesignerSectionContent;
}) {
  return (
    <section className="cs-designer__section" id={id}>
      <SnapSectionReveal amount={0.1}>
        <SnapItem>
          <div className="cs-designer__section-eyebrow">{section.eyebrow}</div>
        </SnapItem>
        <SnapItem>
          <h2 className="cs-designer__section-title">
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

      <DesignerContentBlocks blocks={section.blocks} />
    </section>
  );
}
