let num=  require('readline-sync');
let num1= num.question("Enter 1st number:");
let num2= num.question('Enter 2nd number:');
let num3= num.question("Enter 3rd number:");
if (num1> num2 && num1>num3){
    console.log(num1,"is greater")
}else if (num2>num3 && num2>num1){
    console.log(num2,"is greater")
}else {
    console.log(num3,"is greater")
}