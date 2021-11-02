import { floydWarshall } from '../../src';

describe('floydWarshall', () => {
  test('empty graph', () => {
    const graph = {};
    const solution = {};

    expect(floydWarshall(graph)).toEqual(solution);
  });

  test('single vertex graph', () => {
    const graph = { A: {} };
    const solution = { A: { A: 0 } };

    expect(floydWarshall(graph)).toEqual(solution);
  });

  test('multiple vertex graph with a disconnected vertex', () => {
    const graph = {
      A: { B: 3 },
      B: { C: 3 },
      C: { A: 4 },
      D: {},
    };
    const solution = {
      A: { A: 0, B: 3, C: 6, D: Infinity },
      B: { A: 7, B: 0, C: 3, D: Infinity },
      C: { A: 4, B: 7, C: 0, D: Infinity },
      D: { A: Infinity, B: Infinity, C: Infinity, D: 0 },
    };

    expect(floydWarshall(graph)).toEqual(solution);
  });

  test('multiple vertex directed graph with positive weights', () => {
    const graph = {
      A: { D: 1, B: 8 },
      B: { C: 1 },
      C: { A: 4 },
      D: { C: 9, B: 2 },
    };
    const solution = {
      A: { A: 0, B: 3, C: 4, D: 1 },
      B: { A: 5, B: 0, C: 1, D: 6 },
      C: { A: 4, B: 7, C: 0, D: 5 },
      D: { A: 7, B: 2, C: 3, D: 0 },
    };

    expect(floydWarshall(graph)).toEqual(solution);
  });

  test('multiple vertex directed graph with positive and negative weights', () => {
    const graph = {
      A: { C: -2 },
      B: { A: 4, C: 3 },
      C: { D: 2 },
      D: { B: -1 },
    };
    const solution = {
      A: { A: 0, B: -1, C: -2, D: 0 },
      B: { A: 4, B: 0, C: 2, D: 4 },
      C: { A: 5, B: 1, C: 0, D: 2 },
      D: { A: 3, B: -1, C: 1, D: 0 },
    };

    expect(floydWarshall(graph)).toEqual(solution);
  });
});
