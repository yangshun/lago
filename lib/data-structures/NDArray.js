import deepClone from '../utils/deepClone';

class NDArray {
  /**
   * Initializes an N-dimensional array.
   * @param {number[]} dimensions Dimensions of the array.
   * @param {*} defaultValue Default value to initialize each position of the array to.
   * @return {undefined}
   */
  constructor(dimensions, defaultValue = 0) {
    let value = defaultValue;
    for (let i = dimensions.length - 1; i >= 0; i--) {
      /* eslint-disable no-loop-func */
      value = Array(dimensions[i])
        .fill(null)
        .map(_ => deepClone(value));
    }
    return value;
  }
}

export default NDArray;
