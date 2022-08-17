const TreeNode = require('../Node/TreeNode');
const Queue = require('../Queue/Queue');
/**
 * ---- Binary Search Tree ----
 * A tree is a data structure that is a hierarchical collection of data.
 * A binary search tree is a binary tree in which each node has at most two children.
 *
 * ---- Implementation ----
 * File systems for directories and files are a very common data structure.
 * A family tree
 * An organization tree
 * DOM tree
 * Chat bots
 * Abstract syntax tree
 *
 * ---- Operations ----
 */

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertNode(rootNode, newNode) {
    if (newNode.value < rootNode.value) {
      if (rootNode.left === null) {
        // eslint-disable-next-line no-param-reassign
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else if (rootNode.right === null) {
      // eslint-disable-next-line no-param-reassign
      rootNode.right = newNode;
    } else {
      this.insertNode(rootNode.right, newNode);
    }
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  search(value) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  levelOrder(root = this.root) {
    const result = [];
    const queue = new Queue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      result.push(node.value);
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    return result;
  }

  min(node = this.root) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current.value;
  }

  max(node = this.root) {
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current.value;
  }

  preOrder(root = this.root) {
    const result = [];
    const traverse = (node) => {
      if (node) {
        result.push(node.value); // current first
        traverse(node.left); // left second
        traverse(node.right); // right last
      }
    };
    traverse(root);
    return result;
  }

  inOrder(root = this.root) {
    const result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left); // left first
        result.push(node.value); // current second
        traverse(node.right); // right last
      }
    };
    traverse(root);
    return result;
  }

  postOrder(root = this.root) {
    const result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left); // left first
        traverse(node.right); // right second
        result.push(node.value); // current last
      }
    };
    traverse(root);
    return result;
  }

  deleteNode(root, value) {
    const node = root;

    // if the tree is empty
    if (node === null) {
      return null;
    }

    // if the value is less than the current node
    if (value < node.value) {
      // move left in the tree
      node.left = this.deleteNode(node.left, value);
    }

    // if the value is greater than the current node
    else if (value > node.value) {
      // move right in the tree
      node.right = this.deleteNode(node.right, value);
    } else {
      // if the node has no children
      if (node.left === null && node.right === null) {
        return null;
      }

      // if the node has one child
      if (node.right === null) {
        return node.left;
      }
      if (node.left === null) {
        return node.right;
      } // return the child node

      // if the node has two children
      // find the minimum value in the right sub-tree (inOrder successor)
      const temp = this.min(node.right);

      // replace the value of the node with the minimum value in the right sub-tree
      node.value = temp;

      // delete the minimum value in the right sub-tree
      node.right = this.deleteNode(node.right, temp);
    }

    // return the node
    return node;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
}

module.exports = BinarySearchTree;
