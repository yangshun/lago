import List from '../lib/List';

describe('List', () => {
  test('List.insert()', () => {
    const l = new List();
    l.insert(100, 0);
    expect(l.toArray()).toEqual([100]);
    l.insert(200, 0);
    expect(l.toArray()).toEqual([200, 100]);
    l.insert(300, 1);
    expect(l.toArray()).toEqual([200, 300, 100]);
    l.insert(400, -1);
    expect(l.toArray()).toEqual([400, 200, 300, 100]);
    l.insert(500, 4);
    expect(l.toArray()).toEqual([400, 200, 300, 100, 500]);
    l.insert(600, 100);
    expect(l.toArray()).toEqual([400, 200, 300, 100, 500, 600]);
    l.insert(700, -100);
    expect(l.toArray()).toEqual([700, 400, 200, 300, 100, 500, 600]);
    l.insert(800, 3);
    expect(l.toArray()).toEqual([700, 400, 200, 800, 300, 100, 500, 600]);
  });

  test('List.remove()', () => {
    const l = new List();
    l.push(100);
    l.push(200);
    l.push(300);
    l.push(400);
    l.push(500);
    l.push(600);
    l.push(700);
    expect(l.remove(-1)).toBeFalsy();
    expect(l.remove(0)).toBeTruthy();
    expect(l.toArray()).toEqual([200, 300, 400, 500, 600, 700]);
    expect(l.remove(3)).toBeTruthy();
    expect(l.toArray()).toEqual([200, 300, 400, 600, 700]);
    expect(l.remove(7)).toBeFalsy();
    expect(l.toArray()).toEqual([200, 300, 400, 600, 700]);
    expect(l.remove(100)).toBeFalsy();
    expect(l.toArray()).toEqual([200, 300, 400, 600, 700]);
  });

  test('List.get()', () => {
    const l = new List();
    l.push(100);
    l.push(200);
    l.push(300);
    l.push(400);
    l.push(500);
    l.push(600);
    l.push(700);
    expect(l.toArray()).toEqual([100, 200, 300, 400, 500, 600, 700]);
    expect(l.get(-1)).toBe(null);
    expect(l.get(0)).toBe(100);
    expect(l.get(1)).toBe(200);
    expect(l.get(6)).toBe(700);
    expect(l.get(7)).toBe(null);
    expect(l.get(100)).toBe(null);
  });

  test('List.count()', () => {
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
