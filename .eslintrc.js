module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/extensions': 'off', // Conflicts with TypeScript.
    'no-param-reassign': 'off', // Needed for swapping elements within an array.
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off', // Indicate private methods.
    'no-unused-vars': ['error', { argsIgnorePattern: '^_$' }], // Ignore variables called _.
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description' },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
