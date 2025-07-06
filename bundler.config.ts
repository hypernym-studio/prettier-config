import { defineConfig, resolvePaths, externals } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.mjs' },
    { dts: './src/types.ts', output: './dist/index.d.mts' },
    {
      input: './src/svelte/index.mjs',
      externals: [...externals, '../index.mjs'],
      paths: resolvePaths([
        { find: '../index.mjs', replacement: '../index.mjs' },
      ]),
    },
    { dts: './src/svelte/types.ts', output: './dist/svelte/index.d.mts' },
  ],
})
