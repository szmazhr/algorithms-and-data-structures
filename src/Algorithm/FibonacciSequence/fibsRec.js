/**
 * This function finds the nth fibonacci number using recursion.
 * @param {number} n - The fibonacci number to find.
 * @returns {number} - The nth fibonacci number.
 * @example
 * fibsRec(0); // 0
 * fibsRec(1); // 1
 * fibsRec(6); // 8
 */
function fibsRec(n) {
  // base case
  if (n < 2) {
    return n;
  }

  // recursive case
  return fibsRec(n - 1) + fibsRec(n - 2); // O(2n)
} // O(n)

export default fibsRec;

// Big-O: O(2ⁿ)
