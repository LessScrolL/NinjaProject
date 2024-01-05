////////////// for loops      /////////////////////////

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }
// console.log('loop finished');

// const names = ['shawn', 'Robert', 'Olga'];

// for(let i = 0; i < names.length; i++){       ///result = 0,1,2 since there are 3  names in the array
//     console.log(i);
// }                                           

// for(let i = 0; i < names.length; i++){       ///this print or log out the names of the arrays in order
//     console.log(names[i]);
// } 

// for(let i = 0; i < names.length; i++){       ///this print or log out the names of the arrays in a template and in order
    
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// } 


////////////////// While Loops //////////////////////

//let i = 0;

// while(i < 5){              ///in this part only the condition goes
//     console.log('in loop:', i);
//     i++;
// }

// while(i < names.length){    ///in this part only the condition goes
//     console.log(names[i]);   //this print the names in order
//     i++;
// }

////////////// Do while loops //////////////////////////////
// use loops to execute a block of code a certain number of times
// based on a certain condition

let i = 5;
 do{
    console.log('Val of i is: ', i); 
    i++;
 } while(i < 5);


////////////// if statements /////////////

const age = 25;

if(age > 20){
    console.log("You are over 20 years old");
}

const ninjas = ['Domi','Susy','Cleo','Cynthia','Fran']

if (ninjas.length > 3){         //this is for check if the length inside of the variables are greater or equals to 3 is true so this will print the output
    console.log("That's a lot of ninjas")    //output
}

const password = 'passwords';   

if (password.length >= 8){         ///this check the variable is a long password(8) and if this true this will print the output
    console.log('the password is long enough!'); //output
}

/////////// else statements  //////////////////////////

const passwords = 'p@ss';

///this check if the condition is true will be print the first output and ignore the other one
if (passwords.length >= 8){
    console.log('the password is long enough!');

/// if this is not true this will ignore the first output and it will print the second one.
}else {
    console.log('the password is not long enough!');
}


/////////////// else if statement ///////////////////////////

const pass = 'p@ssword1234';

if (pass.length >= 12){      //first condition if this is not true will continue with the next one.
    console.log('the password is mighty strong!'); 
}else if (pass.length >= 8){                ///we added other condition if the first one is not true
    console.log('the password is long enough!');
}else {
    console.log('the password is not long enough!');
}
