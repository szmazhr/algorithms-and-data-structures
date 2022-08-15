/**
 * This function checks if the number is a power of two using iteration.
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is a power of two and false otherwise.
 * @example
 * isPowerOfTwo(8); // true
 * isPowerOfTwo(15000); // false
 * isPowerOfTwo(16384); // true
 */
function isPowerOfTwo(n) {
  let x = 1;
  if (n < 1) {
    return false;
  }

  while (x <= n) {
    if (x === n) {
      return true;
    }
    x *= 2;
  } /* log₂(n) */
  return false;
}

module.exports = isPowerOfTwo;

// Big-O: O(log(n))
