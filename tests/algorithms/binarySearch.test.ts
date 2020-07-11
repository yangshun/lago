import { binarySearch, bisectLeft, bisectRight } from '../../src';

describe('binarySearch', () => {
  test('empty', () => {
    expect(binarySearch([], 1)).toBe(-1);
  });

  test('one or two elements', () => {
    expect(binarySearch([1], 1)).toBe(0);
    expect(binarySearch([1], 2)).toBe(-1);
    expect(binarySearch([1, 4], 1)).toBe(0);
    expect(binarySearch([1, 4], 4)).toBe(1);
    expect(binarySearch([1, 4], 5)).toBe(-1);
  });

  test('more than two elements', () => {
    expect(binarySearch([1, 2, 3, 10, 11, 20], 1)).toBe(0);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 2)).toBe(1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 3)).toBe(2);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 10)).toBe(3);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 9)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 4)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 0)).toBe(-1);
    expect(binarySearch([1, 2, 3, 10, 11, 20], 21)).toBe(-1);
  });
});

describe('bisectLeft', () => {
  test('missing element', () => {
    expect(bisectLeft([1, 2, 4], 3)).toBe(2);
  });

  test('duplicates', () => {
    expect(bisectLeft([1, 2, 2, 2, 2, 2, 3], 2)).toBe(1);
  });
});

describe('bisectRight', () => {
  test('missing element', () => {
    expect(bisectRight([1, 2, 4], 3)).toBe(2);
  });

  test('duplicates', () => {
    expect(bisectRight([1, 2, 2, 2, 2, 2, 3], 2)).toBe(6);
  });
});
