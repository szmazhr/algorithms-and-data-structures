/**
 * This function finds the fibonacci number from 0 to nth index using iteration.
 * @param {number} n - The index to generate the fibonacci sequence up to.
 * @returns {number[]} - The fibonacci sequence up to the given index.
 * @example
 * fibs(1); // [0, 1]
 * fibs(2); // [0, 1, 1]
 * fibs(7); // [0, 1, 1, 2, 3, 5, 8, 13]
 */

function fibs(n) {
  const result = []; // O(1)
  for (let i = 0; i <= n; i += 1) {
    result.push(i < 2 ? i : result[i - 1] + result[i - 2]); // O(1)
  } // O(n)
  return result; // O(1)
}

module.exports = fibs;

// O(n) + 2 O(1)
// Big-O notation: O(n)
