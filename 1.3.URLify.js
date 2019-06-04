// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string. (Note: If implementing in Java, please use a character array so that you can
// perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13
// Output: "Mr%20John%20Smith"

function URLify (str) {
    return encodeURI("Mr John Smith ");
}

// OR

function URLify (str) {
    var newStr = "";

    str.split("").forEach(function (char) {
      if (char === " ") {
        char = "%20";
      }
      newStr.append(char);
    });

    return newStr;
}
