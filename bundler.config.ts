import { defineConfig } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.js' },
    { dts: './src/types.ts', output: './dist/index.d.ts' },
    {
      input: './src/svelte/index.js',
      externals: ['../index.js'],
    },
    { dts: './src/svelte/types.ts', output: './dist/svelte/index.d.ts' },
  ],
})
