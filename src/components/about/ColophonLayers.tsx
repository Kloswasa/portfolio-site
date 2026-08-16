import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { AboutBlock, ColophonLayer } from "@/src/lib/colophon/types";

interface ColophonLayersProps {
  block: AboutBlock;
  layers: ColophonLayer[];
}

export function ColophonLayers({ block, layers }: ColophonLayersProps) {
  return (
    <ScrollReveal as="section" className="colophon-block">
      <AboutBlockHead block={block} />

      <ol className="colophon-layers">
        {layers.map((layer) => (
          <li
            className={`colophon-layer colophon-layer--${layer.num}`}
            key={layer.num}
          >
            <span className="colophon-layer__num">{layer.num}</span>
            <div className="colophon-layer__copy">
              <h3 className="colophon-layer__title">{layer.title}</h3>
              <p className="colophon-layer__path">{layer.path}</p>
              <p className="colophon-layer__body">{layer.body}</p>
            </div>
            <span className="colophon-layer__count">{layer.count}</span>
          </li>
        ))}
      </ol>
    </ScrollReveal>
  );
}
