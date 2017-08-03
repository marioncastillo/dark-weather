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
	dataType: 'json',
	
})
.done(function(response) {
	console.log("success");
		console.log(response);
		var temperatura = (((response.currently.apparentTemperature-32) * 5/9).toFixed(1));
		var viento = response.currently.windSpeed;
		var humedad = response.currently.humidity;
		var uv = response.currently.uvIndex;
		var presion = response.currently.pressure;
		$(".grado").append(temperatura);;
		$(".viento").append(viento);
		$(".humedad").append(humedad);
		$(".uv").append(uv);
		$(".presion").append(presion);
		
	})

.fail(function(error) {
	console.log("no se puede acceder al servicio");
})
.always(function() {
	console.log("complete");
});

});