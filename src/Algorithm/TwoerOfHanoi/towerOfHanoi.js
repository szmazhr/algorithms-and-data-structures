/**
 * This function is used to check the number of moves required to move all discs from the source tower to the destination tower
 * @param {number} discs - The number of discs to be moved
 * @param {*} source - The source tower
 * @param {*} destination - The destination tower
 * @param {*} spare - The spare tower
 * @returns {number} - The number of moves required to move all discs from the source tower to the destination tower
 * @example
 * towerOfHanoi(1, 'A', 'B', 'C') // 1
 * towerOfHanoi(2, 'A', 'B', 'C') // 3
 * towerOfHanoi(3, 'A', 'B', 'C') // 7
 * towerOfHanoi(4, 'A', 'B', 'C') // 15
 * towerOfHanoi(10, 'A', 'B', 'C') // 1023
 *
 */
function towerOfHanoi(discs, source, destination, spare) {
  if (discs === 1) {
    // console.log(`Move disc 1 from ${source} to ${destination}`);
    return 1;
  }
  return (
    towerOfHanoi(discs - 1, source, spare, destination) +
    towerOfHanoi(1, source, destination, spare) +
    towerOfHanoi(discs - 1, spare, destination, source)
  );
}

module.exports = towerOfHanoi;

// Big-O: O(2^n)
