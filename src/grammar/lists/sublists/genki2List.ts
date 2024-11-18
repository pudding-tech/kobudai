import type { Sublist } from "@/types/types";
import * as n4 from "../../n4/metadataN4";

export const genki2List: Sublist = {
  name: "Genki II",
  value: "genki2",
  sections: [
    {
      title: "CHAPTER 13",
      value: 1,
      grammarPoints: [
        n4.potentialVerbs,
        n4.shi
      ]
    }
  ]
};
