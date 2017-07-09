import Queue from '../lib/Queue';

describe('Queue', () => {
  test('Queue.constructor', () => {
    const q = new Queue();
    expect(q.length).toBe(0);
  });

  test('Queue.enqueue()', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
  });

  test('Queue.dequeue()', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
    expect(q.dequeue()).toBe(100);
    expect(q.length).toBe(1);
    expect(q.dequeue()).toBe(200);
    expect(q.length).toBe(0);
    expect(q.dequeue()).toBe(null);
  });

  test('Queue.isEmpty()', () => {
    const q = new Queue();
    expect(q.isEmpty()).toBeTruthy();
    q.enqueue(100);
    expect(q.isEmpty()).toBeFalsy();
    q.dequeue();
    expect(q.isEmpty()).toBeTruthy();
  });

  test('Queue.length', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
    q.dequeue();
    expect(q.length).toBe(1);
    q.enqueue(300);
    expect(q.length).toBe(2);
  });

  test('Queue.front()', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.front()).toBe(100);
    q.enqueue(200);
    expect(q.front()).toBe(100);
    q.dequeue();
    expect(q.front()).toBe(200);
    q.enqueue(300);
    expect(q.front()).toBe(200);
    q.dequeue();
    q.dequeue();
    expect(q.front()).toBe(null);
  });

  test('Queue.back()', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.back()).toBe(100);
    q.enqueue(200);
    expect(q.back()).toBe(200);
    q.dequeue();
    expect(q.back()).toBe(200);
    q.enqueue(300);
    expect(q.back()).toBe(300);
    q.dequeue();
    q.dequeue();
    expect(q.back()).toBe(null);
  });
});
