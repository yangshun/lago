import { Deque } from '../../src';

describe('Deque', () => {
  test('enqueue()', () => {
    const dq = new Deque();
    expect(dq).toBeTruthy();
    dq.enqueue(100);
    expect(dq.length).toBe(1);
    dq.enqueue(200);
    expect(dq.length).toBe(2);
  });

  test('enqueueFront()', () => {
    const dq = new Deque();
    dq.enqueue(100);
    expect(dq.length).toBe(1);
    expect(dq.front()).toBe(100);
    dq.enqueue(200);
    expect(dq.length).toBe(2);
    expect(dq.front()).toBe(100);
    dq.enqueueFront(300);
    expect(dq.length).toBe(3);
    expect(dq.front()).toBe(300);
    dq.enqueueFront(400);
    expect(dq.length).toBe(4);
    expect(dq.front()).toBe(400);
  });

  test('dequeue()', () => {
    const dq = new Deque();
    dq.enqueue(100);
    expect(dq.length).toBe(1);
    dq.enqueue(200);
    expect(dq.length).toBe(2);
    expect(dq.dequeue()).toBe(100);
    expect(dq.length).toBe(1);
    expect(dq.dequeue()).toBe(200);
    expect(dq.length).toBe(0);
    expect(dq.dequeue()).toBe(undefined);
  });

  test('dequeueBack()', () => {
    const dq = new Deque();
    dq.enqueue(100);
    expect(dq.length).toBe(1);
    dq.enqueue(200);
    expect(dq.length).toBe(2);
    expect(dq.dequeueBack()).toBe(200);
    expect(dq.length).toBe(1);
    dq.enqueue(300);
    expect(dq.length).toBe(2);
    expect(dq.dequeueBack()).toBe(300);
    expect(dq.length).toBe(1);
    expect(dq.dequeueBack()).toBe(100);
    expect(dq.length).toBe(0);
    expect(dq.dequeueBack()).toBe(undefined);
  });

  test('sequential operations', () => {
    const dq = new Deque();
    dq.enqueue(100);
    dq.enqueue(200);
    dq.enqueueFront(300);
    expect(dq.front()).toBe(300);
    expect(dq.dequeue()).toBe(300);
    dq.enqueue(400);
    expect(dq.back()).toBe(400);
    expect(dq.length).toBe(3);
    expect(dq.dequeueBack()).toBe(400);
    expect(dq.back()).toBe(200);
    expect(dq.length).toBe(2);
    expect(dq.dequeueBack()).toBe(200);
    expect(dq.length).toBe(1);
    expect(dq.enqueueFront(500));
    expect(dq.enqueueFront(600));
    expect(dq.length).toBe(3);
    expect(dq.dequeueBack()).toBe(100);
    expect(dq.dequeueBack()).toBe(500);
    expect(dq.dequeueBack()).toBe(600);
    expect(dq.length).toBe(0);
    expect(dq.dequeueBack()).toBe(undefined);
    expect(dq.length).toBe(0);
  });
});
