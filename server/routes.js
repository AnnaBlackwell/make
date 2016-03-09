'use strict'
var exphbs  = require('express-handlebars')
var bodyParser = require('body-parser')
var bcrypt = require('bcrypt')
var uuid = require('node-uuid')
var _ = require('lodash')

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
		knex.from('services').innerJoin('EngineeringContacts', 'services.Business Name', 'EngineeringContacts.Name').orderBy('EngineeringContacts.Name', 'asc')
			.then(function (resp) {
				var groups = {}
				resp.forEach(function(business) {
					var name = business.Name
					var service = business.Service
					if (!groups[name]) {
						groups[name] = business
						groups[name].services = []
					}
					groups[name].services.push(service)
				})
				res.render('home', {EngineeringContacts: groups})
       			})
   			})
	      	
    //filter for plastic injection molding
    app.get('/plastics', function(req, res) {
		knex.from('services').innerJoin('EngineeringContacts', 'services.Business Name', 'EngineeringContacts.Name').where('Category', 'Plastic Moulding').orderBy('EngineeringContacts.Name', 'asc')
			.then(function (resp) {
				var groups = {}
				resp.forEach(function(business) {
					var name = business.Name
					var service = business.Service
					if (!groups[name]) {
						groups[name] = business
						groups[name].services = []
					}
					groups[name].services.push(service)
				})
				res.render('home', {EngineeringContacts: groups})
       			})
   			})

    //filter for plastic injection molding
    app.get('/laser', function(req, res) {
		knex.from('services').innerJoin('EngineeringContacts', 'services.Business Name', 'EngineeringContacts.Name').where('Category', 'Laser/Water-Jet Cutting').orderBy('EngineeringContacts.Name', 'asc')
			.then(function (resp) {
				var groups = {}
				resp.forEach(function(business) {
					var name = business.Name
					var service = business.Service
					if (!groups[name]) {
						groups[name] = business
						groups[name].services = []
					}
					groups[name].services.push(service)
				})
				res.render('home', {EngineeringContacts: groups})
       			})
   			})

        //filter for prototype building
    app.get('/prototype', function(req, res) {
		knex.from('services').innerJoin('EngineeringContacts', 'services.Business Name', 'EngineeringContacts.Name').where('Category', 'Prototype building').orderBy('EngineeringContacts.Name', 'asc')
			.then(function (resp) {
				var groups = {}
				resp.forEach(function(business) {
					var name = business.Name
					var service = business.Service
					if (!groups[name]) {
						groups[name] = business
						groups[name].services = []
					}
					groups[name].services.push(service)
				})
				res.render('home', {EngineeringContacts: groups})
       			})
   			})

        //filter for 3D printing
    app.get('/3dprint', function(req, res) {
		knex.from('services').innerJoin('EngineeringContacts', 'services.Business Name', 'EngineeringContacts.Name').where('Category', '3D Printing').orderBy('EngineeringContacts.Name', 'asc')
			.then(function (resp) {
				var groups = {}
				resp.forEach(function(business) {
					var name = business.Name
					var service = business.Service
					if (!groups[name]) {
						groups[name] = business
						groups[name].services = []
					}
					groups[name].services.push(service)
				})
				res.render('home', {EngineeringContacts: groups})
       			})
   			})

        //filter for packaging
    app.get('/packaging', function(req, res) {
		knex.from('services').innerJoin('EngineeringContacts', 'services.Business Name', 'EngineeringContacts.Name').where('Category', 'Packaging').orderBy('EngineeringContacts.Name', 'asc')
			.then(function (resp) {
				var groups = {}
				resp.forEach(function(business) {
					var name = business.Name
					var service = business.Service
					if (!groups[name]) {
						groups[name] = business
						groups[name].services = []
					}
					groups[name].services.push(service)
				})
				res.render('home', {EngineeringContacts: groups})
       			})
   			})

        //filter for design
    app.get('/design', function(req, res) {
		knex.from('services').innerJoin('EngineeringContacts', 'services.Business Name', 'EngineeringContacts.Name').where('Category', 'Design Services').orderBy('EngineeringContacts.Name', 'asc')
			.then(function (resp) {
				var groups = {}
				resp.forEach(function(business) {
					var name = business.Name
					var service = business.Service
					if (!groups[name]) {
						groups[name] = business
						groups[name].services = []
					}
					groups[name].services.push(service)
				})
				res.render('home', {EngineeringContacts: groups})
       			})
   			})

        //filter for electronics design
    app.get('/electronics', function(req, res) {
		knex.from('services').innerJoin('EngineeringContacts', 'services.Business Name', 'EngineeringContacts.Name').where('Category', 'Electronics Design').orderBy('EngineeringContacts.Name', 'asc')
			.then(function (resp) {
				var groups = {}
				resp.forEach(function(business) {
					var name = business.Name
					var service = business.Service
					if (!groups[name]) {
						groups[name] = business
						groups[name].services = []
					}
					groups[name].services.push(service)
				})
				res.render('home', {EngineeringContacts: groups})
       			})
   			})

//Sign-in
	app.get('/sign-in', function (req, res) {
	  res.render('sign-in')
	})

	app.post('/sign-in', function (req, res) {
	  //check that user exists in the database
	  //check that password matches
	  res.redirect('/add-contact')
	})

//Sign-up
	app.get('/sign-up', function (req, res) {
	  res.render('sign-up')
	})

	app.post('/sign-up', urlencodedParser, function (req, res) {
		var password = req.body.password
		var user = {
		    email: req.body.email, 
		    name: req.body.name
		}
		//also make a user id
		bcrypt.genSalt(10, function(err, salt) {
			bcrypt.hash(password, salt, function(err, hash) {
		    user.password_hash = hash
		    console.log('user')
		    knex('users').insert(user)
				.then(function() {
					console.log('done')
				})
			res.redirect('/add-contact')
		    })
		})
	})

//Add contact
	app.get('/add-contact', function (req, res) {
	  res.render('add-contact')
	})

	app.post('/add-contact', urlencodedParser, function (req, res) {
		var contact = {
			Name: req.body.name,
  			Website: req.body.name,
  			Email: req.body.email,
			Phone: req.body.phone,
			Category: req.body.category,
			Tags: req.body.service,
			//problem: doesn't put into linked services table
			Address: req.body.address,
			Notes: req.body.notes
		}
		console.log('contact', contact)
		knex('EngineeringContacts').insert('contact')
			.then(function() {
				console.log('done')
			})
		res.redirect('/')
	})
}
