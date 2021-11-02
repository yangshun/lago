interface SortingInputsParams<T> {
  algorithm(input: Array<T>): Array<T>;
  test(testName: string, fn: unknown): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect: any;
}

function sortingInputs({
  algorithm,
  test,
  expect,
}: SortingInputsParams<number>): void {
  test('empty', () => {
    expect(algorithm([])).toEqual([]);
  });

  test('one or two elements', () => {
    expect(algorithm([1])).toEqual([1]);
    expect(algorithm([2, 1])).toEqual([1, 2]);
    expect(algorithm([1, 2])).toEqual([1, 2]);
  });

  test('more than two elements', () => {
    expect(algorithm([10, 2, 4])).toEqual([2, 4, 10]);
    expect(algorithm([4, 5, 6, 1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(algorithm([1, 2, 3, 4, 5, 0])).toEqual([0, 1, 2, 3, 4, 5]);
    expect(algorithm([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(algorithm([5, 4, 3, 2, 1, 10, 9, 8, 7, 6])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
    expect(algorithm([98322, 3242, 876, -234, 34, 12331])).toEqual([
      -234, 34, 876, 3242, 12331, 98322,
    ]);
  });

  test('duplicate elements', () => {
    expect(algorithm([1, 1])).toEqual([1, 1]);
    expect(algorithm([1, 1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
    expect(algorithm([7, 2, 4, 3, 1, 2])).toEqual([1, 2, 2, 3, 4, 7]);
  });
}

export default sortingInputs;
