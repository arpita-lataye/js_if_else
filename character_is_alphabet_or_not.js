let num= require('readline-sync');
let var1= num.question('Enter character:');
if ((var1>="a" && var1<="z") || (var1>="A" && var1<="Z")){
    console.log('it is character')
}else if (var1>=0 && var1<=100){
    console.log('it is a digit or a number')
}else{
    console.log('it is a special character')
}