var mongooses = require('../controllers/mongooses');

module.exports = function(app) {
	app.get('/', function(req, res) {
		mongooses.index(req, res);
	})
	app.get('/mongooses/new', function(req, res) {
		res.render('new');
	})
	app.get('/mongooses/:id', function(req, res){
		mongooses.profile(req, res);
	})
	app.get('/mongooses/:id/edit', function(req, res) {
		mongooses.editOne(req, res);
	})

	app.post('/mongooses', function(req, res){
		mongooses.add(req, res);
	})

	app.post('/mongooses/:id', function(req, res){
		mongooses.update(req, res);
	})

	app.post('/mongooses/:id/destroy', function(req, res){
		mongooses.remove(req, res);
	})
}