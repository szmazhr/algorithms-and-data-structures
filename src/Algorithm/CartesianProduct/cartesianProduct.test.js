const cartesianProduct = require('./cartesianProduct');

describe('cartesianProduct', () => {
  it('returns the cartesian product of the given arrays', () => {
    expect(cartesianProduct([1], [2])).toEqual([[1, 2]]);
    expect(cartesianProduct([1, 2], [3, 4])).toEqual([
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
    ]);
    expect(cartesianProduct([1, 2], [4, 5, 6])).toEqual([
      [1, 4],
      [1, 5],
      [1, 6],
      [2, 4],
      [2, 5],
      [2, 6],
    ]);
  });
});
