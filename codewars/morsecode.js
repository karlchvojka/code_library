var ms_array = require('./ms_array');
var MORSE_CODE = ms_array.morsecode;
var morseCode = '.... . -.--  .--- ..- -.. .';

console.log(
  (function (morseCode) {
    return morseCode
          .replace(/\s+(?= )/g, ' ')
          .trim()
          .split(" ")
          .map(function (param) {
            return ((param === "") ?
              " " : MORSE_CODE[param]);
          })
          .join('');
        })(morseCode));
