import type { GrammarComponent } from "@/types/types";
import {
  desu,
  godan,
  godanNegative,
  godanNonPast,
  ha,
  ichidan,
  ichidanNonPast,
  janai,
  ka,
  koko,
  kono,
  kore,
  mo,
  ne,
  no,
  yo
} from "./n5/metadataN5";

export const grammarIndex: Record<string, () => Promise<GrammarComponent>> = {
  /* -- */
  /* N5 */
  /* -- */
  [desu.slug]: () => import("./n5/Desu.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [godan.slug]: () => import("./n5/Godan.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [godanNegative.slug]: () => import("./n5/GodanNegative.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [godanNonPast.slug]: () => import("./n5/GodanNonPast.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [ichidan.slug]: () => import("./n5/Ichidan.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [ichidanNonPast.slug]: () => import("./n5/IchidanNonPast.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [ha.slug]: () => import("./n5/Ha.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [janai.slug]: () => import("./n5/Janai.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [ka.slug]: () => import("./n5/Ka.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [koko.slug]: () => import("./n5/Koko.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [kono.slug]: () => import("./n5/Kono.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [kore.slug]: () => import("./n5/Kore.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [mo.slug]: () => import("./n5/Mo.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [ne.slug]: () => import("./n5/Ne.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [no.slug]: () => import("./n5/No.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }})),
  [yo.slug]: () => import("./n5/Yo.vue").then(mod => ({ component: mod.default, meta: { title: mod.title }}))
};
