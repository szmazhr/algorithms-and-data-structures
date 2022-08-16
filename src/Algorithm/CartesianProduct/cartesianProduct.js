/**
 * This function is used to make a cartesian product of two arrays
 * @param {Array<number>} ArrA - The first array
 * @param {Array<number>} ArrB - The second array
 * @returns {Array<number>} - The cartesian product of the two arrays
 * @example
 * cartesianProduct([1, 2], [3, 4]); // [[1, 3], [1, 4], [2, 3], [2, 4]]
 * cartesianProduct([1, 2], [4, 5, 6]); // [[1, 4], [1, 5], [1, 6], [2, 4], [2, 5], [2, 6]]
 */
function cartesianProduct(ArrA, ArrB) {
  const result = [];
  for (let i = 0; i < ArrA.length; i++) {
    for (let j = 0; j < ArrB.length; j++) {
      result.push([ArrA[i], ArrB[j]]);
    }
  }
  return result;
}

module.exports = cartesianProduct;

// Big O: O(mn);
