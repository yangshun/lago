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
    if (!this.root) {
      this.root = new BinaryTreeNode(value);
    }

    node = node || this.root;

    const nodeValue = node.value;

    if (value < nodeValue) {
      const { left } = node;
      if (!left) {
        node.left = new BinaryTreeNode(value);
        return;
      }
      this.insert(value, left);
      return;
    }

    const { right } = node;
    if (!right) {
      node.right = new BinaryTreeNode(value);
      return;
    }
    this.insert(value, right);
  }

  /**
   * Recursively search for a value in the BST
   * @param {*} value The value to search for.
   * @param {*} node The current node.
   * @return {Boolean} True if value is found, false if not.
   */
  search(value, node = this.root) {
    if (!node) return false;

    const nodeValue = node.value;

    if (nodeValue === value) {
      return true;
    }

    if (value > nodeValue) {
      return this.search(value, node.right);
    }
    return this.search(value, node.left);
  }

  /**
   * Recursively get the minimum value in the tree.
   * @param {BinaryTreeNode} node The current node. Param is not required.
   * @return {*} The minimum value.
   */
  getMinimum(node = this.root) {
    if (!node) return null;

    const { left } = node;
    if (!left) return node.value;
    return this.getMinimum(left);
  }

  /**
   * Recursively get the maximum value in the tree.
   * @return {*} The maximum value.
   */
  getMaximum(node = this.root) {
    if (!node) return null;

    const { right } = node;
    if (!right) return node.value;
    return this.getMaximum(right);
  }
}

export default BinarySearchTree;
