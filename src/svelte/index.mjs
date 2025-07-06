import { fileURLToPath } from 'node:url'
import defaultConfig from '../index.mjs'

const config = {
  ...defaultConfig,
  plugins: [fileURLToPath(import.meta.resolve('prettier-plugin-svelte'))],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export { config as default }
