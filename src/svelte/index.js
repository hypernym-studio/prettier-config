import defaultConfig from '../index.js'

/** @type { import("prettier").Config } */
const config = {
  ...defaultConfig,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
}

export { config as default }
