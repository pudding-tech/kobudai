import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
  ...pluginVue.configs["flat/essential"],
  ...vueTsEslintConfig(),
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
      sourceType: "script",
    },
  }
];
