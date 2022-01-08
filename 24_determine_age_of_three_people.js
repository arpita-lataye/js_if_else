// Take input of age of 3 people by user and determine oldest and youngest among them.

let a=require('readline-sync')
let age1=a.question('Enter 1st person age:');
let age2=a.question('Enter 2nd person age:');
let age3=a.question('Enter 3rd person age:');
if (age1>=age2 && age1>=age3){
    console.log('Oldest is',age1)
}else if (age2>=age1 && age2>=age3){
    console.log('Oldest is',age2)
}else if (age3>=age1 && age3>=age2){
    console.log('Oldest is', age3)
}else{
    console.log('All are equal')
}