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

  /**
   * Traverse the tree in an in-order fashion.
   * @return {*[]} An array of values.
   */
  inOrder() {
    const arr = [];
    function _inOrder(node) {
      if (!node) {
        return;
      }
      _inOrder(node.getLeft());
      arr.push(node.getValue());
      _inOrder(node.getRight());
    }
    _inOrder(this._root);
    return arr;
  }

  /**
   * Traverse the tree in a pre-order fashion.
   * @return {*[]} An array of values.
   */
  preOrder() {
    const arr = [];
    function _preOrder(node) {
      if (!node) {
        return;
      }
      arr.push(node.getValue());
      _preOrder(node.getLeft());
      _preOrder(node.getRight());
    }
    _preOrder(this._root);
    return arr;
  }

  /**
   * Traverse the tree in an post-order fashion.
   * @return {*[]} An array of values.
   */
  postOrder() {
    const arr = [];
    function _postOrder(node) {
      if (!node) {
        return;
      }
      _postOrder(node.getLeft());
      _postOrder(node.getRight());
      arr.push(node.getValue());
    }
    _postOrder(this._root);
    return arr;
  }
}

export default BinaryTree;
