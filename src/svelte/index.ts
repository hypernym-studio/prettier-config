import { fileURLToPath } from 'node:url'
import defaultConfig from '../index.js'
import type { Config } from 'prettier'

const svelteConfig: Config = {
  ...defaultConfig,
  plugins: [fileURLToPath(import.meta.resolve('prettier-plugin-svelte'))],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export { svelteConfig, svelteConfig as default }
