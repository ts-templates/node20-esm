// @ts-check

/** @typedef {import('eslint').ESLint.ConfigData} ConfigData */

/**
 * @type {ConfigData}
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */
const config = {
  extends: [
    '@eslint-recommended/eslint-config-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  overrides: [
    // https://typescript-eslint.io/troubleshooting/#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
    {
      files: ['./**/*.{js,cjs,mjs}'],
      extends: ['plugin:@typescript-eslint/disable-type-checked']
    }
  ]
}

module.exports = config
