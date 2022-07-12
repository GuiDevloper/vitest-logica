/// <reference types="vitest" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined',
  },
  test: {
    globals: true,
    includeSource: ['src/**/*.ts'],
  },
})
