import type { Sublist } from "@/types/types";
import * as n5 from "../../n5/metadataN5";

export const genki1List: Sublist = {
  name: "Genki I",
  value: "genki1",
  sections: [
    {
      title: "CHAPTER 1",
      value: 1,
      grammarPoints: [
        n5.desu,
        n5.ha,
        n5.ka,
        n5.no
      ]
    },
    {
      title: "CHAPTER 2",
      value: 2,
      grammarPoints: [
        n5.kore,
        n5.kono,
        n5.koko,
        n5.mo,
        n5.janai,
        n5.ne,
        n5.yo
      ]
    },
    {
      title: "CHAPTER 3",
      value: 3,
      grammarPoints: [
        n5.godan,
        n5.ichidan,
        n5.godanNonPast,
        n5.ichidanNonPast,
        n5.godanNegative,
        n5.ichidanNegative,
      ]
    },
    {
      title: "CHAPTER 4",
      value: 4,
      grammarPoints: [
        n5.godanPast,
        n5.ichidanPast
      ]
    },
    {
      title: "CHAPTER 5",
      value: 5,
      grammarPoints: [
        n5.adjectivesI
      ]
    },
    {
      title: "CHAPTER 6",
      value: 6,
      grammarPoints: [
        n5.te
      ]
    },
    {
      title: "CHAPTER 7",
      value: 7,
      grammarPoints: [
        n5.teAdjective
      ]
    }
  ]
};
