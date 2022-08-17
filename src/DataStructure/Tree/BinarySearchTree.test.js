const BinarySearchTree = require('./BinarySearchTree');

describe('BinarySearchTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  test('can be instantiated', () => {
    expect(tree).toBeDefined();
  });

  test('can check if the tree is empty', () => {
    expect(tree.isEmpty()).toBe(true);
  });

  test('can add a node to the tree', () => {
    tree.insert(10);
    expect(tree.isEmpty()).toBe(false);
  });
});

describe('BinarySearchTree with multiple value', () => {
  let tree;
  beforeEach(() => {
    tree = new BinarySearchTree();
    tree.insert(10);
    tree.insert(5);
    tree.insert(15);
    tree.insert(3);
    tree.insert(7);
    tree.insert(13);
    tree.insert(17);
    tree.insert(20);
  });

  test('can add multiple nodes to the tree', () => {
    expect(tree.isEmpty()).toBe(false);
  });

  test('can search for a node in the tree', () => {
    expect(tree.search(10)).toBeDefined();
    expect(tree.search(3)).toBeDefined();
  });

  test('can search for a node that does not exist in the tree', () => {
    expect(tree.search(15)).toBeDefined();
    expect(tree.search(2)).toBeNull();
  });

  test('can traverse the tree in pre-order', () => {
    expect(tree.preOrder()).toEqual([10, 5, 3, 7, 15, 13, 17, 20]);
    expect(tree.preOrder(tree.search(5))).toEqual([5, 3, 7]);
  });

  test('can traverse the tree in in-order', () => {
    expect(tree.inOrder()).toEqual([3, 5, 7, 10, 13, 15, 17, 20]);
    expect(tree.inOrder(tree.search(5))).toEqual([3, 5, 7]);
  });

  test('can traverse the tree in post-order', () => {
    expect(tree.postOrder()).toEqual([3, 7, 5, 13, 20, 17, 15, 10]);
    expect(tree.postOrder(tree.search(5))).toEqual([3, 7, 5]);
  });

  test('can traverse the tree in level-order', () => {
    expect(tree.levelOrder()).toEqual([10, 5, 15, 3, 7, 13, 17, 20]);
    expect(tree.levelOrder(tree.search(5))).toEqual([5, 3, 7]);
  });

  test('can get the minimum value in the tree', () => {
    expect(tree.min()).toBe(3);
    expect(tree.min(tree.search(15))).toBe(13);
  });

  test('can get the maximum value in the tree', () => {
    expect(tree.max()).toBe(20);
    expect(tree.max(tree.search(5))).toBe(7);
  });

  test('can delete a node from the tree', () => {
    expect(tree.inOrder()).toEqual([3, 5, 7, 10, 13, 15, 17, 20]);
    tree.delete(10);
    expect(tree.search(10)).toBeNull();
    expect(tree.inOrder()).toEqual([3, 5, 7, 13, 15, 17, 20]);
  });

  test('can delete multiple node from the tree with child', () => {
    tree.delete(5); // 2 children
    tree.delete(3); // 0 children
    tree.delete(17); // 1 children
    expect(tree.inOrder()).toEqual([7, 10, 13, 15, 20]);
  });
});
