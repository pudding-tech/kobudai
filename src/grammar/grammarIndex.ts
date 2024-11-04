import type { GrammarComponent } from "@/types/types";
import * as n5 from "./n5/metadataN5";

export const grammarIndex: Record<string, () => Promise<GrammarComponent>> = {
  /* -- */
  /* N5 */
  /* -- */
  [n5.desu.slug]: () => import("./n5/Desu.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.godan.slug]: () => import("./n5/Godan.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.godanNegative.slug]: () => import("./n5/GodanNegative.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.godanNonPast.slug]: () => import("./n5/GodanNonPast.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.godanPast.slug]: () => import("./n5/GodanPast.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.ichidan.slug]: () => import("./n5/Ichidan.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.ichidanNegative.slug]: () => import("./n5/IchidanNegative.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.ichidanNonPast.slug]: () => import("./n5/IchidanNonPast.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.ichidanPast.slug]: () => import("./n5/IchidanPast.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.ha.slug]: () => import("./n5/Ha.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.janai.slug]: () => import("./n5/Janai.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.ka.slug]: () => import("./n5/Ka.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.koko.slug]: () => import("./n5/Koko.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.kono.slug]: () => import("./n5/Kono.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.kore.slug]: () => import("./n5/Kore.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.mo.slug]: () => import("./n5/Mo.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.ne.slug]: () => import("./n5/Ne.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.no.slug]: () => import("./n5/No.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [n5.yo.slug]: () => import("./n5/Yo.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }}))
};
