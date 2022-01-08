let num= require("readline-sync");
let a= num.question('Enter number:');
if (a%2==0){
    console.log(a,'is even number')
}else{
    console.log(a,'is odd number')
}