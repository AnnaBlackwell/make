'use strict'
var exphbs  = require('express-handlebars')
var bodyParser = require('body-parser')

exports = module.exports = function (app, db) {
  var urlencodedParser = bodyParser.urlencoded({ extended: false })

    app.get('/', function (req, res) {
    db.getAll('contacts', function (err, contacts) {
      console.log('contact', contacts)
      res.render('home', {contacts: contacts})
    })
  })
}
