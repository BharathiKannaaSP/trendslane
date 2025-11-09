import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import turboPlugin from "eslint-plugin-turbo";
import tseslint from "typescript-eslint";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "quotes": ["error", "single", { avoidEscape: true }],
      "semi": ["error", "always"],
    },
  },
  {
    plugins: {
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];
