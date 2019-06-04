// Binary Tree Implementation
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

//              10
//      5               13
//  4       7       11      15
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

BinarySearchTree.prototype.insert = function insert(node) {
    if (!this.root) {
        this.root = node;
    } else {
        let currNode = this.root;
        while (true) {
            if (node.value < currNode.value) {
                if (currNode.left) {
                    currNode = currNode.left;
                } else {
                    currNode.left = node;
                    break;
                }
            } else {
                if (currNode.right) {
                    currNode = currNode.right;
                } else {
                    currNode.right = node;
                    break;
                }
            }
        }
    }
};

BinarySearchTree.prototype.search = function search(value) {
    let found = false;
    if (!this.root) {
        return found;
    }

    let currNode = this.root;
    let previousNode = null;
    let whichWay = "";
    while (currNode && !found) {
        if (value === currNode.value) {
            found = true;
        } else if (value < currNode.value) {
            previousNode = currNode;
            currNode = currNode.left;
            whichWay = "left";
        } else {
            previousNode = currNode;
            currNode = currNode.right;
            whichWay = "right";
        }
    }

    return found;
};

// Breadth First Search of a binary tree
BinarySearchTree.prototype.BST = function BST() {
    let currNode = this.root;
    let queue = [];
    let visitedNodes = [];

    queue.push(currNode);
    while (queue.length) {
        currNode = queue.shift();
        visitedNodes.push(currNode.value);
        if (currNode.left) {
            queue.push(currNode.left);
        }
        if (currNode.right) {
            queue.push(currNode.right);
        }
    }
    return visitedNodes;
};

// Depth First Seach - PreOrder
BinarySearchTree.prototype.DFS_preorder = function DFS_preorder() {
    // create a variable to store the list of nodes visited
    let visitedNodes  = [];

    preorder_traverse(this.root, visitedNodes);

    return visitedNodes;
};

// Recursive Traversal of tree: preorder
BinarySearchTree.prototype.preorder_traverse = function preorder_traverse(node, visitedNodes) {
    visitedNodes.push(node.value);
    if (node.left) {
        traverse(node.left, visitedNodes);
    }
    if (node.right) {
        traverse(node.right, visitedNodes);
    }
};

// Depth First Seach - PostOrder
BinarySearchTree.prototype.DFS_postorder = function DFS_postorder() {
    // create a variable to store the list of nodes visited
    let visitedNodes  = [];

    postorder_traverse(this.root, visitedNodes);

    return visitedNodes;
};

// Recursive Traversal of tree: postorder
BinarySearchTree.prototype.postorder_traverse = function postorder_traverse(node, visitedNodes) {
    if (node.left) {
        traverse(node.left, visitedNodes);
    }
    if (node.right) {
        traverse(node.right, visitedNodes);
    }
    visitedNodes.push(node.value);
};

// Depth First Seach - InOrder
BinarySearchTree.prototype.DFS_inorder = function DFS_inorder() {
    // create a variable to store the list of nodes visited
    let visitedNodes  = [];

    inorder_traverse(this.root, visitedNodes);

    return visitedNodes;
};

// Recursive Traversal of tree: inorder
BinarySearchTree.prototype.inorder_traverse = function inorder_traverse(node, visitedNodes) {
    if (node.left) {
        traverse(node.left, visitedNodes);
    }

    visitedNodes.push(node.value);

    if (node.right) {
        traverse(node.right, visitedNodes);
    }
};

var tree = new BinarySearchTree();
tree.insert(new Node(10));
tree.insert(new Node(5));
tree.insert(new Node(13));
tree.insert(new Node(4));
tree.insert(new Node(7));
tree.insert(new Node(11));
tree.insert(new Node(15));
console.log(JSON.stringify(tree, null, 2));
console.log(tree.search(3));

