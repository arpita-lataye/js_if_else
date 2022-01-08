// Take values of length and breadth of a rectangle from user and check if it is square or not.

let num=require('readline-sync');
let length=num.question('Enter length:');
let breadth=num.question('enter breadth:');
if (length===breadth){
    console.log('Yes, it is square')
}else{
    console.log ('No, it is only Ractangle')
}