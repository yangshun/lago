/**
 * Searches for a target element within a sorted array.
 * Returns all indexes of the target found.
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]} The indexes of the target element within the array.
 */
function binarySearch(arr, target) {
  let result = [];

  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] === target) {
      result.push(mid);
      
      let continueLinearSearch = false;
      let nextLeft = mid - 1;
      let nextRight = mid + 1;
      do {
        continueLinearSearch = false;
        if (arr[nextLeft] === target) {
          result.push(nextLeft);
          continueLinearSearch = true;
        }
        if (arr[nextRight] === target) {
          result.push(nextRight);
          continueLinearSearch = true;
        }
        if (continueLinearSearch) {
          nextLeft -= 1;
          nextRight += 1;
        }
      } while (continueLinearSearch);
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return result.sort();
}

export default binarySearch;
