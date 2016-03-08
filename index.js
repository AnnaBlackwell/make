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

$("#packaging").click(function() {
	window.location='/packaging'
})

$("#design-services").click(function() {
	window.location='/design'
})

$("#electronics").click(function() {
	window.location='/electronics'
})

$("#clear-filters").click(function() {
	window.location='/'
})


mapboxgl.accessToken = 'pk.eyJ1IjoiYWNibGFja3dlbGwiLCJhIjoiY2lsaXAyeWFvM2JpNHVka3AxcjZpdDFuayJ9.ifS4N66JQmRHPEHkTbvs6g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
    center: [-74.50, 40], // starting position
    zoom: 1 // starting zoom
});

map.on('style.load', function () {
    map.addSource('RPD_Parks', {
        type: 'vector',
        url: 'mapbox://mapbox.3o7ubwm8'
    });
});

