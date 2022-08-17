const LinkedListStack = require('./LinkedListStack');

describe('linkedListStack', () => {
  let linkedListStack;
  beforeEach(() => {
    linkedListStack = new LinkedListStack();
  });

  test('can be instantiated', () => {
    expect(linkedListStack).toBeDefined();
  });

  test('can push and pop', () => {
    linkedListStack.push(1);
    linkedListStack.push(2);
    linkedListStack.push(3);
    expect(linkedListStack.pop()).toBe(3);
    expect(linkedListStack.pop()).toBe(2);
    expect(linkedListStack.pop()).toBe(1);
    expect(linkedListStack.pop()).toBe('List is empty');
  });

  test('can peek', () => {
    linkedListStack.push(1);
    linkedListStack.push(2);
    linkedListStack.push(3);
    expect(linkedListStack.peek()).toBe(3);
    expect(linkedListStack.peek()).toBe(3);
  });

  test('can check if empty', () => {
    expect(linkedListStack.isEmpty()).toBe(true);
    linkedListStack.push(1);
    expect(linkedListStack.isEmpty()).toBe(false);
  });

  test('can get size', () => {
    expect(linkedListStack.getSize()).toBe(0);
    linkedListStack.push(1);
    expect(linkedListStack.getSize()).toBe(1);
    linkedListStack.push(2);
    expect(linkedListStack.getSize()).toBe(2);
  });

  test('can print', () => {
    linkedListStack.push(1);
    linkedListStack.push(2);
    linkedListStack.push(3);
    expect(linkedListStack.toString()).toBe('3 -> 2 -> 1 -> null');
  });
});
