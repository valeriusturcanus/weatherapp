// api key 2546b7a496c060af3bd2b136ddbd82dd

$(document).ready(function() {
    var city,country,lat,lon;
    function getCoordinates (callback){
        $.getJSON("http://ip-api.com/json/?callback=?", function(data) {
            $(".address").append(data.city + " " +data.country)
            city = data.city;
            callback(data.lat,data.lon)
        });
        return true;
    }
    function getWeather (lat,lon){
        console.log("this is latitude");
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat +"&lon="+lon+"&APPID=2546b7a496c060af3bd2b136ddbd82dd", function(data) {
            console.log(data.main.temp);
            $(".inline").append(Math.round(data.main.temp - 273.15)+" C");
        });

    }
    getCoordinates(getWeather);
    $(".farenheight").click(function(){
        // console.log($(".inline").text());
        var cel = $(".inline").text();
        console.log(cel);
        console.log(typeof cel);
        var farenheight = cel*9/5 +32;
        $(".inline").text(farenheight)
    });
})
