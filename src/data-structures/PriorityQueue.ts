/**
 * A heap-based priority queue implementation
 */

const TOP = 0;
const PARENT = (i: number) => ((i + 1) >>> 1) - 1;
const LEFT = (i: number) => (i << 1) + 1;
const RIGHT = (i: number) => (i + 1) << 1;

interface Comparer<T> {
  (a: T, b: T): number;
}

class PriorityQueue<T> {
  private _heap: Array<T> = [];
  private _comparer: Comparer<T>;

  constructor(comparer: Comparer<T>) {
    this._comparer = comparer;
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
    return this._heap[TOP];
  }

  /**
   * Add items into the queue.
   * @param values the list of items to be added
   */
  public enqueue(...values: Array<T>) {
    values.forEach(value => {
      this._heap.push(value);

      // heapify up
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

    // Start heapify down
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

      // If the parent node is already max, stop heapifying
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
    return this._comparer && this._comparer(this._heap[i], this._heap[j]);
  }
}

export default PriorityQueue;
