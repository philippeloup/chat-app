const moment = require('moment');
// new Date().getTime()
//
// var date = new Date();
// var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug']
// console.log(months[date.getMonth()]);


var someTimestamp = moment().valueOf();
console.log(someTimestamp);

createdAt = 1234;
var date = moment(createdAt);

console.log(date.format('h:mm a'));
