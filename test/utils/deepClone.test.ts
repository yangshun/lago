import { deepClone } from '../../src';

describe('deepClone()', () => {
  test('primitives', () => {
    expect(deepClone(1)).toBe(1);
    expect(deepClone('1')).toBe('1');
    expect(deepClone(true)).toBe(true);
    expect(deepClone(false)).toBe(false);
    expect(deepClone(null)).toBe(null);
    expect(deepClone(undefined)).toBe(undefined);
  });

  test('arrays', () => {
    const arr = [1, 2, 3];
    const clonedArr = deepClone(arr);
    expect(arr).toEqual(clonedArr);
    expect(arr).not.toBe(clonedArr);
    arr.push(4);
    expect(arr).not.toEqual(clonedArr);
    clonedArr.push(4);
    expect(arr).toEqual(clonedArr);
  });

  test('plain objects', () => {
    const obj: Record<string, number> = { 1: 2, 3: 4 };
    const clonedObj = deepClone(obj);
    expect(obj).toEqual(clonedObj);
    expect(obj).not.toBe(clonedObj);
    obj[5] = 6;
    expect(obj).not.toEqual(clonedObj);
    clonedObj[5] = 6;
    expect(obj).toEqual(clonedObj);
  });

  test('mixed objects', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const val: Array<any> = [{ 1: 2, 3: 4 }, { 5: 6 }, { 7: ['a', 'b', 'c'] }];
    const clonedVal = deepClone(val);
    expect(val[2]).toEqual({ 7: ['a', 'b', 'c'] });
    expect(val[2]).not.toBe({ 7: ['a', 'b', 'c'] });
    val.push(8);
    expect(val).not.toEqual(clonedVal);
    clonedVal.push(8);
    expect(val).toEqual(clonedVal);
    val[2][7].push('d');
    expect(val).not.toEqual(clonedVal);
    clonedVal[2][7].push('d');
    expect(val).toEqual(clonedVal);
  });
});
