module.exports = {
    extends: [
        'react-app',
        'airbnb',
        require.resolve('./base'),
        require.resolve('./prettier'),
        'prettier/react',
    ],
    plugins: ['react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.tsx'] },
        ],
    },
};
