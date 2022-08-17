const TreeNode = require('./TreeNode');

describe('TreeNode', () => {
  let node;

  beforeEach(() => {
    node = new TreeNode(1);
  });

  test('can be instantiated', () => {
    expect(node).toBeDefined();
    expect(node.value).toBe(1);
    expect(node.left).toBe(null);
    expect(node.right).toBe(null);
  });
});
