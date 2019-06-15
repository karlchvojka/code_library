var inputStrings = process.argv.slice(2);

function encodePigLatin(inputStrings) {
  var newSentance = '';
  for (word of inputStrings) {
    let newWord = word.slice(1, word.length) + word.slice(0, 1) + 'ay';
    newSentance += newWord + ' ';
  }

  return newSentance
}

console.log(encodePigLatin(inputStrings));
