/* Write a program to accept the cost price of a bike and display the road tax to be paid according to the
following criteria :
a.     Cost price (in Rs)    Tax
b.      > 100000              15 %
c.      > 50000 and <= 100000  10%
d.      <= 50000                5% */

let bike=require('readline-sync');
let cost_price=bike.question('Enter the cpst price of the bike:');
if (cost_price>100000){
    tax=.15
}else if (cost_price>50000 && cost_price<=100000){
    tax=0.10
}else if (cost_price<=50000){
    tax=0.05
}
rate_of_tax=cost_price*tax
console.log(rate_of_tax,'is the road tax to be paid.')