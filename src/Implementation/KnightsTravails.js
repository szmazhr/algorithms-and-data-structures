/**
 * ---- Expected OutPuts ----
 * > knightMoves([3,3], [4, 3]);
 * => You made it in 3 moves! Here's your path:
 *  [3,3]
 *  [4,5]
 *  [2,4]
 *  [4,3]
 *
 * > knightMoves([0,0],[1,2]);
 * => You made it in 1 moves! Here's your path:
 *  [0,0]
 *  [1,2]
 *
 * knightMoves([0,0],[3,3]);
 * => You made it in 2 moves! Here's your path:
 *  [0,0]
 *  [1,2]
 *  [3,3]
 *
 * knightMoves([3,3],[0,0]);
 * => You made it in 2 moves! Here's your path:
 *  [3,3]
 *  [1,2]
 *  [0,0]
 */

// eslint-disable-next-line max-classes-per-file
class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear += 1;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.front]; // O(1)
    delete this.items[this.front];
    this.front += 1;
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  clear() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
}

class Board {
  constructor() {
    this.size = 8;
    this.adjacencyList = {};

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.getPossibleMoves(i, j).forEach((move) => {
          this.addMove(move, `${i},${j}`);
        });
      }
    }
  }

  addSquare(square) {
    if (!this.adjacencyList[square]) {
      this.adjacencyList[square] = new Set();
    }
  }

  addMove(square1, square2) {
    this.addSquare(square1);
    this.addSquare(square2);
    this.adjacencyList[square1].add(square2);
    this.adjacencyList[square2].add(square1);
  }

  getEdges(square) {
    return this.adjacencyList[square];
  }

  getPossibleMoves(x, y) {
    const moves = [];
    [1, 2].forEach((i) => {
      [x - i, x + i].forEach((_x) => {
        [y - ((i % 2) + 1), y + ((i % 2) + 1)].forEach((_y) => {
          if (_x >= 0 && _x < this.size && _y >= 0 && _y < this.size) {
            moves.push(`${_x},${_y}`); // type set automatically filters duplicates
          }
        });
      });
    });
    return moves;
  }

  doBFS(start, end) {
    const bfsInfo = {};

    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        bfsInfo[`${i},${j}`] = {
          distance: null,
          predecessor: null,
        };
      }
    }

    bfsInfo[`${end}`].distance = 0;

    const queue = new Queue();
    queue.enqueue(`${end}`);

    while ((!queue.isEmpty(), bfsInfo[`${start}`].distance === null)) {
      const u = queue.dequeue();
      const edges = this.getEdges(u);

      edges.forEach((v) => {
        if (bfsInfo[v].distance === null) {
          bfsInfo[v].distance = bfsInfo[u].distance + 1;
          bfsInfo[v].predecessor = u;
          queue.enqueue(v);
        }
      });
    }
    return bfsInfo;
  }

  knightMoves(from, to) {
    const [fromX, fromY] = from;
    const [toX, toY] = to;
    if (
      !(
        fromX < 0 ||
        fromX >= this.size ||
        fromY < 0 ||
        fromY >= this.size ||
        toX < 0 ||
        toX >= this.size ||
        toY < 0 ||
        toY >= this.size
      )
    ) {
      const start = from.toString();
      const end = to.toString();
      const bfsInfo = this.doBFS(start, end);
      const path = [];
      let square = start;
      while (square !== end) {
        path.push(square);
        square = bfsInfo[square].predecessor;
      }
      path.push(end);
      // eslint-disable-next-line no-console
      console.log(
        `You made it in ${bfsInfo[start].distance} moves! Here's your path:`
      );
      path.forEach((p) => {
        // eslint-disable-next-line no-console
        console.log(p.split(',').map((n) => parseInt(n, 10)));
      });
    } else {
      // eslint-disable-next-line no-console
      console.log('Invalid input');
    }
  }
}

const board = new Board();

board.knightMoves([3, 3], [4, 3]);
/**
 * => You made it in 3 moves! Here's your path:
 *  [3, 3]
 *  [1, 4]
 *  [2, 2]
 *  [4, 3]
 */

board.knightMoves([1, 2], [1, 2]);
/**
 * => You made it in 0 moves! Here's your path:
 *  [1, 2]
 * */

board.knightMoves([0, 0], [1, 2]);
/**
 * => You made it in 1 moves! Here's your path:
 *  [0, 0]
 *  [1, 2]
 * */

board.knightMoves([0, 0], [3, 3]);
/**
 * => You made it in 2 moves! Here's your path:
 *  [0, 0]
 *  [1, 2]
 *  [3, 3]
 * */

board.knightMoves([3, 3], [0, 0]);
/**
 * => You made it in 2 moves! Here's your path:
 *  [3, 3]
 *  [1, 2]
 *  [0, 0]
 * */

board.knightMoves([0, 0], [7, 7]);
/**
 * You made it in 6 moves! Here's your path:
 * [ 0, 0 ]
 * [ 2, 1 ]
 * [ 0, 2 ]
 * [ 1, 4 ]
 * [ 3, 5 ]
 * [ 5, 6 ]
 * [ 7, 7 ]
 * */

board.knightMoves([-1, 0], [7, 7]);
/**
 * Invalid input
 * */
