import type { Sublist } from "@/types/types";
import * as n4 from "../../n4/metadataN4";

export const n4List: Sublist = {
  name: "N4",
  value: "n4",
  sections: [
    {
      title: "SECTION 1",
      value: 1,
      grammarPoints: [
        n4.ageruKureruMorau,
        n4.teAgeruKureruMorau,
        n4.teSumimasen,
        n4.teYokatta,
        n4.teKureteArigatou,
      ]
    },
    {
      title: "SECTION 2",
      value: 2,
      grammarPoints: [
        n4.potentialVerbs,
        n4.kamoshirenai,
        n4.shi,
        n4.sou,
        n4.mitai,
      ]
    },
    {
      title: "SECTION 3",
      value: 3,
      grammarPoints: [
        n4.volitionalVerbs,
        n4.volitionalToOmou,
        n4.gahoshi,
        n4.souda,
      ]
    },
    {
      title: "SECTION 4",
      value: 4,
      grammarPoints: [
        n4.teMiru,
        n4.teShimau,
        n4.teOku,
        n4.nagara,
      ]
    },
    {
      title: "SECTION 5",
      value: 5,
      grammarPoints: [
        n4.tara,
        n4.nara,
        n4.ba,
        n4.toIf,
      ]
    },
    {
      title: "SECTION 6",
      value: 6,
      grammarPoints: [
        n4.taradou,
        n4.bayokatta,
        n4.tte,
        n4.toIu,
      ]
    },
    {
      title: "SECTION 7",
      value: 7,
      grammarPoints: [
        n4.questionsInSentences,
        n4.hazu,
        n4.toIi,
        n4.naide,
      ]
    },
    {
      title: "SECTION 8",
      value: 8,
      grammarPoints: [
        n4.transitivityPairs,
        n4.niFrequency,
        n4.toki,
        n4.numberMo,
        n4.numberShika,
      ]
    },
    {
      title: "SECTION 9",
      value: 9,
      grammarPoints: [
        n4.yasuiNikui,
        n4.nakutemoii,
      ]
    },
    {
      title: "SECTION 10",
      value: 10,
      grammarPoints: [
        n4.sonkeigo,
        n4.kenjougo,
        n4.verbStemKudasai,
        n4.verbStemSuru,
        n4.teItadakemasenka,
      ]
    },
    {
      title: "SECTION 11",
      value: 11,
      grammarPoints: [
        n4.passiveSentences,
        n4.passiveVerbs,
        n4.causativeVerbs,
        n4.causativeSentences,
      ]
    },
    // {
    //   title: "SECTION 12",
    //   value: 12,
    //   grammarPoints: [
        
    //   ]
    // }
  ]
};
