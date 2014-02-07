var data = require('../data.json');

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log("In the addFriend Section");
	res.render('add');
	console.log("Adding friend: " + req.query.name);
	console.log("With description: " + req.query.description);
	var newFriend = {
			"name": req.query.name,
			"description": req.query.description,
			"imageURL": "http://lorempixel.com/400/400/people"
		};
	console.log(newFriend);
	data["friends"].push(newFriend);
 };