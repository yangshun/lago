import { DoublyLinkedList, Node } from '../../src';

describe('DoublyLinkedList', () => {
  test('constructor()', () => {
    const dll = new DoublyLinkedList();
    expect(dll).toBeTruthy();
    expect(dll.length).toBe(0);
  });

  test('push()', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.length).toBe(1);
    dll.push(200);
    expect(dll.length).toBe(2);
  });

  test('unshift()', () => {
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

  test('shift()', () => {
    const dll = new DoublyLinkedList();
    dll.push(100);
    expect(dll.length).toBe(1);
    dll.push(200);
    expect(dll.length).toBe(2);
    expect(dll.shift()).toBe(100);
    expect(dll.length).toBe(1);
    expect(dll.shift()).toBe(200);
    expect(dll.length).toBe(0);
    expect(dll.shift()).toBe(undefined);
  });

  test('pop()', () => {
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
    expect(dll.pop()).toBe(undefined);
  });

  test('isEmpty()', () => {
    const dll = new DoublyLinkedList();
    expect(dll.isEmpty()).toBeTruthy();
    dll.push(100);
    expect(dll.isEmpty()).toBeFalsy();
    dll.shift();
    expect(dll.isEmpty()).toBeTruthy();
  });

  test('length', () => {
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

  test('front()', () => {
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
    expect(dll.front()).toBe(undefined);
  });

  test('back()', () => {
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
    expect(dll.back()).toBe(undefined);
  });

  test('toArray()', () => {
    const dll = new DoublyLinkedList();
    expect(dll.toArray()).toEqual([]);
    dll.push(100);
    dll.push(200);
    expect(dll.toArray()).toEqual([100, 200]);
    dll.shift();
    expect(dll.toArray()).toEqual([200]);
    dll.unshift(300);
    expect(dll.toArray()).toEqual([300, 200]);
    dll.unshift(400);
    expect(dll.toArray()).toEqual([400, 300, 200]);
    dll.pop();
    expect(dll.toArray()).toEqual([400, 300]);
    dll.pop();
    expect(dll.toArray()).toEqual([400]);
  });

  test('fromArray()', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    const dll = DoublyLinkedList.fromArray(arr);
    expect(dll.length).toBe(arr.length);
    expect(dll.toArray()).toEqual(arr);
    expect(dll.front()).toBe(arr[0]);
    expect(dll.back()).toBe(arr[arr.length - 1]);
    expect(dll.shift()).toBe(1);
    expect(dll.length).toBe(arr.length - 1);
  });

  describe('headNode()', () => {
    test('non-empty array', () => {
      const dll = DoublyLinkedList.fromArray([1, 2, 3, 4, 5, 6]);
      const head = dll.headNode() as Node<number>;
      expect(head).toBeTruthy();
      expect(head instanceof Node).toBeTruthy();
      expect(head.value).toBe(1);
      expect((head.next as Node<number>).value).toBe(2);
    });

    test('empty array', () => {
      const dll = DoublyLinkedList.fromArray([]);
      const head = dll.headNode();
      expect(head).toBeFalsy();
      expect(head instanceof Node).toBeFalsy();
    });
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
    expect(dll.pop()).toBe(undefined);
    expect(dll.length).toBe(0);
  });
});
