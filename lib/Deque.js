import DoublyLinkedList from './DoublyLinkedList';

class Deque extends DoublyLinkedList {
  enqueue(el) {
    this.push(el);
  }

  enqueueFront(el) {
    this.unshift(el);
  }

  dequeue() {
    return this.shift();
  }

  dequeueBack() {
    return this.pop();
  }
}

export default Deque;
