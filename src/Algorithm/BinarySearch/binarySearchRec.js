/**
 * This function will search for a value in a sorted array using recursion.
 * @param {Array<number | string>} arr - The array to search.
 * @param {string | number} target - The value to search for.
 * @param {number} start - The start index of the subarray to search.
 * @param {number} end - The end index of the subarray to search.
 * @returns {number} The index of the target in the array. if not found, -1.
 * @example
 * binarySearch([1, 2, 3], 4); // -1
 * binarySearch([1, 2, 3], 2); // 1
 * binarySearch([1, 2, 3], 3); // 2
 * binarySearch([1, 2, 3], 1); // 0
 * binarySearch(['1', '2', '3'], '2'); // 1
 * binarySearch(['1', '2', '3'], '3'); // 2
 * binarySearch(['1', '2', '3'], '1'); // 0
 * binarySearch(['1', '2', '3'], 'anything else'); // -1
 */
function binarySearchRec(arr, target, start = 0, end = arr.length - 1) {
  // base case 1: target not found
  if (start > end) {
    return -1;
  }
  // base case 2: target found in the middle
  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    return middle;
  }
  // recursive case
  if (target < arr[middle]) {
    return binarySearchRec(arr, target, start, middle - 1);
  }
  return binarySearchRec(arr, target, middle + 1, end);
}

module.exports = binarySearchRec;

// Big O: O(log(n)) where n is the length of the array.
