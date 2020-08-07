import BinaryTreeNode from './BinaryTreeNode';
import BinaryTree from './BinaryTree';

class BinarySearchTree extends BinaryTree<number> {
  /**
   * Recursively insert a new value in the BST.
   * @param {number} value The value being inserted
   */
  insert(val: number): void {
    this.root = this._insertImpl(val, this.root);
  }

  /**
   * Recursively search for a value in the BST
   * @param {number} value The value to search for.
   * @param {*} node The current node.
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

  protected _insertImpl(
    value: number,
    node: BinaryTreeNode<number> | null,
  ): BinaryTreeNode<number> {
    if (!node) {
      return new BinaryTreeNode(value);
    }

    // Normal BST insert
    // NOTE: Duplicates are sent to the left
    if (value <= node.value) {
      node.left = this._insertImpl(value, node.left);
    } else {
      node.right = this._insertImpl(value, node.right);
    }

    return node;
  }

  private _getMinimumNode(
    node: BinaryTreeNode<number> | null,
  ): BinaryTreeNode<number> | null {
    if (!node) {
      return null;
    }

    const { left } = node;
    if (!left) {
      return node;
    }

    return this._getMinimumNode(left);
  }

  /**
   * Recursively get the minimum value in the tree.
   * @param {BinaryTreeNode} node The current node. Param is not required.
   * @return {*} The minimum value.
   */
  getMinimum(): number | null {
    const minNode = this._getMinimumNode(this.root);
    return minNode != null ? minNode.value : null;
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
    this.root = this._deleteImpl(val, this.root);
    return this.root;
  }

  protected _deleteImpl(
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
      node.left = this._deleteImpl(value, left);
      return node;
    } else if (value > nodeValue) {
      node.right = this._deleteImpl(value, right);
      return node;
    }

    if (!left && !right) {
      return null;
    }

    if (!left) {
      return right;
    }

    if (!right) {
      return left;
    }

    const tempNode: BinaryTreeNode<number> = this._getMinimumNode(
      right,
    ) as BinaryTreeNode<number>;
    node.value = tempNode.value;
    node.right = this._deleteImpl(tempNode.value, right);

    return node;
  }
}

export default BinarySearchTree;
