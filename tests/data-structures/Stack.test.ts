import { Stack } from '../../src';

describe('Stack', () => {
  test('constructor', () => {
    const s = new Stack();
    expect(s).toBeTruthy();
    expect(s.length).toBe(0);
  });

  test('push()', () => {
    const s = new Stack();
    s.push(100);
    expect(s.length).toBe(1);
    s.push(200);
    expect(s.length).toBe(2);
  });

  test('pop()', () => {
    const s = new Stack();
    s.push(100);
    expect(s.length).toBe(1);
    expect(s.pop()).toBe(100);
    expect(s.length).toBe(0);
    expect(s.pop()).toBe(undefined);
  });

  test('isEmpty()', () => {
    const s = new Stack();
    expect(s.isEmpty()).toBeTruthy();
    s.push(100);
    expect(s.isEmpty()).toBeFalsy();
    s.pop();
    expect(s.isEmpty()).toBeTruthy();
  });

  test('length', () => {
    const s = new Stack();
    expect(s.length).toBe(0);
    s.push(100);
    expect(s.length).toBe(1);
    s.push(200);
    expect(s.length).toBe(2);
    s.pop();
    expect(s.length).toBe(1);
    s.push(300);
    expect(s.length).toBe(2);
  });

  test('peek()', () => {
    const s = new Stack();
    expect(s.peek()).toBe(undefined);
    s.push(100);
    expect(s.peek()).toBe(100);
    s.push(200);
    expect(s.peek()).toBe(200);
    s.pop();
    expect(s.peek()).toBe(100);
    s.push(300);
    expect(s.peek()).toBe(300);
    s.pop();
    s.pop();
    expect(s.peek()).toBe(undefined);
  });
});
