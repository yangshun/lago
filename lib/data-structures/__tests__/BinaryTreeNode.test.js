import BinaryTreeNode from '../BinaryTreeNode';

describe('BinaryTreeNode', () => {
  test('constructor()', () => {
    const node = new BinaryTreeNode('A');
    expect(node).toBeTruthy();
    expect(node._value).toBe('A');
    expect(node._left).toBe(null);
    expect(node._right).toBe(null);
  });

  describe('getValue()', () => {
    test('using numbers only', () => {
      const node = new BinaryTreeNode(5);
      expect(node.getValue()).toBe(5);
    });

    test('using string only', () => {
      const node = new BinaryTreeNode('test');
      expect(node.getValue()).toBe('test');
    });
  });

  describe('setValue()', () => {
    test('set and test', () => {
      const node = new BinaryTreeNode(5);
      node.setValue(10);
      expect(node.getValue()).toBe(10);
      node.setValue(-5);
      expect(node.getValue()).toBe(-5);
    });
  });

  describe('getLeft()', () => {
    test('without setting leftNode', () => {
      const node = new BinaryTreeNode(0);
      expect(node.getLeft()).toBe(null);
    });
    test('with setting leftNode', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.setLeft(node2);
      expect(node.getLeft()).toBe(node2);
    });
  });

  describe('setLeft()', () => {
    test('set and test', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(12);
      node.setLeft(node2);
      expect(node.getLeft()).toBe(node2);
      node.setLeft(node3);
      expect(node.getLeft()).toBe(node3);
    });
  });

  describe('getRight()', () => {
    test('without setting rightNode', () => {
      const node = new BinaryTreeNode(0);
      expect(node.getRight()).toBe(null);
    });
    test('with setting rightNode', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.setRight(node2);
      expect(node.getRight()).toBe(node2);
    });
  });

  describe('setRight()', () => {
    test('set and test', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(12);
      node.setRight(node2);
      expect(node.getRight()).toBe(node2);
      node.setRight(node3);
      expect(node.getRight()).toBe(node3);
    });
  });
});
