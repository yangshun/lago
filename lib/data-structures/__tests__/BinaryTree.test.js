import BinaryTree from '../BinaryTree';
import BinaryTreeNode from '../BinaryTreeNode';

describe('BinaryTree', () => {
  describe('constructor()', () => {
    test('empty tree', () => {
      const tree = new BinaryTree();
      expect(tree).toBeTruthy();
      expect(tree.getRoot()).toBe(undefined);
    });

    test('one-node tree', () => {
      const tree = new BinaryTree(5);
      expect(tree.getRoot().getValue()).toBe(5);
    });
  });

  describe('getRoot()', () => {
    test('empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.getRoot()).toBe(undefined);
    });

    test('one-node tree', () => {
      const tree = new BinaryTree(5);
      expect(tree.getRoot().getValue()).toBe(5);
    });
  });

  describe('size()', () => {
    test('empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.size()).toBe(0);
    });

    test('one-node tree', () => {
      const tree = new BinaryTree(10);
      expect(tree.size()).toBe(1);
    });

    test('two-node tree', () => {
      const tree = new BinaryTree(10);
      tree.getRoot().setLeft(new BinaryTreeNode(5));
      expect(tree.size()).toBe(2);
    });

    test('non-empty tree', () => {
      const tree = new BinaryTree(10);
      tree.getRoot().setLeft(new BinaryTreeNode(5));
      tree.getRoot()._left.setLeft(new BinaryTreeNode(15));
      tree.getRoot().setRight(new BinaryTreeNode(2));
      expect(tree.size()).toBe(4);
    });
  });

  describe('height()', () => {
    test('empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.height()).toBe(0);
    });

    test('one-node tree', () => {
      const tree = new BinaryTree(10);
      expect(tree.height()).toBe(0);
    });

    test('two-node tree', () => {
      const tree = new BinaryTree(10);
      tree.getRoot().setLeft(new BinaryTreeNode(5));
      expect(tree.height()).toBe(1);
    });

    test('non-empty tree', () => {
      const tree = new BinaryTree(10);
      tree.getRoot().setLeft(new BinaryTreeNode(5));
      tree
        .getRoot()
        .getLeft()
        .setLeft(new BinaryTreeNode(15));
      tree.getRoot().setRight(new BinaryTreeNode(2));
      expect(tree.height()).toBe(2);
    });
  });
});
