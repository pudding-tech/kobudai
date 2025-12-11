import { getMainLists } from "@/lists";
import type { AppearsInList, GrammarPoint } from "@/types/types";

export const getSublistsForGrammarPoint = (gp: GrammarPoint): AppearsInList[] => {
  const res: AppearsInList[] = [];

  for (const mainList of getMainLists()) {
    for (const sublist of mainList.sublists) {
      for (const section of sublist.sections) {
        const found = section.grammarPoints.some(grammarPoint => grammarPoint.slug === gp.slug);
        if (found) {
          const baseName = `${sublist.name} — ${capitalizeFirst(section.title)}`;
          res.push({
            name: mainList.value === "jlpt" ? `JLPT ${baseName}` : baseName,
            mainlistValue: mainList.value,
            sublistValue: sublist.value
          });
        }
      }
    }
  }
  return res;
};

const capitalizeFirst = (s: string) => {
  const lower = s.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
