module.exports = {
    plugins: ['react'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        node: true
    },
    settings: {
    react: {
        version: ​'16.13.0'​,    },
    rules: {
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true
            }
        ],
        'comma-dangle': ['error', 'never']
    }
}