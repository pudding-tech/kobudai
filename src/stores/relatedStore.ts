import { ref } from "vue";

const showRelated = ref(false);

export const useRelatedStore = () => {

  const setRelated = (open: boolean) => {
    showRelated.value = open;
  };

  return { showRelated, setRelated };
};
