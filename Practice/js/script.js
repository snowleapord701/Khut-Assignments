var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
        city: 'New York',
        country: 'US',
    },
    
};

user.isAdmin = false;

console.log('User: ', user.name);
console.log('City: ', user.location.city);
console.log('Age: ', user.age);
console.log('Is User an Administrator?', user.isAdmin);

var user = {
    name: 'Michelle Roberts',
    age: 28,
    location: {
        city: 'New York',
        country: 'US',
    },
    
};

user.isAdmin = false;

console.log('User: ', user.name);
console.log('City: ', user.location.city);
console.log('Age: ', user.age);
console.log('Is User an Administrator?', user.isAdmin);


// Arrays in js
var fruits = ['apple', 'orange', 'grape', 'watermelon', 'banana'];

console.log(`I love ${fruits[1]}`);
console.log(fruits.length);
fruits.push('avacado');
console.log(`${fruits[fruits.length-1]}`);
fruits[1] = 'mango';
console.log(`${fruits[1]}`);


// Objects in an array
var stuff = [
  {
    
    name: 'Tony',
    type: 'vert',
  },
  {
    
    name: 'Jamie',
    type: 'street',
  },
  {
    
    name: 'Rodney',
    type: 'freestyle',
  },
];
console.log(stuff[1]['name']);