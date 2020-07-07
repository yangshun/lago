module.exports = {
  preset: 'ts-jest',
  transform: {
    // Use Babel for JS tests until all tests have been ported to TypeScript.
    '^.+\\.jsx?$': 'babel-jest',
  },
};
