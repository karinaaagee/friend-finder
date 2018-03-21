
var friendData = require("../app/data/friends.js");
var path = require("path");


module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friendData);
});

app.post("/api/friends", function(req, res) {
  var userData = req.body;
  var name 	= userData.name;
  var image = userData.image;
  var scores = userData.scores
  console.log(userData)
  var difference = 10000000;

  for(var i=0; i<friendData.length; i++){
    var totalDifference = 0;
    //loops through scores in friend data
    for(var j=0; j<scores.length; j++){
      totalDifference += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(scores[j])));
    }

    if (totalDifference < difference) {
    name = friendData[i].name;
    image = friendData[i].photo;
    }
}
    console.log(name);
    console.log(image);
    friendData.push(userData);
    res.json({name,image});
});

}
