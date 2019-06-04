class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class SingleLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }
}

SingleLinkedList.prototype.addAtStart = function addAtStart(node) {
    if (this.head) {
        node.next = this.head;
        this.head = node;
    } else {
        this.head = node;
        this.tail = node;
    }
};

// SingleLinkedList.prototype.addAtEnd = function addAtEnd(node) {
//     let currNode = this.head;
//     while (currNode.next) {
//         currNode = currNode.next;
//     }
//     currNode.next = node;
// };

// OR

SingleLinkedList.prototype.addAtEnd = function addAtEnd(node) {
    let lastNode = this.tail;
    if (lastNode) {
        lastNode.next = node;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
    }
};

SingleLinkedList.prototype.removeAtStart = function removeAtStart() {
    if (this.head) {
        this.head = this.head.next;
    } else {
        return null;
    }
};

SingleLinkedList.prototype.removeAtEnd = function removeAtEnd() {
    let currNode = this.head;
    while (currNode) {
        let nextNode = currNode.next;
        if (nextNode.next === null) {
            currNode.next = null;
            this.tail = currNode;
            break;
        }
        currNode = currNode.next;
    }
};

/**
 * 2.1
 * Remove duplicates from an unsorted linked list
 */
SingleLinkedList.prototype.removeDuplicates = function removeDuplicates() { // 12 -> 5 -> 1 -> 12 -> 12 -> 3 -> 1;
    let prevNode = this.head;
    let currNode = this.head;
    let seenNodes = {};
    while (currNode.next) {
        if (seenNodes[currNode.value]) {
            prevNode.next = currNode.next;
            currNode = prevNode;
        } else {
            seenNodes[currNode.value] = true;
        }
        prevNode = currNode;
        currNode = currNode.next;
    }

    // we are at last node
    if (seenNodes[currNode.value]) {
        prevNode.next = null;
    }
};

/**
 * 2.2
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 */
SingleLinkedList.prototype.findKthToLast = function findKthToLast(index) {
    let currNode = this.head;
    let currIndex = -index; // set the currIndex to -ve index
    let foundNode = null;
    while (currNode) {
        if (currIndex >= 0) { // wait for currIndex to reach 0
            // means we've found the item, need to keep following until linkedlist end
            foundNode = foundNode ? foundNode.next : this.head;
        }
        currIndex += 1;
        currNode = currNode.next;
    }

    console.log(foundNode ? foundNode.value : null);
};

/**
 * 2.3
 * Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
 * the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
 * that node.
 */
SingleLinkedList.prototype.deleteMiddleNode = function deleteMiddleNode() {
    let currNode = this.head;
    let middleNode = this.head;
    let prevMiddleNode = null;

    if (this.head.next && this.head.next.next) {
        while (currNode && currNode.next) {
            currNode = currNode.next.next;
            prevMiddleNode = middleNode;
            middleNode = middleNode.next;
        }
        prevMiddleNode.next = middleNode.next;
    } else {
        console.log("Not enough nodes to find middle");
        this.print();
    }
};

/**
 * 2.4
 * Given a linked list and a value x, partition it such that all nodes less than x come first,
 * then all nodes with value equal to x and finally nodes with value greater than or equal to x.
 * The original relative order of the nodes in each of the three partitions should be preserved.
 */
SingleLinkedList.prototype.partition = function partition(value) {
    let currNode = this.head;
    let smallerLL = new SingleLinkedList();
    let greaterLL = new SingleLinkedList();
    let equalsLL = new SingleLinkedList();

    while (currNode) {
        if (currNode.value < value) {
            smallerLL.addAtStart(new Node(currNode.value));
        } else if (currNode.value > value) {
            greaterLL.addAtStart(new Node(currNode.value));
        } else {
            equalsLL.addAtStart(new Node(currNode.value));
        }
        currNode = currNode.next;
    }
    // add smallerLL to this
    this.head = smallerLL.head;
    // add equalsLL to this
    this.addAtEnd(equalsLL.head);
    // add greaterLL to this
    this.addAtEnd(greaterLL.head);
};

SingleLinkedList.prototype.reverse = function reverse() {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    this.tail = this.head;
    this.head = prev;
};

SingleLinkedList.prototype.print = function print() {
    let currNode = this.head;
    let nodeList = "";
    while (currNode.next) {
        nodeList += currNode.value + " -> ";
        currNode = currNode.next;
    }

    // we are at last node
    console.log(nodeList + currNode.value);
}

var linkedList = new SingleLinkedList();
linkedList.addAtStart(new Node(5));
linkedList.addAtStart(new Node(4));
linkedList.addAtStart(new Node(3));
linkedList.addAtStart(new Node(2));
linkedList.addAtStart(new Node(1));
linkedList.print();
linkedList.reverse();
linkedList.print();
// console.log("Finding 3rd index node from last...");
// linkedList.findKthToLast(3);
// // linkedList.removeDuplicates();
// // linkedList.print();
// console.log("Deleting middle node...");
// linkedList.deleteMiddleNode();
// linkedList.print();
// console.log("Start partitioning...");
// linkedList.partition(6);
// linkedList.print();
