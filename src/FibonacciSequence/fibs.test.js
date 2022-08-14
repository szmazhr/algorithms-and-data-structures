const fibs = require('./fibs');

describe('fibs', () => {
  it('returns the array from 0 to nth fibonacci number', () => {
    expect(fibs(1)).toEqual([0, 1]);
    expect(fibs(2)).toEqual([0, 1, 1]);
    expect(fibs(3)).toEqual([0, 1, 1, 2]);
    expect(fibs(4)).toEqual([0, 1, 1, 2, 3]);
    expect(fibs(5)).toEqual([0, 1, 1, 2, 3, 5]);
    expect(fibs(6)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    expect(fibs(7)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  });
});
