function getAllPermutations(string) {
    var results = [];

    if (typeof string !== 'undefined') {
      if (string.length === 1) {
          results.push(string);
          return results;
        }

        for (var i = 0; i < string.length; i++) {
          var firstChar = string[i];
          var charsLeft = string.substring(0, i) + string.substring(i + 1);
          var innerPermutations = getAllPermutations(charsLeft);
          for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
          }
        }
    }

    return results;
  }

function isPermutationAPalindrome (str) {
    var permutationsArr = getAllPermutations(str);
    var palindromePermutations = [];

    permutationsArr.forEach(function (str) {
        if (str === str.split("").reverse().join("")) {
            palindromePermutations.push(str);
        }
    });

    if (palindromePermutations.length) {
        return {
            isPermutationAPalindrome: true,
            strings: palindromePermutations
        };
    }

    return {
        isPermutationAPalindrome: false
    };
}

console.log(isPermutationAPalindrome("tactcoa"));
console.log(isPermutationAPalindrome("bang"));