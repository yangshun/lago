import { NDArray } from '../../src';

describe('NDArray', () => {
  test('one dimension', () => {
    const arr = NDArray.create([7]);
    expect(arr).toEqual([0, 0, 0, 0, 0, 0, 0]);
    arr[3] = 1;
    expect(arr).toEqual([0, 0, 0, 1, 0, 0, 0]);
  });

  test('two dimensions', () => {
    const arr = NDArray.create([2, 7]);
    expect(arr).toEqual([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]);
    arr[1][3] = 1;
    expect(arr).toEqual([
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0],
    ]);
  });

  test('multi dimensions', () => {
    const arr = NDArray.create([2, 3, 4]);
    expect(arr).toEqual([
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
    ]);
    arr[1][1][3] = 1;
    expect(arr).toEqual([
      [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ],
      [
        [0, 0, 0, 0],
        [0, 0, 0, 1],
        [0, 0, 0, 0],
      ],
    ]);
  });

  test('default value', () => {
    expect(NDArray.create([7], 1)).toEqual([1, 1, 1, 1, 1, 1, 1]);
    expect(NDArray.create([2, 7], 1)).toEqual([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ]);
    expect(NDArray.create([2, 3, 4], 1)).toEqual([
      [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
      [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
      ],
    ]);
  });
});
