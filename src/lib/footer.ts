import { siteConfig } from "@/src/lib/config";

export const SITE_FOOTER_COPY = {
  name: `\u00a9 ${new Date().getFullYear()} ${siteConfig.name} \u00b7 A field record`,
  note: "Melbourne \u00b7 Weaving research, design and build",
} as const;
