///// Object literals /// 

// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@rrc.ca',
//     location: 'Berlin',
//     blogs: ['why mac & cheese rules', '10 things to make marmite']
// };

// console.log(user.name);    // print using dot notation or
// console.log(user['name'])  // using square braquets []

// to update a property we add the following code :
//user.age = 35;
//console.log(user.age);

// to update the name with square braquets []
// user['name'] = 'chun-li';
// console.log(user['name']);
// // to select one of the arrays.
// console.log(user['blogs'][0]);

/////////////////////////////////////////

// let users = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@rrc.ca',
//     location: 'Berlin',
//     blogs: ['why mac & cheese rules', '10 things to make marmite'],
//     login: function(){
//         console.log('the user logged in');
//     },
//     logout: function(){
//         console.log('user logged out');
//     },
//     logBlogs: function(){
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// users.logBlogs();


///////////////////////////////////////////////////

// const blogs = [
//     {title: 'why mac & cheese rules', likes: 30},
//     {title:'10 things to make marmite', likes: 50}
// ];

// console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@rrc.ca',
    location: 'Berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30},
        { title:'10 things to make marmite', likes: 50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();


///// Math Object ///

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area)); // this round to the nearest number in this case is 8
console.log(Math.floor(area)); //this will round to down the number in this case 7
console.log(Math.ceil(area)); //this will round to up if the number is 7.1 it will be 8
console.log(Math.trunc(area)); //this take away the decimal and leave th einteger

///// generate rondom numbers

const random = Math.random();

console.log(random); //this will give us a random number of 0.0 to 0.9
console.log(Math.round(random)); // this will give us a random number betwenn 0 and 1
console.log(Math.round(random * 100)); //this will give us a random number between 1 and 100


/// Primitives Values

let scoreOne = 50;    
let scoreTwo = scoreOne;// create a copy of the firs value variable and stores separately on the stack

console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`);

scoreOne = 100;        ///whe we make a copy of primitive value
console.log(`scoreOne: ${scoreOne}`,`scoreTwo: ${scoreTwo}`); // this will change just one it down't effect the other one.

/////// Reference Values ///////////////

const userOne = { name: 'ryu', age: 30};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;               /// this change in both cases since this just point to a one variable.
console.log(userOne, userTwo);

userOne.name = 'chun-li';
console.log(userOne, userTwo);
