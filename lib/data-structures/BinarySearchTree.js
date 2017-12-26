import BinaryTreeNode from './BinaryTreeNode';

class BinarySearchTree {
  /**
   * Initialize the Binary Search Tree (BST)
   * @param {*} value The value
   * @return {undefined}
   */
  constructor(value) {
    if (value) {
      this._root = new BinaryTreeNode(value);
    }
  }

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

  /**
   * Recursively perform depth first traversal on tree.
   * @param {Function} iteratorFunc Passed the value of node as a parameter.
   * @param {String} order The order in which to call the iteratorFunc.
   * @param {BinaryTreeNode} node The current node. Param not required when invoking function.
   * @return {Undefined} Returns undefined.
   */
  depthFirstTraversal(iteratorFunc, order, node = this._root) {
    const left = node.getLeft();
    const right = node.getRight();

    if (order === 'pre-order') iteratorFunc(node);
    if (left) this.depthFirstTraversal(iteratorFunc, order, left);
    if (order === 'in-order') iteratorFunc(node);
    if (right) this.depthFirstTraversal(iteratorFunc, order, right);
    if (order === 'post-order') iteratorFunc(node);
  }

  /**
   * Use a Queue to perform breadth first traversal of tree.
   * @param {Function} iteratorFunc Passed the value of node as a parameter.
   * @return {Undefined} Returns undefined.
   */
  breadthFirstTraversal(iteratorFunc) {
    const nodeQueue = [];
    nodeQueue.push(this._root);

    while (nodeQueue.length) {
      const node = nodeQueue.shift();
      iteratorFunc(node);
      const left = node.getLeft();
      const right = node.getRight();
      if (left) nodeQueue.push(left);
      if (right) nodeQueue.push(right);
    }
  }
}

export default BinarySearchTree;
