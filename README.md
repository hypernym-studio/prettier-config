# @hypernym/prettier-config

Hypernym's internal config for Prettier.

<sub><a href="https://github.com/hypernym-studio/prettier-config">Repository</a> | <a href="https://www.npmjs.com/package/@hypernym/prettier-config">Package</a> | <a href="https://github.com/hypernym-studio/prettier-config/releases">Releases</a> | <a href="https://github.com/hypernym-studio/prettier-config/discussions">Discussions</a></sub>

```sh
npm i -D @hypernym/prettier-config
```

## Usage

### Simple

```js
// package.json

{
  "prettier": "@hypernym/prettier-config"
}
```

```js
// prettier.config.js

export { default } from '@hypernym/prettier-config'
```

### Custom

```js
// prettier.config.js

import base from '@hypernym/prettier-config'

const config = {
  ...base,
  singleQuote: false,
  // ...
}

export default config
```

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/prettier-config/discussions) for any additional questions.

## License

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
