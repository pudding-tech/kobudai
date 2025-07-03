import type { Sublist } from "@/types/types";
import * as n4 from "../../n4/metadataN4";
import { adverbs, maeni, qualifierSentences, teKara, transitivityPairs } from "../../n5/metadataN5";

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
        n4.teMiru,
        n4.nara,
        n4.niFrequency,
        adverbs
      ]
    },
    {
      title: "CHAPTER 14",
      value: 2,
      grammarPoints: [
        n4.gaHoshii,
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
        n4.teOku,
        qualifierSentences
      ]
    },
    {
      title: "CHAPTER 16",
      value: 4,
      grammarPoints: [
        n4.teAgeruKureruMorau,
        n4.teItadakemasenka,
        n4.toIi,
        n4.toki,
        n4.teSumimasen
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
        teKara
      ]
    },
    {
      title: "CHAPTER 18",
      value: 6,
      grammarPoints: [
        transitivityPairs,
        n4.teShimau,
        n4.toIf,
        n4.nagara,
        n4.bayokatta
      ]
    },
    {
      title: "CHAPTER 19",
      value: 7,
      grammarPoints: [
        n4.sonkeigo,
        n4.verbStemKudasai,
        n4.teKureteArigatou,
        n4.teYokatta,
        n4.hazu
      ]
    },
    {
      title: "CHAPTER 20",
      value: 8,
      grammarPoints: [
        n4.kenjougo,
        n4.verbStemSuru,
        n4.naide,
        n4.questionsInSentences,
        n4.toIu,
        n4.yasuiNikui
      ]
    },
    {
      title: "CHAPTER 21",
      value: 9,
      grammarPoints: [
        n4.passiveVerbs,
        n4.passiveSentences,
        n4.teAru,
        n4.aidaNi,
        n4.adjectiveSuru,
        n4.teHoshii
      ]
    },
    {
      title: "CHAPTER 22",
      value: 10,
      grammarPoints: [
        n4.causativeVerbs,
        n4.causativeSentences,
        n4.nasai,
        n4.ba,
        n4.noni,
        n4.noyouni
      ]
    }
  ]
};
