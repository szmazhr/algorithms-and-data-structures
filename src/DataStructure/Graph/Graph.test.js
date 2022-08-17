const Graph = require('./Graph');

const rmSpace = function removeWhitespaceFromBeginningOfTheLine(str) {
  return str.trim().replace(/\n\s+/g, '\n');
};

describe('GraphUndirected', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('can be instantiated', () => {
    expect(graph).toBeDefined();
  });

  test('can check if the graph is empty', () => {
    expect(graph.isEmpty()).toBe(true);
  });

  test('can add a node to the graph', () => {
    graph.addVertex(10);
    expect(graph.isEmpty()).toBe(false);
  });

  test('can add an edge to the graph', () => {
    expect(graph.isEmpty()).toBe(true);
    graph.addEdge(10, 5);
    expect(graph.isEmpty()).toBe(false);
  });

  test('can display the list', () => {
    graph.addEdge(10, 5);
    graph.addEdge(7, 5);
    graph.addEdge(20, 80);
    expect(graph.display()).toBe(
      rmSpace(`
    5 --> 10,7
    7 --> 5
    10 --> 5
    20 --> 80
    80 --> 20
    `)
    );
  });

  test('can remove the edge', () => {
    graph.addEdge(10, 5);
    graph.addEdge(7, 5);
    graph.addEdge(20, 80);
    expect(graph.display()).toBe(
      rmSpace(`
    5 --> 10,7
    7 --> 5
    10 --> 5
    20 --> 80
    80 --> 20
    `)
    );
    graph.removeEdge(7, 5);
    expect(graph.display()).toBe(
      rmSpace(`
    5 --> 10
    7 --> 
    10 --> 5
    20 --> 80
    80 --> 20
    `)
    );
  });

  test('can delete the vertex', () => {
    graph.addEdge(10, 5);
    graph.addEdge(7, 5);
    graph.addEdge(20, 80);
    expect(graph.display()).toBe(
      rmSpace(`
    5 --> 10,7
    7 --> 5
    10 --> 5
    20 --> 80
    80 --> 20
    `)
    );
    graph.removeVertex(7);
    expect(graph.display()).toBe(
      rmSpace(`
    5 --> 10
    10 --> 5
    20 --> 80
    80 --> 20
    `)
    );
  });

  test('can check connection between two vertex', () => {
    graph.addEdge(10, 5);
    graph.addEdge(7, 5);
    graph.addEdge(20, 80);
    expect(graph.hasEdge(5, 10)).toBeTruthy();
    expect(graph.hasEdge(10, 20)).toBeFalsy();
    expect(graph.hasEdge(90, 50)).toBeFalsy();
  });
});
