var express = require('express')
var exphbs  = require('express-handlebars')
var routes = require('./routes')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

routes(app)

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000, function() {
	console.log("Server is running on port 3000")
})