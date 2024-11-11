import { ref } from "vue";

const _isMobile = ref(false);
const handleResize = () => {
  _isMobile.value = window.matchMedia("(max-width: 599.98px").matches && window.matchMedia("(orientation: portrait").matches;
  if (_isMobile.value) {
    document.body.classList.add("mobile");
  }
  else {
    document.body.classList.remove("mobile");
  }
};

handleResize();
window.addEventListener("resize", handleResize, { passive: true });

export const breakpointService = {
  isMobile() {
    return _isMobile.value;
  }
};
