/**
 * ---- Graph ----
 *
 * ---- Directed Graph ----
 * A graph in which the edges have a direction.
 * Edges are usually represented by arrows pointing in the direction the graph can be traversed.
 *
 * ---- Undirected Graph ----
 * A graph in which the edges are bidirectional.
 * The graph can be traversed in either directions.
 * The absence of arrows tells us that the graph is undirected.
 *
 * ---- Usage ----
 * Google maps, Social media, and other applications use graphs.
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    // if vertex doesn't exist, add it
    // leave the check burden to addVertex
    this.addVertex(vertex1);
    this.addVertex(vertex2);
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  isEmpty() {
    return Object.keys(this.adjacencyList).length === 0;
  }

  display() {
    let result = '';
    Object.keys(this.adjacencyList).forEach((vertex) => {
      if (result) {
        result += `\n`;
      }
      result += `${vertex} --> ${[...this.adjacencyList[vertex]]}`;
    });
    return result;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].delete(vertex2);
    }
    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2].delete(vertex1);
    }
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return;
    Object.keys(this.adjacencyList).forEach((_vertex) => {
      this.removeEdge(vertex, _vertex);
    });
    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2] &&
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
}

module.exports = Graph;
