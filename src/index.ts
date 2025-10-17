import type { Config } from 'prettier'

const defaultConfig: Config = {
  semi: false,
  tabWidth: 2,
  singleQuote: true,
}

export { defaultConfig, defaultConfig as default }
