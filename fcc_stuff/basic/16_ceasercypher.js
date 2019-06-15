/*
Challenge: Ceaser Cypher

Notes:
1. Take a RO13 encoded string
2. Return decoded string
3. All characters will be uppercase
4. Dont decode non-alphabetic characters, but pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  var str = str.split('').map.call(str, function(char) {
        x = char.charCodeAt(0);
        if (x < 65 || x > 90) {
          return String.fromCharCode(x);
        }
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        return String.fromCharCode(x - 13);
      }).join('');

    return(str);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
