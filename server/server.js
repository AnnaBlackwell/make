var express = require('express')
var exphbs  = require('express-handlebars')
var routes = require('./routes')
var bodyParser = require('body-parser')

// doesn't work:
module.exports = function(db) {
	var app = express()
	routes(app, db)
	app.use(bodyParser.urlencoded({ extended: false}))
	app.use(bodyParser.json())
	app.engine('handlebars', exphbs({defaultLayout: 'main'}))
	app.set('view engine', 'handlebars')
	app.listen(3000, function() {
		console.log("Server is running on port 3000")
	})
	return app
}