function countLetters (input) {
  let lettersCount = {};
  input = input.split(" ").join("").toLowerCase();

  for (i in input) {
    if (lettersCount[input[i]]) {
      lettersCount[input[i]] += 1;
    } else {
      lettersCount[input[i]] = 1;
    }
  }

  return lettersCount;
}

console.log(countLetters('Lighthouse in the house'));
