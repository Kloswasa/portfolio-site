import { Fragment } from "react";
import type { RichText as RichTextValue } from "@/src/lib/about/types";

interface RichTextProps {
  value: RichTextValue;
}

export function RichText({ value }: RichTextProps) {
  return (
    <>
      {value.map((segment, index) =>
        typeof segment === "string" ? (
          <Fragment key={index}>{segment}</Fragment>
        ) : (
          <em key={index}>{segment.em}</em>
        ),
      )}
    </>
  );
}
