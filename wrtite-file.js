const fs = require('fs')


function writeUser(user){
    fs.writeFile('log.txt',user, (err) => {
        if(err){
            console.log(err)
        } else {
            console.log('the file has been saved')
        }
    })
}

module.exports = writeUser