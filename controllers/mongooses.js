// require mongoose and load the model that we are going to use
var mongoose = require('mongoose');
var Mongoose = mongoose.model("Mongoose");

// create an object with methods tha we are going to export for our routes file to use
var mongoose = {};

mongoose.index = function(req, res, flash_msg) {
	Mongoose.find({}, function(err, mongooses){
		if(err)
		{
			console.log("something went wrong");
		}
		else
		{
			res.render("index", {mongooses: mongooses, errors: flash_msg});
		}
	})
}

mongoose.add = function(req, res, flash_msg) {
	var mongoose = new Mongoose({name: req.body.name, age: req.body.age});

	mongoose.save(function(err)
	{
		if(err)
		{
			console.log("there was an error creating a new mongoose");
			res.render("index", {mongooses: flash_msg, errors: mongoose.errors}) 
		}
		else
		{
			console.log("successfully created a mongoose");
			res.redirect("/");
		}
	})
}

mongoose.update = function(req, res) {
	Mongoose.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, function(err, mongoose){
		res.redirect("/");
	})
}

mongoose.remove = function(req, res) {
	Mongoose.remove({_id: req.params.id}, function(err, mongoose){
		res.redirect("/");
	})
}

mongoose.profile = function(req, res) {
	Mongoose.findOne({_id: req.params.id}, function(err, mongoose){
		res.render("profile", {mongoose: mongoose});
	})
}

mongoose.editOne = function(req, res) {
	Mongoose.findOne({_id: req.params.id}, function(err, mongoose){
		res.render("edit", {mongoose: mongoose});
	})
}


module.exports = mongoose;



