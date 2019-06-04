// function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    let arr1Len = arr1.length;
    let arr2Len = arr2.length;
    let i = 0;
    let j = 0;
    let mergeIndex = 0;
    let mergedArr = [];

    while (i < arr1Len && j < arr2Len) {
        if (arr1[i] < arr2[j]) {
            mergedArr[mergeIndex++] = arr1[i++];
        } else {
            mergedArr[mergeIndex++] = arr2[j++];
        }
    }

    while (i < arr1Len) {
        mergedArr[mergeIndex++] = arr1[i++];
    }
    while (j < arr2Len) {
        mergedArr[mergeIndex++] = arr2[j++];
    }

    return mergedArr;
}

// merge sort: split the given array into smallest chunks i.e arrays of 1 or 0 size. Then invoke mergeSortedArrays function.

// Time Complexity: Best/Avg. - O(N logN)
function mergeSort(arr) {
    let arrLen = arr.length;
    if (arrLen <= 1) return arr;
    let mid = Math.floor(arrLen / 2);
    let arr1 = mergeSort(arr.slice(0, mid));
    let arr2 = mergeSort(arr.slice(mid));
    return mergeSortedArrays(arr1, arr2);
}

console.log(mergeSort([1,3,5,2,4]));