import { n5List } from "./sublists/n5List";
import { n4List } from "./sublists/n4List";
import type { MainList } from "@/types/types";

export const jlptList: MainList = {
  name: "JLPT",
  value: "jlpt",
  sublists: [n5List, n4List]
};
