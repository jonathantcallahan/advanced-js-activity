const weather = require ("weather-js");

function getWeather(weatherData){

    weather.find(weatherData, function(err, result){

        console.log(err || JSON.stringify(result, null, 2));

    });

}

var moment = require('moment-strftime');

var momentPrint = moment().strftime("%m/%d/%y %I:%M %p %Z");

console.log(momentPrint);