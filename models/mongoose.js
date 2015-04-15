// require mongoose
var mongoose = require('mongoose');

// create our schema
var MongooseSchema = new mongoose.Schema({
	name: String,
	age: String
})

MongooseSchema.path('name').required(true, "Please give your mongoose a name");
MongooseSchema.path('age').required(true, "Don't forget to give your mongoose an age");

// turn the schema into a model 
mongoose.model("Mongoose", MongooseSchema);