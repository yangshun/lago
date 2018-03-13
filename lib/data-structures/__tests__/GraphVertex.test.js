import GraphVertex from '../GraphVertex';

describe('GraphVertex', () => {
  test('constructor()', () => {
    const v = new GraphVertex(1);
    expect(v.id).toBe(1);
  });
});
