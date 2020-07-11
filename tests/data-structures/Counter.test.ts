import _ from 'lodash';
import { Counter } from '../../src';

describe('Counter', () => {
  describe('constructor()', () => {
    test('default', () => {
      const c = new Counter();
      expect(c.size).toBe(0);
    });

    describe('string input', () => {
      test('empty string', () => {
        const c = new Counter(''.split(''));
        expect(c.size).toBe(0);
      });

      test('non-empty string', () => {
        const c = new Counter('foobar'.split(''));
        expect(c.size).toBe(5);
        expect(c.get('a')).toBe(1);
        expect(c.get('o')).toBe(2);
      });
    });

    describe('array input', () => {
      test('empty array', () => {
        const c = new Counter([]);
        expect(c.size).toBe(0);
      });

      test('array with scalar elements', () => {
        const c = new Counter([1, 2, 3, 4, 3]);
        expect(c.size).toBe(4);
        expect(c.get(1)).toBe(1);
        expect(c.get(3)).toBe(2);
      });

      test('iterables', () => {
        const c = new Counter([
          [1, 2],
          [3, 4],
        ]);
        expect(c.size).toBe(2);
        expect(c.get(1)).toBe(2);
        expect(c.get(3)).toBe(4);
      });
    });

    describe('object input', () => {
      test('empty object', () => {
        const c = new Counter({});
        expect(c.size).toBe(0);
      });

      test('non-empty object', () => {
        const c = new Counter({ a: 2, b: 4 });
        expect(c.size).toBe(2);
        expect(c.get('a')).toBe(2);
        expect(c.get('b')).toBe(4);
      });
    });
  });

  test('get()', () => {
    const c = new Counter();
    c.set('a', 100).set('b', -1);
    expect(c.get('a')).toBe(100);
    expect(c.get('b')).toBe(-1);
    expect(c.get('c')).toBe(0);
  });

  test('increment()', () => {
    const c = new Counter();
    c.set('a', 100).set('b', -1);
    c.increment('a').increment('a');
    expect(c.get('a')).toBe(102);

    c.increment('b');
    expect(c.get('b')).toBe(0);

    c.increment('c');
    expect(c.get('c')).toBe(1);
  });

  test('decrement()', () => {
    const c = new Counter();
    c.set('a', 100).set('b', -1);
    c.decrement('a').decrement('a');
    expect(c.get('a')).toBe(98);

    c.decrement('b');
    expect(c.get('b')).toBe(-2);

    c.decrement('c');
    expect(c.get('c')).toBe(-1);
  });

  describe('elements()', () => {
    test('positive counts', () => {
      const c = new Counter({ a: 2, b: 4 });
      const elements = c.elements();
      const counts = _.countBy(elements, _.identity);
      expect(elements.length).toEqual(6);
      expect(Object.keys(counts).length).toEqual(2);
      expect(counts.a).toEqual(2);
      expect(counts.b).toEqual(4);
    });

    test('negative counts are ignored', () => {
      const c = new Counter({ a: 2, b: 4, c: -1 });
      const elements = c.elements();
      expect(elements.length).toEqual(6);
    });
  });

  describe('mostCommon()', () => {
    test('unique frequencies', () => {
      const c = new Counter({ c: 5, a: 2, b: 4 });
      expect(c.mostCommon(1)).toEqual([['c', 5]]);
      expect(c.mostCommon(2)).toEqual([
        ['c', 5],
        ['b', 4],
      ]);
      expect(c.mostCommon(3)).toEqual([
        ['c', 5],
        ['b', 4],
        ['a', 2],
      ]);
      expect(c.mostCommon(4)).toEqual([
        ['c', 5],
        ['b', 4],
        ['a', 2],
      ]);
      expect(c.mostCommon()).toEqual([
        ['c', 5],
        ['b', 4],
        ['a', 2],
      ]);
    });

    test('non-unique frequencies', () => {
      const c = new Counter({
        c: 5,
        a: 2,
        b: 4,
        d: 4,
      });
      expect(c.mostCommon(1)).toEqual([['c', 5]]);
      expect(new Set(c.mostCommon(3).map((item) => item[1])).size).toEqual(2);
      expect(c.mostCommon().length).toEqual(4);
    });
  });

  describe('subtract()', () => {
    test('existing keys', () => {
      const c = new Counter({ c: 5, a: 2, b: 4 });
      c.subtract({ c: 1, a: 2 });
      expect(c.get('c')).toBe(4);
      expect(c.get('a')).toBe(0);
      expect(c.get('b')).toBe(4);
    });

    test('non-existing keys', () => {
      const c = new Counter();
      c.subtract({ c: 1, a: 2 });
      expect(c.get('c')).toBe(-1);
      expect(c.get('a')).toBe(-2);
      expect(c.get('b')).toBe(0);
    });
  });

  describe('update()', () => {
    test('existing keys', () => {
      const c = new Counter({ c: 5, a: 2, b: 4 });
      c.update({ c: 1, a: 2 });
      expect(c.get('c')).toBe(6);
      expect(c.get('a')).toBe(4);
      expect(c.get('b')).toBe(4);
    });

    test('non-existing keys', () => {
      const c = new Counter();
      c.update({ c: 1, a: 2 });
      expect(c.get('c')).toBe(1);
      expect(c.get('a')).toBe(2);
      expect(c.get('b')).toBe(0);
    });
  });
});
