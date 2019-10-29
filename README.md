<h1>Terminus TSLint Frontend Configuration</h1>

[![CircleCI][circle-badge]][circle-link]
[![semantic-release][semantic-release-badge]][semantic-release]
[![MIT License][license-image]][license-url]
[![NPM version][npm-version-image]][npm-url]
[![Github release][gh-release-badge]][gh-releases]

A collection of TypeScript & Angular lint rules for Terminus frontend codebases.

> For ESLint configuration, see: https://github.com/GetTerminus/eslint-config-frontend


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Installation](#installation)
- [Rulesets overview](#rulesets-overview)
- [Set up](#set-up)
  - [CI](#ci)
  - [Development](#development)
  - [Testing](#testing)
- [Rule Decisions](#rule-decisions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation

[![Greenkeeper badge](https://badges.greenkeeper.io/GetTerminus/tslint-config-frontend.svg)](https://greenkeeper.io/)

```
$ yarn add tslint @terminus/tslint-config-frontend -D
```

## Rulesets overview

There are 3 rulesets defined for TSLint:

1. **[CI](#CI)**: This is the default ruleset. This is meant to be used during your CI builds so it throws hard errors when issues are
   found.
2. **[Development](#Development)**: This enforces all the same rules as the CI ruleset but infractions are reported as warnings rather than
   errors.
3. **[Testing](#Testing)**: This ruleset extends the development ruleset and then further disables certain tests that make writing spec
   files less arduous (`no-non-null-assertion`, component naming requirements, etc).


## Set up

You will need to set up separate configs and scripts for each ruleset: `ci`, `development` and `testing`. Creating a custom script call for
each within your `package.json` will allow for easy composability of commands once all linters are set up.

### CI

[`CI Rules`](./ci.js)

#### 1. Create the file and extend our ruleset

Create a TSLint config file at the root level named `tslint.ci.json` and extend the base ruleset:

```json
{
  "extends": "@terminus/tslint-config-frontend"
}
```

> Linting during the CI process is the most strict and will fail if _any_ issues are found. The only way a linting issue makes it to CI is
> because someone didn't lint before commiting.

#### 2. Add a linting command to `package.json`

- The `--project` flag reference should point to the primary app `tsconfig` file.
- The `--config` flag reference should point to the ci `tslint` file.

```json
{
  "name": "My Project",
  "scripts": {
    "lint:tslint:ci": "npx tslint --project ./src/tsconfig.app.json --config ./tslint.ci.json"
  }
}
```


### Development

This ruleset extends the `ci` ruleset but softens the rules to turn many stylistic issues into warnings in order to not impede development.

[`Development Rules`](./development.js)

#### 1. Create the file and extend our ruleset

Create a TSLint config file at the root level named `tslint.json` and extend the development ruleset:

```json
{
  "extends": "@terminus/tslint-config-frontend/development"
}
```

#### 2. Add project specific rules

> NOTE: When adjusting a TSLint rule, the _entire_ rule must be defined again.

```json
{
  "extends": "@terminus/tslint-config-frontend/development",
  "rules": {
    "component-selector": [
      true,
      "element",
      "foo",
      "kebab-case"
    ],
    "directive-selector": [
      true,
      "attribute",
      "foo",
      "camelCase"
    ],
    "pipe-prefix": [
      true,
      "foo"
    ]
  }
}
```

#### 3. Add a linting command to `package.json`

After the `--project` flag, the reference should point to your primary app `tsconfig` file.

```json
{
  "name": "My Project",
  "scripts": {
    "lint:tslint": "npx tslint --project ./src/tsconfig.app.json"
  }
}
```


### Testing

[`Testing Rules`](./testing.js)

#### 1. Create the file and extend our ruleset

Create a TSLint config file at the root level named `tslint.spec.json` and extend the testing ruleset:

```json
{
  "extends": "@terminus/tslint-config-frontend/testing"
}
```

#### 2. Add a linting command to `package.json`

- The `--project` flag reference should point to the spec `tsconfig` file.
- The `--config` flag reference should point to the spec `tslint` file.

```json
{
  "name": "My Project",
  "scripts": {
    "lint:tslint:spec": "npx tslint --project ./src/tsconfig.spec.json --config ./tslint.spec.json"
  }
}
```


## Rule Decisions

Each rule is accompanied by a comment outlining the reasoning behind the decision to include the rule.

For most rules, see [`ci.js`](./ci.js).




<!--
  LINKS
-->

<!-- BADGES -->
[circle-badge]:           https://circleci.com/gh/GetTerminus/tslint-config-frontend/tree/release.svg?style=shield
[npm-version-image]:      http://img.shields.io/npm/v/@terminus/tslint-config-frontend.svg
[semantic-release-badge]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[license-image]:          http://img.shields.io/badge/license-MIT-blue.svg
[gh-release-badge]:       https://img.shields.io/github/release/GetTerminus/tslint-config-frontend.svg
[gh-releases]:            https://github.com/GetTerminus/tslint-config-frontend/releases/
[circle-link]:            https://circleci.com/gh/GetTerminus/tslint-config-frontend/tree/release
[semantic-release]:       https://github.com/semantic-release/semantic-release
[npm-url]:                https://npmjs.org/package/@terminus/tslint-config-frontend
[license-url]:            https://github.com/GetTerminus/tslint-config-frontend/blob/release/LICENSE
