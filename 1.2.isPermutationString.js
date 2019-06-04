// Check Permutation: Given two strings, write a method to decide if one is a permutation of the
// other.

function isPermutationString(str1, str2) {
    let charCount = {};

    // converting the inputs to lower case before proceding
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // if input string lengths are different, then return false
    if (str1.length !== str2.length) {
        return false;
    }

    // since the strings of same length, we can cover both strings in a single for loop
    for (let i = 0; i < str1.length; i++) {
        let currStr1Char = str1[i]; // current char of string 1
        let currStr2Char = str2[i]; // current char of string 2

        // add to count
        charCount[currStr1Char] = (charCount[currStr1Char] || 0) + 1;
        // subtract from count
        charCount[currStr2Char] = (charCount[currStr2Char] || 0) - 1;
    }

    // at the end of iteration charCount hash should have all own properties set to 0s, if two strings are permutations of each other
    for(let char of charCount) {
        if(charCount.hasOwnProperty(char) && charCount[char] !== 0) {
            return false;
        }
    }
    return true;
}

console.log("strings manu unma", isPermutationString("manu","unma"));
console.log("strings priyam manoha", isPermutationString("priyam","manoha"));

// Time Complexity: O(n)