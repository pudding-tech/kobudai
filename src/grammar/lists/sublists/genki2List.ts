import type { Sublist } from "@/types/types";
import * as n4 from "../../n4/metadataN4";
import { adverbs, maeni, qualifierSentences, tekara } from "../../n5/metadataN5";

export const genki2List: Sublist = {
  name: "Genki II",
  value: "genki2",
  sections: [
    {
      title: "CHAPTER 13",
      value: 1,
      grammarPoints: [
        n4.potentialVerbs,
        n4.shi,
        n4.sou,
        n4.temiru,
        n4.nara,
        n4.niFrequency,
        adverbs
      ]
    },
    {
      title: "CHAPTER 14",
      value: 2,
      grammarPoints: [
        n4.gahoshi,
        n4.kamoshirenai,
        n4.ageruKureruMorau,
        n4.taradou,
        n4.numberMo,
        n4.numberShika
      ]
    },
    {
      title: "CHAPTER 15",
      value: 3,
      grammarPoints: [
        n4.volitionalVerbs,
        n4.volitionalToOmou,
        n4.teoku,
        qualifierSentences
      ]
    },
    {
      title: "CHAPTER 16",
      value: 4,
      grammarPoints: [
        n4.teAgeruKureruMorau,
        n4.teItadakemasenka
      ]
    },
    {
      title: "CHAPTER 17",
      value: 5,
      grammarPoints: [
        n4.souda,
        n4.tte,
        n4.tara,
        n4.nakutemoii,
        n4.mitai,
        maeni,
        tekara
      ]
    },
    {
      title: "CHAPTER 19",
      value: 7,
      grammarPoints: [
        n4.sonkeigo,
        n4.verbStemKudasai
      ]
    },
    {
      title: "CHAPTER 20",
      value: 8,
      grammarPoints: [
        n4.kenjougo,
        n4.verbStemSuru
      ]
    },
    {
      title: "CHAPTER 22",
      value: 10,
      grammarPoints: [
        n4.ba
      ]
    }
  ]
};
