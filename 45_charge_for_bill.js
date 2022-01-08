/*Accept the number of days from the user and calculate the charge for library according to following :
First five days : Rs 2/day.
Six to ten days : Rs 3/day.
Ten to 15 days : Rs 4/day
After 15 days : Rs 5/day */

let a=require('readline-sync');
let number_of_days=a.question('enter number of days:');
if (number_of_days<=5) {
    amt=Number(number_of_days)*2
}else if (number_of_days>=6 && number_of_days<=10){
    amt=Number(number_of_days)*3
}else if (number_of_days>=11 && number_of_days<=15){
    amt=Number(number_of_days)*4
}else{
    amt=Number(number_of_days)*5
}
console.log('Total amount to pay is',amt)