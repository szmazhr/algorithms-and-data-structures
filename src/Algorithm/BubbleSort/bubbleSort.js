/* eslint-disable no-param-reassign */

/**
 * This function swaps two elements in an array
 * @param {Array} arr - The array to swap elements in
 * @param {number} firstIndex - The index of the first element to swap
 * @param {number} secondIndex  - The index of the second element to swap
 * @example
 * const arr = [1, 2, 3, 4, 5];
 * swapElement(arr, 0, 1);
 * console.log(arr); // [2, 1, 3, 4, 5]
 */
function swapElement(arr, firstIndex, secondIndex) {
  const firstValue = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = firstValue;
}

/**
 * This function sorts an array using the using algorithm called bubble sort
 * @param {Array<string | number>} arr - The array to sort
 * @returns {Array<string | number>} The sorted array
 * @example
 * bubbleSort([]); // []
 * bubbleSort([1]); // [1]
 * bubbleSort([5, 6, 1, 3, 6, 4]); // [1, 3, 4, 5, 6, 6]
 * bubbleSort([4, 8, 6, 2, 1, 7, 5, 3]); // [1, 2, 3, 4, 5, 6, 7, 8]
 * bubbleSort(['S', 'h', 'a', 'h', 'z', 'a', 'r']); // ['S', 'a', 'a', 'h', 'h', 'r', 'z']
 */
function bubbleSort(arr) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapElement(arr, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

module.exports = bubbleSort;

// Big-O: O(n²)
