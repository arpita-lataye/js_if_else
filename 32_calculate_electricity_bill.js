/* . Write a program to calculate the electricity bill (accept number of unit from user) according to the
following criteria :
Unit                 Price
First 100 units      no charge
Next 100 units       Rs 5 per unit
After 200 units      Rs 10 per unit
(For example if input unit is 350 than total bill amount is Rs2000) */


let bill=require('readline-sync');
let units=bill.question('Enter electricity bill:')
if (units <= 100){
    console.log('total electric bill is',units*5)
}else if (units <= 200){
    console.log('total electric bill is',units*10)
}else if (units <= 300){
    console.log('total electric bill is',units*15)
}else if (units > 300){
    console.log('total electric bill is',units*20)
}