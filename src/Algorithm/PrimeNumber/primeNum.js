/**
 * This function takes a number and returns true if the given number is prime number otherwise returns false.
 * @param {number} n - The number to check if it is prime.
 * @returns {boolean} - True if the number is prime otherwise false.
 * @example
 * isPrime(0); // true
 * isPrime(1); // false
 * isPrime(2); // true
 * isPrime(3); // true
 * isPrime(5); // true
 * isPrime(7); // true
 * isPrime(43); // true
 * isPrime(46); // false
 * isPrime(100); // false
 * isPrime(101); // true;
 */
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  // (let i = 2; i < n; i += 1); // O(n)
  for (let i = 2; i <= Math.sqrt(n); i += 1) /* O(sqrt(n)) */ {
    // reduce the time complexity to O(sqrt(n))
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = isPrime;

// Big-O: O(sqrt(n))
