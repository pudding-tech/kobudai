import type { GrammarPoint } from "@/types/types";
import * as metadataN5 from "../n5/metadataN5";
import * as metadataN4 from "../n4/metadataN4";
import * as metadataN3 from "../n3/metadataN3";

export const allList: GrammarPoint[] = [
  ...Object.values(metadataN5),
  ...Object.values(metadataN4),
  ...Object.values(metadataN3)
];
