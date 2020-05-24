module.exports = {
    extends: ['eslint:recommended', require.resolve('./import')],
    env: {
        browser: true,
        es6: true,
        node: true,
        jasmine: true,
        jest: true,
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeature: {
            impliedString: true,
        },
    },
    rules: {
        'no-plusplus': 'error',
        'no-param-reassign': 'off',
        'max-len': 'off',
    },
};
