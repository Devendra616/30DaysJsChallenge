// ! Activity 1: Linked List
console.group("Activity 1: Linked List");
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next.
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
const node12 = new Node(12);
console.log("Creating node");

// Task 2: Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.
class LinkedList {
  constructor() {
    this.head = null;
  }

  addAtEnd(value) {
    const newNode = new Node(value);
    if (!this.head) {
      // empty list
      this.head = newNode;
    } else {
      // add at end
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  removeFromEnd() {
    if (!this.head) {
      // if empty list
      return "List is Empty";
    } else {
      let currentNode = this.head;
      if (!currentNode.next) {
        // only one item in list
        const deletedVal = this.head.value;
        this.head = null;
        return deletedVal;
      } else {
        // more than one item in list

        while (currentNode.next.next) {
          currentNode = currentNode.next;
        }
        const deletedVal = currentNode.next.value;
        currentNode.next = null;
        return deletedVal;
      }
    }
  }

  display() {
    let currentNode = this.head;
    let list = [];
    while (currentNode) {
      list.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(`List: ${list}`);
  }
}

const ll = new LinkedList();
console.log(`Remove: ${ll.removeFromEnd()}`);
ll.addAtEnd(12);
ll.addAtEnd(14);
ll.addAtEnd(16);
ll.addAtEnd(18);
ll.addAtEnd(20);
ll.addAtEnd(5);
ll.display();
console.log(ll.removeFromEnd());
ll.display();
console.groupEnd();

//! Activity 2: Stack
// Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).
console.group("Activity 2: Stack");
class Stack {
  constructor() {
    this.items = [];
  }
  push(value) {
    this.items.push(value);
  }

  pop() {
    // if no items
    if (this.items.length === 0) return null;

    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) return null;

    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
console.log("Remove:", stack.pop());
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log("Peek:", stack.peek());
console.groupEnd();

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack
// and then popping them off.

function reverseString(str) {
  const stack = new Stack();
  let reversedStr = "";
  for (let char of str) {
    stack.push(char);
  }

  while (stack.peek()) {
    reversedStr += stack.pop();
  }
  return reversedStr;
}
const str = "This is String";
console.log(`String: ${str}`);
console.log(`Reversed: ${reverseString(str)}`);
console.groupEnd();

// !Activity 3: Queue
// Task 5: Implement a Queue class with methods enqueue (add element),
// dequeue (remove element), and front (view the first element).
console.group("Activity 3: Queue");
class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    return this.list.push(value);
  }
  dequeue() {
    if (this.list.length === 0) {
      return null;
    }

    return this.list.shift();
  }

  front() {
    return this.list[0];
  }

  display() {
    let str = "";
    for (let item of this.list) {
      str += item + ",";
    }
    return str;
  }
}

let queue = new Queue();
console.log(`Delete: ${queue.dequeue()}`);
queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
console.log(`Queue: ${queue.display()}`);
queue.dequeue();
console.log(`Queue: ${queue.display()}`);
console.log(`Front: ${queue.front()}`);

// Task 6: Use the Queue class to simulate a simple printer queue
// where print jobs are added to the queue and processed in order.

class Printer {
  constructor() {
    this.printer = new Queue();
  }

  addPrint(page) {
    this.printer.enqueue(page);
  }
  startPrinting() {
    while (this.printer.front()) {
      const document = this.printer.dequeue();
      console.log(`Printing: ${document}`);
    }
  }
}

const printer = new Printer();
printer.addPrint("My letter");
printer.addPrint("Leave Application");
printer.addPrint("Employee excel");
printer.startPrinting();
console.groupEnd();

// !Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree
// with properties value, left, and right.
console.group("Activity 4: Binary Tree");
class BinaryNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// Task 8: Implement a BinaryTree class with methods for inserting values
// and performing in-order traversal to display nodes.
class BinrayTree {
  constructor() {
    this.root = null;
  }
  add(value) {
    const newNode = new BinaryNode(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while (true) {
      if (currentNode.left === null && value <= currentNode.value) {
        currentNode.left = newNode;
        return;
      }

      if (currentNode.right === null && value >= currentNode.value) {
        currentNode.right = newNode;
        return;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }

  inOrderTraversal(node = this.root) {
    if (node === null) return;

    this.inOrderTraversal(node.left);
    console.log(node.value);
    this.inOrderTraversal(node.right);
  }
}

const bst = new BinrayTree();
bst.add(7);
bst.add(10);
bst.add(18);
bst.add(15);
bst.add(4);
bst.add(33);

bst.inOrderTraversal();
console.groupEnd();

// !Activity 5: Graph (Optional)
// Task 9: Implement a Graph class with methods to
// add vertices, add edges, and perform a breadth-first search (BFS).
console.group("Activity 5: Graph");

class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    if (!this.adjList.has(v)) {
      this.adjList.set(v, []);
    }
  }

  addEdge(v1, v2) {
    this.addVertex(v1);
    this.addVertex(v2);

    if (this.adjList.has(v1)) {
      this.adjList.get(v1).push(v2);
    }
    if (this.adjList.has(v2)) {
      this.adjList.get(v2).push(v1);
    }
  }

  bfs(start) {
    const queue = [start];
    const visited = new Set();

    while (queue.length > 0) {
      const node = queue.shift();
      this.adjList.get(node).forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          console.log("Visited=>", neighbour);
          visited.add(neighbour);
          queue.push(neighbour);
        }
      });
    }
  }
}

const graph = new Graph();
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("a");
graph.addEdge("a", "b");
graph.addEdge("a", "c");
graph.addEdge("b", "c");
graph.addEdge("b", "d");
graph.addEdge("c", "d");
graph.addEdge("e", "f");
graph.bfs("a");

// Task 10: Use the Graph class to represent a simple network
// and perform BFS to find the shortest path between two nodes.
class Network {
  constructor() {
    this.graph = new Graph();
  }

  addVertex(v) {
    this.graph.addVertex(v);
  }

  addEdge(v1, v2) {
    this.graph.addEdge(v1, v2);
  }

  shortedPath(start, end) {
    const visited = new Set([start]);
    const queue = [[start, 0]];

    while (queue.length > 0) {
      const [node, distance] = queue.shift();
      if (node === end) {
        console.log(`Shorted distance ${start}-${end}=${distance}`);
        return distance;
      }

      const neighbours = this.graph.adjList.get(node);
      for (const neighbour of neighbours) {
        if (!visited.has(neighbour)) {
          queue.push([neighbour, distance + 1]);
          visited.add(neighbour);
        }
      }
    }

    return "No Paths exists";
  }
}

const network = new Network();
network.addVertex("b");
network.addVertex("c");
network.addVertex("a");
network.addEdge("a", "b");
network.addEdge("a", "c");
network.addEdge("b", "c");
network.addEdge("b", "d");
network.addEdge("c", "d");
network.addEdge("e", "f");
network.shortedPath("a", "d");
network.shortedPath("a", "c");
