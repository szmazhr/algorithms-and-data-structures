/**
 * This function finds the factorial of a number using recursion.
 * @param {number} n - The number to find the factorial of.
 * @returns {number} - The factorial of the given number.
 * @example
 * facRec(0); // 1
 * facRec(1); // 1
 * facRec(2); // 2
 * facRec(8); // 40320
 * facRec(14); // 87178291200
 */
function facRec(n) {
  // base case
  if (n === 0) {
    return 1;
  }
  // recursive case
  return n * facRec(n - 1); // O(n)
}

module.exports = facRec;

// Big-O: O(n)
