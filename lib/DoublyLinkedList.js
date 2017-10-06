import Node from './Node';

class DoublyLinkedList {
  // Creates a new DoublyLinkedList object.
  constructor() {
    this._dummyHead = new Node(null);
    this._dummyTail = new Node(null);
    this._dummyHead.next = this._dummyTail;
    this._dummyTail.prev = this._dummyHead;
    this.length = 0;
  }

  // Adds a new value to back of the DoublyLinkedList.
  push(value) {
    const newLastNode = new Node(value); // newLastNode is to be added.
    const lastNode = this._dummyTail.prev;
    newLastNode.prev = lastNode;
    newLastNode.next = this._dummyTail;
    lastNode.next = newLastNode;
    this._dummyTail.prev = newLastNode;
    this.length++;
  }

  // Adds a new value to front of the DoublyLinkedList.
  unshift(value) {
    const newFirstNode = new Node(value); // newFirstNode is to be added.
    const firstNode = this._dummyHead.next;
    newFirstNode.prev = this._dummyHead;
    newFirstNode.next = firstNode;
    firstNode.prev = newFirstNode;
    this._dummyHead.next = newFirstNode;
    this.length++;
  }

  // Removes the first value of the DoublyLinkedList and returns it.
  shift() {
    if (this.isEmpty()) {
      return undefined;
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

  // Removes the last value of the DoublyLinkedList and returns it.
  pop() {
    if (this.isEmpty()) {
      return undefined;
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

  // Returns true if the DoublyLinkedList has no contents.
  isEmpty() {
    return this.length === 0;
  }

  // Returns the first value of the DoublyLinkedList.
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._dummyHead.next.val;
  }

  // Returns the last value of the DoublyLinkedList.
  back() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._dummyTail.prev.val;
  }

  // Converts the contents of the DoublyLinkedList into an array.
  toArray() {
    const arr = [];
    let curr = this._dummyHead.next;
    for (let i = 0; i < this.length; i++) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  // Creates a DoublyLinkedList instance from an array of elements.
  static fromArray(arr) {
    const dll = new DoublyLinkedList();
    arr.forEach(el => dll.push(el));
    return dll;
  }

  // Returns the head node of the DoublyLinkedList.
  // After calling this method, the DoublyLinkedList instance will be cleared
  // out and should not be used anymore.
  // Meant for users who want to manage their own nodes directly without a wrapper class.
  headNode() {
    if (this.isEmpty()) {
      return undefined;
    }
    const head = this._dummyHead.next;
    const tail = this._dummyTail.prev;
    head.prev = null;
    tail.next = null;
    this._dummyHead.next = this._dummyTail;
    this._dummyTail.prev = this._dummyHead;
    this.length = 0;
    return head;
  }
}

export default DoublyLinkedList;
