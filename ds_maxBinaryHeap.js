class MaxBinaryHeap {
    constructor () {
        this.values = [];
    }
}

MaxBinaryHeap.prototype.utils = {
    swap: function (index1, index2) {
        this.values[index2] = (this.values[index1] + this.values[index2]) - (this.values[index1] = this.values[index2]);
    }
};

MaxBinaryHeap.prototype.insert = function insert (value) {
    var valuesArr = this.values; // taking this.values into temp object
    var currIndex = valuesArr.length; // currIndex of the value added to the heap will be values.length
    var parentIndex = Math.floor((currIndex - 1) / 2); // find index for the parent of this node

    valuesArr.push(value); // add value to the end of the array

    // keep iterating while parentIndex is >= 0 and ele @ currIndex is greater than ele @ parentIndex
    while (parentIndex >= 0 && valuesArr[currIndex] > valuesArr[parentIndex]) {
        // keep bubbling up the node if child is greater than parent by swapping
        this.utils.swap.call(this, currIndex, parentIndex);
        // update the current index to be parent's index
        currIndex = parentIndex;
        // recompute new parent index
        parentIndex = Math.floor((currIndex - 1) / 2);
    }
};

MaxBinaryHeap.prototype.extractRoot = function extractRoot () {
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
        // if left index is not in array, assign left to -Infinity else fetch left value
        left = leftIndex >= valuesArr.length ? -Infinity : valuesArr[leftIndex];
        // if right index is not in array, assign left to -Infinity else fetch right value
        right = rightIndex >= valuesArr.length ? -Infinity : valuesArr[rightIndex];
        // fetch current value
        curr = valuesArr[currIndex];

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

const maxBinHeap = new MaxBinaryHeap();
maxBinHeap.insert(10);
maxBinHeap.insert(1);
maxBinHeap.insert(5);
maxBinHeap.insert(9);
maxBinHeap.insert(2);
maxBinHeap.insert(3);
maxBinHeap.insert(7);
maxBinHeap.insert(4);
maxBinHeap.insert(8);
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);
console.log("root: ", maxBinHeap.extractRoot());
console.log(maxBinHeap);