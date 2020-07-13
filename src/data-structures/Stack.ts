import Node from './Node';

class Stack<T> {
  private _tail: Node<T> | null;

  private _length: number;

  constructor() {
    this._tail = null;
    this._length = 0;
  }

  /**
   * Adds an element to the top of the Stack.
   * @param {*} element
   * @return {number} The new length of the Stack.
   */
  push(value: T): number {
    const node = new Node(value);
    node.next = this._tail;
    this._tail = node;
    this._length++;
    return this._length;
  }

  /**
   * Removes the element at the top of the Stack.
   * @return {T} The popped element.
   */
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const node = this._tail as Node<T>;
    this._tail = node.next as Node<T>;
    node.next = null;
    this._length--;
    return node.value;
  }

  /**
   * Returns true if the Stack has no elements.
   * @return {boolean} Whether the Stack has no elements.
   */
  isEmpty(): boolean {
    return this._length === 0;
  }

  /**
   * Returns the element at the top of the Stack.
   * @return {T} The element at the top of the Stack.
   */
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return (this._tail as Node<T>).value;
  }

  /**
   * Returns the number of elements in the Stack.
   * @return {number} Number of elements in the Stack.
   */
  get length(): number {
    return this._length;
  }
}

export default Stack;
