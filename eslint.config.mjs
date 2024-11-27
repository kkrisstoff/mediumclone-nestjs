import globals from "globals";
import eslint from "@eslint/js";
import tsEslint, { plugin as tsPlugin } from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.{js,ts}'] },
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.amd,
      },
    },
  },

  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
  {
    plugins: {
      import: importPlugin,
      'typescript-eslint': tsPlugin,
    },
  }
  
];
