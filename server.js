var path = require("path");
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

require('./config/mon-route');
require('./config/routes')(app);

app.listen(8000, function()
{
	console.log("listening on port 8000");
})

