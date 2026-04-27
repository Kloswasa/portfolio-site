"use client";

import * as React from "react";
import { CopyButton } from "@/components/ui/CopyButton";

type TokenRow = {
  key: string;
  value: unknown;
  darkValue?: unknown;
  type?: string;
  cssVar: string;
  group: string;
};

type Mode = "split" | "light" | "dark";

function ColorSwatch({ cssVar }: { cssVar: string }) {
  return (
    <div
      className="h-10 w-10 shrink-0 rounded-none border border-border-subtle shadow-sm"
      style={{ backgroundColor: `var(${cssVar})` }}
      aria-hidden
    />
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
        "rounded-none border px-3 py-1 font-body text-xs font-semibold tracking-[0.08em] uppercase transition",
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
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            {title}
          </span>
        </div>
      </header>

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
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
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
        </div>
      </header>

      {mode === "split" ? (
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

