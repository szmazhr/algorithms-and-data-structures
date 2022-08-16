const Node = require('./Node');

describe('Node', () => {
  let node;

  beforeEach(() => {
    node = new Node(1);
  });

  test('can be instantiated', () => {
    expect(node).toBeDefined();
  });
});
