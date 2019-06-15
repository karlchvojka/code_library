function makeLoadedDie() {
  let list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let num = 0;
  let die = '';

  return function(){
    if (die) {
      return die = list[num += 1];
    } else {
      return die = list[num];
    }

  }
 }

 var rollLoadedDie = makeLoadedDie();

 console.log(rollLoadedDie()); // 5
 console.log(rollLoadedDie()); // 4
 console.log(rollLoadedDie()); // 6
 console.log(rollLoadedDie()); // 6
 console.log(rollLoadedDie()); // 6
 console.log(rollLoadedDie()); // 6
 console.log(rollLoadedDie()); // 6
