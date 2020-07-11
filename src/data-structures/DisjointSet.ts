class DisjointSet {
  private _parents: Array<number>;

  private _ranks: Array<number>;

  private _setSizes: Array<number>;

  private _size: number;

  constructor(size: number) {
    this._parents = Array(size)
      .fill(null)
      .map((_, index) => index);
    this._ranks = Array(size).fill(0);
    this._setSizes = Array(size).fill(1);
    this._size = size;
  }

  /**
   * The total number of elements in the elements set.
   * @return The total number of elements in the elements set.
   */
  sizeOf(element: number): number {
    return this._setSizes[this.find(element)];
  }

  /**
   * The number of disjoint sets.
   * @return {number} The number of disjoint sets.
   */
  get size(): number {
    return this._size;
  }

  /**
   * Find the set that an element belongs to.
   * @param {number} element The element we are interested in.
   * @return {number} The root of the set that the element belongs to.
   */
  find(element: number): number {
    if (this._parents[element] !== element) {
      // Path compression heuristic.
      this._parents[element] = this.find(this._parents[element]);
    }

    return this._parents[element];
  }

  /**
   * Determines if two elements are from the same set.
   * @param {number} elementA The first element.
   * @param {number} elementB The second element.
   * @return {boolean} Whether the two elements belong to the same set.
   */
  isSameSet(elementA: number, elementB: number): boolean {
    return this.find(elementA) === this.find(elementB);
  }

  /**
   * Make elementA and elementB belong to the same set. Uses union by rank.
   * @param {number} elementA The first element.
   * @param {number} elementB The second element.
   */
  union(elementA: number, elementB: number): void {
    const rootA = this.find(elementA);
    const rootB = this.find(elementB);

    if (rootA === rootB) {
      // Nothing to be done since elements already belong to the same set.
      return;
    }

    // Reduce number of sets.
    --this._size;

    // Union by rank.
    // Attaches the shorter tree to the root of the taller tree.
    if (this._ranks[rootA] > this._ranks[rootB]) {
      this._setSizes[rootA] += this._setSizes[rootB];
      this._parents[rootB] = rootA;
      return;
    }

    this._setSizes[rootB] += this._setSizes[rootA];
    this._parents[rootA] = rootB;

    if (this._ranks[rootA] === this._ranks[rootB]) {
      ++this._ranks[rootB];
    }
  }
}

export default DisjointSet;
