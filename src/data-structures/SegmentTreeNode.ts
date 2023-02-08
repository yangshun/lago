import BinaryTreeNode from './BinaryTreeNode';

class SegmentTreeNode<T> extends BinaryTreeNode<T> {
  public from: number;
  public to: number;

  /**
   * Initialize a sequence tree node with a value.
   * @param {*} value The value stored in the binary tree node.
   */
  constructor(value: T, from: number, to: number) {
    super(value);
    this.from = from;
    this.to = to;
  }
}

export default SegmentTreeNode;
