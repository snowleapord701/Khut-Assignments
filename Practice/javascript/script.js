console.log('Hello world!');
console.log(10 + 5);

var user = 'Jamie Thomas';
var company = 'Zero';
var position = 'pro skater';

// Ex. of template literals
var greeting = `Hi, my name is ${user} \u{1F642} and I work as a ${position} at ${company}.`;

console.log(greeting);

// send to html doc
document.getElementById("msg").innerHTML = greeting;

var myQuote = 'Do some treflips';
var author = 'Gene Evans';
var fullQuote = myQuote + ' -- ' + author;
var lengthOfString = fullQuote.length; 

console.log(fullQuote);
//coma than variable name after a string literal works.
console.log('Length of the Quote: ', lengthOfString);

// If message is empty showPostButton will become false, if message has something in it.
// It become true. Boolean value demonstration.
var message = 'hey';
var showPostButton = !!message;
console.log(`Show Post Button: ${showPostButton}`);
//adding length function- Trix with boolean, haha.
var showEditButton = !!message.length;
console.log(`Show Edit Button: ${showEditButton}`);


//Objects are made up of properties in javascript.
//Properties have value. Like an associated array.
var cat = {
    color: 'white',
    breed: 'Persian',
    eyeColor: 'Bright Bule',
    isKitten: true,
};
//This will print Object for type
console.log(typeof cat);

// There are two ways to get properties from objects.
console.log(cat.color);     //Dot notation
console.log(cat['eyeColor']);       //Bracket notatioin

//add property to cat. This also works as a re-asignment as well.
cat.legs = 4;
console.log(cat.legs);
cat.eyeColor = 'Hazel';
console.log(cat.eyeColor);

//You can delete a property as well
delete cat.legs;
// if you try to access a deleted property you get undefined.
console.log(cat.legs);

//You can create objects using the object constructor
var guitar = new Object();
guitar['Brand'] = 'Fender';
guitar['Color'] = 'Pearl';
guitar['Type'] = 'electric';
guitar['Strings'] = 6;

console.log(guitar)

