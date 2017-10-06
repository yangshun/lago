import DoublyLinkedList from './DoublyLinkedList';

class Deque extends DoublyLinkedList {
  /**
   * Adds a new element to the back of the Deque.
   * @param {*} element
   */
  enqueue(element) {
    this.push(element);
  }

  /**
   * Adds a new element to the front of the Deque.
   * @param {*} element
   */
  enqueueFront(element) {
    this.unshift(element);
  }

  /**
   * Removes the element at the front of the Deque and return it.
   * @return {*}
   */
  dequeue() {
    return this.shift();
  }

  /**
   * Removes the last element of the Deque and return it.
   * @return {*}
   */
  dequeueBack() {
    return this.pop();
  }
}

export default Deque;
