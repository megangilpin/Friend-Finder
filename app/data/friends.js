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

function compareArray(arr1, arr2) {
  var compatScore = [];
  var compatTotal = 0
  for (var i = 0; i < arr1.length; i++) {
    compatScore.push(Math.abs(arr1[i] - arr2[i]));
  }
  console.log(compatScore)
  for (var i = 0; i < compatScore.length; i++) {
    compatTotal += compatScore[i]
  }
  console.log(compatTotal)
  return (compatTotal)
}

function compareFriends(user){
  var scoreArray = userScores(friendArray);
  var userScore = user[0].scores;
  var compatScores = [];
  // compares all users scores with current user return the difference in compatibility
  

  
  console.log(scoreArray)
  console.log(userScore)
}

function userScores(array){
  var scoreArray = [];
  for (i = 0; i < array.length; i++) {
    scoreArray.push(array[i].scores)
  }
  return(scoreArray)
}


compareArray(friendArray[0].scores, user[0].scores)

// compareFriends(user);

// module.exports = friendArray;