import Node from '../lib/Node';

describe('Node', () => {
  test('constructor', () => {
    const n = new Node(100);
    expect(n.val).toBe(100);
    expect(n.next).toBe(null);
    expect(n.prev).toBe(null);
  });

  test('next', () => {
    const n1 = new Node(100);
    const n2 = new Node(200);
    n1.next = n2;
    expect(n1.next.val).toBe(n2.val);
  });

  test('prev', () => {
    const n1 = new Node(100);
    const n2 = new Node(200);
    n2.prev = n1;
    expect(n2.prev.val).toBe(n1.val);
  });
});
