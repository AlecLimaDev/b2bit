/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./setupVitest.js"],
    include: ['**/(*.)?{test,spec}.{js,mjs,cjs,mts,cts,jsx}'],
  },
})
