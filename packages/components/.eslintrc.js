const baseConfig = require('../../.eslintrc')

module.exports = {
    ...baseConfig,
    parser: '@typescript-eslint/parser',
    parserOptions: { requireConfigFile: false },
}
