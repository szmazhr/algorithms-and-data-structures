const LinkedListQueue = require('./LinkedListQueue');

describe('linkedListQueue', () => {
  let linkedListQueue;
  beforeEach(() => {
    linkedListQueue = new LinkedListQueue();
  });

  test('can be instantiated', () => {
    expect(linkedListQueue).toBeDefined();
  });

  test('can be enqueue and dequeue', () => {
    linkedListQueue.enqueue(1);
    linkedListQueue.enqueue(2);
    linkedListQueue.enqueue(3);
    expect(linkedListQueue.dequeue()).toBe(1);
    expect(linkedListQueue.dequeue()).toBe(2);
    expect(linkedListQueue.dequeue()).toBe(3);
    expect(linkedListQueue.dequeue()).toBe('List is empty');
  });

  test('can peek', () => {
    linkedListQueue.enqueue(1);
    linkedListQueue.enqueue(2);
    linkedListQueue.enqueue(3);
    expect(linkedListQueue.peek()).toBe(1);
    expect(linkedListQueue.peek()).toBe(1);
    expect(linkedListQueue.dequeue()).toBe(1);
    expect(linkedListQueue.peek()).toBe(2);
  });

  test('can check if empty', () => {
    expect(linkedListQueue.isEmpty()).toBe(true);
    linkedListQueue.enqueue(1);
    expect(linkedListQueue.isEmpty()).toBe(false);
  });

  test('can get size', () => {
    expect(linkedListQueue.getSize()).toBe(0);
    linkedListQueue.enqueue(1);
    expect(linkedListQueue.getSize()).toBe(1);
    linkedListQueue.enqueue(2);
    expect(linkedListQueue.getSize()).toBe(2);
  });

  test('can print', () => {
    linkedListQueue.enqueue(1);
    linkedListQueue.enqueue(2);
    linkedListQueue.enqueue(3);
    expect(linkedListQueue.print()).toBe('1 -> 2 -> 3 -> ');
  });
});
