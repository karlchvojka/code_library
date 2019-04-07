const numberOfDice = new Number(process.argv[2]);

function rollSingleDie() {
  return Math.floor(Math.random() * Math.floor(6));
}

function rollMultipleDice(times) {
  let rollResult = [];

  for(let i = 0; i < times; i++) {
    rollResult.push(rollSingleDie());
  }

  return rollResult;
}

console.log('Rolled ' + numberOfDice + ': ' + rollMultipleDice(numberOfDice).join(', '))
