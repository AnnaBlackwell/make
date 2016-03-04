var request = require('superagent')
var $ = require('jquery')

$("#plastic-injection").click(function() {
	window.location='/plastics'
})

$("#laser-cutting").click(function() {
	window.location='/laser'
})

$("#prototype").click(function() {
	window.location='/prototype'
})

$("#3d-printing").click(function() {
	window.location='/3Dprint'
})

$("#clear-filters").click(function() {
	window.location='/'
})
