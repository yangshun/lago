class BinaryTreeNode {
  /**
   * Initialize a binary tree node with a value
   * @param {*} value The value stored in the binary tree node
   */
  constructor(value) {
    this._value = value;
    this._left = null;
    this._right = null;
  }

  /**
   * Get the value stored in this node.
   * @return {*} The value stored in this node.
   */
  getValue() {
    return this._value;
  }

  /**
   * Set the value stored in this node.
   * @param {*} value The value to store in this node.
   */
  setValue(value) {
    this._value = value;
  }

  /**
   * Get the left child node of this node.
   * @return {BinaryTreeNode} The left child node of this node.
   */
  getLeft() {
    return this._left;
  }

  /**
   * Set the right child node of this node.
   * @param {BinaryTreeNode} leftChild The node to be stored as the left child of this node.
   */
  setLeft(leftChild) {
    this._left = leftChild;
  }

    /**
     * Get the right child node of this node.
     * @return {BinaryTreeNode} The right child node of this node.
     */
  getRight() {
    return this._right;
  }

  /**
   * Set the right child node of this node.
   * @param {BinaryTreeNode} rightChild The node to be stored as the right child of this node.
   */
  setRight(rightChild) {
    this._right = rightChild;
  }

  /**
   * Get the number of nodes in the tree represented by this node.
   * @return {number} The number of nodes in the tree
   */
  size() {
    let result = 1;
    result += this._right ? this._right.size() : 0;
    result += this._left ? this._left.size() : 0;
    return result;
  }

  /**
   * Get the height of the tree represented by this node.
   * @return {number} The height of the tree
   */
  height() {
    let result = 0;
    if (this._right) {
      result = this._right.height() + 1;
    }
    if (this._left) {
      result = Math.max(result, this._left.height() + 1);
    }
    return result;
  }

  /**
   * Determine if this node is a leaf node
   * @return {boolean} True if the node is a leaf node and false otherwise.
   */
  isLeaf() {
    return !(this._left || this._right);
  }
}

export default BloomFilter;
