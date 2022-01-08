// 
// A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years.
// Ask user for their salary and year of service and print the net bonus amount.

let amount=require('readline-sync');
let salary=amount.question('enter salary:');
let year=amount.question('enter year of services:')
if (year>5){
    console.log("bonus is",.05*salary)
    console.log("totat salary of employee after geting bonus",Number(salary)+Number(.05*salary))
}else{
    console.log("an employee does not get bonus")
}