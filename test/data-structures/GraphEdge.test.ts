import { GraphNode } from '../../src';
import { GraphEdge } from '../../src';

describe('GraphEdge', () => {
  describe('constructor()', () => {
    test('edge should be created between two nodes', () => {
      const nodeA = new GraphNode('1');
      const nodeB = new GraphNode('2');

      const edgeAB = new GraphEdge(nodeA, nodeB);

      expect(edgeAB).toBeDefined();
      expect(edgeAB.nodeA.value).toEqual('1');
      expect(edgeAB.nodeB.value).toEqual('2');
    });

    test('weighted edge', () => {
      const nodeA = new GraphNode('1');
      const nodeB = new GraphNode('2');

      const edgeAB = new GraphEdge(nodeA, nodeB, 5);

      expect(edgeAB).toBeDefined();
      expect(edgeAB.nodeA.value).toEqual('1');
      expect(edgeAB.nodeB.value).toEqual('2');

      expect(edgeAB.weight).toEqual(5);
    });
  });

  describe('getKey', () => {
    test('get the key of edge', () => {
      const nodeA = new GraphNode('A');
      const nodeB = new GraphNode('B');

      const edgeAB = new GraphEdge(nodeA, nodeB);

      expect(edgeAB.getKey()).toEqual('A_B');
    });
  });
});
