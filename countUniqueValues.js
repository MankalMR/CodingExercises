function countUniqueValuesInSortedArray(arr) {
    let counter = 0;
    if (arr.length === 0) return counter;
    for (let index = 1; index < arr.length; index++) {
        if (arr[counter] !== arr[index]) {
            counter += 1;
            arr[counter] = arr[index];
        }
    }
    return (counter + 1);
}

console.log(countUniqueValuesInSortedArray([1,1,1,1,1,9]));