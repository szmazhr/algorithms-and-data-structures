const Node = require('../Node/TreeNode');
const Queue = require('../Queue/Queue');

function sortAndRemoveDuplicates(arr) {
  const leftArr = [];
  const rightArr = [];

  // Base case: if the array has less than 2 elements, return the array.
  if (arr.length < 2) {
    return arr;
  }

  // Pick the lest (can take any element) element as the pivot.
  const pivotElement = arr[arr.length - 1];

  // Iterate through the array and put all the elements that are less than the pivot element into the left array.
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivotElement) {
      leftArr.push(arr[i]);
    } else if (arr[i] > pivotElement) {
      rightArr.push(arr[i]);
    }
  }

  // Recursive call: sort the left and right arrays and concatenate them.
  return sortAndRemoveDuplicates(leftArr).concat(
    pivotElement,
    sortAndRemoveDuplicates(rightArr)
  );
}

/**
 * ---- Balanced Binary Search Tree ----
 * A balanced binary search tree is a binary search tree in which the depth of the two subtrees of every node is at most 1.
 *
 * ---- functions ----
 * buildTree - Build a balanced binary search tree from an array of values.
 * insert - Insert a value into the tree.
 * delete - Delete a value from the tree.
 * find - Find a value in the tree.
 * levelOrder - Return the values in the tree in level order.
 * preOrder - Return the values in the tree in pre order.
 * inOrder - Return the values in the tree in in order.
 * postOrder - Return the values in the tree in post order.
 * height - Return the height of the tree.
 * isBalanced - Return true if the tree is balanced.
 * reBalance - ReBalance the tree.
 *
 */

class BalancedBinarySearchTree {
  constructor(arr) {
    this.root = '';

    this.buildTree(arr);
  }

  isEmpty() {
    return this.root === null;
  }

  buildTree(arr) {
    const sortedArr = sortAndRemoveDuplicates(arr);
    const place = (_arr, start = 0, end = _arr.length - 1) => {
      const mid = Math.floor((start + end) / 2);
      if (start <= end) {
        const root = new Node(_arr[mid]);

        root.left = place(_arr, start, mid - 1);
        root.right = place(_arr, mid + 1, end);

        return root;
      }
      return null;
    };
    this.root = place(sortedArr);
  }

  insertNode(rootNode, newNode) {
    if (newNode.value < rootNode.value) {
      if (rootNode.left === null) {
        // eslint-disable-next-line no-param-reassign
        rootNode.left = newNode;
      } else {
        this.insertNode(rootNode.left, newNode);
      }
    } else if (newNode.value > rootNode.value) {
      if (rootNode.right === null) {
        // eslint-disable-next-line no-param-reassign
        rootNode.right = newNode;
      } else {
        this.insertNode(rootNode.right, newNode);
      }
    }
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
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

  clear() {
    this.root = null;
  }

  find(value) {
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

  levelOrder(callback, root = this.root) {
    const result = [];
    const queue = new Queue();
    queue.enqueue(root);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      if (callback) {
        callback(node);
      }
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

  inOrder(callback, root = this.root) {
    const result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left); // left first
        if (callback) {
          callback(node);
        }
        result.push(node.value); // current second
        traverse(node.right); // right last
      }
    };
    traverse(root);
    return result;
  }

  preOrder(callback, root = this.root) {
    const result = [];
    const traverse = (node) => {
      if (node) {
        if (callback) {
          callback(node);
        }
        result.push(node.value); // current first
        traverse(node.left); // left second
        traverse(node.right); // right last
      }
    };
    traverse(root);
    return result;
  }

  postOrder(callback, root = this.root) {
    const result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left); // left first
        traverse(node.right); // right second
        if (callback) {
          callback(node);
        }
        result.push(node.value); // current last
      }
    };
    traverse(root);
    return result;
  }

  height(node) {
    let left = 0;
    let right = 0;

    // base case
    if (node.left === null && node.right === null) {
      return 0;
    }

    // recursion
    if (node.left) {
      left = 1 + this.height(node.left);
    }
    if (node.right) {
      right = 1 + this.height(node.right);
    }

    return Math.max(right, left);
  }

  depth(node) {
    let d = 0;
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode === node) return d;

      currentNode =
        node.value < currentNode.value ? currentNode.left : currentNode.right;

      d += 1;
    }
    return null;
  }

  isBalanced() {
    const { root } = this;
    const queue = new Queue();
    queue.enqueue(root);
    while (root && !queue.isEmpty()) {
      let left = 0;
      let right = 0;
      const node = queue.dequeue();

      if (node.left) {
        left = this.height(node.left);
        queue.enqueue(node.left);
      }

      if (node.right) {
        right = this.height(node.right);
        queue.enqueue(node.right);
      }

      if (Math.abs(left - right) > 1) {
        return false;
      }
    }

    return true;
  }

  reBalance() {
    this.buildTree(this.inOrder());
  }
}

module.exports = BalancedBinarySearchTree;
