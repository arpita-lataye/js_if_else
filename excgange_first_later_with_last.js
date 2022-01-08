// . Write a Python program to change a given string to a new string where the first and last chars have
// been exchanged.




// function first_last(str1){
//     if (str1.length <= 1) {
//      return str1;
//     }
   
//      mid_char = str1.substring(1, str1.length - 1);
//      return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
//     }
//     console.log(first_last('Hello there')); //eello therH





let a=require("readline-sync");
let str1=a.question('Enter string:');
let words = str1.split(''); 
[words[0],words[words.length-1]]=[words[words.length-1],words[0]];
let b=words.join('');
console.log(b)