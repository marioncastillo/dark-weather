$(document).ready(function(){
	function geo(){
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(posicion);
		}
		function posicion(position){
			var latitud = posicion.coords.latitude;
			var longitud = posicion.coords.longitude;
			console.log(latitud,longitud);
		}
	}

$.ajax({
	url: 'https://api.darksky.net/forecast/c6bf15744245dfc8d810364ae136fabe/37.8267,-122.4233',
	type: 'GET',
	dataType: 'JSON',
	//data: {key:'c6bf15744245dfc8d810364ae136fabe'}//key
})
.done(function(response) {
	$(".actual").append('<div id="local">' + response.actual + '</div>')
	console.log(response.actual);
})
.fail(function(error) {
	console.log("no se puede acceder al servicio");
})
.always(function() {
	console.log("complete");
});

})