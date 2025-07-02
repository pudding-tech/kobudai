import type { Sublist } from "@/types/types";
import * as n5 from "../../n5/metadataN5";

export const n5List: Sublist = {
  name: "N5",
  value: "n5",
  sections: [
    {
      title: "SECTION 1",
      value: 1,
      grammarPoints: [
        n5.desu,
        n5.ha,
        n5.janai,
        n5.ka,
        n5.no
      ]
    },
    {
      title: "SECTION 2",
      value: 2,
      grammarPoints: [
        n5.kore,
        n5.kono,
        n5.koko,
        n5.mo,
        n5.ne,
        n5.yo
      ]
    },
    {
      title: "SECTION 3",
      value: 3,
      grammarPoints: [
        n5.godan,
        n5.ichidan,
        n5.godanNonPast,
        n5.ichidanNonPast,
        n5.godanNegative,
        n5.ichidanNegative
      ]
    },
    {
      title: "SECTION 4",
      value: 4,
      grammarPoints: [
        n5.godanPast,
        n5.ichidanPast,
        n5.godanPastNegative,
        n5.ichidanPastNegative
      ]
    },
    {
      title: "SECTION 5",
      value: 5,
      grammarPoints: [
        n5.adjectivesI,
        n5.adjectivesNa,
        n5.adverbs,
        n5.masenka,
        n5.qualifierSentences
      ]
    },
    {
      title: "SECTION 6",
      value: 6,
      grammarPoints: [
        n5.teVerb,
        n5.teAdjectiveNoun,
        n5.teKudasai,
        n5.naideKudasai
      ]
    },
    {
      title: "SECTION 7",
      value: 7,
      grammarPoints: [
        n5.teIru,
        n5.transitivityPairs,
        n5.maeni,
        n5.teKara
      ]
    },
    {
      title: "SECTION 8",
      value: 8,
      grammarPoints: [
        n5.imperativeVerbs,
        n5.tai,
        n5.temoii
      ]
    }
  ]
};
