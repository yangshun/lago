import { nullthrows } from '../../src';

describe('nullthrows()', () => {
  test('throws for null values', () => {
    expect(() => nullthrows(null)).toThrowError();
    expect(() => nullthrows(undefined)).toThrowError();
  });

  test('not throw for valid values', () => {
    expect(nullthrows(1)).toEqual(1);
    expect(nullthrows('hello')).toEqual('hello');
    expect(nullthrows(NaN)).toEqual(NaN);
    expect(nullthrows([])).toEqual([]);
    expect(nullthrows({})).toEqual({});
    expect(nullthrows(true)).toEqual(true);
    expect(nullthrows(false)).toEqual(false);
  });
});
