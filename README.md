<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>is-monorepo</h1>
  <a href="https://npmjs.com/package/is-monorepo">
    <img alt="NPM" src="https://img.shields.io/npm/v/is-monorepo.svg">
  </a>
  <a href="https://github.com/bconnorwhite/is-monorepo">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/is-monorepo.svg">
  </a>
</div>

<br />

<blockquote align="center">Check if the working directory is in a monorepo.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/is-monorepo">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/is-monorepo?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

## Installation

```sh
npm install is-monorepo
```

```sh
yarn add is-monorepo
```

```sh
pnpm add is-monorepo
```

```sh
bun add is-monorepo
```

## Usage
```ts
import {
  isMonorepo,
  getMonorepoInfo,
  getWorkspaces,
  getMonorepoDir,
  getMonorepoPackageJSONPath,
  getMonorepoPackageJSON
} from "is-monorepo";

const monorepo = await isMonorepo(); // true | false

const info = await getMonorepoInfo();
// {
//   directory: string;
//   packageJSONPath: string;
//   packageJSON: JSONObject;
//   workspaces: string[];
// } \ undefined;

const monorepoDir = await getMonorepoDir(); // string | undefined

const monorepoPackageJSONPath = await getMonorepoPackageJSONPath(); // string | undefined

const monorepoPackageJSON = await getMonorepoPackageJSON(); // JSONObject | undefined

// Ex: ["packages/*", "apps/*"]
const workspaces = await getWorkspaces(); // string[] | undefined
```

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/is-monorepo?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/is-monorepo.svg"></a></h2>

- [read-json-safe](https://www.npmjs.com/package/read-json-safe): Read JSON files without try catch
- [root-pkg-json](https://www.npmjs.com/package/root-pkg-json): Find the highest package.json, starting from from the current working directory.
- [types-json](https://www.npmjs.com/package/types-json): Type checking for JSON values

<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/is-monorepo.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
