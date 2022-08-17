const LinkedList = require('../LinkedList/LinkedList');

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.unShift();
  }

  peek() {
    return this.list.head().value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.size();
  }

  toString() {
    return this.list.toString();
  }
}

module.exports = LinkedListQueue;
