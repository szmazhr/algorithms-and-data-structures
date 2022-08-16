const LinkedList = require('./LinkedList');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('can be instantiated', () => {
    expect(linkedList).toBeDefined();
  });

  test('can check if the list is empty', () => {
    expect(linkedList.isEmpty()).toBe(true);
  });

  test('can get the size of the list', () => {
    expect(linkedList.getSize()).toBe(0);
  });

  test('can prepend a node', () => {
    linkedList.prepend(10);
    expect(linkedList.getSize()).toBe(1);
    expect(linkedList.head.data).toBe(10);
  });

  test('can prepend multiple nodes', () => {
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);
    expect(linkedList.head.data).toBe(3);
    expect(linkedList.head.next.data).toBe(2);
    expect(linkedList.head.next.next.data).toBe(1);
  });

  test('can print the list', () => {
    expect(linkedList.print()).toBe('List is empty');

    linkedList.prepend(1);
    expect(linkedList.print()).toBe('1 -> ');

    linkedList.prepend(2);
    linkedList.prepend(3);
    expect(linkedList.print()).toBe('3 -> 2 -> 1 -> ');
  });

  test('can append a node', () => {
    linkedList.append(10);
    expect(linkedList.getSize()).toBe(1);
    expect(linkedList.head.data).toBe(10);
  });

  test('can append multiple nodes', () => {
    linkedList.append(1);
    expect(linkedList.print()).toBe('1 -> ');

    linkedList.append(2);
    expect(linkedList.print()).toBe('1 -> 2 -> ');

    linkedList.append(3);
    expect(linkedList.print()).toBe('1 -> 2 -> 3 -> ');
  });

  test('can insert a node at a given index', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.print()).toBe('30 -> 20 -> 10 -> ');

    linkedList.insert(2, 1);
    linkedList.insert(3, 3);
    expect(linkedList.print()).toBe('30 -> 2 -> 20 -> 3 -> 10 -> ');

    linkedList.insert(4, 0);
    expect(linkedList.print()).toBe('4 -> 30 -> 2 -> 20 -> 3 -> 10 -> ');
  });

  test('can remove node from given index', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.print()).toBe('30 -> 20 -> 10 -> ');

    linkedList.removeFrom(1);
    linkedList.removeFrom(1);
    expect(linkedList.print()).toBe('30 -> ');

    linkedList.removeFrom(0);
    expect(linkedList.print()).toBe('List is empty');
  });

  test('can remove node by value', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.print()).toBe('30 -> 20 -> 10 -> ');

    expect(linkedList.removeValue(10)).toBe(true);
    expect(linkedList.print()).toBe('30 -> 20 -> ');

    expect(linkedList.removeValue(21)).toBe('Value not found');

    linkedList.removeValue(20);
    expect(linkedList.print()).toBe('30 -> ');

    linkedList.removeValue(30);
    expect(linkedList.print()).toBe('List is empty');
  });

  test('can search for a node', () => {
    expect(linkedList.search(10)).toBe('List is empty');

    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.print()).toBe('30 -> 20 -> 10 -> ');

    expect(linkedList.search(10)).toBe(2);
    expect(linkedList.search(20)).toBe(1);
    expect(linkedList.search(30)).toBe(0);
    expect(linkedList.search(40)).toBe('Value not found');
  });

  test('can reverse the list', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.print()).toBe('30 -> 20 -> 10 -> ');

    linkedList.reverse();
    expect(linkedList.print()).toBe('10 -> 20 -> 30 -> ');
  });

  test('can remove node from the end', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.print()).toBe('30 -> 20 -> 10 -> ');

    expect(linkedList.removeFromEnd()).toBe(10);
    expect(linkedList.print()).toBe('30 -> 20 -> ');
  });

  test('can remove node from the beginning', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.print()).toBe('30 -> 20 -> 10 -> ');

    expect(linkedList.removeFromBeginning()).toBe(30);
    expect(linkedList.print()).toBe('20 -> 10 -> ');
  });
});
