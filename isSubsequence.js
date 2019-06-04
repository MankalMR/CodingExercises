function isSubsequence(str1, str2) {
    let str1Len = str1.length;
    let str2Len = str2.length;
    let i = 0;
    let j = 0;
    if (str2Len < str1Len) return false;

    while (i < str1Len && j < str2Len) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    if (i === str1Len) return true;
    return false;
  }

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "string"));
console.log(isSubsequence("abc", "acb"));
