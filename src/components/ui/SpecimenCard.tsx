import type { HTMLAttributes, ReactNode } from "react";

type SpecimenCardMediaProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "className" | "children"
> & {
  "data-photo"?: boolean | "";
  "data-has-cover"?: boolean | "";
};

export interface SpecimenCardProps {
  media: ReactNode;
  mediaProps?: SpecimenCardMediaProps;
  frame: string;
  stampValue: string;
  stampLabel?: string;
  classification: ReactNode;
  title: string;
  tags: readonly string[];
  /** Password-gated specimen: overlays a lock stamp on the media */
  locked?: boolean;
  /** Lock stamp label; defaults to "Under NDA" */
  lockLabel?: string;
}

export function SpecimenCard({
  media,
  mediaProps,
  frame,
  stampValue,
  stampLabel = "",
  classification,
  title,
  tags,
  locked = false,
  lockLabel = "Under NDA",
}: SpecimenCardProps) {
  return (
    <>
      <div className="specimen-card__media" {...mediaProps}>
        {media}
        {locked ? (
          <div className="specimen-card__nda" aria-hidden="true">
            <span className="specimen-card__nda-lock"> </span>
            <span className="specimen-card__nda-label">{lockLabel}</span>
          </div>
        ) : null}
      </div>

      <div className="specimen-card__dots" aria-hidden="true" />
      <div className="specimen-card__gradient" aria-hidden="true" />
      <div className="specimen-card__mat" aria-hidden="true" />

      <div className="specimen-card__frame" aria-hidden="true">
        {frame}
      </div>

      <div className="specimen-card__year-stamp" aria-hidden="true">
        <div className="specimen-card__year-val">{stampValue}</div>
        <div className="specimen-card__year-lbl">{stampLabel}</div>
      </div>

      <div className="specimen-card__asterisk" aria-hidden="true">
        *
      </div>

      <div className="specimen-card__info">
        <div className="specimen-card__classification">
          <div className="specimen-card__class-line" aria-hidden="true" />
          {classification}
        </div>
        <h3 className="specimen-card__title">{title}</h3>
        <div className="specimen-card__tags">
          {tags.map((tag) => (
            <span key={tag} className="specimen-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
