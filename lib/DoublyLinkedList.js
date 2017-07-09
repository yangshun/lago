import Node from './Node';

class DoublyLinkedList {
  constructor() {
    this._dummyHead = new Node(null);
    this._dummyTail = new Node(null);
    this._dummyHead.next = this._dummyTail;
    this._dummyTail.prev = this._dummyHead;
    this.length = 0;
  }

  push(el) {
    const newLastNode = new Node(el); // newLastNode is to be added.
    const lastNode = this._dummyTail.prev;
    newLastNode.prev = lastNode;
    newLastNode.next = this._dummyTail;
    lastNode.next = newLastNode;
    this._dummyTail.prev = newLastNode;
    this.length++;
  }

  unshift(el) {
    const newFirstNode = new Node(el); // newFirstNode is to be added.
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
}

export default DoublyLinkedList;
