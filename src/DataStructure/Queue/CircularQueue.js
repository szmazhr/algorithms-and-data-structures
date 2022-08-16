/* eslint-disable no-console */
/**
 * ---- CircularQueue  ----
 * The size of the queue is fixed and a single block of memory is used as if first element is connected to last element.
 * It follows the First In First Out principle.
 * It reuses the empty block created by the dequeue operation.
 *
 * ---- CircularQueue Operations ----
 * CircularQueue has the following operations:
 * - enqueue: Adds a new node to the end of the queue.
 * - dequeue: Returns the value of the first node and removes it from the queue.
 * - peek: Returns the value of the first node without removing it.
 * - isEmpty: Returns true if the queue is empty, false otherwise.
 * - size: Returns the number of nodes in the queue.
 * - print: Prints the values of all nodes in the queue.
 * - clear: Removes all nodes from the queue.
 */

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentSize = 0;
    this.rear = -1;
    this.front = 0;
  }

  isFull() {
    return this.currentSize === this.capacity;
  }

  isEmpty() {
    return this.currentSize === 0;
  }

  enqueue(item) {
    if (!this.isFull()) {
      // set the item to the rear of the queue
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      // increment the rear and currentSize
      this.currentSize += 1;
    }
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const item = this.items[this.front];
    delete this.items[this.front];
    this.front = (this.front + 1) % this.capacity;
    this.currentSize -= 1;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.front];
  }

  size() {
    return this.currentSize;
  }

  print() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    let str = '';
    for (let i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
      str += `${this.items[i]} `;
    }
    str += `${this.items[this.rear]}`;
    return str.trim();
  }

  clear() {
    this.items = new Array(this.capacity);
    this.currentSize = 0;
    this.rear = 0;
    this.front = 0;
  }
}

module.exports = CircularQueue;
