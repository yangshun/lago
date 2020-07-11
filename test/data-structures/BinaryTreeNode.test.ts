import { BinaryTreeNode } from '../../src';

describe('BinaryTreeNode', () => {
  test('constructor()', () => {
    const node = new BinaryTreeNode('A');
    expect(node).toBeTruthy();
    expect(node.value).toBe('A');
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });

  describe('value', () => {
    describe('get', () => {
      test('using numbers', () => {
        const node = new BinaryTreeNode(5);
        expect(node.value).toBe(5);
      });

      test('using strings', () => {
        const node = new BinaryTreeNode('test');
        expect(node.value).toBe('test');
      });
    });

    describe('set', () => {
      const node = new BinaryTreeNode(5);
      node.value = 10;
      expect(node.value).toBe(10);
      node.value = -5;
      expect(node.value).toBe(-5);
    });
  });

  describe('left', () => {
    test('without setting left node', () => {
      const node = new BinaryTreeNode(0);
      expect(node.left).toBe(null);
    });

    test('with setting left node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(12);
      node.left = node2;
      expect(node.left).toBe(node2);
      node.left = node3;
      expect(node.left).toBe(node3);
    });
  });

  describe('right', () => {
    test('without setting rightNode', () => {
      const node = new BinaryTreeNode(0);
      expect(node.right).toBe(null);
    });

    test('with setting rightNode', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(12);
      node.right = node2;
      expect(node.right).toBe(node2);
      node.right = node3;
      expect(node.right).toBe(node3);
    });
  });

  describe('size()', () => {
    test('without adding any child', () => {
      const node = new BinaryTreeNode(0);
      expect(node.size()).toBe(1);
    });

    test('set one left node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.left = node2;
      expect(node.size()).toBe(2);
    });

    test('set one right node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.right = node2;
      expect(node.size()).toBe(2);
    });

    test('set both children', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.left = node2;
      node.right = node3;
      expect(node.size()).toBe(3);
    });

    test('set left size of three', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.left = node2;
      node2.right = node3;
      expect(node.size()).toBe(3);
    });

    test('set right size of three', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.right = node2;
      node2.left = node3;
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
      node.left = node2;
      expect(node.height()).toBe(1);
    });

    test('set one right node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.right = node2;
      expect(node.height()).toBe(1);
    });

    test('set both children', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.left = node2;
      node.right = node3;
      expect(node.height()).toBe(1);
    });

    test('set left height of two', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.left = node2;
      node2.right = node3;
      expect(node.height()).toBe(2);
    });

    test('set right height of two', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.right = node2;
      node2.left = node3;
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
      node.left = node2;
      expect(node.isLeaf()).toBe(false);
      expect(node2.isLeaf()).toBe(true);
    });

    test('set one right node', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      node.right = node2;
      expect(node.isLeaf()).toBe(false);
      expect(node2.isLeaf()).toBe(true);
    });

    test('set both children', () => {
      const node = new BinaryTreeNode(0);
      const node2 = new BinaryTreeNode(10);
      const node3 = new BinaryTreeNode(15);
      node.left = node2;
      node.right = node3;
      expect(node.isLeaf()).toBe(false);
      expect(node2.isLeaf()).toBe(true);
      expect(node3.isLeaf()).toBe(true);
    });
  });
});
