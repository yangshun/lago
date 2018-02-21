import UFDS from '../UFDS';

describe('UFDS', () => {
  test('constructor', () => {
    const ufds = new UFDS(0);
    expect(ufds).toBeTruthy();
    expect(ufds.numOfSets()).toBe(0);
  });

  test('findSet()', () => {
    const n = 5;
    const ufds = new UFDS(n);
    expect(ufds.numOfSets()).toBe(n);
    for (let i = 0; i < n; ++i) {
      expect(ufds.findSet(i)).toBe(i);
      expect(ufds.sizeOf(i)).toBe(1);
    }
  });

  test('isSameSet()', () => {
    const n = 5;
    const ufds = new UFDS(n);
    expect(ufds.numOfSets()).toBe(n);
    for (let x = 0; x < n; ++x) {
      for (let y = 0; y < n; ++y) {
        if (x === y) {
          expect(ufds.isSameSet(x, y)).toBe(true);
        } else {
          expect(ufds.isSameSet(x, y)).toBe(false);
        }
      }
    }
  });

  test('unionSet()', () => {
    const n = 5;
    const ufds = new UFDS(n);

    ufds.unionSet(2, 1);

    expect(ufds.numOfSets()).toBe(n - 1);
    expect(ufds.sizeOf(1)).toBe(2);
    expect(ufds.sizeOf(2)).toBe(2);

    // we perform union on elements that are already in the same set
    ufds.unionSet(1, 2);

    expect(ufds.numOfSets()).toBe(n - 1);
    expect(ufds.sizeOf(1)).toBe(2);
    expect(ufds.sizeOf(2)).toBe(2);

    ufds.unionSet(2, 3);

    expect(ufds.numOfSets()).toBe(n - 2);
    expect(ufds.sizeOf(1)).toBe(3);
    expect(ufds.sizeOf(2)).toBe(3);
    expect(ufds.sizeOf(3)).toBe(3);

    ufds.unionSet(0, 4);
    expect(ufds.numOfSets()).toBe(n - 3);
    expect(ufds.sizeOf(1)).toBe(3);
    expect(ufds.sizeOf(2)).toBe(3);
    expect(ufds.sizeOf(3)).toBe(3);
    expect(ufds.sizeOf(0)).toBe(2);
    expect(ufds.sizeOf(4)).toBe(2);

    ufds.unionSet(1, 0);
    expect(ufds.numOfSets()).toBe(n - 4);
  });
});
