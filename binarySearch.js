// Implement binary search
// input: sorted array (arr), number to find (num)
function binarySearch(arr, num, startIndex = 0, endIndex = (arr.length - 1)) {
    if (startIndex > endIndex) {
        console.log(`${num} NOT found: -1`);
        return;
    }
    // find the length of the arr, and divide by half (searchIndex)
    var searchIndex = Math.floor((endIndex + startIndex) / 2);

    if (num === arr[searchIndex]) {
        console.log(`${num} found at index: ${searchIndex}`);
        return;
    } else if (num < arr[searchIndex]) { // else if num is smaller than arr[searchIndex]
        // call binarySearch with new start index and end index
        binarySearch(arr, num, startIndex, searchIndex - 1);
    } else { // else if num is greater than arr[searchIndex]
        // call binarySearch with new start index and end index
        binarySearch(arr, num, searchIndex + 1, endIndex);
    }
}

function binarySearchIterative(arr, num) {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
        let searchIndex = Math.floor((startIndex + endIndex) / 2);
        if (num === arr[searchIndex]) {
            console.log(`${num} found at index: ${searchIndex}`);
            return;
        } else if (num < arr[searchIndex]) {
            endIndex = searchIndex - 1;
        } else {
            startIndex = searchIndex + 1;
        }
    }

    console.log(`${num} NOT found: -1`);
    return;
}

binarySearch([1,2,4,9,11,15], 3);
binarySearch([1,2,4,9,11,15], 1);
binarySearch([1,2,4,9,11,15], 15);
binarySearch([1,2,4,9,11,15], 4);
binarySearch([1,2,4,9,11,15], 11);
binarySearch([1,2,4,9,11,15], 2);
console.log("---------------------")
binarySearchIterative([1,2,4,9,11,15], 3);
binarySearchIterative([1,2,4,9,11,15], 1);
binarySearchIterative([1,2,4,9,11,15], 15);
binarySearchIterative([1,2,4,9,11,15], 4);
binarySearchIterative([1,2,4,9,11,15], 11);
binarySearchIterative([1,2,4,9,11,15], 2);