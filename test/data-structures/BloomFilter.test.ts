import { BloomFilter } from '../../src';

interface ObjectWithValue {
  value: number;
}

const OBJECT_HASH_FUNCTIONS: Array<(item: ObjectWithValue) => number> = [
  (x) => (25 * x.value + 13) % 31,
  (x) => (109 * x.value + 71) % 139,
  (x) => (677 * x.value + 241) % 859,
  (x) => (547 * x.value + 383) % 997,
  (x) => (173 * x.value + 149) % 499,
];

describe('BloomFilter', () => {
  test('constructor()', () => {
    const bf = new BloomFilter(20, BloomFilter.numberHashFunctions);
    expect(bf).toBeTruthy();
    expect(bf.size).toBe(20);
  });

  describe('add() and contains()', () => {
    test('using numbers only', () => {
      const bf = new BloomFilter(20, BloomFilter.numberHashFunctions);
      bf.add(5);

      expect(bf.contains(5)).toBe(true);
      expect(bf.contains(7)).toBe(false);
    });

    test('using objects and custom hash functions', () => {
      const bf = new BloomFilter(20, OBJECT_HASH_FUNCTIONS);
      bf.add({ value: 20 });

      expect(bf.contains({ value: 20 })).toBe(true);
      expect(bf.contains({ value: 9 })).toBe(false);
    });
  });
});
