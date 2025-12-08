import type { GrammarPoint } from "@/types/types";

const LEVEL = "N5";

export const adjectivesI: GrammarPoint = {
  slug: "い-adjective",
  title: "い-Adjective",
  subtitle: "Adjectives ending in い",
  titleRomaji: "i adjective",
  level: LEVEL,
  tags: ["i-adjectives", "adjective", "i", "true adjective"]
};

export const adjectivesNa: GrammarPoint = {
  slug: "な-adjective",
  title: "な-Adjective",
  subtitle: "Adjectives that are also nouns",
  titleRomaji: "na adjective",
  level: LEVEL,
  tags: ["na-adjectives", "adjective", "na", "noun", "noun adjective"]
};

export const adverbs: GrammarPoint = {
  slug: "adverbs",
  title: "Adverbs",
  subtitle: "～く、～に",
  titleRomaji: "adverbs",
  level: LEVEL,
  tags: ["adverbs", "adverb", "adverbial", "adverbials", "ku", "ni"]
};

export const counters: GrammarPoint = {
  slug: "counters",
  title: "Counters",
  subtitle: "Counting units and objects",
  titleRomaji: "counters",
  level: LEVEL,
  tags: ["counters", "counting", "units", "objects", "tsu", "nin", "dai", "mai", "hon", "satsu", "ko", "hiki", "hito"]
};

export const de: GrammarPoint = {
  slug: "で",
  title: "で",
  subtitle: "At, In, By (means of), Location particle",
  titleRomaji: "de",
  level: LEVEL,
  tags: ["location", "particle", "by", "at", "in"]
};

export const deshita: GrammarPoint = {
  slug: "だった-でした",
  title: "だった・でした",
  subtitle: "Was, Were",
  titleRomaji: "datta deshita",
  level: LEVEL,
  tags: ["past", "da", "desu", "copula"]
};

export const desu: GrammarPoint = {
  slug: "です",
  title: "だ・です",
  subtitle: "To be (is, am, are), Politeness marker",
  titleRomaji: "da desu",
  level: LEVEL,
  tags: ["copula"]
};

export const gaAruIru: GrammarPoint = {
  slug: "がある-いる",
  title: "～が<ruby>有<rt>あ</rt></ruby>る・～が<ruby>居<rt>い</rt></ruby>る",
  subtitle: "There is/are (existence)",
  titleRomaji: "ga aru ga iru",
  titlePlain: "～がある・～がいる",
  level: LEVEL,
  tags: ["existence", "there is", "there are", "verbs"]
};

export const godan: GrammarPoint = {
  slug: "godan-verb",
  title: "Godan verb",
  subtitle: "う-verb",
  level: LEVEL,
  tags: ["u", "u-verb", "uverb", "verbs"]
};

export const godanNegative: GrammarPoint = {
  slug: "godan-negative",
  title: "Negative verb (godan)",
  // title: "Godan verb (negative)",
  subtitle: "～ない、～ません",
  level: LEVEL,
  tags: ["nai", "masen", "verbs"]
};

export const godanNonPast: GrammarPoint = {
  slug: "godan-non-past",
  title: "Non-past verb (godan)",
  // title: "Godan verb (non-past)",
  // subtitle: "～う、～ます",
  subtitle: "～う、～つ、～る、～む、～ぶ、～ぬ、～く、～ぐ、～す、～ます",
  level: LEVEL,
  tags: ["u", "tsu", "ru", "mu", "bu", "nu", "ku", "gu", "su", "masu", "mas", "verbs"]
};

export const godanPast: GrammarPoint = {
  slug: "godan-past",
  title: "Past verb (godan)",
  // title: "Godan verb (past)",
  subtitle: "～った、～んだ、～いた、～いだ、～した、～ました",
  level: LEVEL,
  tags: ["tta", "nda", "ita", "ida", "shita", "mashita", "verbs"]
};

export const godanPastNegative: GrammarPoint = {
  slug: "godan-past-negative",
  title: "Past negative verb (godan)",
  // title: "Godan verb (past negative)",
  subtitle: "～なかった、～ませんでした",
  level: LEVEL,
  tags: ["nakatta", "masen deshita", "verbs"]
};

export const ha: GrammarPoint = {
  slug: "は",
  title: "は",
  subtitle: "Topic marking particle (As for...)",
  titleRomaji: "ha wa",
  level: LEVEL
};

export const he: GrammarPoint = {
  slug: "へ",
  title: "へ",
  subtitle: "Direction particle (to, towards)",
  titleRomaji: "he e",
  level: LEVEL,
  tags: ["direction", "particle", "to", "towards"]
};

export const ichidan: GrammarPoint = {
  slug: "ichidan-verb",
  title: "Ichidan verb",
  subtitle: "る-verb (iru/eru verb)",
  level: LEVEL,
  tags: ["ru", "ru-verb", "ruverb", "verbs"]
};

export const ichidanNegative: GrammarPoint = {
  slug: "ichidan-negative",
  title: "Negative verb (ichidan)",
  // title: "Ichidan verb (negative)",
  subtitle: "～ない、～ません",
  level: LEVEL,
  tags: ["nai", "masen", "verbs"]
};

export const ichidanNonPast: GrammarPoint = {
  slug: "ichidan-non-past",
  title: "Non-past verb (ichidan)",
  // title: "Ichidan verb (non-past)",
  subtitle: "～る、～ます",
  level: LEVEL,
  tags: ["ru", "masu", "mas", "verbs"]
};

export const ichidanPast: GrammarPoint = {
  slug: "ichidan-past",
  title: "Past verb (ichidan)",
  // title: "Ichidan verb (past)",
  subtitle: "～た、～ました",
  level: LEVEL,
  tags: ["ta", "mashita", "verbs"]
};

export const ichidanPastNegative: GrammarPoint = {
  slug: "ichidan-past-negative",
  title: "Past negative verb (ichidan)",
  subtitle: "～なかった、～ませんでした",
  level: LEVEL,
  tags: ["nakatta", "masen deshita", "verbs"]
};

export const imperativeVerbs: GrammarPoint = {
  slug: "imperative-verb",
  title: "Imperative verb",
  subtitle: "（～え）、～ろ (command to do)",
  level: LEVEL,
  tags: ["imperative", "commands", "requests", "verb form", "verb conjugation"]
};

export const janai: GrammarPoint = {
  slug: "じゃない",
  title: "じゃない",
  subtitle: "Is not (negation)",
  titleRomaji: "janai",
  level: LEVEL,
  tags: ["nai", "dehaarimasen", "dehanai", "jaarimasen", "negative", "ではありません", "ではない", "じゃありません"]
};

export const ka: GrammarPoint = {
  slug: "か",
  title: "か",
  subtitle: "Question marking particle",
  titleRomaji: "ka",
  level: LEVEL
};

export const kara: GrammarPoint = {
  slug: "から",
  title: "から",
  subtitle: "Because, Since, So",
  titleRomaji: "kara",
  level: LEVEL
};

export const koko: GrammarPoint = {
  slug: "ここ",
  title: "ここ・そこ・あそこ・どこ",
  subtitle: "Here, There, Where",
  titleRomaji: "koko soko asoko doko",
  level: LEVEL
};

export const kono: GrammarPoint = {
  slug: "この",
  title: "この・その・あの・どの",
  subtitle: "This ... , That ... , Which ...",
  titleRomaji: "kono sono ano dono",
  level: LEVEL
};

export const kore: GrammarPoint = {
  slug: "これ",
  title: "これ・それ・あれ・どれ",
  subtitle: "This one, That one, Which one",
  titleRomaji: "kore sore are dore",
  level: LEVEL
};

export const maeni: GrammarPoint = {
  slug: "前に",
  title: "<ruby>前<rt>まえ</rt></ruby>に",
  subtitle: "Before, In front of",
  titleRomaji: "maeni",
  titlePlain: "前に",
  level: LEVEL,
  tags: ["before", "prior to", "mae ni", "front", "preceding"]
};

export const masenka: GrammarPoint = {
  slug: "ませんか",
  title: "～ませんか？",
  subtitle: "Won't you...? Would you like to...? (Invitation)",
  titleRomaji: "masenka",
  level: LEVEL,
  tags: ["masenka", "invitation", "offer", "request", "polite"]
};

export const mo: GrammarPoint = {
  slug: "も",
  title: "も",
  subtitle: "Also, Too, Neither",
  titleRomaji: "mo",
  level: LEVEL
};

export const naideKudasai: GrammarPoint = {
  slug: "ないでください",
  title: "～ないでください",
  subtitle: "Please don't do...",
  titleRomaji: "naidekudasai",
  level: LEVEL,
  tags: ["please don't", "request", "negative form", "kudasai", "polite request"]
};

export const ne: GrammarPoint = {
  slug: "ね",
  title: "ね",
  subtitle: "Isn't it? Right?",
  titleRomaji: "ne",
  level: LEVEL
};

export const ni: GrammarPoint = {
  slug: "に",
  title: "に",
  subtitle: "Indicates location, direction, time",
  titleRomaji: "ni",
  level: LEVEL,
  tags: ["direction", "location", "time", "particle"]
};

export const no: GrammarPoint = {
  slug: "の",
  title: "の",
  subtitle: "Indicates possesion, Relationship",
  titleRomaji: "no",
  level: LEVEL
};

export const qualifierSentences: GrammarPoint = {
  slug: "qualifier-sentences",
  title: "Sentence + noun",
  subtitle: "Using sentences to qualify nouns",
  titleRomaji: "Sentence plus noun",
  level: LEVEL,
  tags: ["qualifier", "sentences"]
};

export const sukiKirai: GrammarPoint = {
  slug: "好き-嫌い",
  title: "<ruby>好<rt>す</rt></ruby>き・<ruby>嫌<rt>きら</rt></ruby>い",
  subtitle: "Likes and dislikes",
  titleRomaji: "suki kirai",
  titlePlain: "好き・嫌い",
  level: LEVEL,
  tags: ["like", "dislike", "preferences", "feelings"]
};

export const tai: GrammarPoint = {
  slug: "たい",
  title: "～たい",
  subtitle: "Want to do...",
  titleRomaji: "tai",
  level: LEVEL,
  tags: ["want to", "desire", "verb", "verbing", "wanting", "verb form", "verb conjugation", "tagaru", "tagarimasu", "appear to want to"]
};

export const teHaIkenai: GrammarPoint = {
  slug: "てはいけない",
  title: "～てはいけない",
  subtitle: "Must not do...",
  titleRomaji: "tehaikenai",
  level: LEVEL,
  tags: ["must not", "prohibition", "negative", "te form", "verb form", "verb conjugation", "forbidden"]
};

export const teIru: GrammarPoint = {
  slug: "ている",
  title: "～ている",
  subtitle: "Doing, In a state of being",
  titleRomaji: "teiru",
  level: LEVEL,
  tags: ["te iru", "doing", "state", "resulting state", "intransitive", "transitive"]
};

export const teKara: GrammarPoint = {
  slug: "てから",
  title: "～てから",
  subtitle: "After doing...",
  titleRomaji: "tekara",
  level: LEVEL,
  tags: ["after", "te kara", "doing", "verbing", "action", "sequence", "order"]
};

export const teKudasai: GrammarPoint = {
  slug: "てください",
  title: "～てください",
  subtitle: "Please do...",
  titleRomaji: "tekudasai",
  level: LEVEL,
  tags: ["please", "request", "te form", "kudasai", "polite request"]
};

export const temoii: GrammarPoint = {
  slug: "てもいい",
  title: "～てもいい",
  subtitle: "It's okay to, You may (Permission)",
  titleRomaji: "temoii",
  level: LEVEL,
  tags: ["temoii", "permission", "allowance", "it's okay to", "you may"]
};

export const teVerb: GrammarPoint = {
  slug: "て-verb",
  title: "て-form (verb)",
  subtitle: "～って、～んで、～いて、～いで、～して、～て",
  titleRomaji: "te form (verb)",
  level: LEVEL,
  tags: ["te", "te", "te", "te", "te", "te", "te-form", "teform", "verbs", "conjunctive", "connecting", "clauses", "requests", "commands"]
};

export const teAdjectiveNoun: GrammarPoint = {
  slug: "て-adjective-noun",
  title: "て-form (adjective, noun)",
  subtitle: "～くて、～で",
  titleRomaji: "te form (adjective, noun)",
  level: LEVEL,
  tags: ["te", "te", "te", "te", "te", "te", "te-form", "teform", "adjective", "adjectives", "noun", "conjunctive", "connecting", "clauses"]
};

export const to: GrammarPoint = {
  slug: "と",
  title: "と",
  subtitle: "And, with",
  titleRomaji: "to",
  level: LEVEL,
  tags: ["and", "with", "particle"]
};

export const transitivityPairs: GrammarPoint = {
  slug: "transitivity-pairs",
  title: "Transitivity Pairs",
  subtitle: "Understanding transitive and intransitive verbs",
  level: LEVEL,
  tags: ["transitivity", "pairs", "transitive", "intransitive", "verbs", "verb pairs", "action verbs"]
};

export const wo: GrammarPoint = {
  slug: "を",
  title: "を",
  subtitle: "Direct object marking particle",
  titleRomaji: "wo o",
  level: LEVEL,
  tags: ["object", "particle", "direct object", "wo", "o"]
};

export const ya: GrammarPoint = {
  slug: "や",
  title: "や",
  subtitle: "And such, among other things",
  titleRomaji: "ya",
  level: LEVEL,
  tags: ["and such", "non-exhaustive list", "とか", "toka", "particle"]
};

export const yo: GrammarPoint = {
  slug: "よ",
  title: "よ",
  subtitle: "Emphasis",
  titleRomaji: "yo",
  level: LEVEL
};
