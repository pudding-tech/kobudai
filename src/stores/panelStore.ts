import { ref } from "vue";

const showStructure = ref(true);
const showRelated = ref(false);

const setStructure = (open: boolean) => {
  showStructure.value = open;
};

const setRelated = (open: boolean) => {
  showRelated.value = open;
};

export const usePanelStore = () => {
  return { showStructure, showRelated, setStructure, setRelated };
};
