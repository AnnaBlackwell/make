var express = require('express')
var exphbs  = require('express-handlebars')
var routes = require('./routes.js')
var bodyParser = require('body-parser')

var app = express()

routes(app)

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'));

app.listen(3000, function() {
	console.log("Server is running on port 3000")
})
