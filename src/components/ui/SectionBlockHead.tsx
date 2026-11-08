export interface SectionBlockHeadProps {
  title: string;
  infoStrong: string;
  infoDetail: string;
  /** Hide the info column below 640px (Play page pattern). */
  hideInfoOnMobile?: boolean;
  className?: string;
}

export function SectionBlockHead({
  title,
  infoStrong,
  infoDetail,
  hideInfoOnMobile = false,
  className,
}: SectionBlockHeadProps) {
  const headClassName = [
    "section-block__head",
    hideInfoOnMobile ? "section-block__head--hide-info-mobile" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={headClassName}>
      <div>
        <h2 className="section-block__title">{title}</h2>
      </div>
      <p className="section-block__info">
        <strong>{infoStrong}</strong>
        <span className="section-block__info-detail">{infoDetail}</span>
      </p>
    </div>
  );
}
