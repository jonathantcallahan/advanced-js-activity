const weather = require ("weather-js");

function getWeather(weatherData){

    weather.find(weatherData, function(err, result){

        if(err) {
            console.log(err)
            return;
        } 
        var weatherData = JSON.stringify(result, null, 2);
        console.log('weather ran')
        var logData = JSON.parse(weatherData)
        console.log(`The weather in ${logData[0].location.name} is ${logData[0].current.temperature} degrees and ${logData[0].current.skytext}` )

    });
    
}

var moment = require('moment-strftime');

var momentPrint = moment().strftime("%m/%d/%y %I:%M %p %Z");

console.log(momentPrint); 

module.exports = {
    getWeather: getWeather
}