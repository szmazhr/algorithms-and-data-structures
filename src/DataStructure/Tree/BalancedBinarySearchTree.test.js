const TreeNode = require('../Node/TreeNode');
const BalancedTree = require('./BalancedBinarySearchTree');

describe('Balanced Binary Search Tree', () => {
  let tree;
  let mockFunc;

  beforeEach(() => {
    mockFunc = jest.fn();
    tree = new BalancedTree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  });

  test('can be initiated and build tree', () => {
    expect(tree).toBeDefined();
    expect(tree.root).toBeInstanceOf(TreeNode);
    expect(tree.root.value).toBe(8);
  });

  test('can check if the tree is empty', () => {
    expect(tree.isEmpty()).toBe(false);
  });

  test('can clear the tree', () => {
    tree.clear();
    expect(tree.isEmpty()).toBe(true);
  });

  /**
   *           8
   *         /   \
   *        /     \
   *       /       \
   *      4         67
   *    /   \      /  \
   *   /     \    /    \
   *  1       5   9    324
   *   \       \   \      \
   *    \       \   \      \
   *     3       7   23    6345
   *
   */

  test('can insert a node', () => {
    tree.insert(3000);
    expect(tree.inOrder()).toEqual([
      1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 3000, 6345,
    ]);
  });

  test('will skip if value already exist insert a node', () => {
    tree.insert(9);
    expect(tree.inOrder()).toEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
  });

  test('can delete a node', () => {
    tree.delete(9);
    expect(tree.inOrder()).toEqual([1, 3, 4, 5, 7, 8, 23, 67, 324, 6345]);
  });

  test('can traverse the tree in level-order', () => {
    expect(tree.levelOrder(mockFunc)).toEqual([
      8, 4, 67, 1, 5, 9, 324, 3, 7, 23, 6345,
    ]);
    expect(mockFunc).toHaveBeenCalledTimes(11);
    expect(tree.levelOrder(null, tree.find(1))).toEqual([1, 3]);
    expect(tree.levelOrder(null, tree.find(5))).toEqual([5, 7]);
  });

  test('can traverse the tree in pre-order', () => {
    expect(tree.preOrder()).toEqual([8, 4, 1, 3, 5, 7, 67, 9, 23, 324, 6345]);
    expect(tree.preOrder(mockFunc, tree.find(4))).toEqual([4, 1, 3, 5, 7]);
    expect(mockFunc).toHaveBeenCalledTimes(5);
  });

  test('can traverse the tree in in-order', () => {
    expect(tree.inOrder()).toEqual([1, 3, 4, 5, 7, 8, 9, 23, 67, 324, 6345]);
    expect(tree.inOrder(null, tree.find(4))).toEqual([1, 3, 4, 5, 7]);
    expect(tree.inOrder(mockFunc, tree.find(67))).toEqual([
      9, 23, 67, 324, 6345,
    ]);
    expect(mockFunc).toHaveBeenCalledTimes(5);
  });

  test('can traverse the tree in post-order', () => {
    expect(tree.postOrder()).toEqual([3, 1, 7, 5, 4, 23, 9, 6345, 324, 67, 8]);
    expect(tree.postOrder(mockFunc, tree.find(1))).toEqual([3, 1]);
    expect(mockFunc).toHaveBeenCalledTimes(2);
  });

  test('can find the height from given node to Farthest leaf', () => {
    expect(tree.height(tree.find(8))).toBe(3);
    expect(tree.height(tree.find(4))).toBe(2);
    expect(tree.height(tree.find(5))).toBe(1);
    expect(tree.height(tree.find(23))).toBe(0);
  });

  test('can find the depth from root node to given node', () => {
    expect(tree.depth(tree.find(8))).toBe(0);
    expect(tree.depth(tree.find(4))).toBe(1);
    expect(tree.depth(tree.find(5))).toBe(2);
    expect(tree.depth(tree.find(23))).toBe(3);
  });

  test('can check if the tree is balanced', () => {
    expect(tree.isBalanced()).toBe(true);
    for (let i = 30; i < 50; i++) {
      tree.insert(i);
    }
    expect(tree.inOrder()).toContain(30, 35, 36, 37, 38, 49);
    expect(tree.inOrder()).not.toContain(29, 50);
    expect(tree.height(tree.find(4))).toBe(2);
    expect(tree.height(tree.find(67))).toBe(22);
    expect(tree.isBalanced()).toBe(false);
    tree.clear();
    expect(tree.isBalanced()).toBe(true);
  });

  test('can reBalance the tree', () => {
    expect(tree.isBalanced()).toBe(true);
    for (let i = 0; i < 1000; i++) {
      tree.insert(i);
    }
    expect(tree.isBalanced()).toBe(false);
    tree.reBalance();
    expect(tree.isBalanced()).toBe(true);
    expect(tree.height(tree.find(500))).toBe(9);
    expect(tree.depth(tree.find(4))).toBe(8);
    expect(tree.inOrder()).toHaveLength(1001); // 0 to 999 and 6345
  });
});
