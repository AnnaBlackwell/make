var request = require('superagent')
var $ = require('jquery')

$("#plastic-injection").click(function() {
	// request
	// 	.get('/plastics')
	// 	.end(function(err, res){
	// 		console.log('plastic')
	// })
	window.location='/plastics'
})

$("#laser-cutting").click(function() {
	// request
	// 	.get('/laser')
	// 	.end(function(err, res){
	// 		console.log('laser cut')
	// })
	window.location='/laser'
})

$("#prototype").click(function() {
	// request
	// 	.get('/prototype')
	// 	.end(function(err, res){
	// 		console.log('prototype')
	// })
	window.location='/prototype'
})

$("#3d-printing").click(function() {
	// request
	// 	.get('/3Dprint')
	// 	.end(function(err, res){
	// 		console.log('3d printing')
	// })
	window.location='/3Dprint'
})

$("#clear-filters").click(function() {
	// request
	// .get('/')
	// .end(function(err, res) {
	// 	console.log('clear filter')
	// })
	window.location='/'
})
