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
      const node = new BinaryTreeNode('A');
      expect(node.getValue()).toBe('A');
    });
  });
});
