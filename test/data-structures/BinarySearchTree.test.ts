import { BinarySearchTree } from '../../src';
import nullthrows from '../../src/utils/nullthrows';

export const binarySearchTreeTests = (
  /* eslint-disable @typescript-eslint/no-explicit-any */
  describe: any,
  test: any,
  /* eslint-enable @typescript-eslint/no-explicit-any */
) => {
  describe('insert()', () => {
    test('if empty tree, value becomes root', () => {
      const tree = new BinarySearchTree();
      tree.insert(5);
      expect(nullthrows(tree.root).value).toBe(5);
    });

    test('inserts value at correct location in BST', () => {
      const tree = new BinarySearchTree(30);
      tree.insert(20);
      tree.insert(40);
      tree.insert(35);

      const root = nullthrows(tree.root);
      expect(nullthrows(root.left).value).toBe(20);
      expect(nullthrows(root.right).value).toBe(40);
    });
  });

  describe('search()', () => {
    test('returns correct result based on value', () => {
      const tree = new BinarySearchTree(30);
      tree.insert(20);
      tree.insert(40);
      tree.insert(25);
      tree.insert(50);
      tree.insert(35);

      let searchResult = tree.search(35);
      expect(searchResult).toBe(true);
      searchResult = tree.search(555);
      expect(searchResult).toBe(false);
    });
  });

  describe('getMinimum()', () => {
    test('empty tree', () => {
      const tree = new BinarySearchTree();
      expect(tree.getMinimum()).toBe(null);
    });

    test('non-empty tree', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      expect(tree.getMinimum()).toBe(2);
    });
  });

  describe('getMaximum()', () => {
    test('empty tree', () => {
      const tree = new BinarySearchTree();
      expect(tree.getMaximum()).toBe(null);
    });

    test('non-empty tree', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      expect(tree.getMaximum()).toBe(15);
    });
  });

  describe('delete()', () => {
    test('delete node from single-node BST', () => {
      const tree = new BinarySearchTree(20);
      tree.delete(20);
      expect(tree.inOrder()).toEqual([]);
    });

    test('delete root node from BST', () => {
      const tree = new BinarySearchTree(30);
      tree.insert(20);
      tree.insert(40);
      tree.insert(10);
      tree.insert(50);
      tree.insert(5);
      tree.insert(6);
      tree.delete(30);
      expect(tree.inOrder()).toEqual([5, 6, 10, 20, 40, 50]);
    });

    test('delete value from BST which does not exists', () => {
      const tree = new BinarySearchTree(20);
      tree.insert(10);
      tree.insert(50);
      tree.insert(60);
      tree.insert(40);
      tree.insert(70);
      tree.insert(5);
      tree.insert(6);
      tree.delete(100);
      expect(tree.inOrder()).toEqual([5, 6, 10, 20, 40, 50, 60, 70]);
    });

    test('deletes value from the BST', () => {
      const tree = new BinarySearchTree(50);
      tree.insert(20);
      tree.insert(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(12);
      tree.insert(14);
      tree.insert(30);
      tree.insert(35);
      tree.insert(40);
      tree.insert(60);
      tree.insert(55);
      tree.insert(80);
      tree.insert(70);
      tree.insert(100);
      tree.delete(100);
      expect(tree.inOrder()).toEqual([
        5, 10, 12, 14, 15, 20, 30, 35, 40, 50, 55, 60, 70, 80,
      ]);

      tree.delete(10);
      expect(tree.inOrder()).toEqual([
        5, 12, 14, 15, 20, 30, 35, 40, 50, 55, 60, 70, 80,
      ]);

      tree.delete(80);
      expect(tree.inOrder()).toEqual([
        5, 12, 14, 15, 20, 30, 35, 40, 50, 55, 60, 70,
      ]);

      tree.delete(20);
      expect(tree.inOrder()).toEqual([
        5, 12, 14, 15, 30, 35, 40, 50, 55, 60, 70,
      ]);

      tree.delete(15);
      tree.delete(60);
      expect(tree.inOrder()).toEqual([5, 12, 14, 30, 35, 40, 50, 55, 70]);

      tree.delete(35);
      tree.delete(12);
      expect(tree.inOrder()).toEqual([5, 14, 30, 40, 50, 55, 70]);

      tree.delete(30);
      expect(tree.inOrder()).toEqual([5, 14, 40, 50, 55, 70]);

      tree.delete(40);
      tree.delete(50);
      expect(tree.inOrder()).toEqual([5, 14, 55, 70]);
    });
  });
};

describe('BinarySearchTree', () => {
  binarySearchTreeTests(describe, test);
});
