let map1 = words.map(function(word){
    return word.charAt(0) + word.substring(1).toUpperCase();
});

console.log(map1);
