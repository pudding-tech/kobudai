import type { Sublist } from "@/types/types";
import * as n3 from "../../n3/metadataN3";

export const quartet1List: Sublist = {
  name: "Quartet I",
  value: "quartet1",
  sections: [
    {
      title: "CHAPTER 1",
      value: 1,
      grammarPoints: [
        n3.toieba,
        n3.toori
      ]
    }
  ]
};
