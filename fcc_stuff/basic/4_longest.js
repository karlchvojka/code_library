/*
Challenge: Find the longest word in a string.

Notes:
1. Split string into an array.
2. Return back the length of each item in the array. Iterating through it with map();
3. Compare the results of the .lengh on each string to find the longest.
4. Return back the number with the longest.
*/

function findLongestWord(str) {
  // Split the string into an array
  // Map through the array, finding the length of each string, and returning the result to the array.
  var lengths = str.split(" ").map(function(splitString) {
    return splitString.length;
  });
  // Compares each result in the array and returns back the longest.
  return(Math.max.apply(null, lengths));
}


findLongestWord("The quick brown fox jumped over the lazy dog.");
