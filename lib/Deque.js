import DoublyLinkedList from './DoublyLinkedList';

class Deque extends DoublyLinkedList {
  /**
   * Adds an element to the back of the Deque.
   * @param {*} element
   */
  enqueue(element) {
    this.push(element);
  }

  /**
   * Adds an element to the front of the Deque.
   * @param {*} element
   */
  enqueueFront(element) {
    this.unshift(element);
  }

  /**
   * Removes the element at the front of the Deque.
   * @return {*} element The element at the front of the Deque.
   */
  dequeue() {
    return this.shift();
  }

  /**
   * Removes the element at the back of the Deque.
   * @return {*} element The element of the back of the Deque.
   */
  dequeueBack() {
    return this.pop();
  }
}

export default Deque;
