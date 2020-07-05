class Node<T> {
  public val: T;

  public next: Node<T> | null;

  public prev: Node<T> | null;

  constructor(value: T) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

export default Node;
