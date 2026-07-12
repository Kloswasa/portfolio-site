"use client";

import * as React from "react";
import { CopyButton } from "@/src/components/ui/CopyButton";

type TokenRow = {
  key: string;
  value: unknown;
  darkValue?: unknown;
  type?: string;
  cssVar: string;
  group: string;
};

type Mode = "split" | "light" | "dark" | "ramps";

type PaletteStep = {
  label: string;
  value: `#${string}`;
  usage: string;
  tokenKey?: string;
};

type PaletteRamp = {
  id: string;
  title: string;
  description: string;
  usage: string;
  steps: PaletteStep[];
};

function ColorSwatch({ cssVar }: { cssVar: string }) {
  return (
    <div
      className="h-10 w-10 shrink-0 rounded-none border border-border-subtle shadow-sm"
      style={{ backgroundColor: `var(${cssVar})` }}
      aria-hidden
    />
  );
}

type RampItem = {
  key: string;
  label: string;
};

type ColorRamp = {
  id: string;
  title: string;
  description: string;
  items: RampItem[];
};

function normalizeHex(v: string): string {
  const s = v.trim();
  if (!s) return "";
  if (s.startsWith("#")) return s.toLowerCase();
  return s.toLowerCase();
}

function findTokenKeysByValue(resolved: Record<string, string>, hex: string): string[] {
  const target = normalizeHex(hex);
  if (!target.startsWith("#")) return [];

  const hits: string[] = [];
  for (const [k, v] of Object.entries(resolved)) {
    if (normalizeHex(v) === target) hits.push(k);
  }

  return hits.sort((a, b) => a.localeCompare(b));
}

function PaletteSwatch({
  step,
  actual,
  usedBy,
}: {
  step: PaletteStep;
  actual?: string;
  usedBy?: string[];
}) {
  const expected = step.value;
  const actualNorm = actual ? normalizeHex(actual) : "";
  const expectedNorm = normalizeHex(expected);
  const matches = actualNorm ? actualNorm === expectedNorm : null;

  return (
    <div className="grid gap-2">
      <div
        className="h-12 w-full rounded-none border border-border-subtle shadow-sm"
        style={{ backgroundColor: actual ?? step.value }}
        aria-hidden
      />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-body text-xs font-semibold uppercase tracking-label-lg text-text">
            {step.label}
          </div>
          <div className="mt-1 truncate font-mono text-xs text-text-muted">
            {actual ?? step.value}
          </div>
          {actualNorm ? (
            <div className="mt-1 font-body text-xs text-text-muted">
              <span className="font-semibold text-text">Reference:</span> {expected}
              <span className="mx-2 text-border">•</span>
              <span className={matches ? "text-success-text" : "text-error-text"}>
                {matches ? "matches" : "mismatch"}
              </span>
            </div>
          ) : null}
          {usedBy && usedBy.length > 0 ? (
            <div className="mt-1 font-body text-xs text-text-muted">
              <span className="font-semibold text-text">Used by:</span>{" "}
              <span className="font-mono">{usedBy.join(", ")}</span>
            </div>
          ) : null}
          <div className="mt-1 font-body text-xs text-text-muted">{step.usage}</div>
        </div>
        <CopyButton text={actual ?? step.value} />
      </div>
    </div>
  );
}

function PaletteRampsReference({
  resolved,
}: {
  resolved: Record<string, string>;
}) {
  const ramps: PaletteRamp[] = [
    {
      id: "indigo",
      title: "Indigo",
      description:
        "Primary color ramp. Deep navy-to-sky blue. Used for surfaces, text, borders, and primary actions. The dominant mood of the system.",
      usage: "Backgrounds, primary buttons, text, focus rings, navigation",
      steps: [
        {
          label: "900",
          value: "#0D1B3E",
          usage: "Deepest background, header, dark cards",
          tokenKey: "color.headerBg",
        },
        { label: "800", value: "#152952", usage: "Primary button fill, strong text", tokenKey: "color.primary" },
        {
          label: "700",
          value: "#1E3A6B",
          usage: "Primary button hover, heading text",
          tokenKey: "color.primaryHover",
        },
        { label: "600", value: "#2A4F8A", usage: "Active states, toggle on-state" },
        { label: "500", value: "#3A6AAE", usage: "Links, interactive text", tokenKey: "color.info" },
        { label: "400", value: "#5B8CC8", usage: "Focus ring stroke, wave patterns", tokenKey: "color.borderStrong" },
        { label: "300", value: "#8AB0DD", usage: "Muted info text, subtle accents" },
        { label: "200", value: "#B5D0EC", usage: "Secondary borders, ripple rings", tokenKey: "color.infoText" },
        { label: "100", value: "#DCE9F5", usage: "Info badge background, focus ring fill", tokenKey: "color.primaryMuted" },
        { label: "50", value: "#EDF3FA", usage: "Lightest surface, hover state fills" },
      ],
    },
    {
      id: "cream",
      title: "Cream",
      description:
        "Neutral warm ramp. Parchment-to-sand tones. The quiet ground that lets indigo and gold breathe.",
      usage: "Page backgrounds, input fills, muted text, borders, dividers",
      steps: [
        { label: "900", value: "#4A3F2E", usage: "Darkest neutral text on cream" },
        { label: "800", value: "#7A6B50", usage: "Secondary text on light backgrounds", tokenKey: "color.textMuted" },
        { label: "700", value: "#A89674", usage: "Placeholder text, captions, muted labels" },
        { label: "600", value: "#C4B393", usage: "Disabled text, input placeholder" },
        { label: "500", value: "#D8CCB2", usage: "Default borders, toggle off-track" },
        { label: "400", value: "#E5DBC8", usage: "Card borders, divider lines", tokenKey: "color.border" },
        { label: "300", value: "#EDE3D0", usage: "Skeleton loading fill, progress track", tokenKey: "color.borderSubtle" },
        { label: "200", value: "#F2EADC", usage: "Subtle surface differentiation", tokenKey: "color.surface" },
        { label: "100", value: "#F7F1E6", usage: "Page background", tokenKey: "color.bg" },
        { label: "50", value: "#FAF6EF", usage: "Input field background" },
      ],
    },
    {
      id: "gold",
      title: "Gold",
      description:
        "Accent ramp. Warm metallic tones evoking gold leaf and champagne. Used sparingly for emphasis, active tab indicators, and premium moments.",
      usage: "Active indicators, accent buttons, featured badges, premium cards",
      steps: [
        {
          label: "900",
          value: "#3D2E08",
          usage: "Text on gold backgrounds",
          tokenKey: "color.textOnAccent",
        },
        { label: "800", value: "#6B5010", usage: "Secondary text on gold surfaces" },
        { label: "700", value: "#96721A", usage: "Gold caption text" },
        {
          label: "600",
          value: "#C58A16",
          usage: "Deep gold for pressed/strong accents",
          tokenKey: "color.accentDark",
        },
        {
          label: "500",
          value: "#E8A820",
          usage: "Active tab underline, featured accents, header accent bar",
          tokenKey: "color.accent",
        },
        {
          label: "400",
          value: "#F0BE46",
          usage: "Hover gold, borders, secondary accents",
          tokenKey: "color.accentHover",
        },
        {
          label: "300",
          value: "#F7CB6A",
          usage: "Light gold for icons/highlights",
          tokenKey: "color.accentLight",
        },
        { label: "200", value: "#F0DCA4", usage: "Gold card border" },
        { label: "100", value: "#F6EACD", usage: "Gold badge background, featured tag" },
        {
          label: "50",
          value: "#FDF0DC",
          usage: "Gold-muted surface tint",
          tokenKey: "color.accentMuted",
        },
      ],
    },
    {
      id: "teal",
      title: "Teal",
      description: "Supporting accent. Deep water tones for success states and online/active indicators.",
      usage: "Success alerts, online status, active badges",
      steps: [
        { label: "700", value: "#14545A", usage: "Teal text on light backgrounds", tokenKey: "color.successText" },
        { label: "500", value: "#1E7E82", usage: "Teal accent, success border", tokenKey: "color.success" },
        { label: "300", value: "#5AAFAC", usage: "Teal dot indicators" },
        { label: "100", value: "#D4F0EF", usage: "Success alert background, teal badge fill", tokenKey: "color.successBg" },
      ],
    },
    {
      id: "copper",
      title: "Copper",
      description:
        "Warm accent. Evokes the single orange koi in the moodboard — a deliberate warm punctuation against cool blue.",
      usage: "Pending states, review badges, warm warnings",
      steps: [
        { label: "700", value: "#8B4520", usage: "Copper text" },
        { label: "500", value: "#C46830", usage: "Copper accent" },
        { label: "300", value: "#E09868", usage: "Copper dot" },
        { label: "100", value: "#F8E4D2", usage: "Copper badge background" },
      ],
    },
    {
      id: "red",
      title: "Red",
      description:
        "Error and danger states. Restrained red that doesn't clash with the cool palette.",
      usage: "Error alerts, danger buttons, validation errors",
      steps: [
        { label: "700", value: "#8B2020", usage: "Error text, danger button border", tokenKey: "color.errorText" },
        { label: "500", value: "#C43030", usage: "Danger button fill, error accent", tokenKey: "color.error" },
        { label: "300", value: "#E06868", usage: "Error input border" },
        { label: "100", value: "#F8D2D2", usage: "Error alert background, error badge", tokenKey: "color.errorBg" },
      ],
    },
  ];

  return (
    <section className="card p-8">
      <h2 className="text-heading-2xl">Color ramps (palette reference)</h2>
      <p className="mt-3 max-w-3xl font-body text-base text-text-muted">
        This is the underlying palette ramp reference (grouped by color family) with intended usage.
        Prefer semantic tokens in app code; use this section to sanity-check relationships and
        understand the design intent.
      </p>

      <div className="mt-8 grid gap-6">
        {ramps.map((ramp) => (
          <div key={ramp.id} className="rounded-none border border-border-subtle bg-bg p-6">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-heading-xl">{ramp.title}</h3>
                <p className="mt-2 max-w-3xl font-body text-sm text-text-muted">
                  {ramp.description}
                </p>
                <p className="mt-2 font-body text-sm text-text-muted">
                  <span className="font-semibold text-text">Usage:</span> {ramp.usage}
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ramp.steps.map((step) => {
                const usedBy = findTokenKeysByValue(resolved, step.value);
                const actual = step.tokenKey ? resolved[step.tokenKey] : undefined;
                return (
                  <PaletteSwatch
                    key={`${ramp.id}-${step.label}`}
                    step={step}
                    actual={actual}
                    usedBy={usedBy}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function useResolvedValues(
  rows: TokenRow[],
  el: HTMLElement | null,
): Record<string, string> {
  const [values, setValues] = React.useState<Record<string, string>>({});

  React.useEffect(() => {
    if (!el) return;
    const style = getComputedStyle(el);
    const next: Record<string, string> = {};
    for (const r of rows) {
      next[r.key] = style.getPropertyValue(r.cssVar).trim();
    }
    setValues(next);
  }, [rows, el]);

  return values;
}

function buildLightInlineVars(rows: TokenRow[]): React.CSSProperties {
  const vars: Record<string, string> = {};
  for (const r of rows) {
    const v = r.value;
    if (typeof v === "string" || typeof v === "number") {
      vars[r.cssVar] = String(v);
    }
  }
  return vars as unknown as React.CSSProperties;
}

function rampCssVarByKey(rows: TokenRow[], key: string): string | null {
  return rows.find((r) => r.key === key)?.cssVar ?? null;
}

function RampSwatch({
  cssVar,
  label,
  value,
}: {
  cssVar: string;
  label: string;
  value: string;
}) {
  return (
    <div className="grid gap-2">
      <div
        className="h-12 w-full rounded-none border border-border-subtle shadow-sm"
        style={{ backgroundColor: `var(${cssVar})` }}
        aria-hidden
      />
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="font-body text-xs font-semibold uppercase tracking-label-lg text-text">
            {label}
          </div>
          <div className="mt-1 truncate font-mono text-xs text-text-muted">{value}</div>
        </div>
        <CopyButton text={value} />
      </div>
    </div>
  );
}

function ColorRamps({
  rows,
  resolved,
}: {
  rows: TokenRow[];
  resolved: Record<string, string>;
}) {
  const ramps: ColorRamp[] = [
    {
      id: "neutrals",
      title: "Neutrals",
      description:
        "Reading surfaces and structure. These should make up most of the UI: backgrounds, surfaces, borders, and default text.",
      items: [
        { key: "color.bg", label: "bg" },
        { key: "color.surface", label: "surface" },
        { key: "color.elevated", label: "elevated" },
        { key: "color.borderSubtle", label: "border subtle" },
        { key: "color.border", label: "border" },
        { key: "color.borderStrong", label: "border strong" },
        { key: "color.text", label: "text" },
        { key: "color.textMuted", label: "text muted" },
        { key: "color.textSubtle", label: "text subtle" },
        { key: "color.textInverse", label: "text inverse" },
      ],
    },
    {
      id: "primary",
      title: "Primary",
      description:
        "Core brand utility color. Use for primary actions, links, focus/active states, and UI emphasis that is not “special”.",
      items: [
        { key: "color.primaryMuted", label: "muted" },
        { key: "color.primary", label: "base" },
        { key: "color.primaryHover", label: "hover" },
        { key: "color.tertiary", label: "tertiary" },
      ],
    },
    {
      id: "accent",
      title: "Accent (Gold)",
      description:
        "Special moments. Use sparingly for premium emphasis, featured elements, and key highlights. Pair with `color.textOnAccent` for readable text.",
      items: [
        { key: "color.accentMuted", label: "muted" },
        { key: "color.accentLight", label: "light" },
        { key: "color.accent", label: "base" },
        { key: "color.accentHover", label: "hover" },
        { key: "color.accentDark", label: "dark" },
        { key: "color.textOnAccent", label: "text on accent" },
      ],
    },
    {
      id: "feedback",
      title: "Feedback",
      description:
        "Status and messaging colors. Use these for banners, validation states, and status badges (not for primary branding).",
      items: [
        { key: "color.successBg", label: "success bg" },
        { key: "color.success", label: "success" },
        { key: "color.successText", label: "success text" },
        { key: "color.warningBg", label: "warning bg" },
        { key: "color.warning", label: "warning" },
        { key: "color.warningText", label: "warning text" },
        { key: "color.errorBg", label: "error bg" },
        { key: "color.error", label: "error" },
        { key: "color.errorText", label: "error text" },
        { key: "color.infoBg", label: "info bg" },
        { key: "color.info", label: "info" },
        { key: "color.infoText", label: "info text" },
      ],
    },
  ];

  return (
    <section className="card p-8">
      <h2 className="text-heading-2xl">Color ramps</h2>
      <p className="mt-3 max-w-3xl font-body text-base text-text-muted">
        These are the “families” of related semantic tokens. Ramps are how you keep hover/pressed,
        backgrounds, borders, and text consistent without reaching for hard-coded hex values.
      </p>

      <div className="mt-8 grid gap-6">
        {ramps.map((ramp) => {
          const present = ramp.items
            .map((i) => {
              const cssVar = rampCssVarByKey(rows, i.key);
              if (!cssVar) return null;
              const value = resolved[i.key];
              if (!value) return null;
              return { ...i, cssVar, value };
            })
            .filter((x): x is RampItem & { cssVar: string; value: string } => Boolean(x));

          if (present.length === 0) return null;

          return (
            <div
              key={ramp.id}
              className="rounded-none border border-border-subtle bg-bg p-6"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <h3 className="text-heading-xl">{ramp.title}</h3>
                  <p className="mt-2 max-w-3xl font-body text-sm text-text-muted">
                    {ramp.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {present.map((item) => (
                  <RampSwatch
                    key={item.key}
                    cssVar={item.cssVar}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ModePill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-none border px-3 py-1 font-body text-xs font-semibold tracking-caps uppercase transition",
        active
          ? "border-border-strong bg-surface text-text"
          : "border-border-subtle bg-bg text-text-muted hover:border-border hover:text-text",
      ].join(" ")}
    >
      {label}
    </button>
  );
}

function TokenSections({
  title,
  rows,
  resolved,
}: {
  title: string;
  rows: TokenRow[];
  resolved: Record<string, string>;
}) {
  const colors = rows.filter((r) => r.group === "color");
  const typography = rows.filter((r) => r.group === "font" || r.group === "text");
  const spacing = rows.filter((r) => r.group === "spacing");
  const radius = rows.filter((r) => r.group === "radius");
  const shadow = rows.filter((r) => r.group === "shadow");

  return (
    <div className="grid gap-10">
      <header className="flex items-end justify-between gap-6">
        <div>
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-stamp">
            {title}
          </span>
        </div>
      </header>

      <ColorRamps rows={rows} resolved={resolved} />

      <section className="card p-8">
        <h2 className="text-heading-2xl">Colors</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {colors.map((t) => (
            <div
              key={t.key}
              className="flex items-center justify-between gap-4 rounded-none border border-border-subtle bg-bg p-4"
            >
              <div className="flex items-center gap-4">
                <ColorSwatch cssVar={t.cssVar} />
                <div className="min-w-0">
                  <div className="font-mono text-sm text-text">{t.key}</div>
                  <div className="mt-1 font-mono text-xs text-text-muted">
                    var({t.cssVar})
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="font-mono text-xs text-text-muted">
                  {resolved[t.key] ?? ""}
                </div>
                <CopyButton text={resolved[t.key] ? `${resolved[t.key]}` : `var(${t.cssVar})`} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-8">
        <h2 className="text-heading-2xl">Typography</h2>
        <div className="mt-6 grid gap-4">
          {typography.map((t) => (
            <div key={t.key} className="rounded-none border border-border-subtle bg-bg p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-sm text-text">{t.key}</div>
                  <div className="mt-1 font-mono text-xs text-text-muted">
                    var({t.cssVar})
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-mono text-xs text-text-muted">
                    {resolved[t.key] ?? ""}
                  </div>
                  <CopyButton text={resolved[t.key] ? `${resolved[t.key]}` : `var(${t.cssVar})`} />
                </div>
              </div>

              <p
                className={`mt-4 text-text ${t.key.startsWith("text.heading.") ? "font-heading" : "font-body"}`}
                style={{
                  fontFamily: t.type === "fontFamilies" ? `var(${t.cssVar})` : undefined,
                  fontSize: t.type === "fontSizes" ? `var(${t.cssVar})` : undefined,
                }}
              >
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-8">
        <h2 className="text-heading-2xl">Spacing</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {spacing.map((t) => (
            <div key={t.key} className="rounded-none border border-border-subtle bg-bg p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-sm text-text">{t.key}</div>
                  <div className="mt-1 font-mono text-xs text-text-muted">
                    var({t.cssVar})
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-mono text-xs text-text-muted">
                    {resolved[t.key] ?? ""}
                  </div>
                  <CopyButton text={resolved[t.key] ? `${resolved[t.key]}` : `var(${t.cssVar})`} />
                </div>
              </div>

              <div className="mt-4">
                <div
                  className="rounded-none bg-surface"
                  style={{ height: `var(${t.cssVar})`, width: `var(${t.cssVar})` }}
                  aria-hidden
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card p-8">
        <h2 className="text-heading-2xl">Radius</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {radius.map((t) => (
            <div key={t.key} className="rounded-none border border-border-subtle bg-bg p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-sm text-text">{t.key}</div>
                  <div className="mt-1 font-mono text-xs text-text-muted">
                    var({t.cssVar})
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-mono text-xs text-text-muted">
                    {resolved[t.key] ?? ""}
                  </div>
                  <CopyButton text={resolved[t.key] ? `${resolved[t.key]}` : `var(${t.cssVar})`} />
                </div>
              </div>

              <div
                className="mt-4 h-16 w-24 border border-border-subtle bg-surface"
                style={{ borderRadius: `var(${t.cssVar})` }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </section>

      <section className="card p-8">
        <h2 className="text-heading-2xl">Shadows</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {shadow.map((t) => (
            <div key={t.key} className="rounded-none border border-border-subtle bg-bg p-5">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-mono text-sm text-text">{t.key}</div>
                  <div className="mt-1 font-mono text-xs text-text-muted">
                    var({t.cssVar})
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="font-mono text-xs text-text-muted">
                    {resolved[t.key] ?? ""}
                  </div>
                  <CopyButton text={resolved[t.key] ? `${resolved[t.key]}` : `var(${t.cssVar})`} />
                </div>
              </div>

              <div
                className="mt-4 h-16 w-full rounded-none bg-surface"
                style={{ boxShadow: `var(${t.cssVar})` }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function TokensClient({ rows }: { rows: TokenRow[] }) {
  const [mode, setMode] = React.useState<Mode>("split");

  const lightRef = React.useRef<HTMLDivElement | null>(null);
  const darkRef = React.useRef<HTMLDivElement | null>(null);

  const lightResolved = useResolvedValues(rows, lightRef.current);
  const darkResolved = useResolvedValues(rows, darkRef.current);

  const lightVars = React.useMemo(() => buildLightInlineVars(rows), [rows]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="eyebrow">
            Token verification
          </span>
          <h1 className="mt-4 text-heading-4xl md:text-heading-5xl">Design tokens</h1>
          <p className="mt-4 max-w-3xl font-body text-lg font-light text-text-muted">
            Resolved from CSS variables. Use this page to verify both light and dark mode values.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <ModePill label="Split" active={mode === "split"} onClick={() => setMode("split")} />
          <ModePill label="Light" active={mode === "light"} onClick={() => setMode("light")} />
          <ModePill label="Dark" active={mode === "dark"} onClick={() => setMode("dark")} />
          <ModePill label="Ramps" active={mode === "ramps"} onClick={() => setMode("ramps")} />
        </div>
      </header>

      {mode === "ramps" ? (
        <div className="mt-12">
          <div
            ref={lightRef}
            className="rounded-none border border-border-subtle bg-bg p-6"
            style={lightVars}
          >
            <PaletteRampsReference resolved={lightResolved} />
          </div>

          <div ref={darkRef} className="dark mt-10 rounded-none border border-border-subtle bg-bg p-6">
            <PaletteRampsReference resolved={darkResolved} />
          </div>
        </div>
      ) : mode === "split" ? (
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div
            ref={lightRef}
            className="rounded-none border border-border-subtle bg-bg p-6"
            style={lightVars}
          >
            <TokenSections title="Light mode" rows={rows} resolved={lightResolved} />
          </div>

          <div ref={darkRef} className="dark rounded-none border border-border-subtle bg-bg p-6">
            <TokenSections title="Dark mode" rows={rows} resolved={darkResolved} />
          </div>
        </div>
      ) : mode === "light" ? (
        <div
          ref={lightRef}
          className="mt-12 rounded-none border border-border-subtle bg-bg p-6"
          style={lightVars}
        >
          <TokenSections title="Light mode" rows={rows} resolved={lightResolved} />
        </div>
      ) : (
        <div ref={darkRef} className="dark mt-12 rounded-none border border-border-subtle bg-bg p-6">
          <TokenSections title="Dark mode" rows={rows} resolved={darkResolved} />
        </div>
      )}
    </main>
  );
}

