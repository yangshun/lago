import _ from 'lodash';
import { PriorityQueue } from '../../src/';

interface PriorityNode {
  label: string | number;
  priority: number;
}

const priorityNodeAscending = (a: PriorityNode, b: PriorityNode): number =>
  a.priority - b.priority;

const numberAscending = (a: number, b: number): number => a - b;
const numberDescending = (a: number, b: number): number => b - a;

describe('PriorityQueue', () => {
  describe('constructor()', () => {
    test('empty queue', () => {
      const queue = new PriorityQueue<number>(numberAscending);
      expect(queue).toBeDefined();
    });
  });

  describe('sorting tests', () => {
    test('number should be sorted ascending', () => {
      const queue = new PriorityQueue<number>(numberAscending);
      queue.enqueue(1, 5, 3, 2, 5, 4, 0, 6);

      const array: Array<number> = [];
      while (queue.peek() !== undefined) {
        array.push(queue.dequeue());
      }

      expect(array).toEqual([0, 1, 2, 3, 4, 5, 5, 6]);
    });

    test('number should be sorted descending', () => {
      const queue = new PriorityQueue<number>(numberDescending);
      queue.enqueue(1, 5, 3, 2, 5, 4, 0, 6);

      const array: Array<number> = [];
      while (queue.peek() !== undefined) {
        array.push(queue.dequeue());
      }

      expect(array).toEqual([6, 5, 5, 4, 3, 2, 1, 0]);
    });

    test('random generated test x10', () => {
      _.times(10, () => {
        const queue = new PriorityQueue<number>(numberAscending);
        _.times(1000, () => queue.enqueue(Math.random() * 100));

        const array: Array<number> = [];
        while (queue.peek() !== undefined) {
          array.push(queue.dequeue());
        }

        expect(
          array.every((_, i) => !i || array[i - 1] < array[i]),
        ).toBeTruthy();
      });
    });
  });

  describe('stability tests', () => {
    test('order of labels with same priority should be reserved', () => {
      const queue = new PriorityQueue<PriorityNode>(priorityNodeAscending);
      queue.enqueue(
        { label: 'a', priority: 0 },
        { label: 'd', priority: -1 },
        { label: 'b', priority: 0 },
        { label: 'e', priority: 1 },
        { label: 'c', priority: 0 },
        { label: 'f', priority: -1 },
      );

      const array: Array<PriorityNode> = [];
      while (queue.peek() !== undefined) {
        array.push(queue.dequeue());
      }

      expect(array).toEqual([
        { label: 'd', priority: -1 },
        { label: 'f', priority: -1 },
        { label: 'a', priority: 0 },
        { label: 'b', priority: 0 },
        { label: 'c', priority: 0 },
        { label: 'e', priority: 1 },
      ]);
    });

    test('random generated test x10', () => {
      _.times(10, () => {
        const queue = new PriorityQueue<PriorityNode>(priorityNodeAscending);
        _.times(1000, (time) =>
          queue.enqueue({
            label: time, // used as the tiebreaker when priority is tied
            priority: Math.floor(Math.random() * 3), // only 3 tiers of priority
          }),
        );

        const array: Array<PriorityNode> = [];
        while (queue.peek() !== undefined) {
          array.push(queue.dequeue());
        }

        expect(
          array.every((curr, i) => {
            if (!i) return true;

            const prev = array[i - 1];

            // false when prev priority is larger
            if (prev.priority > curr.priority) return false;
            if (prev.priority < curr.priority) return true;

            // false when prev timestamp is larger (unstable sort)
            if (prev.label > curr.label) return false;
            return true;
          }),
        ).toBeTruthy();
      });
    });
  });
});
