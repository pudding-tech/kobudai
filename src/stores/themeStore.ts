import { ref, readonly } from "vue";

enum Theme {
  LIGHT,
  DARK
};

const theme = ref(Theme.LIGHT);
const glassEffects = ref(true);

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

const setGlassEffects = (value: boolean, save: boolean = true) => {
  glassEffects.value = value;
  document.documentElement.dataset.mobileGlassEffects = value ? "true" : "false";

  if (save) {
    localStorage.setItem("mobileGlassEffects", value.toString());
  }
};

const useThemeStore = () => {
  return {
    theme: readonly(theme),
    glassEffects: readonly(glassEffects),
    setTheme,
    setGlassEffects
  };
};

export { useThemeStore, Theme };
