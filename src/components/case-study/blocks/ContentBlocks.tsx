import type { ContentBlock } from "@/src/lib/case-studies/types";
import { CalloutBlock } from "@/src/components/case-study/blocks/CalloutBlock";
import { GalleryBlock } from "@/src/components/case-study/blocks/GalleryBlock";
import { ImageBlock } from "@/src/components/case-study/blocks/ImageBlock";
import { MetricsBlock } from "@/src/components/case-study/blocks/MetricsBlock";
import { ProseBlock } from "@/src/components/case-study/blocks/ProseBlock";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="mt-6 flex flex-col gap-6">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;
        switch (block.type) {
          case "prose":
            return <ProseBlock key={key} paragraphs={block.paragraphs} />;
          case "image":
            return (
              <ImageBlock
                key={key}
                src={block.src}
                alt={block.alt}
                caption={block.caption}
                aspect={block.aspect}
              />
            );
          case "gallery":
            return (
              <GalleryBlock
                key={key}
                items={block.items}
                columns={block.columns}
              />
            );
          case "callout":
            return (
              <CalloutBlock key={key} title={block.title} body={block.body} />
            );
          case "metrics":
            return <MetricsBlock key={key} items={block.items} />;
          default: {
            const _exhaustive: never = block;
            return _exhaustive;
          }
        }
      })}
    </div>
  );
}
