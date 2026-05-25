import { ImageBlock } from "@/src/components/case-study/blocks/ImageBlock";

export function GalleryBlock({
  items,
  columns = 2,
}: {
  items: { src: string; alt: string }[];
  columns?: 2 | 3;
}) {
  const gridClass =
    columns === 3
      ? "grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      : "grid gap-4 sm:grid-cols-2";

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <ImageBlock
          key={`${item.alt}-${index}`}
          src={item.src}
          alt={item.alt}
          aspect="square"
        />
      ))}
    </div>
  );
}
