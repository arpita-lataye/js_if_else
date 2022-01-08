var a= require("readline-sync");
var b= a.question('Enter number:')
if (b%5==0 & b%11==0){
    console.log('number is divisible by both')
}else{
    console.log('number is not divisible by both')
}