import DoublyLinkedList from '../lib/DoublyLinkedList';

describe('DoublyLinkedList', () => {
  test('DoublyLinkedList.constructor()', () => {
    const dll = new DoublyLinkedList();
    expect(dll.length).toBe(0);
  });

  test('DoublyLinkedList.push()', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.length).toBe(1);
    dll.push(200);
    expect(dll.length).toBe(2);
  });

  test('DoublyLinkedList.unshift()', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.length).toBe(1);
    expect(dll.front()).toBe(100);
    dll.push(200);
    expect(dll.length).toBe(2);
    expect(dll.front()).toBe(100);
    dll.unshift(300);
    expect(dll.length).toBe(3);
    expect(dll.front()).toBe(300);
    dll.unshift(400);
    expect(dll.length).toBe(4);
    expect(dll.front()).toBe(400);
  });

  test('DoublyLinkedList.shift()', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.length).toBe(1);
    dll.push(200);
    expect(dll.length).toBe(2);
    expect(dll.shift()).toBe(100);
    expect(dll.length).toBe(1);
    expect(dll.shift()).toBe(200);
    expect(dll.length).toBe(0);
    expect(dll.shift()).toBe(null);
  });

  test('DoublyLinkedList.pop()', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.length).toBe(1);
    dll.push(200);
    expect(dll.length).toBe(2);
    expect(dll.pop()).toBe(200);
    expect(dll.length).toBe(1);
    dll.push(300);
    expect(dll.length).toBe(2);
    expect(dll.pop()).toBe(300);
    expect(dll.length).toBe(1);
    expect(dll.pop()).toBe(100);
    expect(dll.length).toBe(0);
    expect(dll.pop()).toBe(null);
  });

  test('DoublyLinkedList.isEmpty()', () => {
    const dll = new DoublyLinkedList();
    expect(dll.isEmpty()).toBeTruthy();
    dll.push(100);
    expect(dll.isEmpty()).toBeFalsy();
    dll.shift();
    expect(dll.isEmpty()).toBeTruthy();
  });

  test('DoublyLinkedList.length', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.length).toBe(1);
    dll.push(200);
    expect(dll.length).toBe(2);
    dll.shift();
    expect(dll.length).toBe(1);
    dll.push(300);
    expect(dll.length).toBe(2);
  });

  test('DoublyLinkedList.front()', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.front()).toBe(100);
    dll.push(200);
    expect(dll.front()).toBe(100);
    dll.shift();
    expect(dll.front()).toBe(200);
    dll.push(300);
    expect(dll.front()).toBe(200);
    dll.shift();
    dll.shift();
    expect(dll.front()).toBe(null);
  });

  test('DoublyLinkedList.back()', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.back()).toBe(100);
    dll.push(200);
    expect(dll.back()).toBe(200);
    dll.shift();
    expect(dll.back()).toBe(200);
    dll.push(300);
    expect(dll.back()).toBe(300);
    dll.shift();
    dll.shift();
    expect(dll.back()).toBe(null);
  });

  test('sequential operations', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    dll.push(200);
    dll.unshift(300);
    expect(dll.front()).toBe(300);
    expect(dll.shift()).toBe(300);
    dll.push(400);
    expect(dll.back()).toBe(400);
    expect(dll.length).toBe(3);
    expect(dll.pop()).toBe(400);
    expect(dll.back()).toBe(200);
    expect(dll.length).toBe(2);
    expect(dll.pop()).toBe(200);
    expect(dll.length).toBe(1);
    expect(dll.unshift(500));
    expect(dll.unshift(600));
    expect(dll.length).toBe(3);
    expect(dll.pop()).toBe(100);
    expect(dll.pop()).toBe(500);
    expect(dll.pop()).toBe(600);
    expect(dll.length).toBe(0);
    expect(dll.pop()).toBe(null);
    expect(dll.length).toBe(0);
  });
});
