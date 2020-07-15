import BinaryTreeNode from './BinaryTreeNode';
import BinaryTree from './BinaryTree';

class BinarySearchTree extends BinaryTree<number> {
  /**
   * Recursively insert a new value in the BST.
   * @param {number} value The value being inserted
   * @param {BinaryTreeNode} node The current node. Param is not required.
   * @return {void}
   */
  insert(val: number): void {
    if (!this.root) {
      this.root = new BinaryTreeNode(val);
      return;
    }

    function insertImpl(value: number, node: BinaryTreeNode<number>) {
      const nodeValue = node.value;

      if (value < nodeValue) {
        const { left } = node;
        if (!left) {
          node.left = new BinaryTreeNode(value);
          return;
        }

        insertImpl(value, left);
        return;
      }

      const { right } = node;
      if (!right) {
        node.right = new BinaryTreeNode(value);
        return;
      }

      insertImpl(value, right);
    }

    insertImpl(val, this.root);
  }

  /**
   * Recursively search for a value in the BST
   * @param {number} value The value to search for.
   * @return {Boolean} True if value is found, false if not.
   */
  search(val: number): boolean {
    function searchImpl(
      value: number,
      node: BinaryTreeNode<number> | null,
    ): boolean {
      if (!node) {
        return false;
      }

      const nodeValue = node.value;

      if (nodeValue === value) {
        return true;
      }

      if (value > nodeValue) {
        return searchImpl(value, node.right);
      }

      return searchImpl(value, node.left);
    }

    return searchImpl(val, this.root);
  }

  /**
   * Recursively get the minimum value in the tree.
   * @param {BinaryTreeNode} node The current node. Param is not required.
   * @return {*} The minimum value.
   */
  getMinimum(): number | null {
    function getMinimumImpl(
      node: BinaryTreeNode<number> | null,
    ): number | null {
      if (!node) {
        return null;
      }

      const { left } = node;
      if (!left) {
        return node.value;
      }

      return getMinimumImpl(left);
    }

    return getMinimumImpl(this.root);
  }

  /**
   * Recursively get the maximum value in the tree.
   * @return {*} The maximum value.
   */
  getMaximum(): number | null {
    function getMaximumImpl(
      node: BinaryTreeNode<number> | null,
    ): number | null {
      if (!node) {
        return null;
      }

      const { right } = node;
      if (!right) {
        return node.value;
      }

      return getMaximumImpl(right);
    }

    return getMaximumImpl(this.root);
  }

  /**
   * Recursively delete a given value from the tree.
   * @param {number} value The value to delete.
   * @param {BinaryTreeNode} node The current node.
   * @return {BinaryTreeNode} The root node after deletion.
   */
  delete(val: number): BinaryTreeNode<number> | null {
    function deleteImpl(
      value: number,
      node: BinaryTreeNode<number> | null,
    ): BinaryTreeNode<number> | null {
      if (!node) {
        return null;
      }

      const nodeValue = node.value;
      const { left } = node;
      const { right } = node;
      if (value < nodeValue) {
        node.left = deleteImpl(value, left);
        return node;
      } else if (value > nodeValue) {
        node.right = deleteImpl(value, right);
        return node;
      } else {
        if (!left && !right) {
          node = null;
          return node;
        }
        if (!left) {
          node = right;
          return node;
        } else if (!right) {
          node = left;
          return node;
        }
        const tempNode: BinaryTreeNode<number> = findMinNodeHelper(right);
        node.value = tempNode.value;
        node.right = deleteImpl(tempNode.value, right);
        return node;
      }
    }
    function findMinNodeHelper(
      node: BinaryTreeNode<number>,
    ): BinaryTreeNode<number> {
      const { left } = node;
      if (!left) {
        return node;
      } else {
        return findMinNodeHelper(left);
      }
    }
    return (this.root = deleteImpl(val, this.root));
  }
}

export default BinarySearchTree;
