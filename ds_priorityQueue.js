class Node {
    constructor (val, priority) {
        this.value = val;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor () {
        this.values = [];
    }
}

PriorityQueue.prototype.utils = {
    swap: function (index1, index2) {
        let temp = this.values[index1];
        this.values[index1] = this.values[index2];
        this.values[index2] = temp;
        // this.values[index2] = (this.values[index1] + this.values[index2]) - (this.values[index1] = this.values[index2]);
    }
};

PriorityQueue.prototype.enqueue = function enqueue (value) {
    var valuesArr = this.values; // taking this.values into temp object
    var currIndex = valuesArr.length; // currIndex of the value added to the heap will be values.length
    var parentIndex = Math.floor((currIndex - 1) / 2); // find index for the parent of this node

    valuesArr.push(value); // add value to the end of the array

    // keep iterating while parentIndex is >= 0 and priority @ currIndex is greater than priority @ parentIndex
    while (parentIndex >= 0 && valuesArr[currIndex].priority > valuesArr[parentIndex].priority) {
        // keep bubbling up the node if child is greater than parent by swapping
        this.utils.swap.call(this, currIndex, parentIndex);
        // update the current index to be parent's index
        currIndex = parentIndex;
        // recompute new parent index
        parentIndex = Math.floor((currIndex - 1) / 2);
    }
};

PriorityQueue.prototype.dequeue = function dequeue () {
    let valuesArr = this.values; // assign max heap values to local var for ref
    let rootValue;
    let left;
    let leftIndex = 1;
    let right;
    let rightIndex = 2;
    let curr;
    let currIndex = 0;

    if (!valuesArr.length) {
        return null;
    }

    // swap root with last leaf
    this.utils.swap.call(this, 0, valuesArr.length - 1);

    // extract the root value
    rootValue = valuesArr.pop();

    // if left or right index is less than equal to array length, keep looping
    while (leftIndex <= valuesArr.length || rightIndex <= valuesArr.length) {
        // if left index is not in array, assign left to -Infinity else fetch left priority
        left = leftIndex >= valuesArr.length ? -Infinity : valuesArr[leftIndex].priority;
        // if right index is not in array, assign left to -Infinity else fetch right priority
        right = rightIndex >= valuesArr.length ? -Infinity : valuesArr[rightIndex].priority;
        // fetch current priority
        curr = valuesArr[currIndex].priority;

        if (left >= right && left > curr) { // if left is greater than right and left is greater than current
            // swap left with current
            this.utils.swap.call(this, leftIndex, currIndex);
            // update current index to left index
            currIndex = leftIndex;
        } else if (left < right && right > curr) { // if right is greater than left and right is greater than current
            // swap right with current
            this.utils.swap.call(this, rightIndex, currIndex);
            // update current index to right index
            currIndex = rightIndex;
        } else {
            // if neighter left or right is greater than current stop, we've sunk root to right place
            break;
        }
        // update left index based on new current
        leftIndex = 2*currIndex + 1;
        // update right index based on new current
        rightIndex = 2*currIndex + 2;
    }

    return rootValue;
};

const maxBinHeap = new PriorityQueue();
maxBinHeap.enqueue(new Node("Tenth", 10));
maxBinHeap.enqueue(new Node("First", 1));
maxBinHeap.enqueue(new Node("Fifth", 5));
maxBinHeap.enqueue(new Node("Ninth", 9));
maxBinHeap.enqueue(new Node("Second", 2));
maxBinHeap.enqueue(new Node("Third", 3));
maxBinHeap.enqueue(new Node("Seventh", 7));
maxBinHeap.enqueue(new Node("Fourth", 4));
maxBinHeap.enqueue(new Node("Eight", 8));
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.dequeue());
console.log(maxBinHeap);