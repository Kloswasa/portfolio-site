import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { AboutBlock, ColophonPipeline } from "@/src/lib/colophon/types";

interface ColophonPipelinesProps {
  block: AboutBlock;
  pipelines: ColophonPipeline[];
}

export function ColophonPipelines({ block, pipelines }: ColophonPipelinesProps) {
  return (
    <ScrollReveal as="section" className="colophon-block">
      <AboutBlockHead block={block} />

      <ol className="colophon-pipelines">
        {pipelines.map((pipeline) => (
          <li className="colophon-pipeline" key={pipeline.num}>
            <span className="colophon-pipeline__num">{pipeline.num}</span>
            <h3 className="colophon-pipeline__title">{pipeline.title}</h3>
            <p className="colophon-pipeline__command">{pipeline.command}</p>
            <p className="colophon-pipeline__source">{pipeline.source}</p>
            <p className="colophon-pipeline__body">{pipeline.body}</p>
          </li>
        ))}
      </ol>
    </ScrollReveal>
  );
}
