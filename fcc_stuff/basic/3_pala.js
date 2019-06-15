/*
Challenge: Find out if the string is a palandrome.

Notes:
1. Reverse string
2. Compare reversed string to original.
3. Return true if the string is the same both normal and reversed.
4. Account for capitals, spaces, and symbols.
*/

function palindrome(str) {
  // Take original string, set it to lowercase.
  // Remove special characters, and symbols, but respect the placement of spaces.
  var cl = str.toLowerCase().replace(/[\W_]/g, '');
  // Set another variable that is the reversed of the original. This is done by splitting the string to an array, reversing, and then joining it back into a string.
  var rev = cl.split('').reverse().join('');
  // Return true if the cleaned version is equal to the reversed string.
  return cl === rev;

}

palindrome("race car");
