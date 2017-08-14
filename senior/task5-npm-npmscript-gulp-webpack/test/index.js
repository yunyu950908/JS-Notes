var axios = require("axios"),
    data = {};
if (process.argv[2]) {
    data.params = {
        city: process.argv[2]
    }
}
axios("http://api.jirengu.com/weather.php", data)
    .then(function (response) {
        //console.log(response)
        console.log(response.data.results[0].currentCity)
        console.log("PM2.5: " + response.data.results[0].pm25)
        var weather = response.data.results[0].weather_data[0];
        console.log(weather.date)
        console.log(weather.temperature)
        console.log(weather.weather)
        console.log(weather.wind)
    })
    .catch(function (error) {
        console.log(error)
    })