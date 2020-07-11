import { Node } from '../../src';

describe('Node', () => {
  test('constructor()', () => {
    const n = new Node(100);
    expect(n).toBeTruthy();
    expect(n.value).toBe(100);
    expect(n.next).toBe(null);
    expect(n.prev).toBe(null);
  });

  test('value', () => {
    const n1 = new Node(100);
    expect(n1.value).toBe(100);
    const n2 = new Node('foo bar');
    expect(n2.value).toBe('foo bar');
  });

  test('next', () => {
    const n1 = new Node(100);
    const n2 = new Node(200);
    n1.next = n2;
    expect((n1.next as Node<number>).value).toBe(n2.value);
  });

  test('prev', () => {
    const n1 = new Node(100);
    const n2 = new Node(200);
    n2.prev = n1;
    expect((n2.prev as Node<number>).value).toBe(n1.value);
  });
});
