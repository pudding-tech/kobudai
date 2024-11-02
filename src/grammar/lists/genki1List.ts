import type { Chapter } from "@/types/types";
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
} from "../n5/metadataN5";

export const genki1List: Chapter[] = [
  {
    title: "CHAPTER 1",
    value: 1,
    grammarPoints: [desu, ha, ka, no]
  },
  {
    title: "CHAPTER 2",
    value: 2,
    grammarPoints: [kore, kono, koko, mo, janai, ne, yo]
  },
  {
    title: "CHAPTER 3",
    value: 3,
    grammarPoints: [godan, ichidan, godanNonPast, ichidanNonPast, godanNegative]
  },
];
