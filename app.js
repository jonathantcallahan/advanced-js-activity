const weather = require ("weather-js");
const writeFile = require('./wrtite-file')

function getWeather(weatherData, username){

    weather.find(weatherData, function(err, result){

        if(err) {
            console.log(err)
            return;
        } 
        var weatherData = JSON.stringify(result, null, 2);

        var logData = JSON.parse(weatherData)
        console.log(`\n----------------------------\nThe weather in ${logData[0].location.name} is ${logData[0].current.temperature} degrees and ${logData[0].current.skytext}` )
        var logString = `Name: ${username} Location: ${logData[0].location.name} Date: ${logData[0].current.date} || ` 
        writeFile.writeUser(logString)
    });
    
}

var moment = require('moment-strftime');

var momentPrint = moment().strftime("%m/%d/%y %I:%M %p %Z");

console.log(momentPrint); 

module.exports = {
    getWeather: getWeather
}