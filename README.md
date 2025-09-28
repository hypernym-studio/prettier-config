<h1 align="center">@hypernym/prettier-config</h1>

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

## Usage

### Formatting Commands

Add a `format` command for manual formatting (optional):

```js
// package.json

{
  "scripts": {
    "format": "prettier --write ."
  }
}
```

### Default Config

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
// prettier.config.js

export { default } from '@hypernym/prettier-config/svelte'
```

## Custom Setup

```js
// prettier.config.js

import base from '@hypernym/prettier-config'

/** @type {import("prettier").Config} */
const config = {
  ...base,
  singleQuote: false,
  // ...
}

export default config
```

## License

Developed in 🇭🇷 Croatia, © Hypernym Studio.

Released under the [MIT](LICENSE.txt) license.
