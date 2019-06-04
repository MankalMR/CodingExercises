function findLongestSubstring(str) {
    // declare charIndexLookup
    let charIndexLookup = {};
    let substringLen = 0;
    let substringLenMax = 0;
    // iterate over the string
    for (let i = 0; i < str.length; i++) {
        let currChar = str[i];
        // if currChar is not in charIndexLoopup, add index to object
        if (typeof charIndexLookup[currChar] === "undefined") {
            charIndexLookup[currChar] = i;
            // substringLen++
            substringLen += 1;
        } else { // else currChar is found in charIndexLoopup obj
            // substringLenMax = substringLen
            if (substringLen > substringLenMax) {
                substringLenMax = substringLen;
            }
            // substringLen = 0
            substringLen = 0;
            // index = charIndexLookup[currChar]
            i = charIndexLookup[currChar];
            // clear charIndexLoopup
            charIndexLookup = {};
        }
    }
    if (substringLen > substringLenMax) {
        substringLenMax = substringLen;
    }
    // return substringLenMax
    return substringLenMax;
}
console.log(findLongestSubstring(""));
console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("thecatinthehat"));
console.log(findLongestSubstring("bbbbb"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("thisishowwedoit"));
