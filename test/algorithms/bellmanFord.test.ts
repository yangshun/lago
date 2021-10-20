import { bellmanFord } from '../../src';

describe('bellmanFord', () => {
  test('empty graph', () => {
    const graph = {};
    const solutionWithoutTarget = {};
    const solutionWithTarget = [0, []];

    expect(bellmanFord(graph, 'A')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'A', 'B')).toEqual(solutionWithTarget);
  });

  test('invalid source', () => {
    const graph = { B: {} };
    const solutionWithoutTarget = {};
    const solutionWithTarget = [-Infinity, []];

    expect(bellmanFord(graph, 'A')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'A', 'B')).toEqual(solutionWithTarget);
  });

  test('invalid target', () => {
    const graph = { B: {} };
    const solutionWithTarget = [-Infinity, []];

    expect(bellmanFord(graph, 'B', 'A')).toEqual(solutionWithTarget);
  });

  test('single vertex graph', () => {
    const graph = { A: {} };
    const solutionWithoutTarget = { A: 0 };
    const solutionWithTarget = [0, ['A']];

    expect(bellmanFord(graph, 'A')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'A', 'A')).toEqual(solutionWithTarget);
  });

  test('two vertex graph', () => {
    const graph = { A: { B: 3 }, B: {} };
    const solutionWithoutTarget = { A: 0, B: 3 };
    const solutionWithTarget = [3, ['A', 'B']];

    expect(bellmanFord(graph, 'A')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'A', 'B')).toEqual(solutionWithTarget);
  });

  test('more than two vertex graph', () => {
    const graph = {
      A: { B: 8, D: 1 },
      B: { C: 1 },
      C: { A: 4 },
      D: { B: 2, C: 9 },
    };
    const solutionWithoutTarget = { A: 0, B: 3, C: 4, D: 1 };
    const solutionWithTarget = [4, ['A', 'D', 'B', 'C']];

    expect(bellmanFord(graph, 'A')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'A', 'C')).toEqual(solutionWithTarget);
  });

  test('more than two vertex graph with bidrectional edges', () => {
    const graph = {
      A: { B: 8, C: 7 },
      B: { A: 2, C: 20 },
      C: {},
      D: { A: 10, B: 1 },
    };
    const solutionWithoutTarget = { A: 3, B: 1, C: 10, D: 0 };
    const solutionWithTarget = [10, ['D', 'B', 'A', 'C']];

    expect(bellmanFord(graph, 'D')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'D', 'C')).toEqual(solutionWithTarget);
  });

  test('more than two vertex graph with disconnected vertex', () => {
    const graph = {
      A: { B: 3 },
      B: { C: 3 },
      C: { A: 4 },
      D: {},
    };
    const solutionWithoutTarget = { A: 0, B: 3, C: 6, D: Infinity };
    const solutionWithTarget = [6, ['A', 'B', 'C']];

    expect(bellmanFord(graph, 'A')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'A', 'C')).toEqual(solutionWithTarget);
  });

  test('more than two vertex graph with negative weights but no negative weight cycles', () => {
    const graph = {
      A: { B: -3, D: 1 },
      B: { C: 1 },
      C: { A: 4 },
      D: { B: 2, C: 9 },
    };

    const solutionWithoutTarget = { A: 0, B: -3, C: -2, D: 1 };
    const solutionWithTarget = [-2, ['A', 'B', 'C']];

    expect(bellmanFord(graph, 'A')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'A', 'C')).toEqual(solutionWithTarget);
  });

  test('more than two vertex graph with negative weight cycles', () => {
    const graph = {
      A: { B: -8, D: 1 },
      B: { C: 1 },
      C: { A: -4 },
      D: { B: 2, C: 9 },
    };
    const solutionWithoutTarget = {
      A: -Infinity,
      B: -Infinity,
      C: -Infinity,
      D: -Infinity,
    };
    const solutionWithTarget = [-Infinity, []];

    expect(bellmanFord(graph, 'A')).toEqual(solutionWithoutTarget);
    expect(bellmanFord(graph, 'A', 'C')).toEqual(solutionWithTarget);
  });
});
