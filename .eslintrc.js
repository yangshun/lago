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
    'no-param-reassign': 'off', // Needed for swapping elements within an array.
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off', // Indicate private methods.
    'no-unused-vars': ['error', { argsIgnorePattern: '^_$' }], // Ignore variables called _.
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
