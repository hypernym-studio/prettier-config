import { defineConfig } from '@hypernym/bundler'

function replacePath(
  path: RegExp | string,
  replace: string,
): (id: string) => string {
  return (id) => {
    if (id.match(path)) return replace
    return id
  }
}

export default defineConfig({
  entries: [
    { input: './src/index.js', output: './dist/index.mjs' },
    { types: './src/types/index.ts' },
    {
      input: './src/svelte/index.js',
      output: './dist/svelte/index.mjs',
      externals: ['../index.js'],
      paths: (id) => replacePath('../index.js', '../index.mjs')(id),
    },
    { types: './src/types/svelte/index.ts' },
  ],
})
