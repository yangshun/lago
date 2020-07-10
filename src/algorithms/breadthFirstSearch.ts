import Queue from '../data-structures/Queue';
import nullthrows from '../utils/nullthrows';

interface Graph<T> {
  [key: string]: Array<T>;
}

/**
 * Performs a breadth-first search on a graph given a starting node.
 * @param {Object} graph Node to array of neighboring nodes.
 * @param {number|string} source Source node to start traversal from.
 *  It has to exist as a node in the graph.
 * @return {Array<T>} A BFS-traversed order of nodes.
 */
function breadthFirstSearch<T>(graph: Graph<T>, source: T): Array<T> {
  if (Object.keys(graph).length === 0) {
    return [];
  }

  const queue = new Queue<T>();
  queue.enqueue(source);

  const visited = new Set<T>([source]);

  while (!queue.isEmpty()) {
    const node = nullthrows(queue.dequeue());
    visited.add(node);
    graph[String(node)].forEach((neighbor: T) => {
      if (visited.has(neighbor)) {
        return;
      }
      queue.enqueue(neighbor);
    });
  }

  return Array.from(visited);
}

export default breadthFirstSearch;
