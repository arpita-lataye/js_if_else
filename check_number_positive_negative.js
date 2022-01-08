var num = require('readline-sync');
var num1= num.question('Enter number to check:');
if (num1>0){
    console.log(num1,"is positive")
} else if(num1<0){
    console.log(num1,"is negative")
}else {
    console.log(num1,"is zero")
}