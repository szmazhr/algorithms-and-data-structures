const binarySearch = require('./binarySearch');

describe('binarySearch', () => {
  it('returns -1 if the target is not in the array', () => {
    expect(binarySearch([1, 2, 3], 4)).toBe(-1);
  });
  it('returns the index of the target if it is in the array', () => {
    expect(binarySearch([1, 2, 3], 2)).toBe(1);
    expect(binarySearch([1, 2, 3], 3)).toBe(2);
    expect(binarySearch([1, 2, 3], 1)).toBe(0);
  });
  it('it works even if target is string', () => {
    expect(binarySearch(['1', '2', '3'], '2')).toBe(1);
    expect(binarySearch(['1', '2', '3'], '3')).toBe(2);
    expect(binarySearch(['1', '2', '3'], '1')).toBe(0);
    expect(binarySearch(['1', '2', '3'], 'anything else')).toBe(-1);
  });
});
