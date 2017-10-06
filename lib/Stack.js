import Node from './Node';

class Stack {
  constructor() {
    this._tail = null;
    this.length = 0;
  }

  /**
   * Adds an element to top of the Stack.
   * @param {*} element
   * @return {number} length The new length of the Stack.
   */
  push(value) {
    const node = new Node(value);
    node.next = this._tail;
    this._tail = node;
    this.length++;
    return this.length
  }

  /**
   * Removes the element at the top of the Stack.
   * @return {number} length The new length of the Stack.
   */
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const node = this._tail;
    this._tail = this._tail.next;
    node.next = null;
    this.length--;
    return node.val;
  }

  /**
   * Returns true if the Stack has no elements.
   * @return {boolean} empty Whether the Stack has no elements.
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * Returns the element at the top of the Stack.
   * @return {*} element The element at the top of the Stack.
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._tail.val;
  }
}

export default Stack;
