// cd Khut-Assignments/Practice/javascript
'use strict'


const person = {
    name: 'Joe',
    age: 30,
    location: 'FL',
}

console.log(person.location);

function add(x, y) {
    return x + y
}

console.log(add(2,3));  

const myArr = ["Zero", "Enjoy", "Baker", "Vans", "Shorty"];

console.log(myArr);

console.log(9 <= 9);
console.log(true > false);
console.log('11' < 10);

var x = 10;
var y = 12;
var lte = typeof x === typeof y && x <= y; 

var user = {
    name: 'Luke Skywalker',
    profession: 'Jedi',
    isDarkSide: false,
};

console.log('isDarkSide' in user)

console.log(6 <= 6)

var a = 10;
var b = 20n;
//var error = 'Exception has been thrown on line 48';
//try block handle exceptions
//catch block catches the errors
//finally block will always run
try {
    if(typeof a != typeof b) 
    throw new Error('Both operands must belong to the same data type.');
    var c = a + b;
    console.log(`The result of the sum is ${c}`);
} catch(error) {
    console.log(error);
} finally {
    console.log('I will run no matter what!');
}

var pi = Math.PI;
console.log(`The value of pi is ${pi}`);

var user = 'Clark Kent';

function sayHi() {
    console.log(`${user} says HI!`);
}

sayHi();

