import { Heap, randomInt } from '../../src';

describe('Max Heap', () => {
  describe('constructor()', () => {
    test('a new heap should be created', () => {
      const heap = new Heap(Heap.HeapType.Max);

      expect(heap).toBeDefined();
    });
  });
  describe('isEmpty()', () => {
    test('heap should be empty', () => {
      const heap = new Heap(Heap.HeapType.Max);
      expect(heap.isEmpty()).toBe(true);
    });
    test('heap should not be empty', () => {
      const heap = new Heap(Heap.HeapType.Max);
      heap.insert(1);
      expect(heap.isEmpty()).toBe(false);
    });
  });
  describe('insert() & extract()', () => {
    test('extract() should return null if the heap is empty', () => {
      const heap = new Heap(Heap.HeapType.Max);

      expect(heap.extract()).toBeNull();
    });
    test('heap should be able to insert and extract values in decreasing order', () => {
      const heap = new Heap(Heap.HeapType.Max);
      const values = new Set(
        new Array(20).fill(0).map(() => randomInt(-100, 100)),
      );
      values.forEach((value) => heap.insert(value));
      expect(heap.size).toBe(values.size);
      const ascendingValues = [...values].sort((a, b) => a - b);
      while (!heap.isEmpty()) {
        const value = heap.extract()!;
        expect(value).toBeDefined();
        expect(value).toBe(ascendingValues.pop());
        expect(heap.size).toBe(ascendingValues.length);
      }
    });
  });
  describe('peek()', () => {
    test('peek should return the max value', () => {
      const heap = new Heap(Heap.HeapType.Max);
      heap.insert(1);
      heap.insert(2);
      heap.insert(3);

      expect(heap.peek()).toBe(3);
    });
    test('peek should return null if the heap is empty', () => {
      const heap = new Heap(Heap.HeapType.Max);

      expect(heap.peek()).toBeNull();
    });
  });
});
describe('Min Heap', () => {
  describe('constructor()', () => {
    test('a new heap should be created', () => {
      const heap = new Heap(Heap.HeapType.Min);

      expect(heap).toBeDefined();
    });
  });
  describe('isEmpty()', () => {
    test('heap should be empty', () => {
      const heap = new Heap(Heap.HeapType.Min);
      expect(heap.isEmpty()).toBe(true);
    });
    test('heap should not be empty', () => {
      const heap = new Heap(Heap.HeapType.Min);
      heap.insert(1);
      expect(heap.isEmpty()).toBe(false);
    });
  });
  describe('insert() & extract()', () => {
    test('extract() should return null if the heap is empty', () => {
      const heap = new Heap(Heap.HeapType.Min);

      expect(heap.extract()).toBeNull();
    });
    test('heap should be able to insert and extract values in increasing order', () => {
      const heap = new Heap(Heap.HeapType.Min);
      const values = new Set(
        new Array(20).fill(0).map(() => randomInt(-100, 100)),
      );
      values.forEach((value) => heap.insert(value));
      expect(heap.size).toBe(values.size);
      const descendingValues = [...values].sort((a, b) => b - a);
      while (!heap.isEmpty()) {
        const value = heap.extract()!;
        expect(value).toBeDefined();
        expect(value).toBe(descendingValues.pop());
        expect(heap.size).toBe(descendingValues.length);
      }
    });
  });
  describe('peek()', () => {
    test('peek should return the min value', () => {
      const heap = new Heap(Heap.HeapType.Min);
      heap.insert(2);
      heap.insert(1);
      heap.insert(3);

      expect(heap.peek()).toBe(1);
    });
    test('peek should return null if the heap is empty', () => {
      const heap = new Heap(Heap.HeapType.Min);

      expect(heap.peek()).toBeNull();
    });
  });
});
