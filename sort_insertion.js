// insertionSort: insert the current in sorted portion in the left

// Time Complexity: O(N*N)
function insertionSort(arr) {

    // start the iteration from 1st index
    for (let i = 1; i < arr.length; i++) {
        let currIndex = i;
        // compare with sorted portion array on the left
        for (let j = i - 1; j >= 0; j--) {
            // insert in the right index on the left sorted array
            if (arr[currIndex] < arr[j]) {
                [arr[currIndex], arr[j]] = [arr[j], arr[currIndex]];
                currIndex = j;
            } else {
                break;
            }
        }
    }
    return arr;
}

console.log(insertionSort([3,1,4,5,2]));