/* A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000. Ask the user
for quantity, Suppose, one unit will cost 100. Judge and print total cost for user. */

let num=require('readline-sync');
let service=num.question('Enter the time period of service:');
let salary=num.question('Enter your salary:')
if (service>10){
    bonus=10/100*salary
}else if (service>=6 && service<=10){
    bonus=8/100*salary
}else if (service<6){
    bonus=5/100*salary
}
console.log('employee bonus is:',bonus)
console.log('total salary of an employee is:',Number(salary)+bonus)