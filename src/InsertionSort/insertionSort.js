/* eslint-disable no-param-reassign */

/**
 * This function inserts the element into the array at the correct position.
 * Before the insert function is called:
 * the elements from array[0] to array[rightIndex] should be sorted in ascending order.
 * After calling the insert function:
 * value and the elements that were previously in array[0] to array[rightIndex], will be sorted in ascending order and stored in the elements from array[0] to array[rightIndex+1].
 * @param {Array<string | number>} array - The array to insert the element into.
 * @param {number} rightIndex - The index of the element to the right of the element to insert.
 * @param {string | number} value - The value to insert into the array.
 * @example
 * insert([1, 3, 4, 4, 2 , 7, 5], 3, 2); // [1, 2, 3, 4, 4, 7, 5]
 */
function insert(array, rightIndex, value) {
  let i;
  for (i = rightIndex; i >= 0 && array[i] > value; i--) {
    array[i + 1] = array[i];
  }
  array[i + 1] = value;
}

/**
 * This function sorts the array using algorithm called insertion sort.
 * @param {Array<string | number>} arr - The array to sort.
 * @returns {Array<string | number>} - The sorted array.
 * @example
 * insertionSort(['S', 'h', 'a', 'h', 'z', 'a', 'r']); // ['S', 'a', 'a', 'h', 'h', 'r', 'z']
 * insertionSort([4, 8, 6, 2, 1, 7, 5, 3]); // [1, 2, 3, 4, 5, 6, 7, 8]
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      insert(arr, i - 1, arr[i]);
    }
  }
  return arr;
}

module.exports = insertionSort;

// Big-O: O(n²)
