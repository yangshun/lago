import BinaryTreeNode from './BinaryTreeNode';

class BinaryTree<T> {
  public root: BinaryTreeNode<T> | null;

  /**
   * Initialize the Binary Tree
   * @param {*} value The value
   * @return {undefined}
   */
  constructor(value?: T) {
    this.root = value == null ? null : new BinaryTreeNode(value);
  }

  /**
   * Get the number of nodes in the tree.
   * @return {number} The number of nodes in the tree.
   */
  size(): number {
    if (!this.root) {
      return 0;
    }

    return this.root.size();
  }

  /**
   * Get the height of the tree.
   * @return {number} The height of the tree.
   */
  height(): number {
    if (!this.root) {
      return 0;
    }

    return this.root.height();
  }

  /**
   * Traverse the tree in an in-order fashion.
   * @return {*[]} An array of values.
   */
  inOrder(): Array<T> {
    const arr: Array<T> = [];

    function inOrderImpl(node: BinaryTreeNode<T> | null) {
      if (node == null) {
        return;
      }

      inOrderImpl(node.left);
      arr.push(node.value);
      inOrderImpl(node.right);
    }

    inOrderImpl(this.root);
    return arr;
  }

  /**
   * Traverse the tree in a pre-order fashion.
   * @return {*[]} An array of values.
   */
  preOrder(): Array<T> {
    const arr: Array<T> = [];

    function preOrderImpl(node: BinaryTreeNode<T> | null) {
      if (!node) {
        return;
      }

      arr.push(node.value);
      preOrderImpl(node.left);
      preOrderImpl(node.right);
    }

    preOrderImpl(this.root);
    return arr;
  }

  /**
   * Traverse the tree in a post-order fashion.
   * @return {*[]} An array of values.
   */
  postOrder(): Array<T> {
    const arr: Array<T> = [];

    function postOrderImpl(node: BinaryTreeNode<T> | null) {
      if (!node) {
        return;
      }

      postOrderImpl(node.left);
      postOrderImpl(node.right);
      arr.push(node.value);
    }

    postOrderImpl(this.root);
    return arr;
  }

  /**
   * Checks if the binary tree is balanced, i.e. depth of the two subtrees of
   * every node never differ by more than 1
   * @return {boolean}
   */
  isBalanced(): boolean {
    function isBalancedImpl(node: BinaryTreeNode<T> | null): boolean {
      if (!node) {
        return true;
      }

      const leftHeight = node.left ? node.left.height() : -1;
      const rightHeight = node.right ? node.right.height() : -1;

      if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
      }

      return isBalancedImpl(node.left) && isBalancedImpl(node.right);
    }

    return isBalancedImpl(this.root);
  }

  isComplete(): boolean {
    function isCompleteImpl(
      node: BinaryTreeNode<T> | null,
      index: number,
      numNodes: number,
    ): boolean {
      if (!node) {
        return true;
      }

      if (index >= numNodes) {
        return false;
      }

      return (
        isCompleteImpl(node.left, 2 * index + 1, numNodes) &&
        isCompleteImpl(node.right, 2 * index + 2, numNodes)
      );
    }

    return isCompleteImpl(this.root, 0, this.size());
  }
}

export default BinaryTree;
