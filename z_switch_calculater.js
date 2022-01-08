// program for a simple calculator
let result;

// take the operator input
const a=require('readline-sync')
const operator = a.question('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = a.questionFloat('Enter first number: ');
const number2 = a.questionFloat('Enter second number: ');

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}