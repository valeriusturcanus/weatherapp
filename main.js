// api key 2546b7a496c060af3bd2b136ddbd82dd
// dark sky c0ce7614b48fa84f870127065c32177a

$(document).ready(function() {
    var city, country, lat, lon;
    var celsius = true,
        farenheight = false;

    function getCoordinates(callback) {
        $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
            $(".address").append(data.city + " " + data.country)
            city = data.city;
            callback(data.lat, data.lon)
        });
    }

    function getWeather(lat, lon) {
        console.log("this is latitude");
        $.getJSON("https://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=2546b7a496c060af3bd2b136ddbd82dd", function(data) {
            console.log(data.weather[0]);
            $(".image").css("background-image", "url("+"http://openweathermap.org/img/w/"+data.weather[0].icon +".png)")
            $(".inline").append(Math.round(data.main.temp - 273.15) + " ºC");
        });

    }
    getCoordinates(getWeather);
    // getWeather(53,-3);
    $(".farenheight").click(function() {
        // console.log($(".inline").text());
        convertor(false)
    });
    $(".celsius").click(function() {
        // console.log($(".inline").text());
        convertor(true)
    });

    function convertor(iscelsius) {
        var cel = $(".inline").text();
        console.log(cel);
        cel = parseFloat(cel);
        if (iscelsius === farenheight & iscelsius!==celsius) {
            console.log(cel);
            var degreesInF = cel * 9 / 5 + 32;
            console.log(degreesInF);
            $(".inline").text(degreesInF + " ºF");
            farenheight = true;
        } else if (iscelsius === celsius & iscelsius===farenheight) {
            var degreesInC = (cel - 32) * 5 / 9;
            $(".inline").text(degreesInC+ " ºC");
            farenheight=false;

        }
    }
})
