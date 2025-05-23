import { defineConfig, resolvePaths, externals } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.js' },
    { dts: './src/types.ts', output: './dist/index.d.mts' },
    {
      input: './src/svelte/index.js',
      externals: [...externals, '../index.js'],
      paths: resolvePaths([
        { find: '../index.js', replacement: '../index.mjs' },
      ]),
    },
    { dts: './src/svelte/types.ts', output: './dist/svelte/index.d.mts' },
  ],
})
