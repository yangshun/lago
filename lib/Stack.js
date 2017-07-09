import Node from './Node';

class Stack {
  constructor() {
    this._dummy = new Node(null);
    this._tail = this._dummy;
    this.length = 0;
  }

  push(el) {
    const node = new Node(el);
    node.next = this._tail;
    this._tail = node;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this._tail;
    this._tail = this._tail.next;
    this.length--;
    return node.val;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this._tail.val;
  }
}

export default Stack;
