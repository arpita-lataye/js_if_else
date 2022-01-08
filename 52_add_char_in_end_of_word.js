/* Write a Python program to add 'ing' at the end of a given string (length should be at least 3). If the given
string already ends with 'ing' then add 'ly' instead. If the string length of the given string is less than 3,
leave it unchanged. Go to the editor
a. Sample String : 'abc'
b. Expected Result : 'abcing'
c. Sample String : 'string'
d. Expected Result : 'stringly'*/

let chr=require("readline-sync");
let string1=chr.question("Enter string:")
if (string1.endsWith('ing')){
    string1+='ly'
    // console.log(string1)
}else if(string1.length){
    string1+='ing'
    // console.log(string1)
}
console.log(string1)