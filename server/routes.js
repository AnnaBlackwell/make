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
    
    //all results and clear filter
    app.get('/', function (req, res) {
		knex.select('*').from('EngineeringContacts')
			.then(function (resp) {
	       		res.render('home', {EngineeringContacts: resp})
	      	})
    })

    //filter for plastic injection molding
    app.get('/plastics', function(req, res) {
		knex.select('*').from('EngineeringContacts').where('Category', 'Plastic Moulding')
			.then(function (resp) {
	       		res.render('home', {EngineeringContacts: resp})
	      	})
    })

    //filter for plastic injection molding
    app.get('/laser', function(req, res) {
		knex.select('*').from('EngineeringContacts').where('Category', 'Laser/Water-Jet Cutting')
			.then(function (resp) {
	       		res.render('home', {EngineeringContacts: resp})
	      	})
    })

        //filter for prototype building
    app.get('/prototype', function(req, res) {
		knex.select('*').from('EngineeringContacts').where('Category', 'Prototype building')
			.then(function (resp) {
	       		res.render('home', {EngineeringContacts: resp})
	      	})
    })

        //filter for 3D printing
    app.get('/3dprint', function(req, res) {
		knex.select('*').from('EngineeringContacts').where('Category', '3D Printing')
			.then(function (resp) {
	       		res.render('home', {EngineeringContacts: resp})
	      	})
    })
        //services by contact
        //still needs work
  //   app.get('/services', function(req, res) {
		// knex.select('*').from('services')
		// knex.from('services').innerJoin('EngineeringContacts', 'Services.Business Name', 'EngineeringContacts.Name').orderBy('EngineeringContacts.Name', 'asc')
		// 	.then(function (resp) {
	 //       		console.log('resp: ', resp[15].Service)
	 //       		res.render('home', {services: resp})
	 //    	})
  //   })
}
