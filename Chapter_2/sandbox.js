// alert('Hello World');

// console.log(1);
// console.log(2);

let age = 25;
let year = 2024;
console.log(age, year);

/*age = 30;
console.log(age);

const points = 100;
console.log(points);*/

var score = 75;
console.log(score);

///////////////////////////////////////////////////////////

// Strings
console.log('Hello, world');

let email = 'ccastro@rrc.ca';
console.log(email);

// String concatenations
let firstName = 'Cynthia';
let secondName = 'Castro';

let fullName = firstName + ' ' + secondName;
console.log(fullName);

// getting characters
console.log(fullName[0]);
console.log(fullName[8]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase()); //put the variable in capital letters
console.log(fullName.toLowerCase()); //put the variable in lower case

let resultss = fullName.toLowerCase();
console.log(resultss);
console.log(resultss, fullName);

let index = email.indexOf('@'); //search for the position of this characters
console.log(index);

/////////////////////////////////////////////////////////

let resul = email.lastIndexOf('r');
console.log(resul);

let slices = email.slice(0,7);  //print the first position (0) and the rest of the position till the second argument(7) from the email
console.log(slices);

let substract = email.substr(4,10);
console.log(substract);

let repla = email.replace('c','m');
console.log(repla);

let replac = email.replace('s','z');
console.log(replac);

/////////////////////////numbers///////////////////////////////////

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// Math operators +, -, *, /, **, %

console.log(10 / 2);
let result = radius % 3;
console.log(result);

let resu = pi * radius ** 2;
console.log(resu);


// Order of Operations = B I D M A S (brackets, indexes **, division /, multipl *, addit +, subst -)

let total = 5 * (10-3) **2;
console.log(total);

let likes = 10;
//likes = likes + 1;  old code
//likes++;     // add 1 value to the likes = 11
//likes--;     // substract 1 value of the likes = 9

//likes += 10;   //take the current value (10) and add the same value = 20 
//likes -= 5;     //take away 5 of the current results = 10 - 5 = 5
//likes *= 2;   //take the current value(10) and multiply by 2 = 20
//likes /= 2;   //take the current value(10) and dividy by 2 = 5

console.log(likes);

// NaN - Not a number

console.log(5 / 'hello');  // NaN
console.log(5 * 'hello');  // NaN

// Concatenate numbers

let concat = 'the blog has ' + likes + ' likes';
console.log(concat);


////////////////////////////////////////////////////////

// Template Strings
const title = 'Best reads of 2019';
const author = 'Cynthia';
const likess = 30;

//Concatenation way

let sentence = 'The blog called ' + title + ' by ' + author + ' has ' + likess + ' likes';
console.log(sentence);


// template string way or literal way ````  (backtix)
let sent = `The blog called ${title} by ${author} has ${likess} likes`;
console.log(sent);

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likess} likes</span>
`;
console.log(html);

///////////////////////////// Arrays /////////////////////////////////

let ninjas = ['Domi', 'Susy', 'Cleo'];

//ninjas[1] = 'Fran';         //Override a name with the position and new name 'Domi'
//console.log(ninjas[1]);    //give us just the name of the position that selected[1] = susy

console.log(ninjas);

let ages = [20,25,30,35];
console.log(ages[2]);

let random = ['susy', 'cleo', 20, 30]; //we can store strings and number in the arrays
console.log(random);

