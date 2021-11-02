import deepClone from '../utils/deepClone';

class NDArray {
  /**
   * Initializes an N-dimensional array.
   * @param {number[]} dimensions Dimensions of the array.
   * @param {*} defaultValue Default value to initialize each position of the array to.
   * @return {Array<any>}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static create(dimensions: Array<number>, defaultValue: any = 0): any {
    let value = defaultValue;

    for (let i = dimensions.length - 1; i >= 0; i--) {
      /* eslint-disable no-loop-func */
      value = Array(dimensions[i])
        .fill(null)
        .map((_) => deepClone(value));
    }

    return value;
  }
}

export default NDArray;
