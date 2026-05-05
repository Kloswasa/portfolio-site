"use client";

import { useId, useState } from "react";
import { TabBar, TabBarTab } from "@/src/components/ui/TabBar";

const WORK_TABS = [
  { key: "product" as const, label: "Product" },
  { key: "pack" as const, label: "Pack" },
  { key: "graphic" as const, label: "Graphic" },
];

export function TabBarDemo() {
  const baseId = useId();
  const [tab, setTab] = useState<(typeof WORK_TABS)[number]["key"]>("product");
  const panelId = `${baseId}-panel`;

  const copy: Record<(typeof WORK_TABS)[number]["key"], string> = {
    product: "Hero case studies and flagship product work.",
    pack: "Mid-tier packaging and brand extensions.",
    graphic: "Graphic design, print, and accessories.",
  };

  return (
    <div className="max-w-xl">
      <TabBar aria-label="Work categories">
        {WORK_TABS.map(({ key, label }) => (
          <TabBarTab
            key={key}
            id={`${baseId}-tab-${key}`}
            active={tab === key}
            onClick={() => setTab(key)}
            ariaControls={panelId}
          >
            {label}
          </TabBarTab>
        ))}
      </TabBar>
      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${tab}`}
        className="rounded-none border border-border-subtle bg-surface px-5 py-4 font-body text-sm text-text-muted"
      >
        {copy[tab]}
      </div>
    </div>
  );
}
