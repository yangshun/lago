import Node from './Node';

class Queue {
  constructor() {
    this._dummyHead = new Node(null);
    this._tail = this._dummyHead;
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
    const node = this._dummyHead.next;
    this._dummyHead.next = node.next;
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
    return this._dummyHead.next.val;
  }

  back() {
    if (this.isEmpty()) {
      return null;
    }
    return this._tail.val;
  }
}

export default Queue;
