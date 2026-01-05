// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  /* =========================
   * 기본 JS 권장 규칙
   * ========================= */
  js.configs.recommended,

  /* =========================
   * 공통 설정 (JS / TS)
   * ========================= */
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'error', // JS 기준
    },
  },

  /* =========================
   * TypeScript 전용
   * ========================= */
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ['**/*.{ts,tsx}'],
  })),

  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
    },
  },

  /* =========================
   * 무시 파일
   * ========================= */
  {
    ignores: [
      '**/dist/**',
      '**/build/**',
      '**/.yarn/**',
      '**/node_modules/**',
    ],
  },
];
