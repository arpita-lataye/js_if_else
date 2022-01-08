// accept the electric units from user and calculate the bill according to the following rates.
// units              price
// first 100 units : no charge
//  next 200 units:  rs 2 per day.
//  above 300 units: rs 5 per day.

let a=require('readline-sync');
let unit=a.question('Enter number of units:');
if (unit<=100){
    amt=0
}else if (unit>100 && unit<=300){
    amt=(unit-100)*2
}else{
    amt=400+(unit-300)*5
}
console.log('Total amount to pay is',amt)