var friendArray =[
  {
    name: "Bob",
    photo: "https://picsum.photos/id/1077/3000/1995",
    scores: [
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
   {
    name: "Steven",
    photo: "https://picsum.photos/id/1012/3973/2639",
    scores: [
      5,
      2,
      4,
      5,
      5,
      2,
      2,
      3,
      4,
      5
    ]
  },
  {
    name: "Karen",
    photo: "https://picsum.photos/id/1011/5472/3648",
    scores: [
      1,
      5,
      3,
      3,
      2,
      4,
      4,
      3,
      1,
      1
    ]
  },
  {
    name: "Jessica",
    photo: "https://picsum.photos/id/1027/2848/4272",
    scores: [
      4,
      2,
      3,
      1,
      1,
      5,
      4,
      3,
      2,
      1
    ]
  },
  {
    name: "Charlie",
    photo: "https://picsum.photos/id/117/1544/1024",
    scores: [
      2,
      5,
      3,
      1,
      1,
      4,
      3,
      1,
      2,
      1
    ]
  }
]


var user = [
  {
    name: "Charlie",
    photo: "https://picsum.photos/id/117/1544/1024",
    scores: [
      2,
      5,
      3,
      1,
      1,
      4,
      3,
      1,
      2,
      1
    ]
  }
]


// Puts all the users scores into a single array
function userScores(array) {
  var scoreArray = [];
  for (var i = 0; i < array.length; i++) {
    scoreArray.push(array[i].scores)
  }
  return (scoreArray)
}

// Compares two users' scores then finds the total of the difference between each score
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

  //Compares the new user and current users' scores to find their compatibilities
function compareFriends(arr1, arr2){
  // All users scores
  var scoreArray = userScores(arr1);
  // Current user
  var userScore = arr2.scores;
  console.log(scoreArray)
  console.log("user score: " + userScore)
  var compatScores = [];
  // Compares each users scores with each current users scores to find the total of the difference between each score
  scoreArray.forEach(element => {
    compatScores.push(compareArray(element, userScore))
  });
  console.log(compatScores)
  // finds the index of the lowest compatible score totals
  var bestFriend = compatScores.indexOf(Math.min(...compatScores))
  console.log(bestFriend)
  return friendArray[bestFriend]
}


module.exports = {
  array: friendArray,
  compare: compareFriends
}