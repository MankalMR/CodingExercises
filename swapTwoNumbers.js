function swapTwoNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

function swapTwoNumbersSingleLine(a, b) {
    b = (a + b) - (a = b);
    return [a, b];
}

console.log(swapTwoNumbers(1,2));
console.log(swapTwoNumbersSingleLine(3,4));