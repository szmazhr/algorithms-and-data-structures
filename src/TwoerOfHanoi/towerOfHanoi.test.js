const towerOfHanoi = require('./towerOfHanoi');

describe('towerOfHanoi', () => {
  it('returns the number of moves needed to move all discs from the first tower to the last tower', () => {
    expect(towerOfHanoi(1, 'A', 'B', 'C')).toEqual(1);
    expect(towerOfHanoi(2, 'A', 'B', 'C')).toEqual(3);
    expect(towerOfHanoi(3, 'A', 'B', 'C')).toEqual(7);
    expect(towerOfHanoi(4, 'A', 'B', 'C')).toEqual(15);
    expect(towerOfHanoi(10, 'A', 'B', 'C')).toEqual(1023);
  });
});
