module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-param-reassign': 'off', // Needed for swapping elements within an array.
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off', // Indicate private methods.
  },
};
