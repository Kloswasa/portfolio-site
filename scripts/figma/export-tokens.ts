import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

type TokensStudioLeaf = { value: unknown; type?: string };
interface TokensStudioNode {
  [key: string]: TokensStudioLeaf | TokensStudioNode | string;
}

function setDeep(root: TokensStudioNode, path: string[], leaf: TokensStudioLeaf) {
  let cur: TokensStudioNode = root;
  for (let i = 0; i < path.length - 1; i++) {
    const k = path[i]!;
    const next = cur[k];
    if (!next || typeof next !== "object" || ("value" in (next as any) && typeof next !== "object")) {
      cur[k] = {};
    }
    cur = cur[k] as TokensStudioNode;
  }
  cur[path[path.length - 1]!] = leaf;
}

function inferType(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const v = value.trim();
  if (/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v)) return "color";
  if (/^-?\d+(\.\d+)?(px)$/.test(v)) return "spacing";
  if (/^-?\d+(\.\d+)?(rem|em)$/.test(v)) return "fontSizes";
  if (/^'.+'|".+"/.test(v) || /,/.test(v)) return "fontFamilies";
  if (/\brgba?\(/.test(v) || /\bhsla?\(/.test(v)) return "color";
  if (/\b\d+px\b/.test(v) && /\brgba?\(/.test(v)) return "boxShadow";
  return undefined;
}

function normalizeKeySegment(seg: string) {
  return seg
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "")
    .replace(/-+/g, "-");
}

async function main() {
  const repoRoot = resolve(__dirname, "../..");

  // This file is intended to be produced via Cursor's Figma MCP tool output.
  // Example flow:
  // 1) Run MCP: get_variable_defs and save response JSON to design-tokens/figma-variable-defs.json
  // 2) Run: npm run tokens:pull
  const defsPath =
    process.env.FIGMA_VARIABLE_DEFS_PATH ??
    resolve(repoRoot, "design-tokens/figma-variable-defs.json");

  const outPath = resolve(repoRoot, "design-tokens/tokens.light.json");

  const raw = await readFile(defsPath, "utf8");
  const defs = JSON.parse(raw) as Record<string, unknown>;

  const light: TokensStudioNode = {};

  for (const [rawKey, value] of Object.entries(defs)) {
    const parts = rawKey
      .split(/[/.]/g)
      .flatMap((p) => p.split("/"))
      .map(normalizeKeySegment)
      .filter(Boolean);

    if (parts.length === 0) continue;

    const type = inferType(value);
    setDeep(light, parts, type ? { value, type } : { value });
  }

  const tokens: TokensStudioNode = {
    $schema: "https://unpkg.com/@tokens-studio/schema@latest",
    ...light,
  };

  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, JSON.stringify(tokens, null, 2) + "\n", "utf8");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
