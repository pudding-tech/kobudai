import { ref } from "vue";
import type { PanelState } from "@/types/types";

const showStructure = ref(true);
const showRelated = ref(false);

const setStructure = (open: boolean) => {
  showStructure.value = open;
  savePanelState();
};

const setRelated = (open: boolean) => {
  showRelated.value = open;
  savePanelState();
};

const savePanelState = () => {
  const state: PanelState = {
    structure: showStructure.value,
    related: showRelated.value
  };

  localStorage.setItem("mobilePanelStates", JSON.stringify(state));
};

export const initPanels = () => {
  const savedPanels = localStorage.getItem("mobilePanelStates");

  if (!savedPanels) {
    return;
  }

  try {
    const parsed = JSON.parse(savedPanels) as Partial<PanelState>;
    if (typeof parsed.structure === "boolean") {
      showStructure.value = parsed.structure;
    }
    if (typeof parsed.related === "boolean") {
      showRelated.value = parsed.related;
    }
  }
  catch {
    console.warn("Failed to parse panel states from localStorage, using defaults.");
    localStorage.removeItem("mobilePanelStates");
  }
};

export const usePanelStore = () => {
  return { showStructure, showRelated, setStructure, setRelated };
};
