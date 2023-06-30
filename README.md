# Prettier Config

Hypernym Prettier config.

<sub><a href="https://github.com/hypernym-studio/prettier-config">Repository</a> | <a href="https://www.npmjs.com/package/@hypernym/prettier-config">Package</a> | <a href="https://github.com/hypernym-studio/prettier-config/releases">Releases</a> | <a href="https://github.com/hypernym-studio/prettier-config/discussions">Discussions</a></sub>

## Installation

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

### Custom

```js
// prettier.config.cjs

module.exports = {
  ...require('@hypernym/prettier-config')

  // custom options...
}
```

### Types

```js
// prettier.config.cjs

/** @type {import('@hypernym/prettier-config').Config} */
module.exports = {
  ...require('@hypernym/prettier-config')

  // custom options...
}
```

## Community

Feel free to use the official [discussions](https://github.com/hypernym-studio/prettier-config/discussions) for any additional questions.

## License

Developed in 🇭🇷 Croatia

Released under the [MIT](LICENSE.txt) license.

© Hypernym Studio
