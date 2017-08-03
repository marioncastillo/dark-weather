$(document).ready(function(){
var localizacion =geolocalicacion.val();
$.ajax({
	url: 'https://api.darksky.net/forecast/c6bf15744245dfc8d810364ae136fabe/37.8267,-122.4233' + localizacion,
	type: 'GET',
	dataType: 'JSON',
	data: {localizacion,'c6bf15744245dfc8d810364ae136fabe'}//key
})
.done(function(response) {
	$(".lunes").append('<div id="local">' + response.actual + '</div>')
	console.log(response.actual);
})
.fail(function(error) {
	console.log("no se puede acceder al servicio");
})
.always(function() {
	console.log("complete");
});

})