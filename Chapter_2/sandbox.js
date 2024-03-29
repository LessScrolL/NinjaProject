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

console.log(ninjas.length);  //to check how many name of variables contains this array

// Array Methods

let names = ninjas.join(',');  // put all the names of the ninjas separate by commas in a string
console.log(names);

let indes = ninjas.indexOf('Cleo'); //this gave me the position number of the name = 2
console.log(indes);

let members = ninjas.concat(['Fran', 'Cynthia']);  // Add o concatenate the following members to the ninjas
console.log(members);

let newMem = ninjas.push(['Fran']);  // return the last length of the new array(ninjas)
newMem = ninjas.pop();   //removes the last element added to the array and returns it (print it)
console.log(newMem);


//////////////////////////// NAN - undefined value////////////////////////////////////////

//let numb;
//console.log(numb, numb + 3, `the age is ${numb}`); //undefined NaN since we don't give a value at the variable numb

let numb = null;
console.log(numb, numb + 3, `the age is ${numb}`);   //null change to null but when try to add the value 3 to null this just show us 3 since null take the value of 0



/////////////////////////// Boolean ////////////////////////////////////////

// Booleans & Comparisons
console.log(true, false, "true", "false");

// methods can return booleans
let emai = 'ccastro@rrc.ca';
let charac = ['mario', 'luigi', 'toad'];

let check = email.includes('p'); //return true if the characters is in the variable if this is not in there would be false
console.log(check);

let checks = charac.includes('toad'); //return true if the name is in the array if this is not in there would be false
console.log(checks);

// Comparision operators

let numbers = 35
console.log(numbers == 35);  //is numbers equals to 35 = true
console.log(numbers == 23);  //is numbers equals to 23 = false (because 23 is not equals to 35)

console.log(numbers != 15);  //is number not equals to 15 is true
console.log(numbers != 35);  //is number not equals to 35 is false (because 35 is equal to 35)

console.log(numbers > 20);  //is numbers greater than 20 = true (35)
console.log(numbers > 40);  //is numbers greater than 40 = false (40)

console.log(numbers < 20);  //is numbers less than 20 = false (20)
console.log(numbers < 40);  //is numbers less than 40 = true (35)

console.log(numbers >= 35);  //is numbers is greater or equals to 35 = true
console.log(numbers >= 40);  //is numbers is greater or equals to 40 = false (because 35 is not greater or equals to 40)

console.log(numbers <= 25);  //is numbers is less or equals to 35 = false
console.log(numbers <= 40);  //is numbers is less or equals to 40 = true (because 35 is less or equals to 40)


// Comparision operators - Letters

let surname = 'castro';
console.log(surname == 'castro');
console.log(surname == 'Castro'); //is not equal since this has Capital letter
console.log(surname > 'tapia'); //is not greater since 'c' in the alphabet is less than 't'.
console.log(surname > 'Castro'); //is true since lowerletter 'c' are greater than uppercase letter 'C'
console.log(surname > 'Arleen'); //is true since lowerletter 'c' are greather than any uppercase letter


// Loose comparison (different types can still be equal)
let four = 44;
console.log(four == 44);
console.log(four == '44'); // is true since the javascript convert the string to a number

console.log(four != 44); 
console.log(four != '44');  // is true since the javascript convert the string to a number


// Strict comparison (different types cannot be equal)

console.log(four === 44); // this means that the same value and type has to be 44 - true
console.log(four === '44'); //this is false since the type is not the same than the variable

console.log(four !== 44); // this false since the value and type has the same 44
console.log(four !== '44'); //this is true since the type is not the same than the variable

////////////////////////// Type conversion /////////////////////

let scores = '100';
scores = Number(scores)  //convert the string to a number
console.log(scores + 1);
console.log(typeof scores); //to check if the variable is a number or string

let str = String(50);    // convert the number(50) into a string
console.log(str);
console.log(str, typeof str); 

let zero = Boolean(10);     // for boolean 
console.log(zero, typeof str); 
