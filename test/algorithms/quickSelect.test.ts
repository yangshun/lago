import shuffle from 'lodash/shuffle';
import { quickSelect, quickSelectLargest } from '../../src';

describe('quickSelect', () => {
  test('empty', () => {
    expect(quickSelect([], 1)).toBe(null);
  });

  test('one or two elements', () => {
    expect(quickSelect([1], 1)).toBe(1);
    expect(quickSelect([10, 100], 1)).toBe(10);
    expect(quickSelect([100, 10], 1)).toBe(10);
    expect(quickSelect([10, 100], 2)).toBe(100);
    expect(quickSelect([100, 10], 2)).toBe(100);
  });

  test('more than two elements', () => {
    expect(quickSelect(shuffle([1, 2, 3, 10, 11, 20]), 1)).toBe(1);
    expect(quickSelect(shuffle([1, 2, 3, 10, 11, 20]), 2)).toBe(2);
    expect(quickSelect(shuffle([1, 2, 3, 10, 11, 20]), 3)).toBe(3);
    expect(quickSelect(shuffle([1, 2, 3, 10, 11, 20]), 4)).toBe(10);
    expect(quickSelect(shuffle([1, 2, 3, 10, 11, 20]), 5)).toBe(11);
    expect(quickSelect(shuffle([1, 2, 3, 10, 11, 20]), 6)).toBe(20);
  });

  test('out of range', () => {
    expect(quickSelect([1], 0)).toBe(null);
    expect(quickSelect([1], 2)).toBe(null);
    expect(quickSelect(shuffle([1, 2, 3, 10, 11, 20]), 0)).toBe(null);
    expect(quickSelect(shuffle([1, 2, 3, 10, 11, 20]), 7)).toBe(null);
  });
});

describe('quickSelectLargest', () => {
  test('empty', () => {
    expect(quickSelectLargest([], 1)).toBe(null);
  });

  test('one or two elements', () => {
    expect(quickSelectLargest([1], 1)).toBe(1);
    expect(quickSelectLargest([10, 100], 1)).toBe(100);
    expect(quickSelectLargest([100, 10], 1)).toBe(100);
    expect(quickSelectLargest([10, 100], 2)).toBe(10);
    expect(quickSelectLargest([100, 10], 2)).toBe(10);
  });

  test('more than two elements', () => {
    expect(quickSelectLargest(shuffle([1, 2, 3, 10, 11, 20]), 1)).toBe(20);
    expect(quickSelectLargest(shuffle([1, 2, 3, 10, 11, 20]), 2)).toBe(11);
    expect(quickSelectLargest(shuffle([1, 2, 3, 10, 11, 20]), 3)).toBe(10);
    expect(quickSelectLargest(shuffle([1, 2, 3, 10, 11, 20]), 4)).toBe(3);
    expect(quickSelectLargest(shuffle([1, 2, 3, 10, 11, 20]), 5)).toBe(2);
    expect(quickSelectLargest(shuffle([1, 2, 3, 10, 11, 20]), 6)).toBe(1);
  });

  test('out of range', () => {
    expect(quickSelectLargest([1], 0)).toBe(null);
    expect(quickSelectLargest([1], 2)).toBe(null);
    expect(quickSelectLargest(shuffle([1, 2, 3, 10, 11, 20]), 0)).toBe(null);
    expect(quickSelectLargest(shuffle([1, 2, 3, 10, 11, 20]), 7)).toBe(null);
  });
});
