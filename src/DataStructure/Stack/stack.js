/**
 * ---- Stack ----
 * Stack is a data structure that follows the LIFO (Last In First Out) principle.
 * It is a linear data structure, meaning that it is made up of nodes.
 * Each node contains a value and a reference to the next node.
 *
 * ---- Stack Operations ----
 * Stack has the following operations:
 * - push: Adds a new node to the top of the stack.
 * - pop: Returns the value of the top node and removes it from the stack.
 * - peek: Returns the value of the top node without removing it.
 * - isEmpty: Returns true if the stack is empty, false otherwise.
 * - size: Returns the number of nodes in the stack.
 * - print: Prints the values of all nodes in the stack.
 * - clear: Removes all nodes from the stack.
 *
 * ---- Stack Implementation ----
 * Stack is implemented using a linked list.
 * Each node in the linked list contains a value and a reference to the next node.
 * The last node in the stack will have a reference to null.
 */
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.join(' ');
  }

  clear() {
    this.items = [];
  }
}

module.exports = Stack;
