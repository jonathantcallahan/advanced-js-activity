const inquirer = require('inquirer')
const writeToFile = require('./wrtite-file')
const user = require('./user')
const app = require('./app')

function getWeather(){
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
        if(answer.auth==='user'){
            inquirer.prompt([
                {
                    name: 'name',
                    message: 'Whats your name?'
                }, {
                    name: 'location',
                    message: 'Whats your location?'
                }
            ]).then(function(answer){
                console.log(`Hi ${answer.name}, its always sunny in ${answer.location}`)
                var userText = `Name: ${answer.name} Location: ${answer.location}`
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