// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: ['plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'eslint:recommended'],
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect', // Replace this with your actual React version
		},
	},
	plugins: ['react-refresh', 'react'],
	rules: {
		'no-undef': 'error',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/prop-types': 'off',
		'max-len': ['error', { code: 200 }],
		'react-hooks/exhaustive-deps': 'off',
	},
};
