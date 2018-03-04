import NDArray from '../NDArray';

describe('NDArray', () => {
  test('one dimension', () => {
    const arr = new NDArray([7]);
    expect(arr).toEqual([0, 0, 0, 0, 0, 0, 0]);
    arr[3] = 1;
    expect(arr).toEqual([0, 0, 0, 1, 0, 0, 0]);
  });

  test('two dimensions', () => {
    const arr = new NDArray([2, 7]);
    expect(arr).toEqual([[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]);
    arr[1][3] = 1;
    expect(arr).toEqual([[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 1, 0, 0, 0]]);
  });

  test('multi dimensions', () => {
    const arr = new NDArray([2, 3, 4]);
    expect(arr).toEqual([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
    ]);
    arr[1][1][3] = 1;
    expect(arr).toEqual([
      [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]],
      [[0, 0, 0, 0], [0, 0, 0, 1], [0, 0, 0, 0]],
    ]);
  });

  test('default value', () => {
    expect(new NDArray([7], 1)).toEqual([1, 1, 1, 1, 1, 1, 1]);
    expect(new NDArray([2, 7], 1)).toEqual([
      [1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1],
    ]);
    expect(new NDArray([2, 3, 4], 1)).toEqual([
      [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
      [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]],
    ]);
  });
});
