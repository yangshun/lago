import Queue from '../data-structures/Queue';
import nullthrows from '../utils/nullthrows';

interface Graph<T> {
  [key: string]: Array<T>;
}

/**
 * Performs a topological sort on a directed graph.
 * @param {Object} graph Node to array of traversable neighboring nodes.
 * @return {Array<T>} A topological traversal of nodes.
 */
function topologicalSort(graph: Graph<string>): Array<string> {
  const nodes = new Map<string, { in: number; out: Set<string> }>();
  const order: Array<string> = [];
  const queue = new Queue<string>();

  Object.keys(graph).forEach((node) => {
    nodes.set(node, { in: 0, out: new Set(graph[node]) });
  });

  Object.keys(graph).forEach((node) => {
    graph[node].forEach((neighbor) => {
      nullthrows(nodes.get(String(neighbor))).in += 1;
    });
  });

  nodes.forEach((value, node) => {
    if (value.in === 0) {
      queue.enqueue(node);
    }
  });

  while (queue.length) {
    const node = queue.dequeue();
    nullthrows(nodes.get(nullthrows(node))).out.forEach((neighbor) => {
      const neighborNode = nullthrows(nodes.get(String(neighbor)));
      neighborNode.in -= 1;
      if (neighborNode.in === 0) {
        queue.enqueue(String(neighbor));
      }
    });

    order.push(nullthrows(node));
  }

  return order.length === Object.keys(graph).length ? order : [];
}

export default topologicalSort;
