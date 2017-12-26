import BinarySearchTree from '../../data-structures/BinarySearchTree';
import depthFirstSearch from '../depthFirstSearch';

describe('depthFirstSearch', () => {
  const tree = new BinarySearchTree(10);
  tree.insert(10);
  tree.insert(15);
  tree.insert(6);
  tree.insert(8);
  tree.insert(20);

  test('returns true when target is found', () => {
    expect(depthFirstSearch(tree._root, 6)).toBe(true);
  });

  test('returns false when target is not found', () => {
    expect(depthFirstSearch(tree._root, 21)).toBe(false);
  });
});
