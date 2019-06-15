//Cut the string into chunks via sz
// if chunk

var str = "123456789";
var chunks = [];
var sz = 2;
var u = 0;

function revrot(str, sz) {
  function theMathPart(ranVar) {
      var mathCubed = ranVar.map(function(c) { return Math.pow(+c, 3); });
      return mathCubed.reduce(function(a, b) { return a + b; });
  }
  if ((sz <= 0) || (str === "") || (sz > str.length)) return "";
  var szCheck = str.match(new RegExp('.{'+ sz + '}', 'g'));
  var arraySplit = szCheck.map(function(theArray) {
      var ranVar = theArray.split("");
      if (theMathPart(ranVar) % 2 === 0) return ranVar.reverse().join('');
      else
          return theArray.substring(1) + theArray.charAt(0);
  });
  return arraySplit.join("");
}

revrot("22039542234234", 5);
