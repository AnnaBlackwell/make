'use strict'
var exphbs  = require('express-handlebars')

exports = module.exports = function (app) {
  app.get('/', function (req, res) {
    res.render('home', {contacts: contacts})
  }
)}