import { defineConfig, resolvePaths, externals } from '@hypernym/bundler'

export default defineConfig({
  entries: [
    { input: './src/index.js', output: './dist/index.js' },
    { dts: './src/types.ts', output: './dist/index.d.ts' },
    {
      input: './src/svelte/index.js',
      output: './dist/svelte/index.js',
      externals: [...externals, '../index.js'],
      paths: resolvePaths([
        { find: '../index.js', replacement: '../index.js' },
      ]),
    },
    { dts: './src/svelte/types.ts', output: './dist/svelte/index.d.ts' },
  ],
})
