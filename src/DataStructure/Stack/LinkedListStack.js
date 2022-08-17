const LinkedList = require('../LinkedList/LinkedList');

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
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

module.exports = LinkedListStack;
