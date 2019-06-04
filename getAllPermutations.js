// for input bad
// print ['bad', 'bda', 'abd', 'adb', 'dab', 'dba']

// function getAllPermutations (string)
//   define results
//   if string is a single character
//     add the character to results
//     return results
//   for each char in string
//     define innerPermutations as a char of string
//     set innerPermutations to getAllPermutations (without next char)
//     foreach string in innerPermutations
//       add defined char and innerPermutations char
//   return results

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

console.log(getAllPermutations('mad'));

