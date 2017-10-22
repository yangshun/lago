module.exports = {
  extends: [
    'airbnb-base',
    'prettier',
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  plugins: [
    'prettier',
  ],
  rules: {
    'no-param-reassign': 'off', // Needed for swapping elements within an array.
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off', // Indicate private methods.
    'prettier/prettier': 'error',
  },
};

