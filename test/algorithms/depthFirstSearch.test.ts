import { depthFirstSearch } from '../../src';

describe('depthFirstSearch', () => {
  test('empty graph', () => {
    expect(depthFirstSearch({}, null)).toEqual([]);
  });

  test('graphs with one node', () => {
    expect(depthFirstSearch({ 1: [] }, '1')).toEqual(['1']);
    expect(depthFirstSearch({ 1: ['1'] }, '1')).toEqual(['1']);
  });

  test('graphs with two nodes', () => {
    expect(depthFirstSearch({ 1: ['2'], 2: [] }, '1')).toEqual(['1', '2']);
    expect(depthFirstSearch({ 1: ['1', '2'], 2: [] }, '1')).toEqual(['1', '2']);
    expect(depthFirstSearch({ 1: ['1', '2'], 2: [] }, '2')).toEqual(['2']);
    expect(depthFirstSearch({ 1: ['1', '2'], 2: ['1'] }, '2')).toEqual([
      '2',
      '1',
    ]);
  });

  test('graphs with multiple nodes', () => {
    expect(depthFirstSearch({ 1: ['2'], 2: ['3'], 3: [] }, '1')).toEqual([
      '1',
      '2',
      '3',
    ]);
    expect(depthFirstSearch({ 1: ['2', '3'], 2: [], 3: [] }, '1')).toEqual([
      '1',
      '2',
      '3',
    ]);
    expect(
      depthFirstSearch(
        {
          1: ['2', '3'],
          2: [],
          3: [],
          4: ['2'],
          5: ['3'],
        },
        '1',
      ),
    ).toEqual(['1', '2', '3']);
    expect(
      depthFirstSearch(
        {
          1: ['4', '5'],
          2: [],
          3: [],
          4: ['2'],
          5: ['3'],
        },
        '1',
      ),
    ).toEqual(['1', '4', '2', '5', '3']);
    expect(
      depthFirstSearch(
        {
          1: ['4', '5'],
          2: ['1', '2', '3', '4', '5'],
          3: [],
          4: ['2'],
          5: ['3'],
        },
        '1',
      ),
    ).toEqual(['1', '4', '2', '3', '5']);
    expect(
      depthFirstSearch(
        {
          1: ['1', '2', '3', '4', '5'],
          2: [],
          3: [],
          4: ['2'],
          5: ['3'],
        },
        '1',
      ),
    ).toEqual(['1', '2', '3', '4', '5']);
    // Graph taken from https://www.geeksforgeeks.org/breadth-first-traversal-for-a-graph/
    const graph = {
      1: ['2', '3'],
      2: ['1', '4', '5'],
      3: ['1', '5'],
      4: ['2', '5', '6'],
      5: ['2', '3', '4', '6'],
      6: ['4', '5'],
    };
    expect(depthFirstSearch(graph, '1')).toEqual([
      '1',
      '2',
      '4',
      '5',
      '3',
      '6',
    ]);
    expect(depthFirstSearch(graph, '2')).toEqual([
      '2',
      '1',
      '3',
      '5',
      '4',
      '6',
    ]);
    expect(depthFirstSearch(graph, '3')).toEqual([
      '3',
      '1',
      '2',
      '4',
      '5',
      '6',
    ]);
    expect(depthFirstSearch(graph, '4')).toEqual([
      '4',
      '2',
      '1',
      '3',
      '5',
      '6',
    ]);
    expect(depthFirstSearch(graph, '5')).toEqual([
      '5',
      '2',
      '1',
      '3',
      '4',
      '6',
    ]);
    expect(depthFirstSearch(graph, '6')).toEqual([
      '6',
      '4',
      '2',
      '1',
      '3',
      '5',
    ]);
  });

  test('disjoint graphs', () => {
    expect(
      depthFirstSearch(
        {
          1: ['2'],
          2: [],
          3: [],
          4: ['3'],
        },
        '1',
      ),
    ).toEqual(['1', '2']);
    expect(
      depthFirstSearch(
        {
          1: ['2'],
          2: [],
          3: [],
          4: ['3'],
        },
        '3',
      ),
    ).toEqual(['3']);
    expect(
      depthFirstSearch(
        {
          1: ['2'],
          2: [],
          3: [],
          4: ['3'],
        },
        '4',
      ),
    ).toEqual(['4', '3']);
  });
});
