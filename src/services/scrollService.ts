import { ref } from "vue";

const showSticky = ref(true);
const SCROLL_THRESHOLD = 50;
const ALWAYS_SHOW_Y = 140;

let lastScrollY = window.scrollY;
let hasScrolled = false;

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  if (!hasScrolled) {
    lastScrollY = currentScrollY;
    hasScrolled = true;
    return;
  }

  // Always show sticky if near the top
  if (currentScrollY <= ALWAYS_SHOW_Y) {
    showSticky.value = true;
    lastScrollY = currentScrollY;
    return;
  }

  const diff = currentScrollY - lastScrollY;

  if (diff > SCROLL_THRESHOLD) {
    showSticky.value = false; // Scrolling down
    lastScrollY = currentScrollY;
  }
  else if (diff < -SCROLL_THRESHOLD) {
    showSticky.value = true; // Scrolling up
    lastScrollY = currentScrollY;
  }
};

window.addEventListener("scroll", handleScroll, { passive: true });

export const scrollService = {
  hideSticky() {
    return !showSticky.value;
  },
  reset() {
    showSticky.value = true;
    lastScrollY = window.scrollY;
    hasScrolled = false;
  }
};
