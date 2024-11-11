import { genki1List } from "./sublists/genki1List";
import { genki2List } from "./sublists/genki2List";
import type { MainList } from "@/types/types";

export const genkiList: MainList = {
  name: "Genki",
  value: "genki",
  sublists: [genki1List, genki2List]
};
