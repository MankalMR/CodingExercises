/**
 * String Compression: Implement a method to perform basic string compression using the counts
 * of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the
 * "compressed" string would not become smaller than the original string, your method should return
 * the original string. You can assume the string has only uppercase and lowercase letters (a - z).
 */
function stringCompression (str) {
    var compressedStr = "";
    var charCount = 1;
    for (var i = 0; i < str.length; i++) {
        var currChar = str.charAt(i);
        if (i === 0) {
            compressedStr += currChar;
        } else {
            if (currChar === str.charAt(i - 1)) {
                charCount++;
                if (i === str.length - 1) {
                    compressedStr += charCount;
                }
            } else {
                if (charCount > 1) {
                    compressedStr += charCount;
                    charCount = 1;
                }
                compressedStr += currChar;
            }
        }
    }

    if (str === compressedStr) {
        return str;
    }

    return compressedStr;
}

console.log("aaabbbbbcdffzzzz: ", stringCompression("aaabbbbbcdffzzzz"));
console.log("abcd: ", stringCompression("abcd"));