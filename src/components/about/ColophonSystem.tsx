import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type {
  AboutBlock,
  ColophonLayer,
  ColophonPipeline,
} from "@/src/lib/colophon/types";

interface ColophonSystemProps {
  block: AboutBlock;
  pipelines: ColophonPipeline[];
  layers: ColophonLayer[];
}

export function ColophonSystem({
  block,
  pipelines,
  layers,
}: ColophonSystemProps) {
  return (
    <ScrollReveal as="section" className="colophon-block">
      <AboutBlockHead block={block} />

      <div className="colophon-system">
        <div className="colophon-system__panel">
          <p className="colophon-system__label">How content ships</p>
          <p className="colophon-system__hint" aria-hidden="true">
            Author → compile → check
          </p>
          <ol className="colophon-system__flow">
            {pipelines.map((pipeline, index) => (
              <li className="colophon-system__lane" key={pipeline.title}>
                {index > 0 ? (
                  <span className="colophon-system__join" aria-hidden="true">
                    →
                  </span>
                ) : null}
                <div className="colophon-system__card">
                  <h3 className="colophon-system__title">{pipeline.title}</h3>
                  <p className="colophon-system__io">
                    <span>{pipeline.input}</span>
                    <span aria-hidden="true">→</span>
                    <span>{pipeline.output}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="colophon-system__panel">
          <p className="colophon-system__label">How UI is built</p>
          <p className="colophon-system__hint" aria-hidden="true">
            Specific pages import down into shared primitives
          </p>
          <ol className="colophon-system__stack">
            {layers.map((layer, index) => (
              <li
                className={`colophon-system__band colophon-system__band--${index + 1}`}
                key={layer.title}
              >
                <div className="colophon-system__band-copy">
                  <h3 className="colophon-system__title">{layer.title}</h3>
                  <p className="colophon-system__role">{layer.role}</p>
                </div>
                <span className="colophon-system__count">
                  <strong>{layer.count}</strong>
                  <span>components</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </ScrollReveal>
  );
}
