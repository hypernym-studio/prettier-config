import { defineConfig, resolvePaths } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.js' },
    { dts: './src/types/index.ts', output: './dist/index.d.mts' },
    {
      input: './src/svelte/index.js',
      externals: ['../index.js'],
      paths: resolvePaths([
        { find: '../index.js', replacement: '../index.mjs' },
      ]),
    },
    { dts: './src/types/svelte/index.ts', output: './dist/svelte/index.d.mts' },
  ],
})
