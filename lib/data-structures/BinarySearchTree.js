import BinaryTreeNode from './BinaryTreeNode';
import BinaryTree from './BinaryTree';

class BinarySearchTree extends BinaryTree {
  /**
   * Recursively insert a new value in the BST.
   * @param {*} value The value being inserted
   * @param {BinaryTreeNode} node The current node. Param is not required.
   * @return {undefined}
   */
  insert(value, node) {
    if (!this._root) {
      this._root = new BinaryTreeNode(value);
    }

    node = node || this._root;

    const nodeValue = node.getValue();

    if (value < nodeValue) {
      const left = node.getLeft();
      if (!left) {
        return node.setLeft(new BinaryTreeNode(value));
      }
      return this.insert(value, left);
    }

    const right = node.getRight();
    if (!right) {
      return node.setRight(new BinaryTreeNode(value));
    }
    return this.insert(value, right);
  }

  /**
   * Recursively search for a value in the BST
   * @param {*} value The value to search for.
   * @param {*} node The current node.
   * @return {Boolean} True if value is found, false if not.
   */
  search(value, node = this._root) {
    if (!node) return false;

    const nodeValue = node.getValue();

    if (nodeValue === value) {
      return true;
    }

    if (value > nodeValue) {
      return this.search(value, node.getRight());
    }
    return this.search(value, node.getLeft());
  }

  /**
   * Recursively get the minimum value in the tree.
   * @param {BinaryTreeNode} node The current node. Param is not required.
   * @return {*} The minimum value.
   */
  getMinimum(node = this._root) {
    if (!node) return null;

    const left = node.getLeft();
    if (!left) return node.getValue();
    return this.getMinimum(left);
  }

  /**
   * Recursively get the maximum value in the tree.
   * @return {*} The maximum value.
   */
  getMaximum(node = this._root) {
    if (!node) return null;

    const right = node.getRight();
    if (!right) return node.getValue();
    return this.getMaximum(right);
  }
}

export default BinarySearchTree;
