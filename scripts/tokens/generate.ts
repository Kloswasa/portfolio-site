import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

type TokenLeaf = { value: unknown; type?: string };
interface TokenNode {
  [key: string]: TokenLeaf | TokenNode;
}

function isLeaf(v: unknown): v is TokenLeaf {
  return typeof v === "object" && v !== null && "value" in (v as Record<string, unknown>);
}

function walk(
  node: TokenNode,
  path: string[],
  fn: (fullPath: string[], leaf: TokenLeaf) => void,
) {
  for (const [k, v] of Object.entries(node)) {
    const next = [...path, k];
    if (isLeaf(v)) fn(next, v);
    else if (typeof v === "object" && v) walk(v as TokenNode, next, fn);
  }
}

/** CSS custom property name for design token path (e.g. color.bg → --color-bg). */
function cssVarName(parts: string[]) {
  const [group, ...rest] = parts;
  if (group === "shadow" && rest.length === 1 && rest[0] === "default") {
    return "--shadow";
  }
  const normalized = rest.join("-").replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  return `--${group}-${normalized}`;
}

function safeKey(parts: string[]) {
  return parts.join(".");
}

function getLightTree(json: TokenNode & Record<string, unknown>): TokenNode {
  if (json.light && typeof json.light === "object" && json.light !== null && !("value" in json.light)) {
    return json.light as TokenNode;
  }
  const out: TokenNode = {};
  for (const [k, v] of Object.entries(json)) {
    if (k === "$schema" || k === "dark" || k === "light" || k.startsWith("$")) continue;
    out[k] = v as TokenLeaf | TokenNode;
  }
  return out;
}

function getDarkTree(json: TokenNode & Record<string, unknown>): TokenNode {
  if (json.dark && typeof json.dark === "object" && json.dark !== null && !("value" in json.dark)) {
    return json.dark as TokenNode;
  }
  return {};
}

type TokenEntry = { value: unknown; type?: string; cssVar: string; darkValue?: unknown };

async function main() {
  const repoRoot = resolve(__dirname, "../..");
  const lightTokensPath = resolve(repoRoot, "design-tokens/tokens.light.json");
  const darkTokensPath = resolve(repoRoot, "design-tokens/tokens.dark.json");

  const lightRaw = await readFile(lightTokensPath, "utf8");
  const darkRaw = await readFile(darkTokensPath, "utf8");

  const lightJson = JSON.parse(lightRaw) as TokenNode & Record<string, unknown>;
  const darkJson = JSON.parse(darkRaw) as TokenNode & Record<string, unknown>;

  const lightTree = getLightTree(lightJson);
  // `tokens.dark.json` is a token file itself (not nested under a `dark` key).
  // Use the same extraction logic as light to ignore $schema and other metadata keys.
  const darkTree = getLightTree(darkJson);

  const darkByKey = new Map<string, TokenLeaf>();
  walk(darkTree, [], (parts, leaf) => {
    darkByKey.set(safeKey(parts), leaf);
  });

  const flat: Record<string, TokenEntry> = {};

  const themeCss: string[] = [];
  themeCss.push("/* Auto-generated. Do not edit directly. */");
  themeCss.push("@theme {");

  walk(lightTree, [], (parts, leaf) => {
    const cssVar = cssVarName(parts);
    const key = safeKey(parts);
    const darkLeaf = darkByKey.get(key);
    flat[key] = {
      value: leaf.value,
      type: leaf.type,
      cssVar,
      ...(darkLeaf !== undefined ? { darkValue: darkLeaf.value } : {}),
    };
    themeCss.push(`  ${cssVar}: ${String(leaf.value)};`);
  });

  themeCss.push("}");
  themeCss.push("");

  themeCss.push("/* Dark mode overrides */");
  themeCss.push(".dark {");
  walk(darkTree, [], (parts, leaf) => {
    const cssVar = cssVarName(parts);
    themeCss.push(`  ${cssVar}: ${String(leaf.value)};`);
  });
  themeCss.push("}");
  themeCss.push("");

  const themeOutPath = resolve(repoRoot, "src/styles/theme.css");
  const tsOutPath = resolve(repoRoot, "src/design-tokens/tokens.ts");

  await mkdir(dirname(themeOutPath), { recursive: true });
  await mkdir(dirname(tsOutPath), { recursive: true });

  await writeFile(themeOutPath, themeCss.join("\n"), "utf8");

  const ts = `/* Auto-generated. Do not edit directly. */
export type TokenEntry = {
  value: unknown;
  type?: string;
  cssVar: string;
  darkValue?: unknown;
};

export type TokenRecord = Record<string, TokenEntry>;

export const tokens: TokenRecord = ${JSON.stringify(flat, null, 2)} as const;
`;

  await writeFile(tsOutPath, ts, "utf8");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
