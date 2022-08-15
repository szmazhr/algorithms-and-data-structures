/**
 * This function will search for a value in a sorted array using iteration.
 * @param {array} arr - The array to search.
 * @param {number | string} target  - The value to search for.
 * @returns {number} The index of the target in the array. if not found, -1.
 * @example
 * binarySearch([1, 2, 3], 4); // -1
 * binarySearch([1, 2, 3], 2); // 1
 * binarySearch([1, 2, 3], 3); // 2
 * binarySearch([1, 2, 3], 1); // 0
 * binarySearch(['1', '2', '3'], '2'); // 1
 * binarySearch(['1', '2', '3'], '3'); // 2
 * binarySearch(['1', '2', '3'], '1'); // 0
 */
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    if (arr[middle] === target) {
      return middle;
    }
    if (target < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

module.exports = binarySearch;

// Big O: O(log(n)) where n is the length of the array.
