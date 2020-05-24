module.exports = {
    extends: [
        require.resolve('./base'),
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        require.resolve('./prettier'),
        'prettier/@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            { accessibility: 'no-public' },
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            { allowExpressions: true, allowTypedFunctionExpressions: true },
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { ignoreSiblings: true },
        ],
    },
    overrides: [
        {
            files: ['*.d.ts'],
            rules: {
                // Avoid wrong triple-slash directives
                'spaced-comment': 'off',
            },
        },
    ],
};
