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
    test('using numbers', () => {
      const node = new BinaryTreeNode(5);
      expect(node.getValue()).toBe(5);
    });

    test('using strings', () => {
      const node = new BinaryTreeNode('test');
      expect(node.getValue()).toBe('test');
    });
  });

  test('setValue()', () => {
    const node = new BinaryTreeNode(5);
    node.setValue(10);
    expect(node.getValue()).toBe(10);
    node.setValue(-5);
    expect(node.getValue()).toBe(-5);
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
    const node = new BinaryTreeNode(0);
    const node2 = new BinaryTreeNode(10);
    const node3 = new BinaryTreeNode(12);
    node.setLeft(node2);
    expect(node.getLeft()).toBe(node2);
    node.setLeft(node3);
    expect(node.getLeft()).toBe(node3);
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
    const node = new BinaryTreeNode(0);
    const node2 = new BinaryTreeNode(10);
    const node3 = new BinaryTreeNode(12);
    node.setRight(node2);
    expect(node.getRight()).toBe(node2);
    node.setRight(node3);
    expect(node.getRight()).toBe(node3);
  });

  describe('size()', () => {
    test('without adding any child', () => {
      const node = new BinaryTreeNode(0);
      expect(node.size()).toBe(1);
    });

    test('set one left node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.setLeft(node2);
      expect(node.size()).toBe(2);
    });

    test('set one right node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.setRight(node2);
      expect(node.size()).toBe(2);
    });

    test('set both children', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.setLeft(node2);
      node.setRight(node3);
      expect(node.size()).toBe(3);
    });

    test('set left size of three', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.setLeft(node2);
      node2.setRight(node3);
      expect(node.size()).toBe(3);
    });

    test('set right size of three', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.setRight(node2);
      node2.setLeft(node3);
      expect(node.size()).toBe(3);
    });
  });

  describe('height()', () => {
    test('without adding any child', () => {
      const node = new BinaryTreeNode(0);
      expect(node.height()).toBe(0);
    });

    test('set one left node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.setLeft(node2);
      expect(node.height()).toBe(1);
    });

    test('set one right node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.setRight(node2);
      expect(node.height()).toBe(1);
    });

    test('set both children', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.setLeft(node2);
      node.setRight(node3);
      expect(node.height()).toBe(1);
    });

    test('set left height of two', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.setLeft(node2);
      node2.setRight(node3);
      expect(node.height()).toBe(2);
    });

    test('set right height of two', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.setRight(node2);
      node2.setLeft(node3);
      expect(node.height()).toBe(2);
    });
  });

  describe('isLeaf()', () => {
    test('without adding any child', () => {
      const node = new BinaryTreeNode(0);
      expect(node.isLeaf()).toBe(true);
    });

    test('set one left node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.setLeft(node2);
      expect(node.isLeaf()).toBe(false);
      expect(node2.isLeaf()).toBe(true);
    });

    test('set one right node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.setRight(node2);
      expect(node.isLeaf()).toBe(false);
      expect(node2.isLeaf()).toBe(true);
    });

    test('set both children', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.setLeft(node2);
      node.setRight(node3);
      expect(node.isLeaf()).toBe(false);
      expect(node2.isLeaf()).toBe(true);
      expect(node3.isLeaf()).toBe(true);
    });
  });
});
