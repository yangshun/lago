import BinarySearchTree from '../BinarySearchTree';

describe('BinarySearchTree', () => {
  test('constructor()', () => {
    const tree = new BinarySearchTree();
    expect(tree).toBeTruthy();
    expect(tree._root).toBe(null);
  });

  test('constructor(value)', () => {
    const tree = new BinarySearchTree(5);
    expect(tree._root.getValue()).toBe(5);
  });

  describe('insert()', () => {
    test('if root is null, set root equal to value', () => {
      const tree = new BinarySearchTree();
      tree.insert(5);
      expect(tree._root.getValue()).toBe(5);
    });

    test('inserts value at correct location in tree', () => {
      const tree = new BinarySearchTree(30);

      tree.insert(20);
      tree.insert(40);
      tree.insert(35);

      const root = tree._root;
      expect(root.getLeft().getValue()).toBe(20);
      expect(root.getRight().getValue()).toBe(40);
      expect(
        tree
          .search(40)
          .getLeft()
          .getValue(),
      ).toBe(35);
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
      expect(searchResult.getValue()).toBe(35);
      searchResult = tree.search(555);
      expect(searchResult).toBe(null);
    });
  });

  describe('getMinimum()', () => {
    test('', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      expect(tree.getMinimum().getValue()).toBe(2);
    });
  });

  describe('getMaximum()', () => {
    test('', () => {
      const tree = new BinarySearchTree(10);
      tree.insert(5);
      tree.insert(15);
      tree.insert(2);
      expect(tree.getMaximum().getValue()).toBe(15);
    });
  });

  describe('depthFirstTraversal()', () => {
    const tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(20);
    tree.insert(2);
    tree.insert(8);

    let values;
    const iteratorFunc = node => values.push(node.getValue());

    test('in-order traversal', () => {
      values = [];
      tree.depthFirstTraversal(iteratorFunc, 'in-order');
      expect(values[0]).toBe(2);
      expect(values[3]).toBe(10);
    });

    test('pre-order traversal', () => {
      values = [];
      tree.depthFirstTraversal(iteratorFunc, 'pre-order');
      expect(values[0]).toBe(10);
      expect(values[1]).toBe(5);
    });

    test('post-order traversal', () => {
      values = [];
      tree.depthFirstTraversal(iteratorFunc, 'post-order');
      expect(values[0]).toBe(2);
      expect(values[3]).toBe(20);
    });
  });

  describe('breadthFirstTraversal()', () => {
    test('traverses tree in correct order', () => {
      const tree = new BinarySearchTree();
      tree.insert(10);
      tree.insert(20);
      tree.insert(5);
      tree.insert(25);

      const values = [];
      const iteratorFunc = node => values.push(node.getValue());

      tree.breadthFirstTraversal(iteratorFunc);

      expect(values[0]).toBe(10);
      expect(values[1]).toBe(5);
    });
  });
});
