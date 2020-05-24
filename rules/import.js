module.exports = {
    extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
    ],
    rules: {
        'import/extensions': [
            'error',
            'ignorePackages',
            { js: 'never', ts: 'never', tsx: 'never' },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: [
                    'src/setupTests.ts',
                    'src/**/__test?(s)__/**/*.spec.ts?(x)',
                ],
            },
        ],
    },
};
