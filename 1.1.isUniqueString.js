// Is Unique: Implement an alogirthm to determine if the a string has all unique characters.
// What if you cannot use any additional data structures

"use strict";
function isUniqueChars(str) {
    let charCount = {};
    let currChar;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        currChar = str[i];
        if(typeof charCount[currChar] === "number") {
            return false;
        } else {
            charCount[currChar] = 1;
        }
    }
    return true;
}

console.log(`String: Priyam - ${isUniqueChars("Priyam")}`);
console.log(`String: weep - ${isUniqueChars("weep")}`);

// Time Complexity: O(n)