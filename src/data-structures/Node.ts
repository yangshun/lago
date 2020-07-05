/* eslint-disable max-classes-per-file */
class Node<T> {
  public val: T;

  public next: Node<T> | DummyTailNode<T> | null;

  public prev: Node<T> | DummyHeadNode<T> | null;

  constructor(value: T) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DummyHeadNode<T> {
  public next: Node<T> | DummyTailNode<T> | null;

  constructor() {
    this.next = null;
  }
}

class DummyTailNode<T> {
  public prev: Node<T> | DummyHeadNode<T> | null;

  constructor() {
    this.prev = null;
  }
}

export { DummyHeadNode, DummyTailNode };
export default Node;
