var express = require("express");
var apiRouter = express.Router();

var friendsData = require("../friends.js");
apiRouter.get("/api/friends", function(req, res) {
  res.json(friendsData);
});

apiRouter.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    console.log("newFriend",newFriend)
    var newFriendTotal = 0
    newFriend.scores.forEach(function(score) {
      newFriendTotal += parseInt(score)
      if (score.scores == "1 (Strongly Agree)") {
        score.scores = 1;
      }
      else if (score.scores == "5 (Strongly Disagree)") {
        score.scores = 5;
      }
      else {
        score.scores = parseInt(score.scores);
      }
    });
    console.log("new friend total", newFriendTotal)
    var bestMatch = {};
    var matchedFriend = 0;
    var bestMatchedScore = 10;

    for(var i = 0;i < friendsData.length;i++){
      var oldFriendTotal = 0 
      for(var k = 0; k < friendsData[i].scores.length;k++){
        oldFriendTotal+= friendsData[i].scores[k]
      }
      console.log("old totals",oldFriendTotal)
    }
    
    for (var friend = 0; friend < friendsData.length; friend++) {
      var totalScoresDiff = 0;
      for (var score = 0; score < friendsData[friend].scores.length; score++) {
        var diff = Math.abs(friendsData[friend].scores[score] - newFriend.scores[score]);
        totalScoresDiff += diff;
      }
      console.log(totalScoresDiff, friendsData[friend].name);
      
      if (totalScoresDiff > bestMatchedScore) {
        matchedFriend = friend;
        bestMatchedScore = totalScoresDiff;
      }
    }
    bestMatch = friendsData[matchedFriend];
    friendsData.push(newFriend);
    res.json(bestMatch);
});


 module.exports = apiRouter;