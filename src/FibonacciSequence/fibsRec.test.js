import fibsRec from './fibsRec';

describe('fibsRec', () => {
  it('returns the nth fibonacci number', () => {
    expect(fibsRec(0)).toEqual(0);
    expect(fibsRec(1)).toEqual(1);
    expect(fibsRec(6)).toEqual(8);
  });
});
