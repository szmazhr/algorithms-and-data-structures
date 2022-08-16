/**
 * ---- Queue ----
 * Queue is a linear data structure which is FIFO (First In First Out).
 * It is a data structure that follows the First In First Out principle.
 *
 * ---- Queue Operations ----
 * Queue has the following operations:
 * - enqueue: Adds a new nod[]e to the end of the queue.
 * - dequeue: Returns the value of the first node and removes it from the queue.
 * - peek: Returns the value of the first node without removing it.
 * - isEmpty: Returns true if the queue is empty, false otherwise.
 * - size: Returns the number of nodes in the queue.
 * - print: Prints the values of all nodes in the queue.
 * - clear: Removes all nodes from the queue.
 */
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

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    let str = '';
    for (let i = this.front; i !== this.rear; i++) {
      str += `${this.items[i]} `;
    }
    return str.trim();
  }

  clear() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }
}

module.exports = Queue;
