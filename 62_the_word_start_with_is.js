/* Python program to get a new string from a given string where "is" has been added to the front. If the
given string already begins with "is" then return the string unchanged. */

let ch=require('readline-sync')
let string=ch.question('enter string:');

if (string[0]=='i' && string[1]=='s'){
    console.log(string)
}else{
    console.log(string+'is')
}