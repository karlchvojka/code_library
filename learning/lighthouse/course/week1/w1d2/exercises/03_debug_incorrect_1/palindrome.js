function isPalindrome (str) {
  const noSpaces = str.split(" ").join("").toLowerCase();
  const mid = Math.floor(noSpaces.length / 2);
  const last = noSpaces.length - 1;
  let charCount = 0;

  for (let i = 0; i < mid; i++ ) {
    if (noSpaces[i] !== noSpaces[last - i]) {
      charCount += 1;
    }
  }

  if (charCount === 0) {
    return true
  } else {
    return false
  }
}


// Test driver code. These should all log true.
console.log(isPalindrome('p') === true);
console.log(isPalindrome('foo') === false);
console.log(isPalindrome('racecar') === true);
console.log(isPalindrome('Kayak') === true);
console.log(isPalindrome('a santa at NASA') === true);
console.log(isPalindrome('live without evil') === false);
console.log(isPalindrome('just some random words') === false);
