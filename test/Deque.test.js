import Deque from '../lib/Deque';

describe('Deque', () => {
  test('Deque.constructor()', () => {
    const q = new Deque();
    expect(q.length).toBe(0);
  });

  test('Deque.enqueue()', () => {
    const q = new Deque();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
  });

  test('Deque.enqueueFront()', () => {
    const q = new Deque();
    q.enqueue(100);
    expect(q.length).toBe(1);
    expect(q.front()).toBe(100);
    q.enqueue(200);
    expect(q.length).toBe(2);
    expect(q.front()).toBe(100);
    q.enqueueFront(300);
    expect(q.length).toBe(3);
    expect(q.front()).toBe(300);
    q.enqueueFront(400);
    expect(q.length).toBe(4);
    expect(q.front()).toBe(400);
  });

  test('Deque.dequeue()', () => {
    const q = new Deque();
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

  test('Deque.dequeueBack()', () => {
    const q = new Deque();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
    expect(q.dequeueBack()).toBe(200);
    expect(q.length).toBe(1);
    q.enqueue(300);
    expect(q.length).toBe(2);
    expect(q.dequeueBack()).toBe(300);
    expect(q.length).toBe(1);
    expect(q.dequeueBack()).toBe(100);
    expect(q.length).toBe(0);
    expect(q.dequeueBack()).toBe(null);
  });

  test('Deque.isEmpty()', () => {
    const q = new Deque();
    expect(q.isEmpty()).toBeTruthy();
    q.enqueue(100);
    expect(q.isEmpty()).toBeFalsy();
    q.dequeue();
    expect(q.isEmpty()).toBeTruthy();
  });

  test('Deque.length', () => {
    const q = new Deque();
    q.enqueue(100);
    expect(q.length).toBe(1);
    q.enqueue(200);
    expect(q.length).toBe(2);
    q.dequeue();
    expect(q.length).toBe(1);
    q.enqueue(300);
    expect(q.length).toBe(2);
  });

  test('Deque.front()', () => {
    const q = new Deque();
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

  test('Deque.back()', () => {
    const q = new Deque();
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

  test('sequential operations', () => {
    const q = new Deque();
    q.enqueue(100);
    q.enqueue(200);
    q.enqueueFront(300);
    expect(q.front()).toBe(300);
    expect(q.dequeue()).toBe(300);
    q.enqueue(400);
    expect(q.back()).toBe(400);
    expect(q.length).toBe(3);
    expect(q.dequeueBack()).toBe(400);
    expect(q.back()).toBe(200);
    expect(q.length).toBe(2);
    expect(q.dequeueBack()).toBe(200);
    expect(q.length).toBe(1);
    expect(q.enqueueFront(500));
    expect(q.enqueueFront(600));
    expect(q.length).toBe(3);
    expect(q.dequeueBack()).toBe(100);
    expect(q.dequeueBack()).toBe(500);
    expect(q.dequeueBack()).toBe(600);
    expect(q.length).toBe(0);
    expect(q.dequeueBack()).toBe(null);
    expect(q.length).toBe(0);
  });
});
