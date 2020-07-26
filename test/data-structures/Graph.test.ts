import { Graph } from '../../src';

describe('Graph', () => {
  describe('constructor()', () => {
    test('a new graph should be created', () => {
      const graph = new Graph();

      expect(graph).toBeDefined();
      expect(graph.size).toBe(0);
    });
  });

  describe('addNode()', () => {
    test('node should be added to graph', () => {
      const graph = new Graph();
      graph.addNode(1);

      expect(graph.size).toBe(1);
    });
  });

  describe('removeNode()', () => {
    test('node should be removed from the graph', () => {
      const graph = new Graph();
      graph.addNode(1);
      expect(graph.size).toBe(1);

      graph.addNode(2);
      expect(graph.size).toBe(2);

      graph.removeNode(1);
      expect(graph.size).toBe(1);

      graph.removeNode(2);
      expect(graph.size).toBe(0);
    });

    test('edge should be removed between connected nodes', () => {
      const graph = new Graph();
      graph.addEdge(1, 2, 3);
      graph.addEdge(2, 1, 3);
      expect(graph.size).toBe(2);

      graph.removeNode(1);
      expect(graph.size).toBe(1);
      expect(graph.getNeighbors(2)).toHaveLength(0);
    });

    test.only('edge should be removed from the other node', () => {
      const graph = new Graph();
      graph.addEdge(1, 2, 3);
      graph.removeNode(2);
      expect(graph.size).toBe(1);
      expect(graph.getNeighbors(1)).toHaveLength(0);
    });

    test('cyclic node', () => {
      const graph = new Graph();
      graph.addEdge(1, 1, 3);
      expect(graph.size).toBe(1);

      graph.removeNode(1);
      expect(graph.size).toBe(0);
      expect(graph.getNeighbors(1)).toHaveLength(0);
    });
  });

  describe('edges', () => {
    describe('addEdge()', () => {
      test('connect different nodes', () => {
        const graph = new Graph();
        graph.addEdge(1, 2, 3);

        expect(graph.size).toBe(2);
        expect(graph.isAdjacent(1, 2)).toBe(true);
        expect(graph.isAdjacent(2, 1)).toBe(false);
        expect(graph.getEdgeWeight(1, 2)).toBe(3);
      });

      test('connect same node', () => {
        const graph = new Graph();
        graph.addEdge(1, 1, 2);

        expect(graph.size).toBe(1);
        expect(graph.isAdjacent(1, 1)).toBe(true);
        expect(graph.getEdgeWeight(1, 1)).toBe(2);
      });
    });

    describe('removeEdge()', () => {
      test('remove edge between different nodes', () => {
        const graph = new Graph();
        graph.addEdge(1, 2, 3);
        expect(graph.isAdjacent(1, 2)).toBe(true);
        expect(graph.isAdjacent(2, 1)).toBe(false);
        expect(graph.getEdgeWeight(1, 2)).toBe(3);

        graph.removeEdge(1, 2);
        expect(graph.isAdjacent(1, 2)).toBe(false);
        expect(graph.isAdjacent(2, 1)).toBe(false);
        expect(graph.size).toBe(2);
        expect(graph.getEdgeWeight(1, 2)).toBeUndefined();
        expect(graph.getNeighbors(1)).toHaveLength(0);
        expect(graph.getNeighbors(2)).toHaveLength(0);
      });

      test('remove edge between bi-directional nodes', () => {
        const graph = new Graph();
        graph.addEdge(1, 2, 3);
        graph.addEdge(2, 1, 4);
        expect(graph.isAdjacent(1, 2)).toBe(true);
        expect(graph.isAdjacent(2, 1)).toBe(true);
        expect(graph.getEdgeWeight(1, 2)).toBe(3);
        expect(graph.getEdgeWeight(2, 1)).toBe(4);

        graph.removeEdge(1, 2);
        expect(graph.isAdjacent(1, 2)).toBe(false);
        expect(graph.isAdjacent(2, 1)).toBe(true);
        expect(graph.size).toBe(2);
        expect(graph.getEdgeWeight(1, 2)).toBeUndefined();
        expect(graph.getEdgeWeight(2, 1)).toBe(4);
        expect(graph.getNeighbors(1)).toHaveLength(0);
        expect(graph.getNeighbors(2)).toHaveLength(1);
      });

      test('remove edge between same node', () => {
        const graph = new Graph();
        graph.addEdge(1, 1, 2);

        expect(graph.size).toBe(1);
        expect(graph.isAdjacent(1, 1)).toBe(true);

        graph.removeEdge(1, 1);
        expect(graph.isAdjacent(1, 1)).toBe(false);
        expect(graph.size).toBe(1);
      });

      test('remove non-existent edge', () => {
        const graph = new Graph();
        expect(() => {
          graph.removeEdge(1, 2);
        }).not.toThrow();
      });
    });

    describe('getEdgeWeight()', () => {
      test('weight between connected nodes', () => {
        const graph = new Graph();
        graph.addEdge(1, 2, 3);

        expect(graph.size).toBe(2);
        expect(graph.getEdgeWeight(1, 2)).toBe(3);
      });

      test('weight between non-existent edges', () => {
        const graph = new Graph();
        graph.addEdge(1, 2, 3);

        expect(graph.getEdgeWeight(1, 1)).toBeUndefined();
      });

      test('weight for non-existent nodes', () => {
        const graph = new Graph();
        expect(graph.getEdgeWeight(1, 2)).toBeUndefined();
      });
    });
  });

  describe('getNeighbors()', () => {
    test('non-empty neighbors', () => {
      const graph = new Graph();
      graph.addEdge(1, 2, 3);
      expect(graph.getNeighbors(1)).toEqual(expect.arrayContaining([2]));
    });

    test('empty neighbors', () => {
      const graph = new Graph();
      graph.addNode(1);
      expect(graph.getNeighbors(1)).toHaveLength(0);

      graph.addEdge(1, 2, 3);
      expect(graph.getNeighbors(2)).toHaveLength(0);
    });
  });
});
