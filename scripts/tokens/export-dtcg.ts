import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

type Leaf = { value: unknown; type?: string };
type Node = { [key: string]: Node | Leaf };

function isLeaf(v: unknown): v is Leaf {
  return typeof v === "object" && v !== null && "value" in (v as any);
}

function walk(node: Node, path: string[], fn: (path: string[], leaf: Leaf) => void) {
  for (const [k, v] of Object.entries(node)) {
    const next = [...path, k];
    if (isLeaf(v)) fn(next, v);
    else if (typeof v === "object" && v) walk(v as Node, next, fn);
  }
}

type DtcgToken = { $value: unknown; $type?: string; $description?: string; $extensions?: unknown };
type DtcgGroup = { $type?: string; $description?: string; $extensions?: unknown; [k: string]: DtcgGroup | DtcgToken | unknown };

function ensureGroup(root: DtcgGroup, path: string[]): DtcgGroup {
  let cur: DtcgGroup = root;
  for (const seg of path) {
    const existing = cur[seg];
    if (!existing || typeof existing !== "object" || ("$value" in (existing as any))) {
      cur[seg] = {};
    }
    cur = cur[seg] as DtcgGroup;
  }
  return cur;
}

function parseDimension(raw: unknown): { value: number; unit: "px" | "rem" } | null {
  if (typeof raw === "number") return { value: raw, unit: "px" };
  if (typeof raw !== "string") return null;
  const v = raw.trim();
  if (v === "0") return { value: 0, unit: "px" };
  const m = v.match(/^(-?\d+(?:\.\d+)?)(px|rem)$/);
  if (!m) return null;
  return { value: Number(m[1]), unit: m[2] as "px" | "rem" };
}

function parseFontFamily(raw: unknown): string[] | string | null {
  if (typeof raw !== "string") return null;
  const v = raw.trim();
  // Common shape in this repo: "'Cinzel', 'Georgia', serif"
  const parts = v.split(",").map((s) => s.trim()).filter(Boolean);
  if (parts.length <= 1) return v.replace(/^['"]|['"]$/g, "");
  return parts.map((p) => p.replace(/^['"]|['"]$/g, ""));
}

function parseBoxShadow(raw: unknown): {
  color: string;
  offsetX: { value: number; unit: "px" | "rem" };
  offsetY: { value: number; unit: "px" | "rem" };
  blur: { value: number; unit: "px" | "rem" };
  spread: { value: number; unit: "px" | "rem" };
  inset?: boolean;
} | null {
  if (typeof raw !== "string") return null;
  const v = raw.trim();
  // Supports: "inset 0 1px 3px rgba(...)" or "0 1px 3px rgba(...)"
  const inset = v.startsWith("inset ");
  const rest = inset ? v.slice("inset ".length).trim() : v;

  // Last token is expected to be a color function (rgba/hsla/...) or hex.
  // Split by spaces but keep the color tail intact.
  const parts = rest.split(/\s+/);
  if (parts.length < 4) return null;

  const color = parts.slice(3).join(" ");
  const offsetX = parseDimension(parts[0]);
  const offsetY = parseDimension(parts[1]);
  const blur = parseDimension(parts[2]);
  const spread = parts[3] ? parseDimension(parts[3]) : null;

  // If there are only 3 lengths, treat spread as 0px.
  const spreadValue =
    parts.length === 4 ? { value: 0, unit: "px" as const } : spread ?? { value: 0, unit: "px" as const };

  if (!offsetX || !offsetY || !blur) return null;
  return {
    color,
    offsetX,
    offsetY,
    blur,
    spread: spreadValue,
    ...(inset ? { inset: true } : {}),
  };
}

function leafToDtcg(leaf: Leaf): { token: DtcgToken; groupTypeHint?: string } {
  const t = leaf.type;
  // Your internal type strings map to DTCG types.
  if (t === "color") return { token: { $value: String(leaf.value) }, groupTypeHint: "color" };

  if (t === "spacing" || t === "borderRadius" || t === "fontSizes") {
    const dim = parseDimension(leaf.value);
    if (!dim) return { token: { $value: leaf.value, $type: "dimension" } };
    return { token: { $value: dim }, groupTypeHint: "dimension" };
  }

  if (t === "fontFamilies") {
    const fam = parseFontFamily(leaf.value);
    return { token: { $value: fam ?? String(leaf.value) }, groupTypeHint: "fontFamily" };
  }

  if (t === "boxShadow") {
    const shadow = parseBoxShadow(leaf.value);
    if (!shadow) return { token: { $value: String(leaf.value), $type: "shadow" }, groupTypeHint: "shadow" };
    return { token: { $value: shadow }, groupTypeHint: "shadow" };
  }

  // Fallback: keep value and omit type; still valid only if a parent group has $type.
  return { token: { $value: leaf.value } };
}

function applyGroupTypeHints(root: DtcgGroup) {
  // Hard-coded group typing to maximize DTCG conformance.
  if (root.color && typeof root.color === "object") (root.color as DtcgGroup).$type = "color";
  if (root.spacing && typeof root.spacing === "object") (root.spacing as DtcgGroup).$type = "dimension";
  if (root.radius && typeof root.radius === "object") (root.radius as DtcgGroup).$type = "dimension";
  if (root.text && typeof root.text === "object") {
    (root.text as DtcgGroup).$type = "dimension";
    const heading = (root.text as any).heading;
    if (heading && typeof heading === "object") (heading as DtcgGroup).$type = "dimension";
  }
  if (root.font && typeof root.font === "object") (root.font as DtcgGroup).$type = "fontFamily";
  if (root.shadow && typeof root.shadow === "object") (root.shadow as DtcgGroup).$type = "shadow";
}

async function main() {
  const repoRoot = resolve(__dirname, "../..");
  const lightInPath = resolve(repoRoot, "design-tokens/tokens.light.json");
  const darkInPath = resolve(repoRoot, "design-tokens/tokens.dark.json");
  const outLight = resolve(repoRoot, "design-tokens/dtcg/tokens.light.json");
  const outDark = resolve(repoRoot, "design-tokens/dtcg/tokens.dark.json");

  const lightRaw = await readFile(lightInPath, "utf8");
  const darkRaw = await readFile(darkInPath, "utf8");
  const lightTree = JSON.parse(lightRaw) as Node;
  const darkTree = JSON.parse(darkRaw) as Node;

  function convert(tree: Node): DtcgGroup {
    const root: DtcgGroup = {};
    walk(tree, [], (path, leaf) => {
      const parent = ensureGroup(root, path.slice(0, -1));
      const name = path[path.length - 1]!;
      const { token } = leafToDtcg(leaf);
      parent[name] = token;
    });
    applyGroupTypeHints(root);
    return root;
  }

  const dtcgLight = convert(lightTree);
  const dtcgDark = convert(darkTree);

  await mkdir(dirname(outLight), { recursive: true });
  await writeFile(outLight, JSON.stringify(dtcgLight, null, 2) + "\n", "utf8");
  await writeFile(outDark, JSON.stringify(dtcgDark, null, 2) + "\n", "utf8");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

