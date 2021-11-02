import BinaryTreeNode from './BinaryTreeNode';
import BinarySearchTree from './BinarySearchTree';

/**
 * An implementation of AVL tree based on BinarySearchTree.
 */
class AVLTree extends BinarySearchTree {
  protected _insertImpl(
    value: number,
    node: BinaryTreeNode<number> | null,
  ): BinaryTreeNode<number> {
    return this._balance(super._insertImpl(value, node));
  }

  protected _deleteImpl = (
    value: number,
    node: BinaryTreeNode<number> | null,
  ): BinaryTreeNode<number> | null => {
    node = super._deleteImpl(value, node);
    return node ? this._balance(node!) : node;
  };

  _balance(node: BinaryTreeNode<number>): BinaryTreeNode<number> {
    // Helper function to calculate the balance of the node
    const calcBalance = (node: BinaryTreeNode<number>): number =>
      (node.left ? node.left!.height() + 1 : 0) -
      (node.right ? node.right?.height() + 1 : 0);

    // Check for whether the node is out-of-balance
    const balance = calcBalance(node);

    if (balance > 1) {
      const leftBalance = calcBalance(node.left!);
      if (leftBalance > 0) {
        // LL case
        node = this._rotateRight(node);
      } else if (leftBalance < 0) {
        // LR case
        node.left = this._rotateLeft(node.left!);
        node = this._rotateRight(node);
      }
    } else if (balance < -1) {
      const rightBalance = calcBalance(node.right!);
      if (rightBalance > 0) {
        // RL case
        node.right = this._rotateRight(node.right!);
        node = this._rotateLeft(node);
      } else if (rightBalance < 0) {
        // RR case
        node = this._rotateLeft(node);
      }
    }

    return node;
  }

  _rotateRight(node: BinaryTreeNode<number>): BinaryTreeNode<number> {
    const { left } = node;
    const { right } = left!;

    left!.right = node;
    node.left = right;

    return left!;
  }

  _rotateLeft(node: BinaryTreeNode<number>): BinaryTreeNode<number> {
    const { right } = node;
    const { left } = right!;

    right!.left = node;
    node.right = left;

    return right!;
  }
}

export default AVLTree;
