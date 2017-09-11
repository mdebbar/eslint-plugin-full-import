import importRule from './rules/no-full-import'

export default {
  rules: {
    'no-full-import': importRule,
  },
  rulesConfig: {
    'no-full-import': ['error', []],
  },
}
