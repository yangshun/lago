module.exports = {
  transform: {
    // Use Babel for JS tests until all tests have been ported to TypeScript.
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
};
