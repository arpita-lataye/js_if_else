let num = require('readline-sync');
let num1 = num.question('Enter 1st number to check:');
let num2= num.question('Enter 2nd number to check:');
if (num1 > num2){
    console.log(num1,'is greater')
}else{
    console.log(num2,'is greater')
}
