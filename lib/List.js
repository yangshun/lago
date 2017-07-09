import Node from './Node';
import DoublyLinkedList from './DoublyLinkedList';

// Returns the node at index or null if index is invalid.
function iterate(list, index) {
  if (index < 0 || index >= list.length) {
    return null;
  }
  let node = list._dummyHead.next;
  for (let i = 0; i < index; i++) {
    node = node.next;
  }
  return node;
}

class List extends DoublyLinkedList {
  // If index >= list.length, it will be inserted at the last position.
  insert(value, index) {
    const newNode = new Node(value);
    let node = this._dummyHead.next;
    let i = 0;
    while (i < index && i < this.length) {
      node = node.next;
      i++;
    }
    const prevNode = node.prev;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    node.prev = newNode;
    newNode.next = node;
    this.length++;
  }

  // Returns true if the removal was successful, false otherwise.
  remove(index) {
    const node = iterate(this, index);
    if (!node) {
      return false;
    }
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    node.next = null;
    node.prev = null;
    this.length--;
    return true;
  }

  get(index) {
    // TODO: Allow getting of negative index.
    const node = iterate(this, index);
    if (!node) {
      return null;
    }
    return node.val;
  }

  count(value) {
    let count = 0;
    let curr = this._dummyHead.next;
    for (let i = 0; i < this.length; i++) {
      if (curr.val === value) {
        count++;
      }
      curr = curr.next;
    }
    return count;
  }
}

export default List;
