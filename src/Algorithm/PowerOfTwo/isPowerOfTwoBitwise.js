/**
 * This function checks if the number is a power of two using bitwise operators.
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is a power of two and false otherwise.
 * @example
 * isPowerOfTwoBitwise(8); // true
 * isPowerOfTwoBitwise(15000); // false
 * isPowerOfTwoBitwise(16384); // true
 */
function isPowerOfTwoBitwise(n) {
  if (n < 1) {
    return false;
  }
  // eslint-disable-next-line no-bitwise
  return (n & (n - 1)) === 0;
}

module.exports = isPowerOfTwoBitwise;

// Big-O: O(1)
