// Write a dynamic greeter program named greeter.js. The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:
// out/put=Hello, Sue!

let name1 = require('readline-sync');
let name = name1.question('What is your name? ');
console.log('Hello, ' + name + '!');


let readlineSync = require('readline-sync');
let name2 = readlineSync.question('What is your name? ');
console.log(`Hello, ${name2}!`);

// 2.Modify the greeter.js program to ask for the user's first and last names separately, then greet the user with their full name.

let name=require('readline-sync');
let firstname=name.question("what is your first name:");
let lastname=name.question("what is your last name:")
console.log('hello, '+ firstname +' '+ lastname + '!')
console.log(`hello, ${firstname} ${lastname}!`)


// 3.Modify the age.js program you wrote in the exercises for the Variables chapter. The updated code should ask the user to enter their age instead of hard-coding the age in the program. Here's an example run:

let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
console.log(`In 10 years, you will be ${age + 10} years old.`);
console.log(`In 20 years, you will be ${age + 20} years old.`);
console.log(`In 30 years, you will be ${age + 30} years old.`);
console.log(`In 40 years, you will be ${age + 40} years old.`);