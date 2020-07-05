/**
 * Generates a random number between min and max inclusive.
 * @param {number} min Minimum possible number.
 * @param {number} max Maximum possible number.
 * @return {number} The generated number between min and max inclusive.
 */
function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default randomInt;
