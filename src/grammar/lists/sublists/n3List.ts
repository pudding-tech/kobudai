import type { Sublist } from "@/types/types";
import * as n3 from "../../n3/metadataN3";

export const n3List: Sublist = {
  name: "N3",
  value: "n3",
  sections: [
    {
      title: "SECTION 1",
      value: 1,
      grammarPoints: [
        n3.toieba,
        n3.toori
      ]
    }
  ]
};
