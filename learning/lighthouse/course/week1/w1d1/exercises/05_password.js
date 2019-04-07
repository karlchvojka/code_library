function obfuscator (password) {
  let splitString = password.split('')

  for (i in splitString) {
    if (splitString[i] === 'a') {
      splitString[i] = 4
    } else if (splitString[i] === 'e') {
      splitString[i] = 3
    } else if (splitString[i] === 'o') {
      splitString[i] = 0;
    } else if (splitString[i] === 'l') {
      splitString[i] = 1;
    }
  }

  return splitString.join('');
}

console.log(obfuscator('password'))
