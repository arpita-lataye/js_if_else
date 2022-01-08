// accept the marked price from the user and calculate the net amount as (marked price- discount) to pay according to following criteria:
//  marked price        discount
//   >10000              20%
//   >7000 and <=10000   15%
//   <=7000               10%


let amount=require('readline-sync');
let marked_price=amount.question('Enter marked price:');
if (marked_price>10000){
    discount=20/100*marked_price
}if (marked_price>7000 && marked_price<=10000){
    discount=15/100*marked_price
}if (marked_price<=7000){
    discount=10/100*marked_price
}
net_amount=marked_price-discount
console.log('net amount to pay is ',net_amount)