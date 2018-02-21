class UFDS {
  constructor(n) {
    this._parents = [];
    this._setSizes = [];
    for (let i = 0; i < n; ++i) {
      this._parents[i] = i;
      this._setSizes[i] = 1;
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
      this._parents[x] = this.findSet(this._parents[x]);
    }
    return this._parents[x];
  }

  isSameSet(x, y) {
    return this.findSet(x) == this.findSet(y);
  }
}

export default UFDS;
