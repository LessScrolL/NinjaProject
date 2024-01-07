//////////////////////////// query selector ////////////////////////

// const para = document.querySelector('p');    //this show us only the first p tag in html
// console.log(para);

// const parag = document.querySelector('.error');   // this show us the class error in html
// console.log(parag);

// const paragr = document.querySelector('body > h1');  // this show us the h1 tag inside the body
// console.log(paragr);


////////////////////////// query selector All //////////////////

// const paras = document.querySelectorAll('p');
// console.log(paras[2]);   //this is for show us what tag we want to see

// const paras = document.querySelectorAll('p'); 

// paras.forEach(para => {         //this will show us all the tag in order (group)
//     console.log(para);
// });
// console.log(paras[2]);

// const paras = document.querySelectorAll('p'); 
// const errors = document.querySelectorAll('.error')

// console.log(errors);

/////////////////////////////////////////////////////////////////

/////////////////// Get an element by ID

// const title = document.getElementById('page-title');
// console.log(title);


////////////////// Get elements by their class name

// const error = document.getElementsByClassName('error');   ///we cannot use a function in html collection
// console.log(error);
// console.log(error[0]);


//////////////////// Get elements by their tag name

// const para = document.getElementsByTagName('p');     ///html collection
// console.log(para);   // to show all the p tag
// console.log(para[1]);   // to show the p tag that you want


////////////////////////////////////////////////////////////////

//const parag = document.querySelector('p');
//console.log(parag.innerText);
//parag.innerText = 'ninja are awesome!';  //this will override the first p tag for this text in html
//parag.innerText += ' ninja are awesome!';   //if we add a += this will add the text to the previous one 

//const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para.innerText);
//     para.innerText += ' new text';    //this will add the new text to all p tag
// });


//const content = document.querySelector('.content');

//console.log(content.innerHTML);
//content.innerHTML = '<H2>This is a new H2 tag </h2>';   //this is for override a class content in html with this new tag
//content.innerHTML += '<H2>This is a new H2 tag </h2>';  //this will add or to append to the class content

//const people = ['mario', 'luigi', 'yoshi'];

// people.forEach(person =>{
//     content.innerHTML += `<p> ${person}</p>`;  //this will add all the array (names) inside the class content
// });

/////////////////////////////////////////////////////////////////////////////////////

// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');  //set the href atrribute for another value
// link.innerText = 'The Net ninja website';  //tho change the innertag on the browser (link name)

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));    ///to see what is the name of the class
// mssg.setAttribute('class', 'success');     ///to change the name of the clase from error to success
// mssg.setAttribute('style', 'color:green;');   //this is for change the color of the font

////////////////////////////////////////////////////////////////////////////////

// const title = document.querySelector('h1');

// //title.setAttribute('style', 'margin: 50px;');

// console.log(title.style);   //to see the diferent style to put a tag
// console.log(title.style.color);  //to see the color of the tag

// title.style.margin = '50px';  //this will give a margin of the title without override the previous style
// title.style.color = 'crimson';  //to change the color of the title
// title.style.fontSize = '60px'; //to put a size to the font
// title.style.fontSize = '';  //this is for remove a property just putting a single ''


///////////////////  Add and remove class in html by js //////////////////////

//const content = document.querySelector('p');

//console.log(content.classList); //this is to know how many classes has this content tag
//content.classList.add('error');  //this is for add a class to the content
//content.classList.remove('error');  // this is for remove the class into the content
//content.classList.add('success');

///////////////////  Challenge   //////////////

const paras = document.querySelectorAll('p');

paras.forEach(p =>{
    //console.log(p.innerText);  //this will show us only visble text and not the hidden one
    //console.log(p.textContent);  //this will show us all the text
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }
    //if(p.textContent.includes('success')){  //we can use this or the next one
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
});

/// toggle classes

const title = document.querySelector('.title');

title.classList.toggle('test'); //this add the test word to the an existing class
title.classList.toggle('test'); //this will remove the test word in the existing class.

