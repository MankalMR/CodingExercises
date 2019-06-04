// bubbleSort: bubble highest element to the end by swapping with each comparison

// Time Complexity: O(N*N)
function bubbleSort(arr) {
    let n = arr.length;
    // iterate over the array
    for (let i = 1; i < n; i += 1) {
        // compare i-1 and i items
        if (arr[i-1] > arr[i]) {
            // swap if i-1 is greater than i
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        }
        // else continue on to the next item in arr
        // when i reaches n, reduce i to 1 and n--
        if (i === n - 1) {
            i = 1;
            n -= 1;
        }
    }
    return arr;
}

function bubbleSortOptimized(arr) {
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 1; j < i; j++) {
            if (arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                noSwap = false;
            }
        }
        if (noSwap) break;
    }
    return arr;
}

console.log(bubbleSort([3,1,4,5,2]));
console.log(bubbleSortOptimized([3,1,4,5,2]));