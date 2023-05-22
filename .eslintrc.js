module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"]
            }
        }
    },
    extends: ['airbnb-base', 'prettier', "plugin:cypress/recommended"],
    plugins: ['prettier', "cypress"],
    env: {
        browser: true,
    },
    rules: {
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        'eol-last': 'warn',
        'class-methods-use-this': 'off',
        'no-use-before-define': 'off',
        'prefer-destructuring': ['error', { object: true, array: false }],
        curly: ['error', 'all'],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
}
