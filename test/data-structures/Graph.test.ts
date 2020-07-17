import { Graph } from '../../src';
import { GraphNode } from '../../src';
import { GraphEdge } from '../../src';

describe('Graph', () => {
  describe('constructor()', () => {
    test('a new graph should be created', () => {
      const graph = new Graph();

      expect(graph).toBeDefined();
      expect(graph.isDirected).toBe(false);
      expect(graph.nodes).toEqual({});
    });
  });
  describe('addNode()', () => {
    test('node should be added to graph', () => {
      const graph = new Graph();
      const nodeA = new GraphNode(20);
      const nodeB = new GraphNode(30);
      graph.addNode(nodeA);
      graph.addNode(nodeB);

      expect(graph.getAllNodes().length).toEqual(2);
    });
  });
  describe('addEdge()', () => {
    test('edge should be added to the graph', () => {
      const graph = new Graph();
      const nodeA = new GraphNode(10);
      const nodeB = new GraphNode(20);
      const nodeC = new GraphNode(30);
      const edgeAB = new GraphEdge(nodeA, nodeB);

      graph.addEdge(edgeAB);

      expect(edgeAB.getKey()).toEqual('10_20');

      expect(nodeA.hasNeighbor(nodeB)).toBe(true);
      expect(nodeA.hasNeighbor(nodeC)).toBe(false);
      expect(nodeA.getAllNeighbors()[0]).toEqual(nodeB);

      expect(graph.getAllEdges()[0]).toEqual(edgeAB);

      const edgeBC = new GraphEdge(nodeB, nodeC);
      graph.addEdge(edgeBC);

      expect(nodeB.hasNeighbor(nodeC)).toBe(true);
      expect(nodeB.getAllNeighbors()[1]).toBe(nodeC);
      expect(nodeB.getAllNeighbors()[0]).toBe(nodeA);

      expect(graph.getAllEdges().length).toEqual(2);
    });
    test('should be undirected graph', () => {
      const graph = new Graph();
      const nodeA = new GraphNode(20);
      const nodeB = new GraphNode(30);
      const edgeAB = new GraphEdge(nodeA, nodeB);

      graph.addEdge(edgeAB);

      expect(graph.isDirected).toBe(false);

      expect(nodeA.hasNeighbor(nodeB)).toBe(true);
      expect(nodeB.hasNeighbor(nodeA)).toBe(true);

      expect(nodeA.getAllNeighbors()[0]).toEqual(nodeB);
    });
    test('should be directed graph', () => {
      const graph = new Graph(true);
      const nodeA = new GraphNode(20);
      const nodeB = new GraphNode(30);
      const edgeAB = new GraphEdge(nodeA, nodeB);

      graph.addEdge(edgeAB);

      expect(graph.isDirected).toBe(true);

      expect(nodeA.hasNeighbor(nodeB)).toBe(true);
      expect(nodeB.hasNeighbor(nodeA)).toBe(false);

      expect(nodeA.getAllNeighbors()[0]).toEqual(nodeB);
      expect(nodeB.getAllNeighbors().length).toEqual(0);
    });
    test('node should be added only once to the graph', () => {
      const graph = new Graph();
      const nodeA = new GraphNode(20);
      const nodeB = new GraphNode(30);
      const edgeAB = new GraphEdge(nodeA, nodeB);
      graph.addNode(nodeA);
      graph.addNode(nodeB);

      graph.addEdge(edgeAB);

      expect(graph.getAllNodes().length).toEqual(2);
    });
    test('edge should be added only once to the graph', () => {
      const graph = new Graph();
      const nodeA = new GraphNode(20);
      const nodeB = new GraphNode(30);
      const edgeAB = new GraphEdge(nodeA, nodeB);

      graph.addEdge(edgeAB);
      graph.addEdge(edgeAB);

      const edges = graph.getAllEdges();
      expect(edges.length).toEqual(1);
      expect(edges[0]).toEqual(edgeAB);
    });
  });
  describe('getAllnodes', () => {
    test('get all nodes in the graph', () => {
      const graph = new Graph();
      const nodeA = new GraphNode(10);
      const nodeB = new GraphNode(20);
      const nodeC = new GraphNode(30);
      const nodeD = new GraphNode(40);

      graph.addNode(nodeA);
      graph.addNode(nodeB);
      graph.addNode(nodeC);
      graph.addNode(nodeD);

      expect(graph.getAllNodes()).toEqual([nodeA, nodeB, nodeC, nodeD]);
    });
  });
});
