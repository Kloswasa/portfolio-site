const SWATCHES = [
  { label: "bg", css: "var(--color-bg)" },
  { label: "surface", css: "var(--color-surface)" },
  { label: "text", css: "var(--color-text)" },
  { label: "muted", css: "var(--color-text-muted)" },
  { label: "accent", css: "var(--color-accent)" },
  { label: "border", css: "var(--color-border-subtle)" },
] as const;

interface ColophonSpecimenProps {
  label: string;
  stampValue: string;
  stampLabel: string;
}

export function ColophonSpecimen({
  label,
  stampValue,
  stampLabel,
}: ColophonSpecimenProps) {
  return (
    <figure className="colophon-specimen">
      <div className="colophon-specimen__plate">
        <div className="colophon-specimen__bar" aria-hidden="true">
          {SWATCHES.map((swatch) => (
            <span className="colophon-specimen__swatch" key={swatch.label}>
              <span
                className="colophon-specimen__chip"
                style={{ background: swatch.css }}
              />
              <span className="colophon-specimen__name">{swatch.label}</span>
            </span>
          ))}
        </div>
        <span className="colophon-specimen__mat" aria-hidden="true" />
        <figcaption className="colophon-specimen__label">{label}</figcaption>
      </div>
      <div className="colophon-specimen__stamp" aria-hidden="true">
        <strong>{stampValue}</strong>
        <span>{stampLabel}</span>
      </div>
    </figure>
  );
}
