let num=require('readline-sync');
let num1=num.question('Enter a number:');
let length=num1.length;
if (length !=3){
    console.log('this is not a three digit number')
}else{
    console.log('middle digit is',(Math.floor((Number(num1)%100))/10))
}