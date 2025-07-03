import type { GrammarPoint } from "@/types/types";

export const adjectivesI: GrammarPoint = {
  slug: "い-adjective",
  title: "い-Adjective",
  subtitle: "Adjectives ending in い",
  titleRomaji: "i adjective",
  tags: ["i-adjectives", "adjective", "i", "true adjective"]
};

export const adjectivesNa: GrammarPoint = {
  slug: "な-adjective",
  title: "な-Adjective",
  subtitle: "Adjectives that are also nouns",
  titleRomaji: "na adjective",
  tags: ["na-adjectives", "adjective", "na", "noun", "noun adjective"]
};

export const adverbs: GrammarPoint = {
  slug: "adverbs",
  title: "Adverbs",
  subtitle: "～く、～に",
  titleRomaji: "adverbs",
  tags: ["adverbs", "adverb", "adverbial", "adverbials", "ku", "ni"]
};

export const desu: GrammarPoint = {
  slug: "です",
  title: "だ・です",
  subtitle: "To be (is, am, are), Politeness marker",
  titleRomaji: "da desu",
  tags: ["copula"]
};

export const godan: GrammarPoint = {
  slug: "godan-verb",
  title: "Godan verb",
  subtitle: "う-verb",
  tags: ["u", "u-verb", "uverb", "verbs"]
};

export const godanNegative: GrammarPoint = {
  slug: "godan-negative",
  title: "Negative verb (godan)",
  // title: "Godan verb (negative)",
  subtitle: "～ない、～ません",
  tags: ["nai", "masen", "verbs"]
};

export const godanNonPast: GrammarPoint = {
  slug: "godan-non-past",
  title: "Non-past verb (godan)",
  // title: "Godan verb (non-past)",
  // subtitle: "～う、～ます",
  subtitle: "～う、～つ、～る、～む、～ぶ、～ぬ、～く、～ぐ、～す、～ます",
  tags: ["u", "tsu", "ru", "mu", "bu", "nu", "ku", "gu", "su", "masu", "mas", "verbs"]
};

export const godanPast: GrammarPoint = {
  slug: "godan-past",
  title: "Past verb (godan)",
  // title: "Godan verb (past)",
  subtitle: "～った、～んだ、～いた、～いだ、～した、～ました",
  tags: ["tta", "nda", "ita", "ida", "shita", "mashita", "verbs"]
};

export const godanPastNegative: GrammarPoint = {
  slug: "godan-past-negative",
  title: "Past negative verb (godan)",
  // title: "Godan verb (past negative)",
  subtitle: "～なかった、～ませんでした",
  tags: ["nakatta", "masen deshita", "verbs"]
};

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
  tags: ["ru", "ru-verb", "ruverb", "verbs"]
};

export const ichidanNegative: GrammarPoint = {
  slug: "ichidan-negative",
  title: "Negative verb (ichidan)",
  // title: "Ichidan verb (negative)",
  subtitle: "～ない、～ません",
  tags: ["nai", "masen", "verbs"]
};

export const ichidanNonPast: GrammarPoint = {
  slug: "ichidan-non-past",
  title: "Non-past verb (ichidan)",
  // title: "Ichidan verb (non-past)",
  subtitle: "～る、～ます",
  tags: ["ru", "masu", "mas", "verbs"]
};

export const ichidanPast: GrammarPoint = {
  slug: "ichidan-past",
  title: "Past verb (ichidan)",
  // title: "Ichidan verb (past)",
  subtitle: "～た、～ました",
  tags: ["ta", "mashita", "verbs"]
};

export const ichidanPastNegative: GrammarPoint = {
  slug: "ichidan-past-negative",
  title: "Past negative verb (ichidan)",
  subtitle: "～なかった、～ませんでした",
  tags: ["nakatta", "masen deshita", "verbs"]
};

export const imperativeVerbs: GrammarPoint = {
  slug: "imperative-verb",
  title: "Imperative verb",
  subtitle: "（～え）、～ろ (command to do)",
  tags: ["imperative", "commands", "requests", "verb form", "verb conjugation"]
};

export const janai: GrammarPoint = {
  slug: "じゃない",
  title: "じゃない",
  subtitle: "Is not (negation)",
  titleRomaji: "janai",
  tags: ["nai", "dehaarimasen", "dehanai", "jaarimasen", "negative", "ではありません", "ではない", "じゃありません"]
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

export const maeni: GrammarPoint = {
  slug: "前に",
  title: "前に",
  subtitle: "Before, In front of",
  titleRomaji: "mae ni",
  tags: ["before", "prior to", "mae ni", "front", "preceding"]
};

export const masenka: GrammarPoint = {
  slug: "ませんか",
  title: "～ませんか？",
  subtitle: "Won't you...? Would you like to...? (Invitation)",
  titleRomaji: "masenka",
  tags: ["masenka", "invitation", "offer", "request", "polite"]
};

export const mo: GrammarPoint = {
  slug: "も",
  title: "も",
  subtitle: "Also, Too, Neither",
  titleRomaji: "mo"
};

export const naideKudasai: GrammarPoint = {
  slug: "ないでください",
  title: "～ないでください",
  subtitle: "Please don't do...",
  titleRomaji: "naidekudasai",
  tags: ["please don't", "request", "negative form", "kudasai", "polite request"]
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

export const qualifierSentences: GrammarPoint = {
  slug: "qualifier-sentences",
  title: "Sentence + noun",
  subtitle: "Using sentences to qualify nouns",
  titleRomaji: "Sentence plus noun",
  tags: ["qualifier", "sentences"]
};

export const tai: GrammarPoint = {
  slug: "たい",
  title: "～たい",
  subtitle: "Want to do...",
  titleRomaji: "tai",
  tags: ["want to", "desire", "verb", "verbing", "wanting", "verb form", "verb conjugation"]
};

export const teIru: GrammarPoint = {
  slug: "ている",
  title: "～ている",
  subtitle: "Doing, In a state of being",
  titleRomaji: "teiru",
  tags: ["te iru", "doing", "state", "resulting state", "intransitive", "transitive"]
};

export const teKara: GrammarPoint = {
  slug: "てから",
  title: "～てから",
  subtitle: "After doing...",
  titleRomaji: "tekara",
  tags: ["after", "te kara", "doing", "verbing", "action", "sequence", "order"]
};

export const teKudasai: GrammarPoint = {
  slug: "てください",
  title: "～てください",
  subtitle: "Please do...",
  titleRomaji: "tekudasai",
  tags: ["please", "request", "te form", "kudasai", "polite request"]
};

export const temoii: GrammarPoint = {
  slug: "てもいい",
  title: "～てもいい",
  subtitle: "It's okay to, You may (Permission)",
  titleRomaji: "temoii",
  tags: ["temoii", "permission", "allowance", "it's okay to", "you may"]
};

export const teVerb: GrammarPoint = {
  slug: "て-verb",
  title: "て-form (verb)",
  subtitle: "～って、～んで、～いて、～いで、～して、～て",
  titleRomaji: "te form (verb)",
  tags: ["te", "te", "te", "te", "te", "te", "te-form", "teform", "verbs", "conjunctive", "connecting", "clauses", "requests", "commands"]
};

export const teAdjectiveNoun: GrammarPoint = {
  slug: "て-adjective-noun",
  title: "て-form (adjective, noun)",
  subtitle: "～くて、～で",
  titleRomaji: "te form (adjective, noun)",
  tags: ["te", "te", "te", "te", "te", "te", "te-form", "teform", "adjective", "adjectives", "noun", "conjunctive", "connecting", "clauses"]
};

export const transitivityPairs: GrammarPoint = {
  slug: "transitivity-pairs",
  title: "Transitivity Pairs",
  subtitle: "Understanding transitive and intransitive verbs",
  tags: ["transitivity", "pairs", "transitive", "intransitive", "verbs", "verb pairs", "action verbs"]
};

export const yo: GrammarPoint = {
  slug: "よ",
  title: "よ",
  subtitle: "Emphasis",
  titleRomaji: "yo"
};
