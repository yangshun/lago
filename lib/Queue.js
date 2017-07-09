import Node from './Node';

class Queue {
  constructor() {
    this._dummy = new Node(null);
    this._tail = this._dummy;
    this.length = 0;
  }

  enqueue(el) {
    const node = new Node(el);
    this._tail.next = node;
    this._tail = node;
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this._dummy.next;
    this._dummy.next = node.next;
    this.length--;
    return node.val;
  }

  isEmpty() {
    return this.length === 0;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this._dummy.next.val;
  }

  back() {
    if (this.isEmpty()) {
      return null;
    }
    return this._tail.val;
  }
}

export default Queue;
