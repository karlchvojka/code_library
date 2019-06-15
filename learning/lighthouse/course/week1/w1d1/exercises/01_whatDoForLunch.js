function whatToDoForLunch (hungry, availableTime) {
  // If hungry, and you have some time, give suggestions of what to do with it.
  if (hungry) {
    switch (true) {
      case (availableTime < 20):
        return 'Pick something up and eat it back at the Lab or in the kitchen. Meet someone new!'
      case (availableTime > 20 && availableTime < 30):
        return 'You deserve a break. Try a place in gastown'
      case (availableTime > 30):
        return 'This is a bootcamp. Maybe you should reconsider.'
    }
  }
}

// TEST CASES

console.log("I'm hungry and I have 20 minutes for lunch.")
console.log(whatToDoForLunch(true, 20))
console.log('---')

console.log("I'm hungry and I have 50 minutes for lunch.")
console.log(whatToDoForLunch(true, 50))
console.log('---')

console.log("I'm not hungry and I have 30 minutes for lunch.")
console.log(whatToDoForLunch(false, 30))
console.log('---')

console.log("I'm hungry and I have 15 minutes for lunch.")
console.log(whatToDoForLunch(true, 15))
