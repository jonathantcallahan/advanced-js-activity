var adminObj = {
    users: ['balls','balls'],
    addUser: (name, location) => this.users.push(new User(name,location)),
    printUsers: () => {
        for(var i = 0; i<this.users.length; i++){
            console.log(this.users[i])
        }
    }
}

var NewUser = function(name, location){
    this.name = name;
    this.location = location;
}

module.exports = {
    adminObj: adminObj,
    NewUser: NewUser 
}