import type { Component } from "vue";
import type { GrammarComponent } from "@/types/types";
import * as n5 from "./n5/metadataN5";
import * as n4 from "./n4/metadataN4";

const processImport = (mod: { default: Component, title: string }) => {
  return { component: mod.default, meta: { title: mod.title }};
};

export const grammarIndex: Record<string, () => Promise<GrammarComponent>> = {
  /* -- */
  /* N5 */
  /* -- */
  [n5.adjectivesI.slug]: () => import("./n5/AdjectivesI.vue").then(processImport),
  [n5.adjectivesNa.slug]: () => import("./n5/AdjectivesNa.vue").then(processImport),
  [n5.adverbs.slug]: () => import("./n5/Adverbs.vue").then(processImport),
  [n5.desu.slug]: () => import("./n5/Desu.vue").then(processImport),
  [n5.godan.slug]: () => import("./n5/Godan.vue").then(processImport),
  [n5.godanNegative.slug]: () => import("./n5/GodanNegative.vue").then(processImport),
  [n5.godanNonPast.slug]: () => import("./n5/GodanNonPast.vue").then(processImport),
  [n5.godanPast.slug]: () => import("./n5/GodanPast.vue").then(processImport),
  [n5.ichidan.slug]: () => import("./n5/Ichidan.vue").then(processImport),
  [n5.ichidanNegative.slug]: () => import("./n5/IchidanNegative.vue").then(processImport),
  [n5.ichidanNonPast.slug]: () => import("./n5/IchidanNonPast.vue").then(processImport),
  [n5.ichidanPast.slug]: () => import("./n5/IchidanPast.vue").then(processImport),
  [n5.ha.slug]: () => import("./n5/Ha.vue").then(processImport),
  [n5.janai.slug]: () => import("./n5/Janai.vue").then(processImport),
  [n5.ka.slug]: () => import("./n5/Ka.vue").then(processImport),
  [n5.koko.slug]: () => import("./n5/Koko.vue").then(processImport),
  [n5.kono.slug]: () => import("./n5/Kono.vue").then(processImport),
  [n5.kore.slug]: () => import("./n5/Kore.vue").then(processImport),
  [n5.maeni.slug]: () => import("./n5/Maeni.vue").then(processImport),
  [n5.masenka.slug]: () => import("./n5/Masenka.vue").then(processImport),
  [n5.mo.slug]: () => import("./n5/Mo.vue").then(processImport),
  [n5.ne.slug]: () => import("./n5/Ne.vue").then(processImport),
  [n5.no.slug]: () => import("./n5/No.vue").then(processImport),
  [n5.qualifierSentences.slug]: () => import("./n5/QualifierSentences.vue").then(processImport),
  [n5.tekara.slug]: () => import("./n5/Tekara.vue").then(processImport),
  [n5.temoii.slug]: () => import("./n5/Temoii.vue").then(processImport),
  [n5.teVerb.slug]: () => import("./n5/TeVerb.vue").then(processImport),
  [n5.teAdjectiveNoun.slug]: () => import("./n5/TeAdjectiveNoun.vue").then(processImport),
  [n5.yo.slug]: () => import("./n5/Yo.vue").then(processImport),
  /* -- */
  /* N4 */
  /* -- */
  [n4.ba.slug]: () => import("./n4/Ba.vue").then(processImport),
  [n4.gahoshi.slug]: () => import("./n4/GaHoshi.vue").then(processImport),
  [n4.ageruKureruMorau.slug]: () => import("./n4/AgeruKureruMorau.vue").then(processImport),
  [n4.kamoshirenai.slug]: () => import("./n4/Kamoshirenai.vue").then(processImport),
  [n4.kenjougo.slug]: () => import("./n4/Kenjougo.vue").then(processImport),
  [n4.mitai.slug]: () => import("./n4/Mitai.vue").then(processImport),
  [n4.naide.slug]: () => import("./n4/Naide.vue").then(processImport),
  [n4.nakutemoii.slug]: () => import("./n4/Nakutemoii.vue").then(processImport),
  [n4.nara.slug]: () => import("./n4/Nara.vue").then(processImport),
  [n4.niFrequency.slug]: () => import("./n4/Ni-Frequency.vue").then(processImport),
  [n4.numberMo.slug]: () => import("./n4/NumberMo.vue").then(processImport),
  [n4.numberShika.slug]: () => import("./n4/NumberShika.vue").then(processImport),
  [n4.verbStemKudasai.slug]: () => import("./n4/VerbStemKudasai.vue").then(processImport),
  [n4.verbStemSuru.slug]: () => import("./n4/VerbStemSuru.vue").then(processImport),
  [n4.potentialVerbs.slug]: () => import("./n4/PotentialVerbs.vue").then(processImport),
  [n4.shi.slug]: () => import("./n4/Shi.vue").then(processImport),
  [n4.sonkeigo.slug]: () => import("./n4/Sonkeigo.vue").then(processImport),
  [n4.sou.slug]: () => import("./n4/Sou.vue").then(processImport),
  [n4.souda.slug]: () => import("./n4/Souda.vue").then(processImport),
  [n4.tara.slug]: () => import("./n4/Tara.vue").then(processImport),
  [n4.taradou.slug]: () => import("./n4/TaraDou.vue").then(processImport),
  [n4.teAgeruKureruMorau.slug]: () => import("./n4/TeAgeruKureruMorau.vue").then(processImport),
  [n4.teItadakemasenka.slug]: () => import("./n4/TeItadakemasenka.vue").then(processImport),
  [n4.temiru.slug]: () => import("./n4/Temiru.vue").then(processImport),
  [n4.teoku.slug]: () => import("./n4/Teoku.vue").then(processImport),
  [n4.teSumimasen.slug]: () => import("./n4/TeSumimasen.vue").then(processImport),
  [n4.toIi.slug]: () => import("./n4/ToIi.vue").then(processImport),
  [n4.toki.slug]: () => import("./n4/Toki.vue").then(processImport),
  [n4.tte.slug]: () => import("./n4/Tte.vue").then(processImport),
  [n4.volitionalVerbs.slug]: () => import("./n4/VolitionalVerbs.vue").then(processImport),
  [n4.volitionalToOmou.slug]: () => import("./n4/VolitionalToOmou.vue").then(processImport)
};
