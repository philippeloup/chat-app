[{
  id: 'fagha01h2a',
  name: 'Andrew',
  room: 'The Office Fans'
}]

// addUser(id, name room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    // return removed id
    var user = this.getUser(id);
    if(user) {
      this.users = this.users.filter((user) =>  user.id !== id)
      }

    return user;
  }

  getUser (id) {
    var foundUser = this.users.filter( (user) => user.id === id)[0];
        return foundUser
  }

  getUserList (room) {
    var users = this.users.filter( (user) => user.room === room);
    var namesArray = users.map((user) => user.name)

    return namesArray;
  }
}

module.exports = {Users};
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }
// var me = new Person('Andrew', 25);
// var description = me.getUserDescription();
//
// console.log('this.name', me.name);
// console.log('this.age', me.age);
// console.log(description);
