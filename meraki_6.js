/* You have a variable called var num1 with the value as shown:

var num1 = 300 - 123 */

var num1 = 300 - 123;
let readlineSync = require("readline-sync");
var num2=readlineSync.question("enter a number:");
if(num1==num2){
   console.log("equal hai")
}
else{
   console.log("not equal")
}