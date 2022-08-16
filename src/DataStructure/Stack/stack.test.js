const Stack = require('./stack');

describe('stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test('can be instantiated', () => {
    expect(stack).toBeDefined();
  });

  test('can push and pop', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.pop()).toBe(undefined);
  });

  test('can peek', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.peek()).toBe(3);
  });

  test('can check if empty', () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('can get size', () => {
    expect(stack.size()).toBe(0);
    stack.push(1);
    expect(stack.size()).toBe(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  test('can print', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.print()).toBe('1 2 3');
  });

  test('can clear', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.size()).toBe(3);
    stack.clear();
    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
  });
});
