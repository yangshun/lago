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
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this._size++;
  }

  dequeue() {
    if (this.isEmpty()) {
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

  size() {
    return this._size;
  }

  isEmpty() {
    return this._size === 0;
  }

  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.val;
  }

  back() {
    if (this.isEmpty()) {
      return null;
    }
    return this.tail.val;
  }
}

export default Queue;
