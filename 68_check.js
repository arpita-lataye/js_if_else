//  The given character is an uppercase letter or lowercase letter or a digit or a special character.

let a=require('readline-sync')
let str=a.question('enter input:');

if (str>='a' && str<='z'){
    console.log('lowercase')
}else if (str>='A' && str<='Z'){
    console.log('uppercase')
}else if (str>0){
    console.log('digit')
}else {
    console.log('special character')
}