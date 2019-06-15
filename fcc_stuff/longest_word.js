function findLongestWord(str) {
  var splitString = str.split(" ");
  var lengths = splitString.map(function(key) {
    return splitString.length()
  });
  console.log(lengths);
}


findLongestWord("Eve Online is ruining my life because its all that I do.");
