#!/usr/bin/env node

var axios = require("axios");
//console.log(process.argv);
//定义城市参数，有就放入data.params
var data = {};

if (process.argv[2]) {
    data.params = {
        city: process.argv[2]
    }
}
//axios第二个参数参考文档https://www.npmjs.com/package/axios
//console.log(data)
axios.get("http://api.jirengu.com/weather.php", data)
    .then(function (response) {
        //console.log(response.data)

        console.log(response.data.results[0].currentCity)
        var weather = response.data.results[0].weather_data[0];
        console.log(weather.date)
        console.log(weather.temperature)
        console.log(weather.weather + "," + weather.wind)
        console.log("PM2.5: " + response.data.results[0].pm25)
    })
    .catch(function (error) {
        console.log(error);
    })