const climbingStaircase = require('./climbingStaircase');

describe('climbingStaircase', () => {
  it('returns the number of ways to climb the staircase', () => {
    expect(climbingStaircase(1)).toEqual(1);
    expect(climbingStaircase(2)).toEqual(2);
    expect(climbingStaircase(3)).toEqual(3);
    expect(climbingStaircase(4)).toEqual(5);
    expect(climbingStaircase(5)).toEqual(8);
    expect(climbingStaircase(6)).toEqual(13);
    expect(climbingStaircase(7)).toEqual(21);
    expect(climbingStaircase(8)).toEqual(34);
    expect(climbingStaircase(9)).toEqual(55);
    expect(climbingStaircase(10)).toEqual(89);
  });
});
