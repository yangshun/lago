/* eslint-disable max-classes-per-file */
interface AbstractNode {
  next?: AbstractNode | null;
  prev?: AbstractNode | null;
}

class Node<T> implements AbstractNode {
  public val: T;

  public next: AbstractNode | null;

  public prev: AbstractNode | null;

  constructor(value: T) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DummyHeadNode implements AbstractNode {
  public next: AbstractNode | null;

  constructor() {
    this.next = null;
  }
}

class DummyTailNode implements AbstractNode {
  public prev: AbstractNode | null;

  constructor() {
    this.prev = null;
  }
}

export { DummyHeadNode, DummyTailNode };
export default Node;
