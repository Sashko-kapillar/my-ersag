import { defineConfig } from 'eslint'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default defineConfig([
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        sourceType: 'module',
      },
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      // УВАГА: Prettier НЕ підключаємо тут, щоб не ламав Tailwind 4
    ],
    plugins: {
      // ЖОДНИХ prettier-плагінів тут не потрібно
    },
    rules: {
      // React Refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Рекомендовані хороші практики
      'no-unused-vars': 'warn',
      'no-undef': 'off', // Ігнор змінних типу theme(--token)
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
])
