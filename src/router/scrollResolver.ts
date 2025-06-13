type ScrollPosition = {
  top: number;
  left: number;
  behavior?: "auto" | "smooth";
};

export let resolveScroll: ((pos?: ScrollPosition) => void) | null = null;

export const setResolveScroll = (fn: ((pos?: ScrollPosition) => void) | null) => {
  resolveScroll = fn;
};
