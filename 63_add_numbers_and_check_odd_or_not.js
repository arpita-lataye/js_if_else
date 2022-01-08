// Take 2 inputs and add them if the result is odd print result odd hain, and if it is not print odd nahi hain.

let input=require('readline-sync')
let number1=input.questionInt('Enter number:');
let num=input.questionInt('Enter second number:');
if ((number1+num)%2===0){
// ((Number(number1)+Number(num))%2===0){
    console.log('even number')
}else {
    console.log('odd number')
}