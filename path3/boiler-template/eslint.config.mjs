import globals from "globals";
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default [
  { languageOptions: { globals: globals.browser } },
  ...compat.extends("airbnb"),
  {
    env: {
      browser: true,
      es6: true,
    },
    parserOptions: {
      ecmaFeatures: {
        modules: true,
        jsx: true,
      },
      ecmaVersion: 2020,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "react/jsx-uses-vars": "error",
      "react/jsx-uses-react": "error",
      "space-before-function-paren": [
        "error",
        {
          anonymous: "ignore",
          named: "never",
          asyncArrow: "always",
        },
      ],
    },
  },
];
