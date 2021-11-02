import randomInt from '../utils/randomInt';

/**
 * Returns the kth smallest element in an unsorted array.
 * @param {number[]} arr The input array.
 * @param {number} k
 * @return {number} The kth smallest element in the array.
 */
function quickSelect(arr: Array<number>, k: number): number | null {
  if (k < 1 || k > arr.length) {
    return null;
  }

  const pivot = arr[randomInt(0, arr.length - 1)];
  const lower: Array<number> = [];
  const higher: Array<number> = [];

  arr.forEach((num) => {
    if (num < pivot) {
      lower.push(num);
    } else if (num > pivot) {
      higher.push(num);
    }
  });

  if (k <= lower.length) {
    return quickSelect(lower, k);
  }

  if (k > arr.length - higher.length) {
    return quickSelect(higher, k - (arr.length - higher.length));
  }

  return pivot;
}

/**
 * Returns the kth largest element in an unsorted array.
 * @param {number[]} arr The input array.
 * @param {number} k
 * @param {number} The kth largest element in the array.
 */
function quickSelectLargest(arr: Array<number>, k: number): number | null {
  return quickSelect(arr, arr.length - k + 1);
}

export { quickSelect, quickSelectLargest };
