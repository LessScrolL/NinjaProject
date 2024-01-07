///////////// Function declaration  ////  function decoration

// function greet(){
//     console.log('hello there');
// }

// greet();

///////////// Function expression /////  Store a function inside of the variable

// const speak = function(){
//     console.log('good day!');
// };

// speak();


///////////// Arguments & parameters  ///////
///////option1

// const speak = function(name, time){
//     console.log(`Good ${time}! ${name}`);
// };

// speak('Cynthia', 'morning');


//option2
const speaks = function(name ='luigi', time ='night'){
    console.log(`Good ${time}! ${name}`);
};

speaks();
speaks('Cynthia');

///////////// Returning Values from functions //////////////////////

const calcArea = function(radius){
  //  let area = 3.14 * radius**2;    //// we can use these or
  //  return area; 
  return 3.14 * radius**2;         //// this since this is more clear                                
};

const areas = calcArea(5);
console.log(areas);


////////////  Regular Function  ///////

// const calcArea = function(radius){
//     return 3.14 * radius**2;                                         
// };

/////////// Arrow functions /////
/// this is eficience since we don't have to write the word function since we use arrows =>

const calcAreas = (radius) => {   ///we can or cannot (radius) use parenthesis only 1 parameter, but with 2 we have to use parenthesis (radius, area)
    return 3.14 * radius**2;                                     
};
const areaa = calcAreas(5);
console.log('area is:', areaa);

/////// this way is shorter than the last one.

const calcAreass = radius => 3.14 * radius**2;

const area = calcAreass(5);
console.log('area is:', area);


//////////  Practice arrow function   ///////////

// const greets = function(){
//     return 'hello, world';
// };

//////// make this code works  ////////////

const greet = () => 'hello, world';
const result = greet();
console.log(result);


const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bill([10,15,30], 0.2))   ///we added this conosle.log

///// transform to arrow fnction ///

const bills = (products, tax) => {     /// we deleted the function and added the arrow =>
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}

console.log(bills([10,15,30], 0.2))


//////////////////////////////////////////////////////////////////////

const name = 'shaun';
//// Function

const green = () => 'hello';

let resultOne = green();
console.log(resultOne);


//// Methods

let resultTwo = name.toUpperCase();
console.log(resultTwo);


///////////////////////// Call back & foreach //////////////////////

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value =>{
//     // do something
//     console.log(value);
// });

let people = ['mario','luigi','ryu','shaun','chun-li'];

// people.forEach(function(person){
//     console.log(person);
// });

//// convert to arrow function ////

people.forEach(person => {
    console.log(person);
});

/////  Added the index parameters ///

people.forEach((person, index) => {
    console.log(index, person);
});

////// callback foreach

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);


///// get a reference to the 'ul'  /////////

const ul = document.querySelector('.peoples');   //  const to print the data attached by ul class="peoples" in index.html

const peoples = ['mario','luigi','ryu','shaun','chun-li'];

let html = ``;

peoples.forEach(person =>{    /// arrow function
    // create html template
    html += `<li style="color: purple"> ${person} </li>`;
})

console.log(html);
ul.innerHTML = html;    /// we added the li statement to the browser