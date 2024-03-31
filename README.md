<p align="center">
<!-- Update log -->
<img alt="kz.io logo" height="70" src="https://raw.githubusercontent.com/kz-io/.github/main/profile/img/fc/text.svg" />
<strong>dispose</strong>
</p>

<p align="center">
kz.io is a collection of easy-to-use utility and feature libraries for creating anything you want with the <a href="https://deno.land">Deno</a> runtime.
</p>

<h1 align="center">kz.io - dispose</h1>

<p align="center">
<!-- @TODO Package description -->
</p>

<p align="center">
<!-- @TODO Link to documentation and other resources -->
</p>

<p align="center">
<sub>Built with ❤ by integereleven and <a href="https://github.com/kz-io/dispose/graphs/contributors">contributors</a></sub>
</p>

<p align="center">
<a href="https://github.com/kz-io/dispose/blob/main/CODE_OF_CONDUCT.md">
  <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=flat-square" />
</a>
<a href="https://github.com/kz-io/dispose/commits">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/kz-io/dispose?style=flat-square">
</a>
<a href="https://github.com/kz-io/dispose/releases">
  <img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/kz-io/dispose?style=flat-square" />
</a>
<a href="https://github.com/kz-io/dispose/issues">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/kz-io/dispose?style=flat-square">
</a>
</p>

## Table of contents

- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Features

[(to top)](#table-of-contents)

<!-- @TODO Enumerate key features -->

## Installation

[(to top)](#table-of-contents)

To install, you simply need to re-export the library features with your `./deps.ts` file.

```ts
// ./deps.ts
export * from 'https://denopkg.com/kz-io/dispose/mod.ts';
//  or specific features
```

and then import them from your `./deps.ts` file into the files they are needed.

```ts
// ./src/app.ts
import { VERSION } from '../deps.ts';
//  or other features
```

You can specify a specific branch or release to re-export:

**Export from a specific branch**

```ts
export * from 'https://denopkg.com/kz-io/dispose@dev-fix-06145/mod.ts';
```

**Export from a specific release**

```ts
export * from 'https://denopkg.com/kz-io/dispose@0.1.0-alpha/mod.ts';
```

**Export the latest release**

```ts
export * from 'https://denopkg.com/kz-io/dispose@latest/mod.ts';
```

> **Note:** If no branch or tag is specified in the re-export, then it will pull from the main branch, which we only merge into when preparing a release.\
> Check out the [branches][branches] and [releases][releases] see what's available.

## Examples

[(to top)](#table-of-contents)

<!-- @TODO Add an example, or add links to examples -->

```ts
```

## Contributing

[(to top)](#table-of-contents)

Contributions are welcome! Take a look at our [contributing guidelines][contributing] to get started.

## License

[(to top)](#table-of-contents)

The MIT License (MIT) 2022 integereleven. Refer to [LICENSE][license] for details.

<p align="center">
<img
  alt="i11n open source logo"
  height="24"
  src="https://raw.githubusercontent.com/i11n/.github/main/profile/img/fc/open.svg"
/>
</p>

[deno]: https://deno.land "Deno homepage"
[branches]: https://github.com/kz-io/dispose/branches "kz.io/dispose branches on GitHub"
[releases]: https://github.com/kz-io/dispose/releases "kz.io/dispose releases on GitHub"
[contributing]: https://github.com/kz-io/dispose/blob/main/CONTRIBUTING.md "kz.io/dispose contributing guidelines"
[license]: https://github.com/kz-io/dispose/blob/main/LICENSE "kz.io/dispose license"
