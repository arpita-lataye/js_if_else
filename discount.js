// A shop will give discount of 10% if the cost of purchased quantity is more than 1000.


let amount=require('readline-sync');
let price=amount.question('enter price:');
if (price*100>1000){
    console.log('total cost is',((price*100)-(.1*price*100)))
}else{
    console.log('cost is',price*100)
}







let amount=require('readline-sync');
let price=amount.question('enter price:');
if (price>1000){
    console.log('total cost is',price%10)
}else{
    console.log('you will not get any discount')
}