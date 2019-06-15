var args = process.argv.slice(2)

function sum (numArr) {
  var firstNum = Number(numArr[0])
  var secondNum = Number(numArr[1])

  return firstNum + secondNum
}

console.log(sum(args))
