/**
 * Searches for a target element within an array.
 * Returns -1 if the target is not found.
 * @param {number[]} arr
 * @param {number} target
 * @return {number} The index of the target element within the array.
 */
function binarySearch(arr, target) {
  // TODO - Decide which index to return if there are duplicate values in array.
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

export default binarySearch;
