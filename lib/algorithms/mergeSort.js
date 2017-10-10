/**
 * Merges two sorted arrays of elements into one.
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]} result A sorted merged array
 */
function merge(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;

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
 * Sorts an array of elements.
 * @param {number[]} arr
 * @return {number[]} result The sorted array
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    // Arrays of length 0 or 1 are sorted by definition.
    return arr;
  }

  const split = Math.floor(arr.length / 2);
  const left = arr.slice(0, split);
  const right = arr.slice(split, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;
