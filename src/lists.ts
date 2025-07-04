import { genkiList } from "@/grammar/lists/genkiList";
import { jlptList } from "@/grammar/lists/jlptList";
import type { MainList } from "@/types/types";

const mainLists: MainList[] = [jlptList, genkiList];
const mainListsValue: string[] = mainLists.map(list => list.value);

const sublists = {
  [jlptList.value]: jlptList.sublists.map(sublist => sublist.value),
  [genkiList.value]: genkiList.sublists.map(sublist => sublist.value)
};

const defaultMainList = genkiList.value;

export const getMainLists = () => mainLists;
export const getMainListsValue = () => mainListsValue;
export const getSublists = () => sublists;
export const getDefaultMainList = () => defaultMainList;

export const isValidList = (mainList: string, subList: string): boolean => {
  return mainListsValue.includes(mainList) && sublists[mainList]?.includes(subList);
};

export const getMainListByValue = (value: string): MainList | undefined => {
  return mainLists.find(list => list.value === value);
};
