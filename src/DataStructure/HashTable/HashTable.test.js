const HashTable = require('./HashTable');

describe('HashTable', () => {
  let table;

  beforeEach(() => {
    table = new HashTable(50);
  });

  test('can be instantiated', () => {
    expect(table).toBeDefined();
  });

  test('can set and retrieve the value ', () => {
    table.set('name', 'Shahzar');
    table.set('mane', 'Mazhar');
    table.set('age', 25);
    expect(table.get('name')).toBe('Shahzar');
    expect(table.get('mane')).toBe('Mazhar');
    expect(table.get('age')).toBe(25);
    expect(table.get('random')).toBe(undefined);
  });

  test('can update the value ', () => {
    table.set('name', 'Shahzar');
    table.set('name', 'Mazhar');
    expect(table.get('name')).toBe('Mazhar');
  });

  test('can remove the value ', () => {
    table.set('name', 'Shahzar');
    table.set('mane', 'Mazhar');
    table.set('age', 25);
    table.remove('name');
    expect(table.get('name')).toBe(undefined);
    expect(table.get('mane')).toBe('Mazhar');
    expect(table.get('age')).toBe(25);
  });

  test("does'nt break on removing non-exist key", () => {
    table.set('name', 'Shahzar');
    table.remove('random');
    expect(table.get('name')).toBe('Shahzar');
  });
  test('can display the result', () => {
    table.set('name', 'Shahzar');
    table.set('age', 25);
    expect(table.items()).toEqual({
      name: 'Shahzar',
      age: 25,
    });
  });
});
