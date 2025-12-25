import js from '@eslint/js';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
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
      'turbo/no-undeclared-env-vars': 'warn',
      'no-unused-vars': 'error',
      // 'no-console': 'error',
    },
  },

  {
    ignores: ['dist/**'],
  },
];
