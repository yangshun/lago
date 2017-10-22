/**
 * Reorders elements of array into max binary heap.
 * @param {number[]} arr
 * @param {number} size
 * @param {number} i Current parent node we are comparing
 */
function heapify(arr, size, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    const swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    heapify(arr, size, largest);
  }
}

/**
 * Sorts array of elements in place.
 * @param {number[]} arr
 * @return {number[]} result Sorted array
 */
function heapSort(arr) {
  const result = arr.slice(0);
  const size = arr.length;
  for (let i = Math.floor(size / 2 - 1); i >= 0; i--) {
    heapify(result, size, i);
  }
  for (let i = size - 1; i >= 0; i--) {
    const temp = result[0];
    result[0] = result[i];
    result[i] = temp;
    heapify(result, i, 0);
  }
  return result;
}

export default heapSort;
