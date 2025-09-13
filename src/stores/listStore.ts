import { computed, ref } from "vue";
import { getMainListsValue, getSublists, getDefaultMainList } from "@/lists";

const mainList = ref("");
const sublist = ref("");
const sublistMap = ref<Record<string, string>>({});

export const initLists = () => {
  const loadedMainList = localStorage.getItem("mainList");
  sublistMap.value = loadSublistMap();

  mainList.value = (loadedMainList && getMainListsValue().includes(loadedMainList)) ? loadedMainList : getDefaultMainList();

  const savedSublist: string | undefined = sublistMap.value[mainList.value];
  const validSublists = getSublists()[mainList.value] ?? [];
  sublist.value = validSublists.includes(savedSublist ?? "") ? savedSublist! : (validSublists[0] ?? "");
  sublistMap.value[mainList.value] = sublist.value;
};

const loadSublistMap = (): Record<string, string> => {
  try {
    return JSON.parse(localStorage.getItem("sublists") || "{}");
  }
  catch {
    return {};
  }
};

export const useListStore = () => {

  const getMainList = computed(() => mainList.value);
  const getSublist = computed(() => sublist.value);

  const setMainList = (list: string, sublist?: string) => {
    mainList.value = getMainListsValue().includes(list) ? list : getDefaultMainList();
    localStorage.setItem("mainList", mainList.value);

    // If sublist is provided and valid, set it; otherwise set sublist to last-used or default for this main list
    const validSublists = getSublists()[mainList.value] ?? [];
    if (sublist && validSublists.includes(sublist)) {
      setSublist(sublist);
    }
    else {
      const lastSublist = sublistMap.value[mainList.value];
      setSublist(lastSublist && validSublists.includes(lastSublist) ? lastSublist : (validSublists[0] ?? ""));
    }
  };

  const setSublist = (list: string) => {
    const validSublists = getSublists()[mainList.value] ?? [];
    sublist.value = validSublists.includes(list) ? list : (validSublists[0] ?? "");
    sublistMap.value[mainList.value] = sublist.value;
    localStorage.setItem("sublists", JSON.stringify(sublistMap.value));

    // Save main list if not already saved
    if (!localStorage.getItem("mainList")) {
      for (const [main, sub] of Object.entries(getSublists())) {
        if (sub.includes(sublist.value)) {
          localStorage.setItem("mainList", main);
          mainList.value = main;
          break;
        }
      }
    }
  };

  return { getMainList, getSublist, setMainList, setSublist };
};
