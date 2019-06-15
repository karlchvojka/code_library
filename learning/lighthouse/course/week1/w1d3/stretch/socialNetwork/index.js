let data = require('./data/db.js');

function buildNewObj (inputData) {
  let output = {};

  // Build some starting objects for the output field.
  function buildKeys (inputData) {
    for (let i in inputData) {
      output[i] = {};
      output[i]['name'] = inputData[i]['name'];
      output[i]['age'] = inputData[i]['age'];
      output[i]['Follows'] = [];
      output[i]['Followers'] = [];
    }
  }

  // Using the id# in the follows array, use that to fill out the array
  // That each person follows, using their name, not id number.
  function buildArrayofFollows (inputData) {
    for (let i in inputData) {
      for (let j = 0; j < inputData[i]["follows"].length; j++) {
        let iD = inputData[i]["follows"][j];
        output[i]['Follows'].push(inputData[iD]["name"]);
      }
    }
  }

  // Goal: Build an array of people who are followers of said person.
  // Eg. Bob follows Elizabeth. Elizabeth should have his name in an array.
  function buildArrayofFollowers (inputData) {
    for (let user in inputData) {
      for (let j in inputData[user]['follows']) {
        let followsID = inputData[user]['follows'][j];
        output[followsID]['Followers'].push(inputData[user]['name']);
      }
    }
  }

  // Run functions to build the output object.
  buildKeys(inputData);
  buildArrayofFollows(inputData);
  buildArrayofFollowers(inputData);

  // Function to return who has most users

  // return rebuilt and new object.
  return output;
}

// Find who has the most followers
function findMostUsers (inputData) {
  let howMany = [];
  for (let user in inputData) {
    howMany.push(inputData[user]['Follows'].length)
  }
  let sorted = howMany.sort(function(a,b) { return b - a});
  let followsTheMost = '';

  for (let i in inputData) {
    if (inputData[i]['Follows'].length === sorted[0]) {
      let followsTheMost = inputData[i]['name'] + ' follows the most people';
      return followsTheMost;
    }
  }
}

// Find who follows the most people.
function findMostFollowers (inputData) {
  let howMany = [];
  for (let user in inputData) {
    howMany.push(inputData[user]['Followers'].length)
  }
  let sorted = howMany.sort(function(a,b) { return b - a});
  let followersTheMost = [];

  for (let i in inputData) {
    if (inputData[i]['Followers'].length === sorted[0]) {
      followersTheMost.push(inputData[i]['name']);
    }
  }


  return followersTheMost;
}

// Set some variables for use in the fnal output.
let builtData = buildNewObj(data);
let followsMost = findMostUsers(builtData);
let hasMostFollowers = findMostFollowers(builtData);

// Function to build final display of information.
function buildFinalDisplay (inputData) {
  for (let user in inputData) {
    console.log('Name: ' + inputData[user]['name']);
    console.log('Follows: ' + inputData[user]['Follows']);
    console.log('Followers: ' + inputData[user]['Followers']);
    console.log(' ');
  }
  console.log(followsMost);
  console.log(hasMostFollowers.join(', ') + ' have the most followers.');
}

// Display output.
buildFinalDisplay(builtData);
