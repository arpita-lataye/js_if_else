/* Write a Python program which accepts the user's first and last name and print them in reverse order with a
space between them .
Input1: kumar
Input 2:nayak
Output: nayak kumar */

let b=require('readline-sync');
let fname=b.question('Enter first name:');
let lname=b.question('enter last name:');

console.log('hello',lname+' ' +fname)