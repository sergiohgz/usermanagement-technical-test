module.exports = {
    extends: ['plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 80,
                tabWidth: 4,
                singleQuote: true,
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
    },
};
