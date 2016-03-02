'use strict'
var exphbs  = require('express-handlebars')
var bodyParser = require('body-parser')


exports = module.exports = function (app, db) {

	var knex = require('knex')({
		client: 'sqlite3',
		connection: {
			filename: './data/EngineeringContacts.sqlite'
			},
	useNullAsDefault: true
	})

	var urlencodedParser = bodyParser.urlencoded({ extended: false })
    
    app.get('/', function (req, res) {
		knex.select('*').from('EngineeringContacts')
			.then(function (resp) {
	       		console.log('done', resp)
	       		res.render('home', {EngineeringContacts: resp})
	      	})
    })
}
