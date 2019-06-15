// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {

  arr.forEach(function (element, index) {
    if(element === "Waldo") {
      found(index);
    }
  })
}

function actionWhenFound(pos) {
  console.log("Found Waldo at index " + pos + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
