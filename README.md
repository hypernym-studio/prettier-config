<h1 align="center">Hypernym Prettier Config</h1>

<p align="center">Hypernym's internal config for Prettier.</p>

<p align="center">
  <a href="https://github.com/hypernym-studio/prettier-config">Repository</a>
  <span>✦</span>
  <a href="https://www.npmjs.com/package/@hypernym/prettier-config">Package</a>
  <span>✦</span>
  <a href="https://github.com/hypernym-studio/prettier-config/releases">Releases</a>
  <span>✦</span>
  <a href="https://github.com/hypernym-studio/prettier-config/discussions">Discussions</a>
</p>

<br>

<pre align="center">pnpm add -D @hypernym/prettier-config</pre>

<br>

## Setup

Add a `format` command for manual formatting (optionally):

```js
// package.json

{
  "scripts": {
    "format": "prettier --write .",
  }
}
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

### Svelte/SvelteKit

> [!NOTE]
>
> Install the required `Svelte` dev dependencies before using:
>
> ```sh
> pnpm add -D prettier-plugin-svelte
> ```

```js
// package.json

{
  "prettier": "@hypernym/prettier-config/svelte"
}
```

```js
// prettier.config.js

export { default } from '@hypernym/prettier-config/svelte'
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

Feel free to ask questions or share new ideas.

Use the official [discussions](https://github.com/hypernym-studio/prettier-config/discussions) to get involved.

## License

Developed in 🇭🇷 Croatia, © Hypernym Studio.

Released under the [MIT](LICENSE.txt) license.
