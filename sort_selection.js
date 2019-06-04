// selectionSort: bring minimum element to the begining by swapping at the end of each pass

// Time Complexity: O(N*N)
function selectionSort(arr) {
    let min;
    let minIndex;
    // iterate through the arr
    for (let i = 0; i < arr.length; i++) {
        min = arr[i];
        // inner iteration of the arr
        for (let j = i + 1; j < arr.length; j++) {
            // find the min in the arr
            if (min > arr[j]) {
                // update the min and minIndex
                min = arr[j];
                minIndex = j;
            }
        }
        // swap the min with ith index
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    // return modified arr
    return arr;
}

console.log(selectionSort([14,11,12,15,13]));