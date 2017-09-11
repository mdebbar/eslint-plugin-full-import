# Enforce that some libraries are not fully imported

When building web apps, you want to keep the bundles as small as possible. This rule can help prevent fully importing huge libraries. The plugin is flexible and doesn't impose any list of libraries.

## Rule Details

Assuming that you select these libraries: `["lodash", "aws-sdk"]`, the following patterns are considered invalid:

```js
🚫 import _ from 'lodash';
```

```js
🚫 import 'lodash';
```

```js
🚫 import { default as something } from 'aws-sdk';
```

```js
🚫 import { s3 } from 'aws-sdk';
```

The following patterns are considered valid:

```js
✅ import find from 'lodash/debounce';
```

```js
✅ import find from 'aws-sdk/clients/s3';
```

## When Not To Use It

If you do not care that an entire libary is being included into your bundle.
