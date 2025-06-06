import type { Sublist } from "@/types/types";
import * as n4 from "../../n4/metadataN4";
import { adverbs } from "../../n5/metadataN5";

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
        n4.givingReceiving,
      ]
    },
    {
      title: "CHAPTER 15",
      value: 3,
      grammarPoints: [
        n4.volitionalVerbs
      ]
    },
    {
      title: "CHAPTER 17",
      value: 5,
      grammarPoints: [
        n4.tara
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
