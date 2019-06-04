// pivot: helps finding the index of the pivot and also moves the selected pivot the sorted postion in the arr
function pivot(arr, left = 0, right = arr.length - 1) {
    let pivot = arr[left];
    let pivotIndex = left;
    let i = left + 1;
    while (i <= right) {
        if (arr[i] < pivot) {
            pivotIndex += 1;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
        i += 1;
    }
    [arr[left], arr[pivotIndex]] = [arr[pivotIndex], arr[left]];
    return pivotIndex;
}

// quick sort: use a pivot (any number in the array),
// then move all the numbers less than pivot to left and all greater to right and repeat the process for left the pivot and to the right

// Time Compexity: best/Avg - O(N logN), Worst - O(N*N)
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left side
        quickSort(arr, left, pivotIndex - 1);
        // right side
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([2,4,5,1,3]));