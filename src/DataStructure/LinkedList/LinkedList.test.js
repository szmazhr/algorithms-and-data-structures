const LinkedList = require('./LinkedList');
const Node = require('../Node/Node');

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
    expect(linkedList.size()).toBe(0);
  });

  test('can prepend a node', () => {
    linkedList.prepend(10);
    expect(linkedList.size()).toBe(1);
    expect(linkedList.head().value).toBe(10);
  });

  test('can prepend multiple nodes', () => {
    linkedList.prepend(1);
    linkedList.prepend(2);
    linkedList.prepend(3);
    expect(linkedList.head().value).toBe(3);
    expect(linkedList.head().next.value).toBe(2);
    expect(linkedList.head().next.next.value).toBe(1);
  });

  test('can append a node', () => {
    linkedList.append(10);
    expect(linkedList.size()).toBe(1);
    expect(linkedList.head().value).toBe(10);
  });

  test('can append multiple nodes', () => {
    linkedList.append(1);
    expect(linkedList.toString()).toBe('1 -> null');

    linkedList.append(2);
    expect(linkedList.toString()).toBe('1 -> 2 -> null');

    linkedList.append(3);
    expect(linkedList.toString()).toBe('1 -> 2 -> 3 -> null');
  });

  test('can print the list', () => {
    expect(linkedList.toString()).toBe('List is empty');

    linkedList.prepend(1);
    expect(linkedList.toString()).toBe('1 -> null');

    linkedList.prepend(2);
    linkedList.prepend(3);
    expect(linkedList.toString()).toBe('3 -> 2 -> 1 -> null');
  });

  test('can insert a node at a given index', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toString()).toBe('30 -> 20 -> 10 -> null');

    linkedList.insertAt(2, 1);
    linkedList.insertAt(3, 3);
    expect(linkedList.toString()).toBe('30 -> 2 -> 20 -> 3 -> 10 -> null');

    linkedList.insertAt(4, 0);
    expect(linkedList.toString()).toBe('4 -> 30 -> 2 -> 20 -> 3 -> 10 -> null');
  });

  test('can remove node from given index', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toString()).toBe('30 -> 20 -> 10 -> null');

    linkedList.removeAt(1);
    linkedList.removeAt(1);
    expect(linkedList.toString()).toBe('30 -> null');

    linkedList.removeAt(0);
    expect(linkedList.toString()).toBe('List is empty');
  });

  test('can remove node by value', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toString()).toBe('30 -> 20 -> 10 -> null');

    expect(linkedList.remove(10)).toBe(true);
    expect(linkedList.toString()).toBe('30 -> 20 -> null');

    expect(linkedList.remove(21)).toBe('Value not found');

    linkedList.remove(20);
    expect(linkedList.toString()).toBe('30 -> null');

    linkedList.remove(30);
    expect(linkedList.toString()).toBe('List is empty');
  });

  test('can search for a node by value', () => {
    expect(linkedList.find(10)).toBe('List is empty');

    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toString()).toBe('30 -> 20 -> 10 -> null');

    expect(linkedList.find(10)).toBe(2);
    expect(linkedList.find(20)).toBe(1);
    expect(linkedList.find(30)).toBe(0);
    expect(linkedList.find(40)).toBe('Value not found');
  });

  test('can search for a node by index', () => {
    // expect(linkedList.at(0)).toBe('List is empty');

    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toString()).toBe('30 -> 20 -> 10 -> null');

    expect(linkedList.at(0)).toBeInstanceOf(Node);
    expect(linkedList.at(1).value).toBe(20);
    // expect(linkedList.at(3)).toThrowError(/Index out of bounds/); not working
  });

  test('can check if value exist', () => {
    linkedList.prepend(60);
    linkedList.prepend(20);
    expect(linkedList.contains(60)).toBe(true);
    expect(linkedList.contains(10)).toBe(false);
    expect(linkedList.contains(20)).toBe(true);
  });

  test('can reverse the list', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toString()).toBe('30 -> 20 -> 10 -> null');

    linkedList.reverse();
    expect(linkedList.toString()).toBe('10 -> 20 -> 30 -> null');
  });

  test('can remove node from the end', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toString()).toBe('30 -> 20 -> 10 -> null');

    expect(linkedList.pop()).toBe(10);
    expect(linkedList.toString()).toBe('30 -> 20 -> null');
  });

  test('can remove node from the beginning', () => {
    linkedList.prepend(10);
    linkedList.prepend(20);
    linkedList.prepend(30);
    expect(linkedList.toString()).toBe('30 -> 20 -> 10 -> null');

    expect(linkedList.unShift()).toBe(30);
    expect(linkedList.toString()).toBe('20 -> 10 -> null');
  });
});
