class UFDS {
  constructor(n) {
    this._parents = [];
    this._ranks = [];
    this._setSizes = [];
    for (let i = 0; i < n; ++i) {
      this._parents[i] = i;
      this._setSizes[i] = 1;
      this._ranks[i] = 0;
    }
    this._numOfSets = n;
  }

  /**
   * Find the set that an element belongs to
   * @param {number} x The element to find the set of
   * @return {number} The root of the set that the element belongs to
   */
  findSet(x) {
    if (this._parents[x] != x) {
      // path compression heuristic
      this._parents[x] = this.findSet(this._parents[x]);
    }
    return this._parents[x];
  }

  isSameSet(x, y) {
    return this.findSet(x) == this.findSet(y);
  }

  unionSet(x, y) {
    let rootX = this.findSet(x);
    let rootY = this.findSet(y);
    if (rootX == rootY) {
      // already same set la deh
      // short circuit and return
      return;
    }

    // reduce number of sets
    --this._numOfSets;
    if (this._ranks[rootX] > this._ranks[rootY]) {
      this._setSizes[rootX] += this._setSizes[rootY];
      this._parents[rootY] = rootX;
    } else {
      this._setSizes[rootY] += this._setSizes[rootX];
      this._parents[rootX] = rootY;
      if (this._ranks[rootX] == this._ranks[rootY]) {
        // increment rootY's rank
        ++this._ranks[rootY];
      }
    }
  }

  sizeOf(x) {
    return this._setSizes[this.findSet(x)];
  }

  numOfSets() {
    return this._numOfSets;
  }
}

export default UFDS;
