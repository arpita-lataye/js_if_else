// accept three numbres from the user and display the second largest number.

let a=require('readline-sync');
let num1=a.question('enter first number:');
let num2=a.question('enter second number:');
let num3=a.question('enter third number:');
if ((num1>num2 && num1<num3)||(num1<num2 && num1>num3)){
    console.log('middle number is:',num1)
}if ((num2>num1 && num2<num3)||(num2<num1 && num2>num3)){
        console.log('middle number is:',num2)
}if ((num3>num2 && num3<num1)||(num3<num2 && num3>num1)){
        console.log('middle number is:',num3)
}