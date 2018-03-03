/**
 * Performs a breadth-first search on a graph given a starting node.
 * @param {Object} graph Node to array of neighboring nodes.
 * @param {number} source Source node to start traversal from. It has to exist as a node in the graph.
 * @return {number[]} A BFS-traversed order of nodes.
 */
import { Queue } from '../';

function breadthFirstSearch(graph, source) {
  if (Object.keys(graph).length === 0) {
    return [];
  }
  let queue = new Queue();
  queue.enqueue(source);
  const visited = new Set([source]);
  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    visited.add(node);
    graph[node].forEach(neighbor => {
      if (visited.has(neighbor)) {
        return;
      }
      queue.enqueue(neighbor);
    });
  }

  return Array.from(visited);
}

export default breadthFirstSearch;
