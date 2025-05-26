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
  [n5.mo.slug]: () => import("./n5/Mo.vue").then(processImport),
  [n5.ne.slug]: () => import("./n5/Ne.vue").then(processImport),
  [n5.no.slug]: () => import("./n5/No.vue").then(processImport),
  [n5.te.slug]: () => import("./n5/Te.vue").then(processImport),
  [n5.teAdjective.slug]: () => import("./n5/TeAdjective.vue").then(processImport),
  [n5.yo.slug]: () => import("./n5/Yo.vue").then(processImport),
  /* -- */
  /* N4 */
  /* -- */
  [n4.gahoshi.slug]: () => import("./n4/Gahoshi.vue").then(processImport),
  [n4.kamoshirenai.slug]: () => import("./n4/Kamoshirenai.vue").then(processImport),
  [n4.nara.slug]: () => import("./n4/Nara.vue").then(processImport),
  [n4.potentialVerbs.slug]: () => import("./n4/PotentialVerbs.vue").then(processImport),
  [n4.shi.slug]: () => import("./n4/Shi.vue").then(processImport),
  [n4.sou.slug]: () => import("./n4/Sou.vue").then(processImport),
  [n4.temiru.slug]: () => import("./n4/Temiru.vue").then(processImport),
};
