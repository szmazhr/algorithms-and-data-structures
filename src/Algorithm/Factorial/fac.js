/**
 * This function takes a number and returns the factorial of the given number using iteration.
 * @param {number} n - The number to calculate the factorial of.
 * @returns {number} - The factorial of the given number.
 * @example
 * factorial(0); // 1
 * factorial(1); // 1
 * factorial(2); // 2
 * factorial(11); // 39916800
 */

function factorial(n) {
  let result = 1; // O(1)

  for (let i = 2; i <= n; i += 1) /* O(n) */ {
    result *= i; // O(1)
  }
  return result; // O(1)
}

module.exports = factorial;

// O(n) + 2 O(1)
// Big-O notation: O(n)
