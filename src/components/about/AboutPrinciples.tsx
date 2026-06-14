import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { RichText } from "@/src/components/about/RichText";
import { ScrollReveal } from "@/src/components/ScrollReveal";
import type { AboutBlock, AboutPrinciple } from "@/src/lib/about/types";

interface AboutPrinciplesProps {
  block: AboutBlock;
  principles: AboutPrinciple[];
}

export function AboutPrinciples({ block, principles }: AboutPrinciplesProps) {
  return (
    <ScrollReveal as="section" className="about-block">
      <AboutBlockHead block={block} />

      <div className="about-principles">
        {principles.map((principle) => (
          <div className="about-principle" key={principle.num}>
            <span className="about-principle__num" aria-hidden="true">
              {principle.num}
            </span>
            <div>
              <h3 className="about-principle__term">
                <RichText value={principle.term} />
              </h3>
              <p className="about-principle__body">{principle.body}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
