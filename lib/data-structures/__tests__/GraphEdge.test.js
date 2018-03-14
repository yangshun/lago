import GraphEdge from '../GraphEdge';
import GraphVertex from '../GraphVertex';

describe('GraphEdge', () => {
  test('constructor()', () => {
    const e = new GraphVertex(1);
    const v = new GraphVertex(2);
    const edge = new GraphEdge(e, v, 4);
    expect(edge).toEqual(
      new GraphEdge(new GraphVertex(1), new GraphVertex(2), 4),
    );
  });
});
