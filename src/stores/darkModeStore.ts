import { ref } from "vue";

const darkMode = ref(false);

export const useDarkModeStore = () => {

  const setDarkMode = (dark: boolean, save: boolean = true) => {
    darkMode.value = dark;

    if (dark) {
      document.documentElement.classList.add("dark-mode");
    }
    else {
      document.documentElement.classList.remove("dark-mode");
    }

    if (save) {
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  };

  return { darkMode, setDarkMode };
};
