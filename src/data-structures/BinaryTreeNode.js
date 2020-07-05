class BinaryTreeNode {
  /**
   * Initialize a binary tree node with a value.
   * @param {*} value The value stored in the binary tree node.
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Get the number of nodes in the tree represented by the node.
   * @return {number} The number of nodes in the tree.
   */
  size() {
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
  height() {
    return Math.max(
      this.right ? this.right.height() + 1 : 0,
      this.left ? this.left.height() + 1 : 0,
    );
  }

  /**
   * Determine if the node is a leaf node
   * @return {boolean} True if the node is a leaf node and false otherwise.
   */
  isLeaf() {
    return !(this.left || this.right);
  }
}

export default BinaryTreeNode;
