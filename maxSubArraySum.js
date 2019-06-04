// the function should calculate the max sum n consecutive number in the array
function maxSubArraySum (arr, n) {
    let maxSum = 0;
    let sum = 0;
    // // if n is greater than arr, then return null
    // if (arr.length < n || arr.length === 0) return null;
    // // iterate over the array 0 to length - n
    // for (let i = 0; i <= arr.length - n; i++) {
    //     // iterate over array from i to n
    //     for (let j = 0; j < n; j++) {
    //         console.log(arr[i + j]);
    //         // calculate sum
    //         sum += arr[i + j];
    //     }
    //     console.log("sum: ",sum);
    //     // compare with maxSum and reassign maxSum as needed
    //     if (sum > maxSum) {
    //         maxSum = sum;
    //     }
    //     sum = 0;
    // }
    // return maxSum;

    // iterate upto n on arr and compute sum
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }
    // assign sum to tempSum
    sum = maxSum;
    console.log(sum);
    // iterate over arr starting from n
    for (let j = n; j < arr.length; j++) {
        console.log(arr[j], arr[j - n]);
        // subtract the very first number from the last sum and add new index
        sum += arr[j] - arr[j - n];
        console.log(sum);
        // compare tempSum with maxSum and reassign maxSum as needed
        if (sum > maxSum) {
            maxSum = sum;
        }
    }

    return maxSum;
}

console.log(maxSubArraySum([7,10,3,1,5,7,8,2,33], 4));
console.log(maxSubArraySum([100, 200, 300, 400], 2));
console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20], 4));
console.log(maxSubArraySum([-3,4,0,-2,6,-1], 2));
console.log(maxSubArraySum([3,-2,7,-4,1,-1,4,-2,1], 2));
console.log(maxSubArraySum([2,3], 2));