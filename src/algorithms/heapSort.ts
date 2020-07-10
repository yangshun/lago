/**
 * Reorders elements of array into max binary heap.
 * @param {number[]} arr
 * @param {number} size
 * @param {number} index of the parent node we are comparing
 */
function heapify(arr: Array<number>, size: number, index: number): void {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];
    heapify(arr, size, largest);
  }
}

/**
 * Sorts an array of elements using heapsort.
 * Returns a shallow copy of the sorted array.
 * @param {number[]} arr
 * @return {number[]} Sorted array
 */
function heapSort(arr: Array<number>): Array<number> {
  const result = arr.slice(0);
  const size = arr.length;

  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    heapify(result, size, i);
  }

  for (let i = size - 1; i >= 0; i--) {
    [result[0], result[i]] = [result[i], result[0]];
    heapify(result, i, 0);
  }

  return result;
}

export default heapSort;
