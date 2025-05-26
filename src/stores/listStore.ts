import { computed, ref } from "vue";
import { getMainLists, getMainListsValue, getSublists, getDefaultMainList, getDefaultSublist } from "@/lists";

const mainList = ref("");
const sublist = ref("");

export const useListStore = () => {

  const getMainList = computed(() => mainList.value);
  const getSublist = computed(() => sublist.value);

  const setMainList = (list: string | null, save: boolean = true) => {
    mainList.value = (list && getMainListsValue().includes(list)) ? list : getDefaultMainList();

    if (save) {
      localStorage.setItem("mainList", mainList.value);
    }

    // Update sublist
    const selectedList = getMainLists().find(list => list.value === mainList.value);
    if (selectedList) {
      setSublist(selectedList.sublists[0].value, save);
    }
  };

  const setSublist = (list: string | null, save: boolean = true) => {
    sublist.value = (list && getSublists()[mainList.value].includes(list)) ? list : getDefaultSublist();

    if (save) {
      localStorage.setItem("sublist", sublist.value);
    }

    // Save main list if not already saved
    if (save && !localStorage.getItem("mainList")) {
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
