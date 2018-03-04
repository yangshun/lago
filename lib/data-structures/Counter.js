class Counter extends Map {
  /**
   * Initialize the Counter
   * @param {*} items Iterable or mapping.
   * @return {undefined}
   */
  constructor(items) {
    // String type.
    if (typeof items === 'string') {
      super();
      const seq = items.split('');
      seq.forEach(item => this.increment(item));
      return;
    }

    // Array type.
    if (Array.isArray(items)) {
      if (items.length === 0) {
        super();
        return;
      }

      // Assume iterable object and fallback to Map's initialization.
      if (typeof items[0] === 'object') {
        super(items);
        return;
      }

      super();
      items.forEach(item => this.increment(item));
      return;
    }

    // Object type.
    // Note that object keys are always strings.
    if (Object.prototype.toString.call(items) === '[object Object]') {
      super(Object.entries(items));
      return;
    }

    // Default behavior.
    super();
  }

  /**
   * Returns the count associated with the key or 0 if it
   * does not exist in the counter.
   * @param {*} key The key which count we are interested in.
   * @return {number} The count associated with the key.
   */
  get(key) {
    let value = super.get(key);
    if (value == null) {
      value = 0;
    }
    this.set(key, value);
    return value;
  }

  /**
   * Increases the count associated with the key by 1.
   * If the key does not exist, the count is set to 1.
   * @param {*} key The key which count we want to increment.
   * @return {Counter}
   */
  increment(key) {
    const value = this.get(key);
    this.set(key, value + 1);
    return this;
  }

  /**
   * Decreases the count associated with the key by 1.
   * If the key does not exist, the count is set to -1.
   * @param {*} key The key which count we want to decrement.
   * @return {Counter}
   */
  decrement(key) {
    const value = this.get(key);
    this.set(key, value - 1);
    return this;
  }

  /**
   * Returns the key repeated by their counts.
   * @return {*[]} An array of keys.
   */
  elements() {
    const elements = [];
    this.forEach((count, key) => {
      if (count <= 0) {
        return;
      }
      elements.push(...Array(count).fill(key));
    });
    return elements;
  }

  /**
   * Returns an array of n most common keys and their counts from the most
   * common to the least.
   * If n is omitted, all keys in the counter are returned.
   * Keys with equal counts are ordered arbitrarily.
   * @return {*[]} An array of [key, count] pairs.
   */
  mostCommon(n) {
    const number = n !== undefined ? n : this.size;
    return Array.from(this)
      .sort((a, b) => b[1] - a[1])
      .slice(0, number);
  }

  _merge(items, op) {
    const other = new Counter(items);
    other.forEach((count, key) => {
      let value = 0;
      if (this.has(key)) {
        value = this.get(key);
      }
      this.set(key, op(value, count));
    });
    return this;
  }

  /**
   * Keys are subtracted from an iterable or from another mapping.
   * Both inputs and outputs may be zero or negative.
   * @param {*} items Iterable or mapping.
   * @return {Counter}
   */
  subtract(items) {
    return this._merge(items, (value, count) => value - count);
  }

  /**
   * Keys are added-in from an iterable or from another mapping.
   * Both inputs and outputs may be zero or negative.
   * @param {*} items Iterable or mapping.
   * @return {Counter}
   */
  update(items) {
    return this._merge(items, (value, count) => value + count);
  }
}

export default Counter;
