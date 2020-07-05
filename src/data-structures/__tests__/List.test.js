import List, { traverseNodes } from '../List';

function listFactory(length) {
  const l = new List();
  for (let i = 1; i <= length; i++) {
    l.push(i * 100);
  }
  return l;
}

describe('List', () => {
  describe('traverseNodes', () => {
    describe('allowExceed = false', () => {
      test('indices within range', () => {
        const l = listFactory(10);
        for (let i = 0; i < 10; i++) {
          const node = traverseNodes(l, i);
          expect(node.val).toBe((i + 1) * 100);
        }
      });

      test('indices that exceed', () => {
        const LENGTH = 10;
        const l = listFactory(LENGTH);
        for (let i = -LENGTH; i < LENGTH; i++) {
          expect(traverseNodes(l, i)).toBeTruthy();
        }
        expect(traverseNodes(l, -100)).toBe(undefined);
        expect(traverseNodes(l, -12)).toBe(undefined);
        expect(traverseNodes(l, -11)).toBe(undefined);
        expect(traverseNodes(l, 10)).toBe(undefined);
        expect(traverseNodes(l, 11)).toBe(undefined);
        expect(traverseNodes(l, 100)).toBe(undefined);

        const l2 = listFactory(0);
        expect(traverseNodes(l2, 0)).toBe(undefined);
        expect(traverseNodes(l2, -1)).toBe(undefined);
        expect(traverseNodes(l2, 1)).toBe(undefined);

        const l3 = listFactory(1);
        expect(traverseNodes(l3, 0).val).toBe(100);
        expect(traverseNodes(l3, -1).val).toBe(100);
        expect(traverseNodes(l3, 1)).toBe(undefined);
        expect(traverseNodes(l3, -2)).toBe(undefined);
      });
    });

    describe('allowExceed = true', () => {
      test('indices within range', () => {
        const l = listFactory(10);
        for (let i = 0; i < 10; i++) {
          const node = traverseNodes(l, i, true);
          expect(node.val).toBe((i + 1) * 100);
        }
        for (let i = 1; i < 10; i++) {
          const node = traverseNodes(l, -i, true);
          expect(node.val).toBe((11 - i) * 100);
        }
      });

      test('indices that exceed', () => {
        const LENGTH = 10;
        const l = listFactory(LENGTH);
        for (let i = -LENGTH; i < LENGTH; i++) {
          expect(traverseNodes(l, i, true)).toBeTruthy();
        }
        expect(traverseNodes(l, -100, true).val).toBe(100);
        expect(traverseNodes(l, -12, true).val).toBe(100);
        expect(traverseNodes(l, -11, true).val).toBe(100);
        expect(traverseNodes(l, 10, true).val).toBe(null);
        expect(traverseNodes(l, 11, true).val).toBe(null);
        expect(traverseNodes(l, 100, true).val).toBe(null);
      });
    });
  });

  describe('insert()', () => {
    test('sequential', () => {
      const l = new List();
      l.insert(100, 0);
      expect(l.toArray()).toEqual([100]);
      l.insert(200, 0);
      expect(l.toArray()).toEqual([200, 100]);
      l.insert(300, 1);
      expect(l.toArray()).toEqual([200, 300, 100]);
      l.insert(400, -1);
      expect(l.toArray()).toEqual([200, 300, 400, 100]);
      l.insert(500, 4);
      expect(l.toArray()).toEqual([200, 300, 400, 100, 500]);
      l.insert(600, 100);
      expect(l.toArray()).toEqual([200, 300, 400, 100, 500, 600]);
      l.insert(700, -100);
      expect(l.toArray()).toEqual([700, 200, 300, 400, 100, 500, 600]);
      l.insert(800, 3);
      expect(l.toArray()).toEqual([700, 200, 300, 800, 400, 100, 500, 600]);
    });

    describe('extreme indices on empty list', () => {
      test('negative index', () => {
        const l = new List();
        l.insert(100, -1);
        expect(l.toArray()).toEqual([100]);

        const l2 = new List();
        l2.insert(200, -2);
        expect(l2.toArray()).toEqual([200]);
      });

      test('positive index', () => {
        const l = new List();
        l.insert(100, 1);
        expect(l.toArray()).toEqual([100]);

        const l2 = new List();
        l2.insert(200, 2);
        expect(l2.toArray()).toEqual([200]);
      });
    });
  });

  test('remove()', () => {
    // TODO: Test extreme indices on empty list
    const l = listFactory(7);
    expect(l.remove(-1)).toBeTruthy();
    expect(l.toArray()).toEqual([100, 200, 300, 400, 500, 600]);
    expect(l.remove(0)).toBeTruthy();
    expect(l.toArray()).toEqual([200, 300, 400, 500, 600]);
    expect(l.remove(-3)).toBeTruthy();
    expect(l.toArray()).toEqual([200, 300, 500, 600]);
    expect(l.remove(-5)).toBeFalsy();
    expect(l.toArray()).toEqual([200, 300, 500, 600]);
    expect(l.remove(4)).toBeFalsy();
    expect(l.remove(3)).toBeTruthy();
    expect(l.toArray()).toEqual([200, 300, 500]);
    expect(l.remove(1)).toBeTruthy();
    expect(l.toArray()).toEqual([200, 500]);
  });

  test('get()', () => {
    // TODO: Test extreme indices on empty list
    const l = listFactory(10);
    expect(l.toArray()).toEqual([
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
      1000,
    ]);
    expect(l.get(-100)).toBe(undefined);
    expect(l.get(-11)).toBe(undefined);
    expect(l.get(-10)).toBe(100);
    expect(l.get(-1)).toBe(1000);
    expect(l.get(0)).toBe(100);
    expect(l.get(1)).toBe(200);
    expect(l.get(9)).toBe(1000);
    expect(l.get(10)).toBe(undefined);
    expect(l.get(100)).toBe(undefined);
  });

  test('count()', () => {
    const l = new List();
    l.push(100);
    l.push(200);
    l.push(100);
    l.push(300);
    l.push(100);
    l.push(400);
    l.push(200);
    expect(l.count(100)).toBe(3);
    expect(l.count(200)).toBe(2);
    expect(l.count(300)).toBe(1);
    expect(l.count(400)).toBe(1);
    l.remove(2);
    expect(l.count(100)).toBe(2);
    expect(l.count(200)).toBe(2);
    expect(l.count(300)).toBe(1);
    expect(l.count(400)).toBe(1);
    l.remove(2);
    expect(l.count(300)).toBe(0);
    l.remove(0);
    expect(l.count(100)).toBe(1);
  });
});
