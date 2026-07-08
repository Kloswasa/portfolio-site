import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

import type {
  MajorCaseStudy,
  MajorContentBlock,
  MajorSectionId,
} from "../../src/lib/case-studies/types";

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, "../../src/content/case-studies");

const MAJOR_SECTION_ORDER: MajorSectionId[] = [
  "brief",
  "research",
  "concept",
  "craft",
  "build",
  "outcome",
];

interface SectionDraft {
  id: MajorSectionId;
  eyebrow: string;
  title: string;
  titleEm?: string;
  blocks: MajorContentBlock[];
}

function slugToConstName(slug: string): string {
  const camel = slug
    .split("-")
    .map((part, index) =>
      index === 0 ? part : `${part.charAt(0).toUpperCase()}${part.slice(1)}`,
    )
    .join("");

  return `${camel}CaseStudy`;
}

function splitFrontmatter(
  source: string,
  sourceName: string,
): {
  frontmatter: string;
  body: string;
} {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    throw new Error(`${sourceName} must start with YAML frontmatter (--- ... ---)`);
  }

  return { frontmatter: match[1], body: match[2] };
}

function parseKeyValueBlock(text: string): Record<string, string> {
  const result: Record<string, string> = {};

  for (const line of text.trim().split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    result[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
  }

  return result;
}

function parseYamlList<T>(text: string, blockName: string): T[] {
  const items = parseYaml(text.trim()) as T[];

  if (!Array.isArray(items) || items.length === 0) {
    throw new Error(`${blockName} blocks require a YAML list with at least one item`);
  }

  return items;
}

function normalizeProseParagraph(paragraph: string): string {
  return paragraph
    .split("\n")
    .map((line) => line.replace(/\t/g, "    "))
    .join("\n")
    .trimEnd();
}

function trimProseBlockEdges(text: string): string {
  return text.replace(/^\n+/, "").replace(/\n+$/, "");
}

function parseProseBlock(text: string): MajorContentBlock {
  const paragraphs = trimProseBlockEdges(text)
    .split(/\n\s*\n/)
    .map((paragraph) => normalizeProseParagraph(paragraph))
    .filter((paragraph) => paragraph.trim().length > 0);

  return { type: "prose", paragraphs };
}

function parsePullquoteBlock(text: string): MajorContentBlock {
  const fields = parseKeyValueBlock(text);

  if (!fields.text || !fields.source) {
    throw new Error("pullquote blocks require text: and source: fields");
  }

  return { type: "pullquote", text: fields.text, source: fields.source };
}

function parseAnnotationBlock(text: string): MajorContentBlock {
  const fields = parseKeyValueBlock(text);

  if (!fields.text) {
    throw new Error("annotation blocks require a text: field");
  }

  return { type: "annotation", text: fields.text };
}

function parseCalloutBlock(text: string): MajorContentBlock {
  const fields = parseKeyValueBlock(text);

  if (!fields.label || !fields.title || !fields.body) {
    throw new Error("callout blocks require label:, title:, and body: fields");
  }

  return {
    type: "callout",
    label: fields.label,
    title: fields.title,
    body: fields.body,
  };
}

function parseArtifactBlock(text: string): MajorContentBlock {
  const fields = parseKeyValueBlock(text);

  if (!fields.variant || !fields.label || !fields.caption) {
    throw new Error("artifact blocks require variant:, label:, and caption: fields");
  }

  if (fields.variant !== "audit-map" && fields.variant !== "token-hierarchy") {
    throw new Error('artifact variant must be "audit-map" or "token-hierarchy"');
  }

  return {
    type: "artifact",
    variant: fields.variant,
    label: fields.label,
    caption: fields.caption,
    ...(fields.captionMeta ? { captionMeta: fields.captionMeta } : {}),
  };
}

function parseVideoBlock(text: string): MajorContentBlock {
  const fields = parseKeyValueBlock(text);

  if (!fields.src || !fields.poster || !fields.alt || !fields.caption) {
    throw new Error("video blocks require src, poster, alt, and caption fields");
  }

  return {
    type: "video",
    src: fields.src,
    poster: fields.poster,
    alt: fields.alt,
    caption: fields.caption,
  };
}

function parseStatsBlock(text: string): MajorContentBlock {
  const items = parseYamlList<{
    value: string;
    label: string;
    variant: string;
  }>(text, "stats");

  for (const item of items) {
    if (!item.value || !item.label || !item.variant) {
      throw new Error("stats items require value, label, and variant");
    }
    if (!["dark", "mid", "light"].includes(item.variant)) {
      throw new Error('stats variant must be "dark", "mid", or "light"');
    }
  }

  return {
    type: "stats",
    items: items.map((item) => ({
      value: item.value,
      label: item.label,
      variant: item.variant as "dark" | "mid" | "light",
    })),
  };
}

function parseFindingsBlock(text: string): MajorContentBlock {
  const items = parseYamlList<{
    num: string | number;
    label: string;
    title: string;
    body: string;
  }>(text, "findings").map((item) => ({
    ...item,
    num: String(item.num),
  }));

  for (const item of items) {
    if (!item.num || !item.label || !item.title || !item.body) {
      throw new Error("findings items require num, label, title, and body");
    }
  }

  return { type: "findings", items };
}

function parseTwoColBlock(text: string): MajorContentBlock {
  const items = parseYamlList<{ label: string; body: string }>(text, "twoCol");

  for (const item of items) {
    if (!item.label || !item.body) {
      throw new Error("twoCol items require label and body");
    }
  }

  return { type: "twoCol", items };
}

function parseProcessBlock(text: string): MajorContentBlock {
  const items = parseYamlList<{
    num: string | number;
    title: string;
    body: string;
  }>(text, "process").map((item) => ({
    ...item,
    num: String(item.num),
  }));

  for (const item of items) {
    if (!item.num || !item.title || !item.body) {
      throw new Error("process items require num, title, and body");
    }
  }

  return { type: "process", items };
}

function parseOutcomesBlock(text: string): MajorContentBlock {
  const items = parseYamlList<{
    value: string;
    label: string;
    body: string;
  }>(text, "outcomes");

  for (const item of items) {
    if (!item.value || !item.label || !item.body) {
      throw new Error("outcomes items require value, label, and body");
    }
  }

  return { type: "outcomes", items };
}

function parseComponentGridBlock(text: string): MajorContentBlock {
  const items = parseYamlList<{
    label: string;
    title: string;
    count: string;
    variant: string;
  }>(text, "componentGrid");

  for (const item of items) {
    if (!item.label || !item.title || !item.count || !item.variant) {
      throw new Error("componentGrid items require label, title, count, and variant");
    }
    if (!["primary", "dark", "mid", "deepest"].includes(item.variant)) {
      throw new Error(
        'componentGrid variant must be "primary", "dark", "mid", or "deepest"',
      );
    }
  }

  return {
    type: "componentGrid",
    items: items.map((item) => ({
      label: item.label,
      title: item.title,
      count: item.count,
      variant: item.variant as "primary" | "dark" | "mid" | "deepest",
    })),
  };
}

function parseImageBlock(text: string): MajorContentBlock {
  const fields = parseKeyValueBlock(text);

  if (!fields.src || !fields.alt) {
    throw new Error("image blocks require src: and alt: fields");
  }

  return {
    type: "image",
    src: fields.src,
    alt: fields.alt,
    ...(fields.caption ? { caption: fields.caption } : {}),
  };
}

function parseImagePairBlock(text: string): MajorContentBlock {
  const items = parseYamlList<{
    src: string;
    alt: string;
    caption: string;
  }>(text, "imagePair");

  for (const item of items) {
    if (!item.src || !item.alt || !item.caption) {
      throw new Error("imagePair items require src, alt, and caption");
    }
  }

  return { type: "imagePair", items };
}

function parseReflectionsBlock(text: string): MajorContentBlock {
  const items = text
    .trim()
    .split("\n")
    .map((line) => line.replace(/^\s*-\s+/, "").trim())
    .filter(Boolean);

  if (items.length === 0) {
    throw new Error("reflections blocks require at least one list item");
  }

  return { type: "reflections", items };
}

function parseEmptyBlock(
  type: "ornament" | "colorSpecimen" | "typeSpecimen",
): MajorContentBlock {
  return { type };
}

function parseBlock(type: string, text: string): MajorContentBlock {
  switch (type) {
    case "prose":
      return parseProseBlock(text);
    case "stats":
      return parseStatsBlock(text);
    case "pullquote":
      return parsePullquoteBlock(text);
    case "findings":
      return parseFindingsBlock(text);
    case "annotation":
      return parseAnnotationBlock(text);
    case "twoCol":
      return parseTwoColBlock(text);
    case "artifact":
      return parseArtifactBlock(text);
    case "process":
      return parseProcessBlock(text);
    case "callout":
      return parseCalloutBlock(text);
    case "ornament":
      return parseEmptyBlock("ornament");
    case "colorSpecimen":
      return parseEmptyBlock("colorSpecimen");
    case "typeSpecimen":
      return parseEmptyBlock("typeSpecimen");
    case "componentGrid":
      return parseComponentGridBlock(text);
    case "outcomes":
      return parseOutcomesBlock(text);
    case "reflections":
      return parseReflectionsBlock(text);
    case "image":
      return parseImageBlock(text);
    case "imagePair":
      return parseImagePairBlock(text);
    case "video":
      return parseVideoBlock(text);
    default:
      throw new Error(`Unsupported block type: ${type}`);
  }
}

function parseSections(body: string): Record<MajorSectionId, SectionDraft> {
  const sectionChunks = body
    .split(/^# /m)
    .map((chunk) => chunk.trim())
    .filter(Boolean);

  const sections = {} as Partial<Record<MajorSectionId, SectionDraft>>;

  for (const chunk of sectionChunks) {
    const [headerLine, ...rest] = chunk.split("\n");
    const sectionId = headerLine.trim() as MajorSectionId;

    if (!MAJOR_SECTION_ORDER.includes(sectionId)) {
      throw new Error(`Unknown section id: ${sectionId}`);
    }

    const content = rest.join("\n");
    const blockSplit = content.split(/^## /m);
    const metaText = blockSplit.shift()?.trim() ?? "";
    const meta = parseKeyValueBlock(metaText);

    if (!meta.eyebrow || !meta.title) {
      throw new Error(`Section "${sectionId}" requires eyebrow and title metadata`);
    }

    const blocks: MajorContentBlock[] = [];

    for (const blockChunk of blockSplit) {
      const trimmed = blockChunk.trim();
      if (!trimmed) continue;

      const newlineIdx = trimmed.indexOf("\n");
      const blockType = (
        newlineIdx === -1 ? trimmed : trimmed.slice(0, newlineIdx)
      ).trim();
      const blockText = newlineIdx === -1 ? "" : trimmed.slice(newlineIdx + 1);

      blocks.push(parseBlock(blockType, blockText));
    }

    sections[sectionId] = {
      id: sectionId,
      eyebrow: meta.eyebrow,
      title: meta.title,
      ...(meta.titleEm ? { titleEm: meta.titleEm } : {}),
      blocks,
    };
  }

  for (const sectionId of MAJOR_SECTION_ORDER) {
    if (!sections[sectionId]) {
      throw new Error(`Missing section: ${sectionId}`);
    }
  }

  return Object.fromEntries(
    MAJOR_SECTION_ORDER.map((sectionId) => [sectionId, sections[sectionId]]),
  ) as Record<MajorSectionId, SectionDraft>;
}

function generateTypeScript(slug: string, caseStudy: MajorCaseStudy): string {
  const payload = JSON.stringify(caseStudy, null, 2);
  const constName = slugToConstName(slug);
  const scriptName = `content:${slug}`;

  return `// Generated by npm run ${scriptName} — do not edit by hand.
// Edit src/content/case-studies/${slug}.md instead.

import type { MajorCaseStudy } from "@/src/lib/case-studies/types";

const ${constName} = ${payload} satisfies MajorCaseStudy;

export default ${constName};
`;
}

function compileCaseStudy(slug: string): void {
  const sourceName = `${slug}.md`;
  const sourcePath = join(contentDir, sourceName);
  const outputPath = join(contentDir, `${slug}.ts`);
  const source = readFileSync(sourcePath, "utf8");
  const { frontmatter, body } = splitFrontmatter(source, sourceName);
  const meta = parseYaml(frontmatter) as Pick<MajorCaseStudy, "kind" | "slug" | "hero">;
  const parsedSections = parseSections(body);

  if (meta.slug !== slug) {
    throw new Error(
      `${sourceName} frontmatter slug (${meta.slug}) does not match file slug (${slug})`,
    );
  }

  const caseStudy: MajorCaseStudy = {
    kind: meta.kind,
    slug: meta.slug,
    hero: meta.hero,
    sections: Object.fromEntries(
      MAJOR_SECTION_ORDER.map((sectionId) => [
        sectionId,
        {
          eyebrow: parsedSections[sectionId].eyebrow,
          title: parsedSections[sectionId].title,
          ...(parsedSections[sectionId].titleEm
            ? { titleEm: parsedSections[sectionId].titleEm }
            : {}),
          blocks: parsedSections[sectionId].blocks,
        },
      ]),
    ) as MajorCaseStudy["sections"],
  };

  writeFileSync(outputPath, generateTypeScript(slug, caseStudy));
  console.log(`Wrote ${outputPath}`);
}

function main(): void {
  const slug = process.argv[2] ?? "quiz-game";
  compileCaseStudy(slug);
}

main();
