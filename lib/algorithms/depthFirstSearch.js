import { Stack } from '../';

/**
 * Performs a depth-first search on a graph given a starting node.
 * @param {Object} graph Node to array of neighboring nodes.
 * @param {number|string} source Source node to start traversal from. It has to exist as a node in the graph.
 * @return {number[]|string[]} A DFS-traversed order of nodes.
 */
function depthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) {
    return [];
  }
  const stack = new Stack();
  stack.push(source);
  const visited = new Set([source]);
  while (!stack.isEmpty()) {
    const node = stack.pop();
    visited.add(node);
    const neighbors = graph[node];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (!visited.has(neighbor)) {
        stack.push(neighbor);
      }
    }
  }

  return Array.from(visited);
}

export default depthFirstSearch;
