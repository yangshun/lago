import Node from './Node';

class Queue {
  constructor() {
    this._dummyHead = new Node(null);
    this._tail = this._dummyHead;
    this.length = 0;
  }

  /**
   * Adds an element to the back of the Queue.
   * @param {*} element
   * @param {number} length The new length of the Queue.
   */
  enqueue(value) {
    const node = new Node(value);
    this._tail.next = node;
    this._tail = node;
    this.length++;
    return this.length;
  }

  /**
   * Removes the element at the front of the Queue.
   * @return {*} element The element at the front of the Queue.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const node = this._dummyHead.next;
    this._dummyHead.next = node.next;
    node.next = null;
    this.length--;
    return node.val;
  }

  /**
   * Returns true if the Queue has no elements.
   * @return {boolean} empty Whether the Queue has no elements.
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Returns the element at the front of the Queue.
   * @return {*} element The element at the front of the Queue.
   */
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._dummyHead.next.val;
  }

  /**
   * Returns the element at the back of the Queue.
   * @return {*} element The element at the back of the Queue.
   */
  back() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._tail.val;
  }
}

export default Queue;
