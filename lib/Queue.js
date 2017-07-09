import Node from './Node';

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  enqueue(el) {
    const node = new Node(el);
    // First element in the queue.
    if (this._size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size++;
  }

  dequeue() {
    if (this._size === 0) {
      return null;
    }
    const node = this.head;
    if (this._size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this._size--;
    return node.val;
  }

  isEmpty() {
    return this._size === 0;
  }

  size() {
    return this._size;
  }

  front() {
    if (this._size === 0) {
      return null;
    }
    return this.head.val;
  }

  back() {
    if (this._size === 0) {
      return null;
    }
    return this.tail.val;
  }
}

export default Queue;
