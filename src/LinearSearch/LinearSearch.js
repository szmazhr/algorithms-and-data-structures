/**
 * This function will search for a value in a array.
 * @param {array} arr - The array to search.
 * @param {string | number} target - The value to search for.
 * @returns {number} The index of the target first found in the array. if not found, -1.
 * @example
 * linearSearch([1, 2, 3], 4); // -1
 * linearSearch([1, 2, 3], 2); // 1
 * linearSearch([1, 2, 3], 3); // 2
 * linearSearch([1, 2, 3], 1); // 0
 */
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

module.exports = linearSearch;

// Big O: O(n) where n is the length of the array.
