import { ref, readonly } from "vue";

enum Theme {
  LIGHT,
  DARK
};

const theme = ref(Theme.LIGHT);

const useThemeStore = () => {
  const setTheme = (themeValue: Theme, save: boolean = true) => {
    theme.value = themeValue;

    if (themeValue === Theme.DARK) {
      document.documentElement.classList.add("dark-mode");
    }
    else {
      document.documentElement.classList.remove("dark-mode");
    }

    if (save) {
      localStorage.setItem("theme", themeValue === Theme.DARK ? "dark" : "light");
    }
  };

  return {
    theme: readonly(theme),
    setTheme
  };
};

export { useThemeStore, Theme };
