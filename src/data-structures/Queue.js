import Node from './Node';

class Queue {
  constructor() {
    this._dummyHead = new Node(null);
    this._dummyTail = new Node(null);
    this._dummyHead.next = this._dummyTail;
    this._dummyTail.prev = this._dummyHead;
    this.length = 0;
  }

  /**
   * Adds an element to the back of the Queue.
   * @param {*} element
   * @return {number} The new length of the Queue.
   */
  enqueue(value) {
    const node = new Node(value);
    const prevLast = this._dummyTail.prev;
    prevLast.next = node;
    node.prev = prevLast;
    node.next = this._dummyTail;
    this._dummyTail.prev = node;
    this.length++;
    return this.length;
  }

  /**
   * Removes the element at the front of the Queue.
   * @return {*} The element at the front of the Queue.
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const node = this._dummyHead.next;
    const newFirst = node.next;
    this._dummyHead.next = newFirst;
    newFirst.prev = this._dummyHead;
    node.next = null;
    this.length--;
    return node.val;
  }

  /**
   * Returns true if the Queue has no elements.
   * @return {boolean} Whether the Queue has no elements.
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Returns the element at the front of the Queue.
   * @return {*} The element at the front of the Queue.
   */
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._dummyHead.next.val;
  }

  /**
   * Returns the element at the back of the Queue.
   * @return {*} The element at the back of the Queue.
   */
  back() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._dummyTail.prev.val;
  }
}

export default Queue;
