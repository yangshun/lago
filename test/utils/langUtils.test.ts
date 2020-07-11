import { langUtils } from '../../src';

const {
  isArray,
  isBoolean,
  isInteger,
  isNull,
  isNumber,
  isObject,
  isString,
  isUndefined,
} = langUtils;

describe('langUtils', () => {
  test('isArray()', () => {
    expect(isArray(1)).toBe(false);
    expect(isArray('1')).toBe(false);
    expect(isArray([1])).toBe(true);
    expect(isArray(['1'])).toBe(true);
    expect(isArray({ 1: 2 })).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(null)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(NaN)).toBe(false);
  });

  test('isBoolean()', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('1')).toBe(false);
    expect(isBoolean([1])).toBe(false);
    expect(isBoolean(['1'])).toBe(false);
    expect(isBoolean({ 1: 2 })).toBe(false);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(NaN)).toBe(false);
  });

  test('isInteger()', () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger('1')).toBe(false);
    expect(isInteger([1])).toBe(false);
    expect(isInteger(['1'])).toBe(false);
    expect(isInteger({ 1: 2 })).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(false)).toBe(false);
    expect(isInteger(null)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(NaN)).toBe(false);
  });

  test('isNull()', () => {
    expect(isNull(1)).toBe(false);
    expect(isNull('1')).toBe(false);
    expect(isNull([1])).toBe(false);
    expect(isNull(['1'])).toBe(false);
    expect(isNull({ 1: 2 })).toBe(false);
    expect(isNull(true)).toBe(false);
    expect(isNull(false)).toBe(false);
    expect(isNull(null)).toBe(true);
    expect(isNull(undefined)).toBe(false);
    expect(isNull(NaN)).toBe(false);
  });

  test('isNumber()', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(1.2)).toBe(true);
    expect(isNumber('1')).toBe(false);
    expect(isNumber([1])).toBe(false);
    expect(isNumber(['1'])).toBe(false);
    expect(isNumber({ 1: 2 })).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(NaN)).toBe(true);
  });

  test('isObject()', () => {
    expect(isObject(1)).toBe(false);
    expect(isObject('1')).toBe(false);
    expect(isObject([1])).toBe(false);
    expect(isObject(['1'])).toBe(false);
    expect(isObject({ 1: 2 })).toBe(true);
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(NaN)).toBe(false);
  });

  test('isString()', () => {
    expect(isString(1)).toBe(false);
    expect(isString('1')).toBe(true);
    expect(isString([1])).toBe(false);
    expect(isString(['1'])).toBe(false);
    expect(isString({ 1: 2 })).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(NaN)).toBe(false);
  });

  test('isUndefined()', () => {
    expect(isUndefined(1)).toBe(false);
    expect(isUndefined('1')).toBe(false);
    expect(isUndefined([1])).toBe(false);
    expect(isUndefined(['1'])).toBe(false);
    expect(isUndefined({ 1: 2 })).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(false)).toBe(false);
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(NaN)).toBe(false);
  });
});
