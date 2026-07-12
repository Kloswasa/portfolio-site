"use client";

import {
  Fragment,
  useId,
  useMemo,
  useState,
  type Key,
  type ReactNode,
} from "react";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import { TabBar, TabBarTab } from "@/src/components/ui/TabBar";

export type TabbedGridTab<TTab extends string> = {
  key: TTab;
  label: string;
};

type TabbedGridSectionProps<TTab extends string, TItem> = {
  tabs: TabbedGridTab<TTab>[];
  defaultTab: TTab;
  tabAriaLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  getItems: (tab: TTab) => TItem[];
  getItemKey: (item: TItem) => Key;
  renderItem: (item: TItem) => ReactNode;
  emptyMessage?: string;
  before?: ReactNode;
};

const DEFAULT_EMPTY_MESSAGE = "Nothing here yet — I'm still drawing.";

export function TabbedGridSection<TTab extends string, TItem>({
  tabs,
  defaultTab,
  tabAriaLabel,
  eyebrow,
  title,
  description,
  getItems,
  getItemKey,
  renderItem,
  emptyMessage = DEFAULT_EMPTY_MESSAGE,
  before,
}: TabbedGridSectionProps<TTab, TItem>) {
  const baseId = useId();
  const [tab, setTab] = useState<TTab>(defaultTab);

  const items = useMemo(() => getItems(tab), [getItems, tab]);

  return (
    <>
      {before}

      <ScrollReveal as="div" revealOnScroll={false}>
        <header className="max-w-xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="text-heading-4xl md:text-heading-5xl">{title}</h1>
          <p className="mt-2 max-w-xl font-body text-base font-light leading-relaxed text-text-muted">
            {description}
          </p>
        </header>

        <TabBar aria-label={tabAriaLabel} className="mt-8 md:mt-10">
          {tabs.map(({ key, label }) => (
            <TabBarTab
              key={key}
              id={`${baseId}-tab-${key}`}
              active={tab === key}
              onClick={() => setTab(key)}
            >
              {label}
            </TabBarTab>
          ))}
        </TabBar>
      </ScrollReveal>

      <ScrollReveal as="div" className="grid gap-4 md:grid-cols-3 md:gap-4" key={tab}>
        {items.length === 0 ? (
          <p className="col-span-full font-body text-text-muted">{emptyMessage}</p>
        ) : (
          items.map((item) => (
            <Fragment key={getItemKey(item)}>{renderItem(item)}</Fragment>
          ))
        )}
      </ScrollReveal>
    </>
  );
}
