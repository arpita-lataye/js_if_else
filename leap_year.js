let a= require('readline-sync');
let b= a.question('enter year to check it is leap year or not:');
if (b%4==0 && b%400==0){
    console.log(b,'is a leap year')
}else{
    console.log(b,'is not a leap year')
}