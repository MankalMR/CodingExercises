/**
 * One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character. Given two strings, write a function to check if they are
 * one edit (or zero edits) away.
 * EXAMPLE
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bake -> false
 */
function isOneEdit(first, second) {
    // if the input string are same
    if (first === second) {
        return false;
    }

    var len1 = first.length;
    var len2 = second.length;
    // If the length difference of the stings is more than 1, return false.
    if (Math.abs(len1 - len2) > 1) {
        return false;
    }
    var i = 0, j = 0;
    var diff = 0;
    while (i < len1 && j < len2) {
        var f = first.charAt(i);
        var s = second.charAt(j);
        if (f !== s) {
            diff++;
            if (len1 > len2) {
                i++;
            }
            if (len2 > len1) {
                j++;
            }
            if (len1 === len2) {
                i++;
                j++;
            }
        } else {
            i++;
            j++;
        }
        if (diff > 1) {
            return false;
        }
    }
    // If the length of the string is not same. ex. "abc" and "abde" are not one edit distance.
    if (diff === 1 && len1 !== len2 && (i !== len1 || j !== len2)) {
        console(first + " : " + second);
        return false;
    }
    return true;
}

console.log("`base` `bass`: " + isOneEdit("base", "bass"));
console.log("`base` `bas`: " + isOneEdit("base", "bas"));
console.log("`base` `ase`: " + isOneEdit("base", "ase"));
