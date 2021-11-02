import { List, Node } from '../../src';

function listFactory(length: number) {
  const list = new List();
  for (let i = 1; i <= length; i++) {
    list.push(i * 100);
  }
  return list;
}

describe('List', () => {
  describe('traverseNodes', () => {
    describe('allowExceed = false', () => {
      test('indices within range', () => {
        const list = listFactory(10);
        for (let i = 0; i < 10; i++) {
          expect(list.get(i) as Node<number>).toBe((i + 1) * 100);
        }
      });

      test('indices that exceed', () => {
        const LENGTH = 10;
        const list = listFactory(LENGTH);
        for (let i = -LENGTH; i < LENGTH; i++) {
          expect(list.get(i)).toBeTruthy();
        }
        expect(list.get(-100)).toBe(undefined);
        expect(list.get(-12)).toBe(undefined);
        expect(list.get(-11)).toBe(undefined);
        expect(list.get(10)).toBe(undefined);
        expect(list.get(11)).toBe(undefined);
        expect(list.get(100)).toBe(undefined);

        const list2 = listFactory(0);
        expect(list2.get(0)).toBe(undefined);
        expect(list2.get(-1)).toBe(undefined);
        expect(list2.get(1)).toBe(undefined);

        const list3 = listFactory(1);
        expect(list3.get(0)).toBe(100);
        expect(list3.get(-1)).toBe(100);
        expect(list3.get(1)).toBe(undefined);
        expect(list3.get(-2)).toBe(undefined);
      });
    });
  });

  describe('insert()', () => {
    test('sequential', () => {
      const list = new List();
      list.insert(100, 0);
      expect(list.toArray()).toEqual([100]);
      list.insert(200, 0);
      expect(list.toArray()).toEqual([200, 100]);
      list.insert(300, 1);
      expect(list.toArray()).toEqual([200, 300, 100]);
      list.insert(400, -1);
      expect(list.toArray()).toEqual([200, 300, 400, 100]);
      list.insert(500, 4);
      expect(list.toArray()).toEqual([200, 300, 400, 100, 500]);
      list.insert(600, 100);
      expect(list.toArray()).toEqual([200, 300, 400, 100, 500, 600]);
      list.insert(700, -100);
      expect(list.toArray()).toEqual([700, 200, 300, 400, 100, 500, 600]);
      list.insert(800, 3);
      expect(list.toArray()).toEqual([700, 200, 300, 800, 400, 100, 500, 600]);
    });

    describe('extreme indices on empty list', () => {
      test('negative index', () => {
        const list = new List();
        list.insert(100, -1);
        expect(list.toArray()).toEqual([100]);

        const list2 = new List();
        list2.insert(200, -2);
        expect(list2.toArray()).toEqual([200]);
      });

      test('positive index', () => {
        const list = new List();
        list.insert(100, 1);
        expect(list.toArray()).toEqual([100]);

        const list2 = new List();
        list2.insert(200, 2);
        expect(list2.toArray()).toEqual([200]);
      });
    });
  });

  test('remove()', () => {
    // TODO: Test extreme indices on empty list
    const list = listFactory(7);
    expect(list.remove(-1)).toBeTruthy();
    expect(list.toArray()).toEqual([100, 200, 300, 400, 500, 600]);
    expect(list.remove(0)).toBeTruthy();
    expect(list.toArray()).toEqual([200, 300, 400, 500, 600]);
    expect(list.remove(-3)).toBeTruthy();
    expect(list.toArray()).toEqual([200, 300, 500, 600]);
    expect(list.remove(-5)).toBeFalsy();
    expect(list.toArray()).toEqual([200, 300, 500, 600]);
    expect(list.remove(4)).toBeFalsy();
    expect(list.remove(3)).toBeTruthy();
    expect(list.toArray()).toEqual([200, 300, 500]);
    expect(list.remove(1)).toBeTruthy();
    expect(list.toArray()).toEqual([200, 500]);
  });

  test('get()', () => {
    // TODO: Test extreme indices on empty list
    const list = listFactory(10);
    expect(list.toArray()).toEqual([
      100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
    ]);
    expect(list.get(-100)).toBe(undefined);
    expect(list.get(-11)).toBe(undefined);
    expect(list.get(-10)).toBe(100);
    expect(list.get(-1)).toBe(1000);
    expect(list.get(0)).toBe(100);
    expect(list.get(1)).toBe(200);
    expect(list.get(9)).toBe(1000);
    expect(list.get(10)).toBe(undefined);
    expect(list.get(100)).toBe(undefined);
  });

  test('count()', () => {
    const list = new List();
    list.push(100);
    list.push(200);
    list.push(100);
    list.push(300);
    list.push(100);
    list.push(400);
    list.push(200);
    expect(list.count(100)).toBe(3);
    expect(list.count(200)).toBe(2);
    expect(list.count(300)).toBe(1);
    expect(list.count(400)).toBe(1);

    list.remove(2);
    expect(list.count(100)).toBe(2);
    expect(list.count(200)).toBe(2);
    expect(list.count(300)).toBe(1);
    expect(list.count(400)).toBe(1);

    list.remove(2);
    expect(list.count(300)).toBe(0);

    list.remove(0);
    expect(list.count(100)).toBe(1);
  });
});
