/**
 * Partitions an array into two parts according to a pivot.
 * @param {number[]} arr The array to be sorted.
 * @param {number} lo Starting index of the array to partition
 * @param {number} hi Ending index (inclusive) of the array to partition
 * @return {number} Returns the pivot that was chosen.
 */
function partition(arr: Array<number>, lo: number, hi: number): number {
  const pivot = arr[hi];
  let i = lo - 1;

  for (let j = lo; j < hi; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  if (arr[hi] < arr[i + 1]) {
    [arr[i + 1], arr[hi]] = [arr[hi], arr[i + 1]];
  }

  return i + 1;
}

/**
 * Sorts an array of elements in-place.
 * @param {number[]} arr The array to be sorted
 * @param {number} lo Starting index of the array to sort
 * @param {number} hi Ending index (inclusive) of the array to sort
 */
function quickSortImpl(arr: Array<number>, lo: number, hi: number): void {
  if (lo >= hi) {
    return;
  }

  const pivot = partition(arr, lo, hi);
  quickSortImpl(arr, lo, pivot - 1);
  quickSortImpl(arr, pivot + 1, hi);
}

/**
 * Sorts an array of elements. Makes a shallow copy of the array.
 * Based on Lomuto partition scheme.
 * @param {number[]} arr The array to be sorted.
 * @return {number[]} Returns a sorted shallow copy of the array
 */
function quickSort(arr: Array<number>): Array<number> {
  const result = arr.slice(0);
  quickSortImpl(result, 0, result.length - 1);
  return result;
}

export default quickSort;
