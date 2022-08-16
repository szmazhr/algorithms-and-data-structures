/**
 * This function is used to check the number of steps required to climb a staircase, either 1 or 2 staircase can be climb in a step
 * @param {number} n - The hight of the staircase
 * @returns {number} - The number of ways staircase can be climbed
 * @example
 * climbingStaircase(1) // 1
 * climbingStaircase(5) // 8
 * climbingStaircase(10) // 89
 */
function climbingStaircase(n) {
  const numOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }
  return numOfWays[n - 1];
}

module.exports = climbingStaircase;

// Big-O: O(n);
