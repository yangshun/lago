import DoublyLinkedList from './DoublyLinkedList';

class Deque extends DoublyLinkedList {
  /**
   * Adds an element to the back of the Deque.
   * @param {*} element The element to be queued to the back of the Deque.
   */
  enqueue(element) {
    this.push(element);
  }

  /**
   * Adds an element to the front of the Deque.
   * @param {*} element The element to be queued to the front of the Deque.
   */
  enqueueFront(element) {
    this.unshift(element);
  }

  /**
   * Removes the element at the front of the Deque.
   * @return {*} The element at the front of the Deque.
   */
  dequeue() {
    return this.shift();
  }

  /**
   * Removes the element at the back of the Deque.
   * @return {*} The element at the back of the Deque.
   */
  dequeueBack() {
    return this.pop();
  }
}

export default Deque;
