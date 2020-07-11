import { DisjointSet } from '../../src';

describe('DisjointSet', () => {
  test('constructor', () => {
    const ds = new DisjointSet(0);
    expect(ds).toBeTruthy();
    expect(ds.size).toBe(0);
  });

  test('sizeOf()', () => {
    const n = 5;
    const ds = new DisjointSet(n);
    expect(ds.size).toBe(n);
    for (let i = 0; i < n; ++i) {
      expect(ds.sizeOf(i)).toBe(1);
    }
  });

  test('size', () => {
    const n = 3;
    const ds = new DisjointSet(n);
    expect(ds.size).toBe(n);
  });

  test('find()', () => {
    const n = 5;
    const ds = new DisjointSet(n);
    expect(ds.size).toBe(n);
    for (let i = 0; i < n; ++i) {
      expect(ds.find(i)).toBe(i);
    }
  });

  test('isSameSet()', () => {
    const n = 5;
    const ds = new DisjointSet(n);
    expect(ds.size).toBe(n);
    for (let x = 0; x < n; ++x) {
      for (let y = 0; y < n; ++y) {
        expect(ds.isSameSet(x, y)).toBe(x === y);
      }
    }
  });

  describe('union()', () => {
    test('basic union', () => {
      const n = 5;
      const ds = new DisjointSet(n);
      ds.union(1, 2);
      expect(ds.size).toBe(n - 1);
      expect(ds.sizeOf(1)).toBe(2);
      expect(ds.sizeOf(2)).toBe(2);
      expect(ds.isSameSet(1, 2)).toBe(true);
    });

    test('union on elements which are already in the same set', () => {
      const n = 5;
      const ds = new DisjointSet(n);
      ds.union(1, 2);
      expect(ds.size).toBe(n - 1);
      expect(ds.sizeOf(1)).toBe(2);
      expect(ds.sizeOf(2)).toBe(2);
      expect(ds.isSameSet(1, 2)).toBe(true);

      ds.union(1, 2);
      expect(ds.size).toBe(n - 1);
      expect(ds.sizeOf(1)).toBe(2);
      expect(ds.sizeOf(2)).toBe(2);
      expect(ds.isSameSet(1, 2)).toBe(true);
    });

    test('union on multiple elements', () => {
      const n = 5;
      const ds = new DisjointSet(n);
      ds.union(1, 2);
      ds.union(2, 3);
      expect(ds.size).toBe(n - 2);
      expect(ds.sizeOf(1)).toBe(3);
      expect(ds.sizeOf(2)).toBe(3);
      expect(ds.sizeOf(3)).toBe(3);
    });

    test('union on same-size sets', () => {
      const n = 5;
      const ds = new DisjointSet(n);
      ds.union(1, 2);
      ds.union(3, 4);
      ds.union(2, 4);
      expect(ds.size).toBe(n - 3);
      expect(ds.sizeOf(1)).toBe(4);
      expect(ds.sizeOf(2)).toBe(4);
      expect(ds.sizeOf(3)).toBe(4);
      expect(ds.sizeOf(4)).toBe(4);
    });
  });

  test('integration test', () => {
    const n = 5;
    const ds = new DisjointSet(n);
    ds.union(1, 2);
    ds.union(2, 3);
    ds.union(0, 4); // Two disjoint sets: {1, 2, 3}, {0, 4}
    expect(ds.size).toBe(n - 3);
    expect(ds.sizeOf(1)).toBe(3);
    expect(ds.sizeOf(2)).toBe(3);
    expect(ds.sizeOf(3)).toBe(3);
    expect(ds.sizeOf(0)).toBe(2);
    expect(ds.sizeOf(4)).toBe(2);
    expect(ds.isSameSet(1, 0)).toBe(false);
    expect(ds.isSameSet(2, 4)).toBe(false);

    ds.union(1, 0); // All elements in one set.
    expect(ds.size).toBe(n - 4);
    expect(ds.isSameSet(1, 0)).toBe(true);
    expect(ds.isSameSet(2, 4)).toBe(true);
  });
});
