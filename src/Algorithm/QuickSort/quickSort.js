/**
 * This function sorts an array using algorithm called quick sort.
 * @param {Array<string | number>} arr - The array to be sorted.
 * @returns {Array<string | number>} - The sorted array.
 * @example
 * quickSort(['S', 'h', 'a', 'h', 'z', 'a', 'r']); // ['S', 'a', 'a', 'h', 'h', 'r', 'z']
 * quickSort([4, 8, 6, 2, 1, 7, 5, 3]); // [1, 2, 3, 4, 5, 6, 7, 8]
 */
function quickSort(arr) {
  const leftArr = [];
  const rightArr = [];

  // Base case: if the array has less than 2 elements, return the array.
  if (arr.length < 2) {
    return arr;
  }

  // Pick the lest (can take any element) element as the pivot.
  const pivotElement = arr[arr.length - 1];

  // Iterate through the array and put all the elements that are less than the pivot element into the left array.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= pivotElement) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  // Recursive call: sort the left and right arrays and concatenate them.
  return quickSort(leftArr).concat(pivotElement, quickSort(rightArr));
}

module.exports = quickSort;

// Worst case: O(n²)
// Avg case: O(n log n)
