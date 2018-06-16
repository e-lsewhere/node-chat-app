var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// new Date().getTime();

// var date = new Date();
// var months = ['Jan', 'Feb']
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('H:mm a'));

var createdAt = 1234
var date = moment(createdAt);
console.log(date.format('h:mm a'))
