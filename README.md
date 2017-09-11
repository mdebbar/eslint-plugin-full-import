eslint-plugin-full-import
====================

[![Travis Build Status][build-badge]][build]
[![devDependency Status][dev-deps-badge]][dev-deps]

Configurable linting rule for preventing the full-importing of huge libraries (e.g. lodash, aws-sdk, etc).

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) along with `eslint-plugin-full-import`:

    yarn add --dev eslint eslint-plugin-full-import

The rule is specifically written to target ES6 imports.

# Configuration

Add `plugins` section and specify `eslint-plugin-full-import` as a plugin:

```json
{
  "plugins": [
    "full-import"
  ]
}
```

Then, enable the `no-full-import` rule and pass an array of packages that you want to prevent from being fully imported:

```json
{
  "rules": {
    "full-import/no-full-import": ["error", [
      "lodash",
      "aws-sdk"
    ]],
  }
}
```

# List of supported rules

* [no-full-import](docs/rules/no-full-import.md): Prevent importing the entirety of the listed packages.
