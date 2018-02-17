const inquirer = require('inquirer')
const writeToFile = require('./wrtite-file')
const user = require('./user')
const app = require('./app')

function getWeather(){
    //initial set of questions to determine whether or not user is admin
    inquirer.prompt([
        {
            type: 'list',
            name: 'auth',
            message: 'User or Admin?',
            choices: [
                'user',
                'admin'
            ]
        }
    ]).then(function(answer){
        //once user has put in input, doing something with the data
        //something to do w/ promises not sure how it works exactly
        if(answer.auth==='user'){
            inquirer.prompt([
                //if the user selected user asks them additional set of questions to get weather data
                {
                    name: 'name',
                    message: 'Whats your name?'
                }, {
                    name: 'location',
                    message: 'Whats your location?'
                }
            ]).then(function(answer){
                console.log(`Hi ${answer.name}, its always sunny in ${answer.location}`)
                //this line is just logging the data directly from the user input
                var userText = `Name: ${answer.name} Location: ${answer.location}`
                //creating a string of the user input and holding it in a variable to be passed into the 
                //function that will write it to the log file
                writeToFile(userText)
                var weatherData = {
                    search: answer.location,
                    degreeType: 'F'
                }
                app.getWeather(weatherData)
                // function call to add user to the user array in admin
                // replaced with fs functionality
                // user.adminObj.addUser(answer.name,answer.location)
                runAgain()
            }).catch(function(err){
                console.log(err)
            })
        } else {
            user.adminObj.printUsers()
            runAgain()
        }
    }).catch(function(err){
        console.log
    })
}


function runAgain() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Would you like to return to the main menu?'
        }
    ]).then(function(answer){
        if(answer.confirm){
            getWeather();
        } else {
            console.log('Okay! Goodbye for now')
        }
    })
}

getWeather()