var path = require("path");
var friends = require("../data/friends"); 

module.exports = function(app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends.array);
  });

  app.post("/api/friends", function(req,res){
    var currentUser = req.body
    // Changes the new user's scores in the scores array from a string into an integer
    var intScores = currentUser.scores.map(parseFloat)
    // Replaces the scores array with the above array
    currentUser.scores = intScores
    console.log(currentUser)
    //Compares the new user and current users' scores to find their compatibilities -- see all logic on the friends.js file
    res.json(friends.compare(friends.array, currentUser))
    // adds the new user to the friends Array
    friends.array.push(currentUser)
  })
}; 
