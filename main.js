// api key 2546b7a496c060af3bd2b136ddbd82dd PLEASE DO NOT USE IT SIGN UP FOR YOUR OWN KEY ITS FREE
$(document).ready(function() {
    var celsius = true,
        farenheight = false;

    function getCoordinates2(callback) {
        $.getJSON("https://ipinfo.io/json", function(data) {
            var loc = data.loc.split(",");
            callback(loc[0], loc[1])
            $(".address").append(data.city + " " + data.region + " " + data.country);
        });
    }

    function getWeather(lat, lon) {
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=2546b7a496c060af3bd2b136ddbd82dd", function(data) {
            $(".image").css("background-image", "url(" + "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png)");
            $(".description").append(data.weather[0].description);
            $(".degInt").append(Math.round(data.main.temp - 273.15) + " ºC");
        });
    }

    function convertor(iscelsius) {
        var cel = $(".degInt").text();
        cel = parseFloat(cel);
        if (iscelsius === farenheight & iscelsius !== celsius) {
            var degreesInF = cel * 9 / 5 + 32;
            $(".degInt").text(degreesInF + " ºF");
            farenheight = true;
        } else if (iscelsius === celsius & iscelsius === farenheight) {
            var degreesInC = (cel - 32) * 5 / 9;
            $(".degInt").text(degreesInC + " ºC");
            farenheight = false;
        }
    }

    getCoordinates2(getWeather);
    $(".farenheight").click(function() {
        convertor(false)
    });
    $(".celsius").click(function() {
        convertor(true)
    });
})
