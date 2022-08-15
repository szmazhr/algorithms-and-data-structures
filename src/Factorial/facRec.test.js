const facRec = require('./facRec');

describe('facRec', () => {
  it('returns the factorial of the given number', () => {
    expect(facRec(0)).toBe(1);
    expect(facRec(1)).toBe(1);
    expect(facRec(2)).toBe(2);
    expect(facRec(6)).toBe(720);
    expect(facRec(7)).toBe(5040);
    expect(facRec(8)).toBe(40320);
    expect(facRec(14)).toBe(87178291200);
  });
});
