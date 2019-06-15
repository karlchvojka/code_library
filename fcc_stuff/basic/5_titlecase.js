/*
Challenge: Turn a string into Title Case.

Notes:
1. Split a string into an array.
2. Turn each words first letter to capital.
3. Return the result back to the global scope.
*/

function titleCase(str) {
  // Need to split the string into seperate objects. Doing this into an array.
  // To account for all kinds of text, we take the string and turn it all to lower case first.
  // Map through each of the items in the array doing:
  return str.toLowerCase().split(' ').map(function(fWord){
    // Select the character at the 0 position.
    // Turn that character to uppercase
    // .slice() adds the new letter back to the string in each item
    return (fWord.charAt(0).toUpperCase() + fWord.slice(1));
 }).join(' ');
 // now that we have each one with the right case, we join it back togeather as a string.
}

console.log(titleCase("I'm a little tea pot"));
