const aspectClass = {
  hero: "aspect-[16/10] min-h-[240px]",
  wide: "aspect-[2/1] min-h-[200px]",
  square: "aspect-square min-h-[200px]",
} as const;

export function ImageBlock({
  src,
  alt,
  caption,
  aspect = "wide",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "hero" | "wide" | "square";
}) {
  const hasSrc = src.length > 0;

  return (
    <figure className="w-full">
      {hasSrc ? (
        // eslint-disable-next-line @next/next/no-img-element -- case study assets use public/ paths; native img for scroll layouts
        <img
          src={src}
          alt={alt}
          className={`w-full rounded-none border border-border-subtle object-cover ${aspectClass[aspect]}`}
        />
      ) : (
        <div
          className={`w-full rounded-none border border-border-subtle bg-elevated ${aspectClass[aspect]}`}
          role="img"
          aria-label={alt}
        />
      )}
      {(caption || (!hasSrc && alt)) && (
        <figcaption className="mt-2 font-mono text-xs text-text-muted">
          {caption ?? alt}
        </figcaption>
      )}
    </figure>
  );
}
