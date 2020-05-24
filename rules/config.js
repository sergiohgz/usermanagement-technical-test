module.exports = {
    extends: ['./react', './prettier'].map(require.resolve),
    overrides: [
        {
            files: ['*.ts'],
            extends: ['./typescript'].map(require.resolve),
        },
        {
            files: ['*.tsx'],
            extends: ['./react', './typescript'].map(require.resolve),
            rules: {
                // Avoid prop-types requirement in TSX, as they provides TS interface
                'react/prop-types': 'off',
            },
        },
    ],
};
