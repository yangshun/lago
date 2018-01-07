import BinaryTree from '../BinaryTree';
import BinaryTreeNode from '../BinaryTreeNode';

function createTree() {
  const tree = new BinaryTree('F');
  tree.getRoot().setLeft(new BinaryTreeNode('B'));
  tree
    .getRoot()
    .getLeft()
    .setLeft(new BinaryTreeNode('A'));
  tree
    .getRoot()
    .getLeft()
    .setRight(new BinaryTreeNode('D'));
  tree
    .getRoot()
    .getLeft()
    .getRight()
    .setLeft(new BinaryTreeNode('C'));
  tree
    .getRoot()
    .getLeft()
    .getRight()
    .setRight(new BinaryTreeNode('E'));
  tree.getRoot().setRight(new BinaryTreeNode('G'));
  tree
    .getRoot()
    .getRight()
    .setRight(new BinaryTreeNode('I'));
  tree
    .getRoot()
    .getRight()
    .getRight()
    .setLeft(new BinaryTreeNode('H'));
  return tree;
}

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

  describe('inOrder()', () => {
    test('empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.inOrder()).toEqual([]);
    });

    test('one-node tree', () => {
      const tree = new BinaryTree(10);
      expect(tree.inOrder()).toEqual([10]);
    });

    test('three-node tree', () => {
      const tree = new BinaryTree(10);
      tree.getRoot().setLeft(new BinaryTreeNode(5));
      tree.getRoot().setRight(new BinaryTreeNode(15));
      expect(tree.inOrder()).toEqual([5, 10, 15]);
    });

    test('non-empty tree', () => {
      const tree = createTree();
      expect(tree.inOrder()).toEqual([
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
      ]);
    });
  });

  describe('preOrder()', () => {
    test('empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.preOrder()).toEqual([]);
    });

    test('one-node tree', () => {
      const tree = new BinaryTree(10);
      expect(tree.preOrder()).toEqual([10]);
    });

    test('three-node tree', () => {
      const tree = new BinaryTree(10);
      tree.getRoot().setLeft(new BinaryTreeNode(5));
      tree.getRoot().setRight(new BinaryTreeNode(15));
      expect(tree.preOrder()).toEqual([10, 5, 15]);
    });

    test('non-empty tree', () => {
      const tree = createTree();
      expect(tree.preOrder()).toEqual([
        'F',
        'B',
        'A',
        'D',
        'C',
        'E',
        'G',
        'I',
        'H',
      ]);
    });
  });

  describe('postOrder()', () => {
    test('empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.postOrder()).toEqual([]);
    });

    test('one-node tree', () => {
      const tree = new BinaryTree(10);
      expect(tree.postOrder()).toEqual([10]);
    });

    test('three-node tree', () => {
      const tree = new BinaryTree(10);
      tree.getRoot().setLeft(new BinaryTreeNode(5));
      tree.getRoot().setRight(new BinaryTreeNode(15));
      expect(tree.postOrder()).toEqual([5, 15, 10]);
    });

    test('non-empty tree', () => {
      const tree = createTree();
      expect(tree.postOrder()).toEqual([
        'A',
        'C',
        'E',
        'D',
        'B',
        'H',
        'I',
        'G',
        'F',
      ]);
    });
  });
});
