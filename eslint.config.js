import pluginVue from "eslint-plugin-vue";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";

export default defineConfigWithVueTs(
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  {
    rules: {
      "semi": "error",
      "quotes": ["warn", "double"],
      "prefer-const": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "vue/max-attributes-per-line": "off",
      "vue/no-reserved-component-names": "off",
      "vue/multi-word-component-names": "off"
    },
    files: ["**/*.vue", "**/*.js", "**/*.jsx", "**/*.cjs", "**/*.mjs", "**/*.ts", "**/*.tsx", "**/*.cts", "**/*.mts"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  }
);
