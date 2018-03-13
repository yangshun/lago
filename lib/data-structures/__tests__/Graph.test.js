import Graph from '../Graph';
import GraphEdge from '../GraphEdge';
import GraphVertex from '../GraphVertex';

describe('Graph', () => {
  test('empty', () => {
    const g = new Graph();
    expect(g).toBeTruthy();
    expect(g.edges).toEqual([]);
    expect(g.getEdgesLength()).toBe(0);
  });

  test('constructor()', () => {
    const edges = [];
    edges.push(new GraphEdge(new GraphVertex(0), new GraphVertex(1), 4));
    edges.push(new GraphEdge(new GraphVertex(0), new GraphVertex(4), 8));
    edges.push(new GraphEdge(new GraphVertex(1), new GraphVertex(4), 11));
    edges.push(new GraphEdge(new GraphVertex(1), new GraphVertex(2), 8));
    edges.push(new GraphEdge(new GraphVertex(2), new GraphVertex(3), 2));
    edges.push(new GraphEdge(new GraphVertex(3), new GraphVertex(4), 7));
    const g = new Graph(edges, edges.length);
    expect(g).toBeTruthy();
    expect(JSON.stringify(g)).toEqual(
      JSON.stringify({
        edges: [
          {
            from: {
              id: 0,
            },
            to: {
              id: 1,
            },
            distance: 4,
          },
          {
            from: {
              id: 0,
            },
            to: {
              id: 4,
            },
            distance: 8,
          },
          {
            from: {
              id: 1,
            },
            to: {
              id: 4,
            },
            distance: 11,
          },
          {
            from: {
              id: 1,
            },
            to: {
              id: 2,
            },
            distance: 8,
          },
          {
            from: {
              id: 2,
            },
            to: {
              id: 3,
            },
            distance: 2,
          },
          {
            from: {
              id: 3,
            },
            to: {
              id: 4,
            },
            distance: 7,
          },
        ],
        nodesCount: 6,
      }),
    );
    expect(g.getEdgesLength()).toBe(6);
  });
});
