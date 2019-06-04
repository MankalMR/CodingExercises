function getDigit(num, pos) {
    let numString = num.toString();
    let char = numString[numString.length - pos - 1];
    let digit = typeof char !== "undefined" ? parseInt(char) : 0;

    return digit;
    // Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

function digitCount(num) {
    return num.toString().length;
    // Math.floor(Math.log10(Math.abs(num))) + 1
}

function maxDigits(arr) {
    return digitCount(Math.max.apply(null, arr));
}

// radix sort: works by sorting numbers into 10 different buckets 0-9 for each digit of the number from right to left
function radixSort(arr) {
    let maxIteration = maxDigits(arr);

    for (let i = 0; i < maxIteration; i += 1) {
        let bucketArr = Array.from({length: 10}, () => []);
        for (let j = 0; j < arr.length; j += 1) {
            let currNum = arr[j];
            let ithDigit = getDigit(currNum, i);
            bucketArr[ithDigit].push(currNum);
        }
        arr = [].concat(...bucketArr);
    }
    return arr;
}

console.log(radixSort([123,1,3456,221,12,321234,4]));