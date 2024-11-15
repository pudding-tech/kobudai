import { computed, ref } from "vue";
import { genkiList } from "@/grammar/lists/genkiList";
import { jlptList } from "@/grammar/lists/jlptList";
import type { MainList } from "@/types/types";

const mainLists: MainList[] = [genkiList, jlptList];
const mainListsValue = mainLists.map(list => list.value);

const validSublists = {
  [genkiList.value]: genkiList.sublists.map(sublist => sublist.value),
  [jlptList.value]: jlptList.sublists.map(sublist => sublist.value)
};

const mainList = ref("");
const sublist = ref("");

const defaultMainList = genkiList.value;
const defaultSublist = validSublists[defaultMainList][0];

export const useListStore = () => {

  const getMainList = computed(() => mainList.value);
  const getSublist = computed(() => sublist.value);

  const setMainList = (list: string | null, save: boolean = true) => {
    mainList.value = (list && mainListsValue.includes(list)) ? list : defaultMainList;

    if (save) {
      localStorage.setItem("mainList", mainList.value);
    }

    // Update sublist
    const selectedList = mainLists.find(list => list.value === mainList.value);
    if (selectedList) {
      setSublist(selectedList.sublists[0].value, save);
    }
  };

  const setSublist = (list: string | null, save: boolean = true) => {
    sublist.value = (list && validSublists[mainList.value].includes(list)) ? list : defaultSublist;

    if (save) {
      localStorage.setItem("sublist", sublist.value);
    }

    // Save main list if not already saved
    if (save && !localStorage.getItem("mainList")) {
      for (const [mainListValue, sublists] of Object.entries(validSublists)) {
        if (sublists.includes(sublist.value)) {
          localStorage.setItem("mainList", mainListValue);
          mainList.value = mainListValue;
          break;
        }
      }
    }
  };

  return { mainLists, getMainList, getSublist, setMainList, setSublist };
};
