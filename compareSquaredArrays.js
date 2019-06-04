function compareSquaredArrays(arr1, arr2) {
    // check if the arrays are of same length, if not return false
    if (arr1.length !== arr2.length) {
        return false;
    }
    let countFrmArr1 = {};

    // iterate through each item in arr1 and count number of times each item occurs
    for(let i = 0; i < arr1.length; i++) {
        let arr1Item = arr1[i];
        let possibleArr2Item = arr1Item * arr1Item;
        countFrmArr1[possibleArr2Item] = (countFrmArr1[possibleArr2Item] || 0) + 1;
    }

    // iterate thought each item in arr2
    for(let j = 0; j < arr2.length; j++) {
        let arr2Item = arr2[j];
        if (countFrmArr1[arr2Item]) {
            countFrmArr1[arr2Item] -= 1;
        } else {
            return false;
        }
    }

    return true;
}

console.log(compareSquaredArrays([1,2,3],[1,4,9]));
console.log(compareSquaredArrays([1,1,4],[1,1,6]));
console.log(compareSquaredArrays([5,2,1],[1,25,4]));
console.log(compareSquaredArrays([5,2,1],[6,6,6]));