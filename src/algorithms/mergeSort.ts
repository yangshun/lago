/**
 * Merges two sorted arrays of elements into one.
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]} A sorted merged array
 */
function merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else if (arr2[j] < arr1[i]) {
      merged.push(arr2[j]);
      j++;
    }
  }

  merged.push(...arr1.slice(i), ...arr2.slice(j));
  return merged;
}

/**
 * Sorts an array of elements. Makes a shallow copy of the original array.
 * @param {number[]} arr The array to be sorted.
 * @return {number[]} Returns the sorted shallow copy of the original array.
 */
function mergeSort(arr: Array<number>): Array<number> {
  if (arr.length < 2) {
    // Arrays of length 0 or 1 are sorted by definition.
    // return copy of arr.
    return arr.slice(0);
  }

  const split = Math.floor(arr.length / 2);
  const left = arr.slice(0, split);
  const right = arr.slice(split, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
