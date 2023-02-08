import SegmentTree from './SegmentTree';

describe('search()', () => {
  test('returns correct result based on value', () => {
    // Wikipedia example
    const maxTree = new SegmentTree<number>(
      [6, 10, 5, 2, 7, 1, 0, 9],
      Math.max,
    );
    expect(maxTree.query(0, 5)).toBe(10);

    // LeetCode example
    const sumTree = new SegmentTree<number>(
      [18, 17, 13, 19, 15, 11, 20, 12, 33, 25],
      (a: number, b: number): number => a + b,
    );
    expect(sumTree.query(2, 8)).toBe(123);
  });
});
