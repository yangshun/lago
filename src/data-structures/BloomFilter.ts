/*
  This is the default hash functions we would like to provide.
  It may not be all-encompassing, but it's better than none.
  All numbers used are prime numbers.
*/

export type HashFunctions<T> = ReadonlyArray<(x: T) => number>;

class BloomFilter<T> {
  private _bits: Array<boolean>;

  private _size: number;

  private _hashFunctions: HashFunctions<T>;

  static numberHashFunctions: HashFunctions<number> = [
    (x: number): number => (25 * x + 13) % 31,
    (x: number): number => (109 * x + 71) % 139,
    (x: number): number => (677 * x + 241) % 859,
    (x: number): number => (547 * x + 383) % 997,
    (x: number): number => (173 * x + 149) % 499,
  ];

  /**
   * Initialize a bloom filter with an appropriate size
   * and array of hash functions.
   *
   * @param {number} size The size of bloom filter to initialize as.
   * @param {Function[]} hashFunctions The array of hash functions to use.
   * @return {undefined}
   */
  constructor(size: number, hashFunctions: HashFunctions<T>) {
    this._bits = Array(size).fill(false);
    this._size = size;
    this._hashFunctions = hashFunctions;
  }

  /**
   * Add an item to the bloom filter to register its membership.
   * @param {*} item The item to be added.
   */
  add(item: T): void {
    this._hashFunctions.forEach((hashFunction) => {
      // the mod _size is needed to ensure we do not go out of bounds
      this._bits[hashFunction(item) % this._size] = true;
    });
  }

  /**
   * Test if an item is *probably* in the bloom filter.
   * @param {*} item The item whose membership is to be tested.
   * @return {boolean} Whether the item is probably in the set or not.
   *        If a false is returned, the item is surely not in the set.
   */
  contains(item: T): boolean {
    // check if every bit at the location indicated by the hash function returns true
    return this._hashFunctions.every(
      (hashFunction) => this._bits[hashFunction(item) % this._size],
    );
  }

  /**
   * Returns the size of the bloom filter.
   * @return {number} Size of bloom filter.
   */
  get size(): number {
    return this._size;
  }
}

export default BloomFilter;
