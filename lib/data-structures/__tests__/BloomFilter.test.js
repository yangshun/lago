import BloomFilter from '../BloomFilter';

const objectHashFunctions = [
  x => (25 * x.value + 13) % 31,
  x => (109 * x.value + 71) % 139,
  x => (677 * x.value + 241) % 859,
  x => (547 * x.value + 383) % 997,
  x => (173 * x.value + 149) % 499,
];

describe('BloomFilter', () => {
  test('constructor()', () => {
    const bf = new BloomFilter(20);
    expect(bf).toBeTruthy();
    expect(bf._size).toBe(20);
    // using default set of hash functions
    expect(bf._hashFunctions.length).toBe(5);
  });

  describe('add()', () => {
    test('using numbers only', () => {
      const bf = new BloomFilter(20);
      bf.add(5);

      // expect some bits to be set to true
      expect(bf._bits.filter(bit => bit).length).toBeGreaterThan(0);
    });

    test('using objects and custom hash functions', () => {
      const bf = new BloomFilter(20, objectHashFunctions);
      bf.add({ value: 20 });

      // expect some bits to be set to true
      expect(bf._bits.filter(bit => bit).length).toBeGreaterThan(0);
    });
  });

  describe('contains()', () => {
    test('using numbers only', () => {
      const bf = new BloomFilter(20);
      bf.add(5);

      // expect some bits to be set to true
      expect(bf.contains(5)).toBe(true);
      expect(bf.contains(7)).toBe(false);
    });

    test('using objects and custom hash functions', () => {
      const bf = new BloomFilter(20, objectHashFunctions);
      bf.add({ value: 20 });

      // expect some bits to be set to true
      expect(bf.contains({ value: 20 })).toBe(true);
      expect(bf.contains({ value: 9 })).toBe(false);
    });
  });
});
