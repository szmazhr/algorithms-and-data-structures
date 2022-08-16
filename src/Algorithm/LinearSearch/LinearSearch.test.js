const linearSearch = require('./LinearSearch');

describe('linearSearch', () => {
  it('returns -1 if the target is not in the array', () => {
    expect(linearSearch([1, 2, 3], 4)).toBe(-1);
  });
  it('returns the index of the target if it is in the array', () => {
    expect(linearSearch([1, 2, 3], 2)).toBe(1);
  });
  it('returns the index of the target if it is in the array', () => {
    expect(linearSearch([1, 2, 3], 3)).toBe(2);
  });
  it('returns the index of the target if it is in the array', () => {
    expect(linearSearch([1, 2, 3], 1)).toBe(0);
  });
});
