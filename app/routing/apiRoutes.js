var path = require("path");
var friendArray = require("../data/friends"); 

module.exports = function(app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req,res){
    var currentUser = req.body
    var intScores = currentUser.scores.map(parseFloat)
    currentUser.scores = intScores
    console.log(currentUser)
    
    friendArray.push(currentUser)
  })
}; 

// Puts all the users scores into a single array
function userScores(array) {
  var scoreArray = [];
  for (var i = 0; i < array.length; i++) {
    scoreArray.push(array[i].scores)
  }
  return (scoreArray)
}

// Compares the two user scores then finds the total of the difference between each index
function compareArray(arr1, arr2) {
  console.log(arr1)
  var compatScore = [];
  var compatTotal = 0
  for (var i = 0; i < arr1.length; i++) {
    compatScore.push(Math.abs(arr1[i] - arr2[i]));
  }
  // console.log("compat score Array: " + compatScore)
  for (var i = 0; i < compatScore.length; i++) {
    compatTotal += compatScore[i]
  }
  console.log("compat Total: " + compatTotal)
  return (compatTotal)
}

function compareFriends(arr1, arr2) {
  // All users scores
  var scoreArray = userScores(arr1);
  // Current user
  var userScore = arr2[0].scores;
  console.log(scoreArray)
  console.log("user score: " + userScore)
  var compatScores = [];
  // Compares each users scores with the current users scores to find each total difference between the current user and all other 
  scoreArray.forEach(element => {
    compatScores.push(compareArray(element, userScore))
  });
  console.log(compatScores)
  // finds the index of the lowest compatible score totals
  var bestFriend = compatScores.indexOf(Math.min(...compatScores))
  console.log(friendArray[bestFriend])
  return friendArray[bestFriend]
}