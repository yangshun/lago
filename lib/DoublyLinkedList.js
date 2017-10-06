import Node from './Node';

class DoublyLinkedList {
  constructor() {
    this._dummyHead = new Node(null);
    this._dummyTail = new Node(null);
    this._dummyHead.next = this._dummyTail;
    this._dummyTail.prev = this._dummyHead;
    this.length = 0;
  }

  push(value) {
    const newLastNode = new Node(value); // newLastNode is to be added.
    const lastNode = this._dummyTail.prev;
    newLastNode.prev = lastNode;
    newLastNode.next = this._dummyTail;
    lastNode.next = newLastNode;
    this._dummyTail.prev = newLastNode;
    this.length++;
  }

  unshift(value) {
    const newFirstNode = new Node(value); // newFirstNode is to be added.
    const firstNode = this._dummyHead.next;
    newFirstNode.prev = this._dummyHead;
    newFirstNode.next = firstNode;
    firstNode.prev = newFirstNode;
    this._dummyHead.next = newFirstNode;
    this.length++;
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }
    const firstNode = this._dummyHead.next; // firstNode is to be removed.
    const newFirstNode = firstNode.next;
    this._dummyHead.next = newFirstNode;
    newFirstNode.prev = this._dummyHead;
    firstNode.next = null;
    firstNode.prev = null;
    this.length--;
    return firstNode.val;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const lastNode = this._dummyTail.prev; // lastNode is to be removed.
    const newLastNode = lastNode.prev;
    this._dummyTail.prev = newLastNode;
    newLastNode.next = this._dummyTail;
    lastNode.next = null;
    lastNode.prev = null;
    this.length--;
    return lastNode.val;
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
    return this._dummyTail.prev.val;
  }

  toArray() {
    const arr = [];
    let curr = this._dummyHead.next;
    for (let i = 0; i < this.length; i++) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  static fromArray(arr) {
    const dll = new DoublyLinkedList();
    arr.forEach(el => dll.push(el));
    return dll;
  }
}

export default DoublyLinkedList;
