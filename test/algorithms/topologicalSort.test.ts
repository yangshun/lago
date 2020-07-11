import { topologicalSort } from '../../src';

describe('topologicalSort', () => {
  test('empty graph', () => {
    expect(topologicalSort({})).toEqual([]);
  });

  test('graphs with one node', () => {
    expect(topologicalSort({ 1: [] })).toEqual(['1']);
  });

  test('graphs with two nodes', () => {
    expect(topologicalSort({ 1: ['2'], 2: [] })).toEqual(['1', '2']);
  });

  test('graphs with multiple nodes', () => {
    expect(topologicalSort({ 1: ['2'], 2: ['3'], 3: [] })).toEqual([
      '1',
      '2',
      '3',
    ]);
    expect(topologicalSort({ 1: ['2', '3'], 2: [], 3: [] })).toEqual([
      '1',
      '2',
      '3',
    ]);
    expect(
      topologicalSort({
        1: ['2', '3'],
        2: [],
        3: [],
        4: ['2'],
        5: ['3'],
      }),
    ).toEqual(['1', '4', '5', '2', '3']);
    expect(
      topologicalSort({
        1: ['4', '5'],
        2: [],
        3: [],
        4: ['2'],
        5: ['3'],
      }),
    ).toEqual(['1', '4', '5', '2', '3']);

    expect(
      topologicalSort({
        1: ['2', '3', '4', '5'],
        2: [],
        3: [],
        4: ['2'],
        5: ['3'],
      }),
    ).toEqual(['1', '4', '5', '2', '3']);
    // Graph taken from https://en.wikipedia.org/wiki/Topological_sorting
    const graph = {
      2: [],
      3: ['8', '10'],
      5: ['11'],
      7: ['8', '11'],
      8: ['9'],
      9: [],
      10: [],
      11: ['2', '9'],
    };
    expect(topologicalSort(graph)).toEqual([
      '3',
      '5',
      '7',
      '10',
      '8',
      '11',
      '2',
      '9',
    ]);
  });

  test('graph with cycles', () => {
    expect(topologicalSort({ 1: ['1'] })).toEqual([]);
    expect(topologicalSort({ 1: ['1', '2'], 2: [] })).toEqual([]);
    expect(topologicalSort({ 1: ['1', '2'], 2: ['1'] })).toEqual([]);
    expect(
      topologicalSort({
        1: ['4', '5'],
        2: ['1', '2', '3', '4', '5'],
        3: [],
        4: ['2'],
        5: ['3'],
      }),
    ).toEqual([]);
  });
});
