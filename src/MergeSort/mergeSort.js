/**
 * This function is used to merge two sorted arrays into one sorted array
 * @param {Array<string | number>} left - The left sorted array
 * @param {Array<string | number>} right - The right sorted array
 * @returns {Array<string | number>} - The merged sorted array
 * @example
 * merge(['h', 'r', 'z'], ['S', 'a', 'a', 'h']); // ['S', 'a', 'a', 'h', 'h', 'r', 'z']
 * merge([2, 4, 6], [1, 3, 5]); // [1, 2, 3, 4, 5, 6]
 */
function merge(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

/**
 * This function is used to sort an array using the merge sort algorithm
 * @param {Array<string | number>} array - The array to be sorted
 * @returns {Array<string | number>} - The sorted array
 * @example
 * mergeSort([4, 8, 6, 2, 1, 7, 5, 3]); // [1, 2, 3, 4, 5, 6, 7, 8]
 * mergeSort(['S', 'h', 'a', 'h', 'z', 'a', 'r']); // ['S', 'a', 'a', 'h', 'h', 'r', 'z']
 * mergeSort([1, 3, 5, 2, 4, 6]); // [1, 2, 3, 4, 5, 6]
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

export default mergeSort;

// Worst case: O(n²)
// Avg case: O(n log n)
