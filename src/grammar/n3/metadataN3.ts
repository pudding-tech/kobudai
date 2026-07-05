import type { GrammarPoint } from "@/types/types";

const LEVEL = "N3";

export const toieba: GrammarPoint = {
  slug: "toieba",
  title: "といえば",
  subtitle: "Speaking of..., When it comes to...",
  titleRomaji: "toieba",
  level: LEVEL,
  tags: ["speaking of", "toieba"]
};

export const toori: GrammarPoint = {
  slug: "toori",
  title: "<ruby>通<rt>とお</rt></ruby>り",
  subtitle: "Exactly as..., Just as...",
  titleRomaji: "toori",
  titlePlain: "通り",
  level: LEVEL,
  tags: ["precisely", "in that way", "in the way that", "in accordance with", "as expected"]
};
