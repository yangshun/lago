class BinaryTreeNode<T> {
  public value: T;

  public left: BinaryTreeNode<T> | null;

  public right: BinaryTreeNode<T> | null;

  /**
   * Initialize a binary tree node with a value.
   * @param {*} value The value stored in the binary tree node.
   */
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Get the number of nodes in the tree represented by the node.
   * @return {number} The number of nodes in the tree.
   */
  size(): number {
    return (
      1 +
      (this.left ? this.left.size() : 0) +
      (this.right ? this.right.size() : 0)
    );
  }

  /**
   * Get the height of the tree represented by the node.
   * @return {number} The height of the tree.
   */
  height(): number {
    return Math.max(
      this.right ? this.right.height() + 1 : 0,
      this.left ? this.left.height() + 1 : 0,
    );
  }

  /**
   * Determine if the node is a leaf node
   * @return {boolean} True if the node is a leaf node and false otherwise.
   */
  isLeaf(): boolean {
    return !(this.left || this.right);
  }
}

export default BinaryTreeNode;
