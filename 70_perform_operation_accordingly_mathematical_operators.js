// write a program to accept two numbers and mathematical operators and perform operation accordingly.

let num=require('readline-sync');
let num1=num.question('enter first number:');
let num2=num.question('enter second number:');
let op=num.question('enter mathematical operator:')
if (op==='+'){
    console.log(Number(num1)+Number(num2))
}if (op==='-'){
    console.log(Number(num1)-Number(num2))
}if (op==='*'){
    console.log(Number(num1)*Number(num2))
}if (op==='/'){
    console.log(Number(num1)/Number(num2))
}if (op==='%'){
    console.log(Number(num1)%Number(num2))
}if (op==='**'){
    console.log(Number(num1)**Number(num2))
}if (op==='//'){
    console.log(Math.floor(Number(num1)/Number(num2)))
}