import mergeSort from './mergeSort';

describe('mergeSort', () => {
  it('returns the sorted array', () => {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([2, 1])).toEqual([1, 2]);
    expect(mergeSort([1, 3, 5])).toEqual([1, 3, 5]);
    expect(mergeSort([1, 3, 5, 2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    expect(mergeSort([5, 6, 1, 3, 6, 4])).toEqual([1, 3, 4, 5, 6, 6]);
    expect(mergeSort([4, 8, 6, 2, 1, 7, 5, 3])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
    expect(mergeSort(['S', 'h', 'a', 'h', 'z', 'a', 'r'])).toEqual([
      'S',
      'a',
      'a',
      'h',
      'h',
      'r',
      'z',
    ]);
  });
});
