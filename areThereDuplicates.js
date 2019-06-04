// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. 

// You can solve this using the frequency counter pattern OR
// the multiple pointers pattern.
// Examples:areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true

// Restrictions:Time - O(n) Space - O(n) Bonus:Time - O(n log n)Space - O(1)

function areThereDuplicates(...params) {

    return new Set(params).size !== params.length;
    // use rest params to account for variable number of args instruction
    let charCounter = {};
    // iterate params and set counter to true/1 of each key in a counter object
    for (let i = 0; i < params.length; i += 1) {
        // while iterating if we encounter a key
        // which already exists in counter object
        // return true
        let currChar = params[i].toString();
        if (charCounter[currChar]) {
            return true;
        } else {
            charCounter[currChar] = true;
        }

    }
    // if we finish iterating without returning from fn, return false
    return false;
}

function areThereDuplicatesSet(...params) {
    return new Set(params).size !== params.length;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));