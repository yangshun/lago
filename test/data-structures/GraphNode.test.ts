import { Graph } from '../../src';
import { GraphNode } from '../../src';
import { GraphEdge } from '../../src';

describe('GraphNode', () => {
  describe('constructor()', () => {
    test('constructor() must create a node', () => {
      const nodeA = new GraphNode(10);

      expect(nodeA).toBeDefined();
      expect(nodeA.value).toBe(10);
      expect(nodeA.neighbors).toEqual([]);
    });

    test('constructor() but with a string', () => {
      const nodeA = new GraphNode('YOLO');

      expect(nodeA).toBeDefined();
      expect(nodeA.value).toEqual('YOLO');
    });

    test('throw error when initialize with undefined or null', () => {
      expect(() => {
        new GraphNode(undefined);
      }).toThrow();

      expect(() => {
        new GraphNode(null);
      }).toThrow();
    });
  });

  describe('hasNeighbor', () => {
    test('should have neighbors when assigned an edge in a graph', () => {
      const nodeA = new GraphNode('A');
      const nodeB = new GraphNode('B');

      const edgeAB = new GraphEdge(nodeA, nodeB);

      const graph = new Graph();
      graph.addEdge(edgeAB);

      expect(nodeA.hasNeighbor(nodeB)).toBe(true);
    });
  });

  describe('neighbors', () => {
    test('get all neighbors in the graph', () => {
      const nodeA = new GraphNode('A');
      const nodeB = new GraphNode('B');
      const nodeC = new GraphNode('C');

      const edgeAB = new GraphEdge(nodeA, nodeB);
      const edgeAC = new GraphEdge(nodeA, nodeC);

      const graph = new Graph();
      graph.addEdge(edgeAB);
      graph.addEdge(edgeAC);

      expect(nodeA.neighbors).toEqual([nodeB, nodeC]);
    });
  });
});
