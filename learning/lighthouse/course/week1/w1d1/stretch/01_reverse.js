const inputStrings = process.argv.slice(2);

function reverse (strings) {
  for (let i = 0; i < strings.length; i++) {
    let reversedString = reverseWord(strings[i]);
    console.log(reversedString);
  }
}

function reverseWord (word) {
  let newStr = '';

  for (let j = word.length - 1; j >= 0; j--) {
    newStr += word[j];
  }
  return newStr;
}

reverse(inputStrings);
