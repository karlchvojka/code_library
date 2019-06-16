function duplicateEncoder(word) {
  return word
  // Turn string to lowercase
  .toLowerCase()
  // turn to an array
  .split('')
  // Maps through each item in the array
  // If the first appearace of the character is equal to the last
  // Meaning there is ONLY ONE, push (,
  // Else push ).
  .map( function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
  })
   // .join('');
}

// console.log("test din", duplicateEncoder("din"));
console.log("test recede", duplicateEncoder("recede"));
// console.log("test Success", duplicateEncoder("Success"));
