import { dijkstra } from '../../src';

describe('dijkstra', () => {
  test('empty graph', () => {
    expect(dijkstra({}, 'A', 'B')).toEqual([]);
  });

  test('graphs with one node', () => {
    const s = dijkstra({ A: {} }, 'A', 'A');

    expect(s).toEqual(['A']);
  });

  test('graphs with two nodes', () => {
    expect(dijkstra({ A: { B: 1 }, B: {} }, 'A', 'B')).toEqual(['A', 'B']);
    expect(dijkstra({ A: { B: 10 }, B: {} }, 'A', 'B')).toEqual(['A', 'B']);
  });

  test('bidirectional graph with multiple nodes', () => {
    const graph = {
      A: { B: 2, H: 6 },
      B: { A: 2, C: 7 },
      C: { I: 1, D: 1, B: 7, F: 10 },
      D: { F: 2, C: 1, E: 3 },
      E: { D: 2, F: 5 },
      F: { D: 2, G: 2, E: 5, C: 10 },
      G: { F: 2, I: 4, H: 3 },
      H: { A: 6, I: 8, G: 3 },
      I: { H: 8, G: 4, C: 1 },
    };

    expect(dijkstra(graph, 'A', 'B')).toEqual(['A', 'B']);
    expect(dijkstra(graph, 'B', 'G')).toEqual(['B', 'A', 'H', 'G']);
    expect(dijkstra(graph, 'C', 'I')).toEqual(['C', 'I']);
    expect(dijkstra(graph, 'A', 'E')).toEqual(['A', 'H', 'G', 'F', 'E']);
    expect(dijkstra(graph, 'F', 'B')).toEqual(['F', 'C', 'B']);
  });

  test('unidirectional graph  with multiple nodes', () => {
    const graph = {
      A: { B: 8, F: 2 },
      B: { D: 1, E: 4 },
      C: { A: 3, D: 4 },
      D: { E: 8, F: 3 },
      E: { C: 6 },
      F: { E: 7, G: 1 },
      G: {},
    };

    expect(dijkstra(graph, 'A', 'C')).toEqual(['A', 'F', 'E', 'C']);
    expect(dijkstra(graph, 'D', 'B')).toEqual(['D', 'E', 'C', 'A', 'B']);
    expect(dijkstra(graph, 'E', 'G')).toEqual(['E', 'C', 'A', 'F', 'G']);
  });

  test('no solution', () => {
    const graph = {
      A: { B: 8, F: 2 },
      B: { D: 1, E: 4 },
      C: { A: 3, D: 4 },
      D: { E: 8, F: 3 },
      E: { C: 6 },
      F: { E: 7, G: 1 },
      G: {},
    };

    expect(dijkstra(graph, 'G', 'A')).toEqual([]);
  });
});
