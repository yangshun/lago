interface ObjectValue {
  [key: string]: number;
}

type Items<T> = Array<T> | Array<[T, number]> | ObjectValue;

class Counter<T> extends Map<T | string, number> {
  /**
   * Initialize the Counter
   * @param {*} items Iterable or mapping.
   * @return {Counter}
   */
  constructor(items?: Items<T>) {
    // Array type.
    if (Array.isArray(items)) {
      if (items.length === 0) {
        super();
        return;
      }

      // Assume iterable object and fallback to Map's initialization.
      if (Array.isArray(items[0])) {
        super(items as Array<[T, number]>);
        return;
      }

      super();
      (items as Array<T>).forEach((item) => this.increment(item));
      return;
    }

    // Object type.
    // Note that object keys are always strings.
    if (
      items != null &&
      Object.prototype.toString.call(items) === '[object Object]'
    ) {
      const entries = Object.entries(items);
      super(entries);
      return;
    }

    // Default behavior.
    super();
  }

  /**
   * Returns the count associated with the key or 0 if it
   * does not exist in the counter.
   * @param {T} key The key which count we are interested in.
   * @return {number} The count associated with the key.
   */
  get(key: T): number {
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
   * @param {T} key The key which count we want to increment.
   * @return {Counter}
   */
  increment(key: T): this {
    const value = this.get(key);
    this.set(key, value + 1);
    return this;
  }

  /**
   * Decreases the count associated with the key by 1.
   * If the key does not exist, the count is set to -1.
   * @param {T} key The key which count we want to decrement.
   * @return {Counter}
   */
  decrement(key: T): this {
    const value = this.get(key);
    this.set(key, value - 1);
    return this;
  }

  /**
   * Returns the key repeated by their counts.
   * @return {Array<T>} An array of keys.
   */
  elements(): Array<T> {
    const elements: Array<T> = [];

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
   * @return {Array<[T, number]>} An array of [key, count] pairs.
   */
  mostCommon(n?: number): Array<[T | string, number]> {
    const number = n !== undefined ? n : this.size;
    return Array.from(this)
      .sort((a, b) => b[1] - a[1])
      .slice(0, number);
  }

  private _merge(
    items: Items<T>,
    op: (value: number, count: number) => number,
  ): this {
    const other = new Counter(items);
    other.forEach((count: number, key) => {
      let value = 0;
      const key_ = key as T;

      if (this.has(key_)) {
        value = this.get(key_);
      }

      this.set(key_, op(value, count));
    });

    return this;
  }

  /**
   * Keys are subtracted from an iterable or from another mapping.
   * Both inputs and outputs may be zero or negative.
   * @param {*} items Iterable or mapping.
   * @return {Counter}
   */
  subtract(items: Items<T>): this {
    return this._merge(items, (value, count) => value - count);
  }

  /**
   * Keys are added-in from an iterable or from another mapping.
   * Both inputs and outputs may be zero or negative.
   * @param {*} items Iterable or mapping.
   * @return {Counter}
   */
  update(items: Items<T>): this {
    return this._merge(items, (value, count) => value + count);
  }
}

export default Counter;
