const Node = require('../Node/Node');
/**
 * ---- LinkedList ----
 * Linked List is a linear data structure that includes a series of connected nodes.
 * Each node consists of a data value and a pointer that points to the next node in the list.
 * The list elements can be easily inserted or removed without reallocation or reorganization ot the entire structure
 * Random access of element is not feasible and accessing an element has linear time complexity
 *
 * ---- LinkedList Operations ----
 * LinkedList has the following operations:
 * append(value): Adds a new node containing value at the end of the list
 * prepend(value): Adds a new node containing value in the beginning of the list
 * size(): Returns the number of nodes in the list
 * head(): Returns the first node in the list
 * tail(): Returns the last node in the list
 * at(index): Returns the node at the given index
 * pop(): Removes the last node in the list
 * contains(value): Returns true if the list contains a node with the given value
 * find(value): Returns the first node containing the given value
 * toString(): Returns a string representation of the list
 * insertAt(index, value): Inserts a new node containing value at the given index
 * removeAt(index): Removes the node at the given index
 */
class LinkedList {
  #head;

  #tail;

  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
    this.#tail = null;
  }

  append(value) {
    // create a new node
    const node = new Node(value);

    if (this.isEmpty()) {
      // if the list is empty, make the new node the head
      this.#head = node;
      this.#tail = node;
    } else {
      this.#tail.next = node;
      this.#tail = node;
    }
    this.#size += 1;
  } // O(1)

  prepend(value) {
    // create a new node
    const node = new Node(value);

    if (this.isEmpty()) {
      this.#tail = node;
    } else {
      node.next = this.#head;
    }

    // update the head
    this.#head = node;
    this.#size += 1;
  } // O(1)

  size() {
    return this.#size;
  }

  head() {
    return this.#head;
  }

  at(index) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Index out of bounds');
    }

    let current = this.#head;
    let i = 0;

    while (current) {
      if (i === index) {
        return current;
      }

      current = current.next;
      i += 1;
    }
    return 'Value not found';
  } // O(n)

  pop() {
    if (this.isEmpty()) {
      return 'List is empty';
    }

    let current = this.#head;
    let previous = null;

    while (current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
    this.#size -= 1;
    return current.value;
  }

  contains(value) {
    if (!this.isEmpty()) {
      return typeof this.find(value) === 'number';
    }
    return false;
  } // O(n)

  find(value) {
    if (this.isEmpty()) {
      return 'List is empty';
    }

    let current = this.#head;
    let i = 0;

    while (current) {
      if (current.value === value) {
        // return the index of the node if found
        return i;
      }

      current = current.next;
      i += 1;
    }

    return 'Value not found';
  } // O(n)

  toString() {
    if (this.isEmpty()) {
      return 'List is empty';
    }

    let current = this.#head;
    let result = '';

    while (current) {
      result += `${current.value} -> `;
      current = current.next;
    }

    return `${result}null`;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.#size) {
      throw new Error('Index out of bounds');
    }

    if (index === 0) {
      // insert at the beginning
      this.prepend(value);
    } else {
      const node = new Node(value);
      let current = this.#head;
      let previous = null;
      let i = 0;

      // find the node and keep track of the previous node
      for (i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      // connect the previous node to the new node
      previous.next = node;

      // connect the new node to the next node
      node.next = current;
      this.#size += 1;
    }
  } // O(n)

  removeAt(index) {
    if (index < 0 || index >= this.#size) {
      throw new Error('Index out of bounds');
    }

    if (index === 0) {
      this.#head = this.#head.next;
    } else {
      let current = this.#head;
      let previous = null;
      let i = 0;

      // find the node and keep track of the previous node
      for (i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      // connect the previous node to the next node of the node to be removed
      previous.next = current.next;
    }

    this.#size -= 1;
  } // O(n)

  isEmpty() {
    return this.#size === 0;
  }

  unShift() {
    if (this.isEmpty()) {
      return 'List is empty';
    }

    const { value } = this.#head;
    this.#head = this.#head.next;
    this.#size -= 1;
    return value;
  }

  remove(value) {
    if (this.isEmpty()) {
      return 'List is empty';
    }

    let current = this.#head;
    let previous = null;

    while (current) {
      if (current.value === value) {
        if (previous) {
          previous.next = current.next;
        } else {
          this.#head = current.next;
        }

        this.#size -= 1;
        return true;
      }

      previous = current;
      current = current.next;
    }
    return 'Value not found';
  } // O(n)

  reverse() {
    if (this.isEmpty()) {
      return 'List is empty';
    }

    let previous = null;
    let current = this.#head;

    /*
    this.head = 30 -> 20 -> 10 -> null
    convertTo = 10 -> 20 -> 30 -> null
    */

    while (current) {
      // store the next node
      const { next } = current;

      // reverse the next pointer
      current.next = previous;

      // update previous to current node
      previous = current;

      // update current to the next node
      current = next; // 20 -> null
    }

    this.#head = previous;
    return this.#head;
  }
}

module.exports = LinkedList;
