import { Queue } from '../';

/**
 * Performs a topological sort on a directed graph.
 * @param {Object} graph Node to array of traversable neighboring nodes.
 * @return {number[]|string[]} A topological traversal of nodes.
 */
function topologicalSort(graph) {
  const nodes = new Map();
  const order = [];
  const queue = new Queue();

  Object.keys(graph).forEach(node => {
    nodes.set(node, { in: 0, out: new Set(graph[node]) });
  });

  Object.keys(graph).forEach(node => {
    graph[node].forEach(neighbor => {
      nodes.get(neighbor).in += 1;
    });
  });

  nodes.forEach((value, node) => {
    if (value.in === 0) {
      queue.enqueue(node);
    }
  });

  while (queue.length) {
    const node = queue.dequeue();
    nodes.get(node).out.forEach(neighbor => {
      nodes.get(neighbor).in -= 1;
      if (nodes.get(neighbor).in === 0) {
        queue.enqueue(neighbor);
      }
    });
    order.push(node);
  }

  return order.length === Object.keys(graph).length ? order : [];
}

export default topologicalSort;
