var number = require('readline-sync')
var number1=number.question('Enter number:');
 
if(number1%3 === 0){
   console.log("choco")
}
if(number1%7===0){
   console.log("late")
}
if(number1%3==0 && number1%7==0) {
   console.log("Chocolate")
}
else {
   console.log("Not divisible by 3 , 7")
}