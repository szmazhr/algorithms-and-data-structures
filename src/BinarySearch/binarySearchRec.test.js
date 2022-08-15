const binarySearchRec = require('./binarySearchRec');

describe('binarySearchRec', () => {
  it('returns -1 if the target is not in the array', () => {
    expect(binarySearchRec([1, 2, 3], 4)).toBe(-1);
  });
  it('returns the index of the target if it is in the array', () => {
    expect(binarySearchRec([1, 2, 3], 2)).toBe(1);
    expect(binarySearchRec([1, 2, 3], 3)).toBe(2);
    expect(binarySearchRec([1, 2, 3], 1)).toBe(0);
  });
  it('it works even if target is string', () => {
    expect(binarySearchRec(['1', '2', '3'], '2')).toBe(1);
    expect(binarySearchRec(['1', '2', '3'], '3')).toBe(2);
    expect(binarySearchRec(['1', '2', '3'], '1')).toBe(0);
    expect(binarySearchRec(['1', '2', '3'], 'anything else')).toBe(-1);
  });
});
