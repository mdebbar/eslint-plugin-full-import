import eslint from 'eslint'
import rule from '../../src/rules/no-full-import'

const eslintOptions = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
}
const ruleTester = new eslint.RuleTester(eslintOptions)

ruleTester.run('lodash/import', rule, {
  valid: [
    {
      code: 'import "something"',
      options: [['lodash']],
    },
    {
      code: 'import "something"',
      options: [['lodash', 'aws-sdk']],
    },
    {
      code: 'import something from "something"',
      options: [['lodash']],
    },
    {
      code: 'import lodash from "something"',
      options: [['lodash']],
    },
    {
      code: 'import lodash from "something"',
      options: [['lodash', 'aws-sdk']],
    },
    {
      code: 'import { something } from "something"',
      options: [['lodash']],
    },
    {
      code: 'import { default as other } from "something"',
      options: [['lodash']],
    },
    {
      code: 'import { default as lodash } from "something"',
      options: [['lodash']],
    },
    {
      code: 'import lodashCompat from "lodash-compat"',
      options: [['lodash']],
    },
    {
      code: 'import find from "lodash/collection/find"',
      options: [['lodash']],
    },
  ],
  invalid: [
    {
      code: 'import "lodash"',
      options: [['lodash']],
      errors: [{
        message: 'Importing the entire "lodash" library is not permitted, please import the specific functions you need',
      }],
    },
    {
      code: 'import "lodash-compat"',
      options: [['lodash-compat']],
      errors: [{
        message: 'Importing the entire "lodash-compat" library is not permitted, please import the specific functions you need',
      }],
    },
    {
      code: 'import _ from "lodash"',
      options: [['lodash']],
      errors: [{
        message: 'Importing the entire "lodash" library is not permitted, please import the specific functions you need',
      }],
    },
    {
      code: 'import lodash from "lodash"',
      options: [['lodash']],
      errors: [{
        message: 'Importing the entire "lodash" library is not permitted, please import the specific functions you need',
      }],
    },
    {
      code: 'import { something } from "lodash"',
      options: [['lodash']],
      errors: [{
        message: 'Importing the entire "lodash" library is not permitted, please import the specific functions you need',
      }],
    },
    {
      code: 'import { default as other } from "lodash"',
      options: [['lodash']],
      errors: [{
        message: 'Importing the entire "lodash" library is not permitted, please import the specific functions you need',
      }],
    },
    {
      code: 'import aws from "aws-sdk"',
      options: [['lodash', 'aws-sdk']],
      errors: [{
        message: 'Importing the entire "aws-sdk" library is not permitted, please import the specific functions you need',
      }],
    },
  ],
})
