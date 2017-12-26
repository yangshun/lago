/**
 * Searches for a target value in a binary tree
 * @param {BinaryTreeNode} rootNode
 * @param {*} target
 * @return {Boolean}
 */
function depthFirstSearch(rootNode, target) {
  if (!rootNode) {
    return null;
  }

  const nodeStack = [];
  nodeStack.push(rootNode);

  while (nodeStack.length) {
    const node = nodeStack.pop();

    if (node.getValue() === target) {
      return true;
    }

    const left = node.getLeft();
    const right = node.getRight();

    if (right) {
      nodeStack.push(right);
    }
    if (left) {
      nodeStack.push(left);
    }
  }

  return false;
}

export default depthFirstSearch;
