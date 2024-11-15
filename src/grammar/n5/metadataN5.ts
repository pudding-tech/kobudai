import type { GrammarPoint } from "@/types/types";

export const desu: GrammarPoint = {
  slug: "です",
  title: "だ・です",
  subtitle: "To be (is, am, are)",
  titleRomaji: "da desu",
  tags: ["copula"]
};

export const godan: GrammarPoint = {
  slug: "godan-verb",
  title: "Godan verb",
  subtitle: "う-verb",
  tags: ["u", "u-verb", "uverb"]
};

export const godanNegative: GrammarPoint = {
  slug: "godan-negative",
  title: "Negative verb (godan)",
  subtitle: "～ない、～ません",
  tags: ["nai", "masen"]
};

export const godanNonPast: GrammarPoint = {
  slug: "godan-non-past",
  title: "Non-Past verb (godan)",
  subtitle: "～う、～ます",
  tags: ["u", "mas", "masu"]
};

export const godanPast: GrammarPoint = {
  slug: "godan-past",
  title: "Past verb (godan)",
  subtitle: "～った、～んだ、～いた、～いだ、～した、～ました",
  tags: ["tta", "nda", "ita", "ida", "shita", "mashita"]
};

// export const godanNegative: GrammarPoint = {
//   slug: "godan-negative",
//   title: "Godan verb (negative)",
//   subtitle: "～ない、～ません",
//   tags: ["nai", "masen"]
// };

// export const godanNonPast: GrammarPoint = {
//   slug: "godan-non-past",
//   title: "Godan verb (non-past)",
//   subtitle: "～う、～ます",
//   tags: ["u", "mas", "masu"]
// };

// export const godanPast: GrammarPoint = {
//   slug: "godan-past",
//   title: "Godan verb (past)",
//   subtitle: "～った、～んだ、～いた、～いだ、～した、～ました",
//   tags: ["tta", "nda", "ita", "ida", "shita", "mashita"]
// };

export const ha: GrammarPoint = {
  slug: "は",
  title: "は",
  subtitle: "Topic marking particle (As for...)",
  titleRomaji: "ha wa"
};

export const ichidan: GrammarPoint = {
  slug: "ichidan-verb",
  title: "Ichidan verb",
  subtitle: "る-verb (iru/eru verb)",
  tags: ["ru", "ru-verb", "ruverb"]
};

export const ichidanNegative: GrammarPoint = {
  slug: "ichidan-negative",
  title: "Negative verb (ichidan)",
  subtitle: "～ない、～ません",
  tags: ["nai", "masen"]
};

export const ichidanNonPast: GrammarPoint = {
  slug: "ichidan-non-past",
  title: "Non-past verb (ichidan)",
  subtitle: "～る、～ます",
  tags: ["ru", "mas", "masu"]
};

export const ichidanPast: GrammarPoint = {
  slug: "ichidan-past",
  title: "Past verb (ichidan)",
  subtitle: "～た、～ました",
  tags: ["ta", "mashita"]
};

// export const ichidanNegative: GrammarPoint = {
//   slug: "ichidan-negative",
//   title: "Ichidan verb (negative)",
//   subtitle: "～ない、～ません",
//   tags: ["nai", "masen"]
// };

// export const ichidanNonPast: GrammarPoint = {
//   slug: "ichidan-non-past",
//   title: "Ichidan verb (non-past)",
//   subtitle: "～る、～ます",
//   tags: ["ru", "mas", "masu"]
// };

// export const ichidanPast: GrammarPoint = {
//   slug: "ichidan-past",
//   title: "Ichidan verb (past)",
//   subtitle: "～た、～ました",
//   tags: ["ta", "mashita"]
// };

export const janai: GrammarPoint = {
  slug: "じゃない",
  title: "じゃない",
  subtitle: "Is not (negation)",
  titleRomaji: "janai",
  tags: ["nai"]
};

export const ka: GrammarPoint = {
  slug: "か",
  title: "か",
  subtitle: "Question marking particle",
  titleRomaji: "ka"
};

export const koko: GrammarPoint = {
  slug: "ここ",
  title: "ここ・そこ・あそこ・どこ",
  subtitle: "Here, There, Where",
  titleRomaji: "koko soko asoko doko"
};

export const kono: GrammarPoint = {
  slug: "この",
  title: "この・その・あの・どの",
  subtitle: "This ... , That ... , Which ...",
  titleRomaji: "kono sono ano dono"
};

export const kore: GrammarPoint = {
  slug: "これ",
  title: "これ・それ・あれ・どれ",
  subtitle: "This one, That one, Which one",
  titleRomaji: "kore sore are dore"
};

export const mo: GrammarPoint = {
  slug: "も",
  title: "も",
  subtitle: "Also, Too, Neither",
  titleRomaji: "mo"
};

export const ne: GrammarPoint = {
  slug: "ね",
  title: "ね",
  subtitle: "Isn't it? Right?",
  titleRomaji: "ne"
};

export const no: GrammarPoint = {
  slug: "の",
  title: "の",
  subtitle: "Indicates possesion, Relationship",
  titleRomaji: "no"
};

export const yo: GrammarPoint = {
  slug: "よ",
  title: "よ",
  subtitle: "Emphasis",
  titleRomaji: "yo"
};
