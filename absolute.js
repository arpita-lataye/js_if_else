
// Write a program to print absolute vlaue of a number entered by user. E.g.-
// INPUT: 1        OUTPUT: 1
// INPUT: -1        OUTPUT: 1


let a=require('readline-sync');
let number=a.question('Enter a number:');
if (number<0){
    console.log(number*-1)
}else{
    console.log(number)
}