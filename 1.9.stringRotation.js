/**
 * String Rotation:Assumeyou have a method isSubstringwhich checks if one word is a substring
 * of another. Given two strings, sl and s2, write code to check if s2 is a rotation of sl using only one
 * call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
 */

function isRotation(s1, s2) {
    var len = s1.length;
    /*Check that s1 and s2 are equal length and not empty */
    if(len == s2.length && len > 0) {
      /* Concatenate s1 and s1 within new buffer */
      var s1s1 = s1 + s1;
      // return isSubstring(s1s1, s2);
      return s1s1.includes(s2);
    }
    return false;
  }

  console.log("`waterbottle` `erbottlewat`: ", isRotation("waterbottle", "erbottlewat"));