import BinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  describe('insert()', () => {
    test('if empty tree, value becomes root', () => {
      const tree = new BinarySearchTree();
      tree.insert(5);
      expect(tree.getRoot().value).toBe(5);
    });

    test('inserts value at correct location in BST', () => {
      const tree = new BinarySearchTree(30);
      tree.insert(20);
      tree.insert(40);
      tree.insert(35);

      const root = tree.getRoot();
      expect(root.left.value).toBe(20);
      expect(root.right.value).toBe(40);
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
});
