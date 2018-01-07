import BinaryTreeNode from './BinaryTreeNode';

class BinaryTree {
  /**
   * Initialize the Binary Tree
   * @param {*} value The value
   * @return {undefined}
   */
  constructor(value) {
    if (value) {
      this._root = new BinaryTreeNode(value);
    }
  }

  /**
   * Return the root node of the tree.
   * @return {BinaryTreeNode} The root node of the tree.
   */
  getRoot() {
    return this._root;
  }

  /**
   * Get the number of nodes in the tree.
   * @return {number} The number of nodes in the tree.
   */
  size() {
    if (!this._root) {
      return 0;
    }
    return this._root.size();
  }

  /**
   * Get the height of the tree.
   * @return {number} The height of the tree.
   */
  height() {
    if (!this._root) {
      return 0;
    }
    return this._root.height();
  }
}

export default BinaryTree;
