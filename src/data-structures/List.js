import Node from './Node';
import DoublyLinkedList from './DoublyLinkedList';

// Returns the node at index.
// If allowExceed:
//   If index >= length, return dummyTail
//   If index < -length, return firstNode
// Else:
//   If index >= length, return null
//   If index < -length, return null
export function traverseNodes(list, index, allowExceed = false) {
  let node;
  if (!allowExceed && (index >= list.length || index < -list.length)) {
    return node;
  }
  if (list.length === 0) {
    return list._dummyTail;
  }
  if (index >= 0) {
    node = list._dummyHead.next;
    for (let i = 0; i < index && i < list.length; i++) {
      node = node.next;
    }
  } else {
    node = list._dummyTail.prev;
    for (let i = 0; i < Math.abs(index) - 1 && i < list.length - 1; i++) {
      node = node.prev;
    }
  }
  return node;
}

class List extends DoublyLinkedList {
  /**
   * Inserts an element at that index of the List.
   * @param {*} element
   * @return {number} length The new length of the List.
   */
  insert(value, index) {
    const node = traverseNodes(this, index, true);
    const newNode = new Node(value);
    const prevNode = node.prev;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    node.prev = newNode;
    newNode.next = node;
    this.length++;
  }

  /**
   * Removes the element at that index from the List.
   * @param {number} index
   * @param {boolean} success Whether the removal was successful.
   */
  remove(index) {
    const node = traverseNodes(this, index);
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

  /**
   * Retrieves the element at that index of the List.
   * @param {number} index
   * @param {*} element The element at that index of the List.
   */
  get(index) {
    // TODO: Allow getting of negative index.
    const node = traverseNodes(this, index);
    if (!node) {
      return undefined;
    }
    return node.val;
  }

  /**
   * Counts the number of elements in the List that are equal to the element.
   * @param {number} index
   * @param {*} element The element at that index of the List.
   */
  count(value) {
    // TODO: Support comparator.
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
