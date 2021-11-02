/**
 * A heap-based priority queue implementation
 */

const TOP = 0;
const PARENT = (i: number) => ((i + 1) >>> 1) - 1;
const LEFT = (i: number) => (i << 1) + 1;
const RIGHT = (i: number) => (i + 1) << 1;

interface Comparator<T> {
  (a: T, b: T): number;
}

class Timestamped<T> {
  private _value: T;
  private _timestamp: number;

  constructor(value: T, timestamp: number) {
    this._value = value;
    this._timestamp = timestamp;
  }

  public get value(): T {
    return this._value;
  }

  public get timestamp(): number {
    return this._timestamp;
  }
}

class PriorityQueue<T> {
  private _heap: Array<Timestamped<T>> = [];
  private _comparator: Comparator<T>;
  private _nextTimestamp: number = 0;

  constructor(comparator: Comparator<T>) {
    this._comparator = comparator;
  }

  /**
   * Get the current size of the queue.
   */
  public size(): number {
    return this._heap.length;
  }

  /**
   * Get the first item in the queue without removing it.
   */
  public peek(): T {
    return this._heap[TOP] && this._heap[TOP].value;
  }

  /**
   * Add items into the queue.
   * @param values The list of items to be added.
   */
  public enqueue(...values: Array<T>) {
    values.forEach((value) => {
      this._heap.push(new Timestamped(value, this._nextTimestamp++));

      // Heapify up.
      let index = this.size() - 1;
      while (
        index > TOP &&
        this._compareNodeAtIndex(index, PARENT(index)) < 0
      ) {
        this._swapNodeAtIndex(index, PARENT(index));
        index = PARENT(index);
      }
    });
  }

  /**
   * Remove the first item from the queue and return it.
   */
  public dequeue(): T {
    const popped = this.peek();
    const bottom = this.size() - 1;

    if (bottom > TOP) {
      this._swapNodeAtIndex(bottom, TOP);
    }

    this._heap.pop();

    // Start heapify-ing down.
    let current = TOP;

    while (true) {
      const parent = current;
      const left = LEFT(current);
      const right = RIGHT(current);

      // Find the maximum node between among the 3 nodes above
      if (left < this.size() && this._compareNodeAtIndex(left, current) < 0) {
        current = left;
      }
      if (right < this.size() && this._compareNodeAtIndex(right, current) < 0) {
        current = right;
      }

      // If the parent node is already max, stop heapify-ing
      if (parent === current) {
        break;
      }

      this._swapNodeAtIndex(parent, current);
    }

    return popped;
  }

  /**
   * Heaper function to swap two nodes using indices
   * @param i index of the first node
   * @param j index of the second node
   */
  private _swapNodeAtIndex(i: number, j: number) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  /**
   * Heaper function to compare two nodes using indices
   * @param i index of the first node
   * @param j index of the second node
   */
  private _compareNodeAtIndex(i: number, j: number): number {
    return (
      this._comparator(this._heap[i].value, this._heap[j].value) ||
      this._heap[i].timestamp - this._heap[j].timestamp
    );
  }
}

export default PriorityQueue;
