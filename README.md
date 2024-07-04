<p align="center">
<img alt="kz logo" height="64" src="https://raw.githubusercontent.com/i11n/.github/main/svg/kz/color/kz.svg" />
<strong>dispose</strong>
</p>

<p align="center">
kz is a library providing heavily tested and documented features with
consistent and predictable APIs designed to simplify the development and
maintenance of complex, performant, and scalable
<a href="https://deno.com">Deno</a> applications.
</p>

<h1 align="center">@kz/dispose</h1>
<p align="center">
The <code>@kz/core/dispose</code> module provides types and features for using and disposing of managed resources.
</p>

<p align="center">
<a href="https://jsr.io/@kz/dispose">Overview</a> |
<a href="https://jsr.io/@kz/dispose/doc">API Docs</a>
</p>

---

The dispose pattern allows developers to create classes associated with
resources that need to be released when they are no longer needed.

```ts
import { AbstractDisposable, usingAsync } from './mod.ts';

class SwapiClient extends AbstractDisposable {
  protected cache = new Map<string, string>();
  constructor(protected baseUrl: string = 'https://swapi.dev/api') {
    super();
  }
  public dispose(): void {
    this.cache.clear();
  }
  protected async request(slug: string, id?: number): Promise<string> {
    const { cache, baseUrl } = this;
    const uri = id ? `${baseUrl}/${slug}/${id}` : `${baseUrl}/${slug}`;
    const cached = cache.get(uri);

    if (cached) return cached;

    const response = await fetch(uri);
    const data = await response.text();

    cache.set(uri, data);

    return data;
  }
  public async getPeople(id?: number): Promise<string> {
    return await this.request('people', id);
  }
}

usingAsync(new SwapiClient(), async (client) => {
  const people = await client.getPeople(1);

  console.log(people);
});
```

## Contributing

Contributions are welcome! Take a look at our [contributing guidelines][contributing] to get started.

<p align="center">
<a href="https://github.com/i11n/.github/blob/main/.github/CODE_OF_CONDUCT.md">
  <img alt="Contributor Covenant" src="https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg?style=flat-square" />
</a>
</p>

## License

The MIT License (MIT) 2022 integereleven. Refer to [LICENSE][license] for details.

<p align="center">
<sub>Built with ❤ by integereleven</sub>
</p>

<p align="center">
<img
  alt="kz.io logo"
  height="64"
  src="https://raw.githubusercontent.com/i11n/.github/main/svg/brand/color/open-stroke.svg"
/>
</p>

<p align="center">
<a href="https://github.com/kz-io/dispose/commits">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/kz-io/dispose?style=flat-square">
</a>
<a href="https://github.com/kz-io/dispose/issues">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues-raw/kz-io/dispose?style=flat-square">
</a>
<a href="https://codecov.io/gh/kz-io/dispose" >
  <img src="https://codecov.io/gh/kz-io/dispose/graph/badge.svg?token=EK5CNEBUPG"/>
</a>
</p>

<p align="center">
<a href="https://jsr.io/@kz/dispose">
  <img src="https://jsr.io/badges/@kz/dispose" alt="" />
</a>
<a href="https://jsr.io/@kz/dispose">
  <img src="https://jsr.io/badges/@kz/dispose/score" alt="" />
</a>
</p>

[deno]: https://deno.dom "Deno homepage"
[jsr]: https://jsr.io "JSR homepage"
[branches]: https://github.com/kz-io/dispose/branches "@kz/dispose branches on GitHub"
[releases]: https://github.com/kz-io/dispose/releases "@kz/dispose releases on GitHub"
[contributing]: https://github.com/kz-io/dispose/blob/main/CONTRIBUTING.md "@kz/dispose contributing guidelines"
[license]: https://github.com/kz-io/dispose/blob/main/LICENSE "@kz/dispose license"
