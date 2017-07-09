import DoublyLinkedList from './DoublyLinkedList';

class Deque extends DoublyLinkedList {
  enqueue(value) {
    this.push(value);
  }

  enqueueFront(value) {
    this.unshift(value);
  }

  dequeue() {
    return this.shift();
  }

  dequeueBack() {
    return this.pop();
  }
}

export default Deque;
