import { ref } from "vue";

const showStructure = ref(true);
const showRelated = ref(false);

export const usePanelStore = () => {

  const setStructure = (open: boolean) => {
    showStructure.value = open;
  };

  const setRelated = (open: boolean) => {
    showRelated.value = open;
  };

  return { showStructure, showRelated, setStructure, setRelated };
};
