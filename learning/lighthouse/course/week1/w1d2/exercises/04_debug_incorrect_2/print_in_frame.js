function printInFrame(list) {
  list = list.split(' ');
  const longest = longestStr(list).length;
  const border = repeat('*', longest + 3);

  console.log(border);
  for (word of list) {
    console.log('* ' + word + repeat(' ', longest - word.length) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  let result = str;

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
}

function longestStr(list) {

  let longest = '';
  let lgth = 0;

  for (str of list) {
    if (str.length > lgth) {
      lgth = str.length;
      longest = str;
    }
  }

  return longest;
}

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
