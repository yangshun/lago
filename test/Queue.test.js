import Queue from '../lib/Queue';

describe('Queue', () => {
  test('constructor', () => {
    const q = new Queue();
    expect(q.size()).toBe(0);
  });

  test('enqueue', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.size()).toBe(1);
    q.enqueue(200);
    expect(q.size()).toBe(2);
  });

  test('dequeue', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.size()).toBe(1);
    q.enqueue(200);
    expect(q.size()).toBe(2);
    expect(q.dequeue()).toBe(100);
    expect(q.size()).toBe(1);
    expect(q.dequeue()).toBe(200);
    expect(q.size()).toBe(0);
    expect(q.dequeue()).toBe(null);
  });

  test('isEmpty', () => {
    const q = new Queue();
    expect(q.isEmpty()).toBeTruthy();
    q.enqueue(100);
    expect(q.isEmpty()).toBeFalsy();
    q.dequeue();
    expect(q.isEmpty()).toBeTruthy();
  });

  test('size', () => {
    const q = new Queue();
    q.enqueue(100);
    expect(q.size()).toBe(1);
    q.enqueue(200);
    expect(q.size()).toBe(2);
    q.dequeue();
    expect(q.size()).toBe(1);
    q.enqueue(300);
    expect(q.size()).toBe(2);
  });

  test('front', () => {
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

  test('back', () => {
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
