import "./assets/main.css";
import "primeicons/primeicons.css";

import { createApp, type ObjectDirective } from "vue";
import App from "./App.vue";
import router from "./router/router";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

import Accordion from "primevue/accordion";
import AccordionContent from "primevue/accordioncontent";
import AccordionHeader from "primevue/accordionheader";
import AccordionPanel from "primevue/accordionpanel";
import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Panel from "primevue/panel";
import ProgressSpinner from "primevue/progressspinner";
import Ripple from "primevue/ripple";
import SelectButton from "primevue/selectbutton";
import Tag from "primevue/tag";
import ToggleSwitch from "primevue/toggleswitch";
import Toolbar from "primevue/toolbar";
import Tooltip from "primevue/tooltip";

const app = createApp(App);
app.use(router);

const customTheme = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{emerald.50}",
      100: "{emerald.100}",
      200: "{emerald.200}",
      250: "#87c0a7",
      300: "{emerald.300}",
      400: "{emerald.400}",
      500: "{emerald.500}",
      600: "{emerald.600}",
      700: "{emerald.700}",
      800: "{emerald.800}",
      900: "{emerald.900}",
      950: "{emerald.950}"
    },
    // primary: {
    //   50: "{violet.50}",
    //   100: "{violet.100}",
    //   200: "{violet.200}",
    //   250: "rgb(188, 145, 229)",
    //   300: "{violet.300}",
    //   400: "{violet.400}",
    //   500: "{violet.500}",
    //   600: "{violet.600}",
    //   700: "{violet.700}",
    //   800: "{violet.800}",
    //   900: "{violet.900}",
    //   950: "{violet.950}"
    // },
    // primary: {
    //   50: "#f5f7fa",
    //   100: "#eaeef4",
    //   200: "#d1dce6",
    //   300: "#a9bed0",
    //   400: "#7a9bb6",
    //   500: "#597e9e",
    //   600: "#466583",
    //   700: "#39516b",
    //   800: "#33475b",
    //   900: "#2e3c4c",
    //   950: "#1e2833"
    // },
    colorScheme: {
      dark: {}
    }
  },
  components: {
    accordion: {
      header: {
        padding: "2rem 1.4rem"
      },
      content: {
        // padding: "1.125rem 1.125rem 1.125rem 1.125rem"
      },
      colorScheme: {
        light: {
          header: {
            background: "#ebebeb",
            hoverBackground: "#ebebeb",
            activeBackground: "#ebebeb",
            activeHoverBackground: "#ebebeb"
          },
          content: {
            background: "#ebebeb"
          }
        },
        dark: {
          header: {
            background: "{surface.900}",
            hoverBackground: "{surface.900}",
            activeBackground: "{surface.900}",
            activeHoverBackground: "{surface.900}"
          },
          content: {
            background: "{surface.900}"
          }
        }
      }
    },
    card: {
      colorScheme: {
        light: {
          background: "{zinc.100}",
        },
        dark: {
          background: "#202020"
        }
      }
    },
    progressspinner: {
      colorScheme: {
        light: {
          root: {
            "color.1": "{primary.300}",
            "color.2": "{primary.300}",
            "color.3": "{primary.300}",
            "color.4": "{primary.300}"
          }
        },
        dark: {
          root: {
            "color.1": "{primary.300}",
            "color.2": "{primary.300}",
            "color.3": "{primary.300}",
            "color.4": "{primary.300}"
          }
        }
      }
    }
  }
});

app.use(PrimeVue, {
  ripple: true,
  theme: {
    preset: customTheme,
    options: {
      darkModeSelector: ".dark-mode"
    }
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomRipple: ObjectDirective = (Ripple as any).extend("ripple", {
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    bindEvents(el: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      el.addEventListener("pointerdown", (this as any).onMouseDown.bind(this));
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    unbindEvents(el: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      el.removeEventListener("pointerdown", (this as any).onMouseDown.bind(this));
    }
  }
});

app.component("Accordion", Accordion);
app.component("AccordionContent", AccordionContent);
app.component("AccordionHeader", AccordionHeader);
app.component("AccordionPanel", AccordionPanel);
app.component("Button", Button);
app.component("Card", Card);
app.component("Column", Column);
app.component("DataTable", DataTable);
app.component("IconField", IconField);
app.component("InputIcon", InputIcon);
app.component("InputText", InputText);
app.component("Panel", Panel);
app.component("ProgressSpinner", ProgressSpinner);
app.component("SelectButton", SelectButton);
app.component("Tag", Tag);
app.component("ToggleSwitch", ToggleSwitch);
app.component("Toolbar", Toolbar);
app.directive("ripple", CustomRipple);
app.directive("tooltip", Tooltip);

// Set default light/dark mode
import { useThemeStore } from "@/stores/themeStore";
const themeStore = useThemeStore();

const savedTheme = localStorage.getItem("theme");
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (savedTheme === "dark" || (!savedTheme && prefersDarkMode)) {
  themeStore.setDarkMode(true, false);
}

app.mount("#app");
