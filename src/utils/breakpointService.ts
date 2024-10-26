import { ref } from "vue";

const _isMobile = ref(false);
const handleResize = () => {
  _isMobile.value = window.matchMedia("(max-width: 599.98px").matches && window.matchMedia("(orientation: portrait").matches;
};

handleResize();
window.addEventListener("resize", handleResize, { passive: true });

export const breakpointService = {
  isMobile() {
    return _isMobile.value;
  }
};
