/**
 * Performs a depth-first search on a graph given a starting node.
 * @param {Object} graph Node to array of neighboring nodes.
 * @param {number} source Source node to start traversal from. It has to exist as a node in the graph.
 * @return {number[]} A DFS-traversed order of nodes.
 */
import { Stack } from '../';

function depthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) {
    return [];
  }
  let stack = new Stack();
  stack.push(source);
  const visited = new Set([source]);
  while (!stack.isEmpty()) {
    const node = stack.pop();
    visited.add(node);
    const neighbors = graph[node];
    for (let i = neighbors.length - 1; i >= 0; i--) {
      const neighbor = neighbors[i];
      if (visited.has(neighbor)) {
        continue;
      }
      stack.push(neighbor);
    }
  }

  return Array.from(visited);
}

export default depthFirstSearch;
