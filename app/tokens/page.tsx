import { tokens } from "@/src/design-tokens/tokens";
import TokensClient from "./tokens-client";

export const metadata = {
  title: "Tokens",
  description: "Design tokens reference.",
};

type TokenRow = {
  key: string;
  value: unknown;
  darkValue?: unknown;
  type?: string;
  cssVar: string;
  group: string;
};

function groupFromKey(key: string) {
  return key.split(".")[0] ?? "token";
}

function toRows(): TokenRow[] {
  return Object.entries(tokens)
    .map(([key, t]) => ({
      key,
      value: t.value,
      darkValue: t.darkValue,
      type: t.type,
      cssVar: t.cssVar,
      group: groupFromKey(key),
    }))
    .sort((a, b) => a.key.localeCompare(b.key));
}

export default function TokensPage() {
  const rows = toRows();

  return <TokensClient rows={rows} />;
}

