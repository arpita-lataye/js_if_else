/* Ask a user to tell the speed of his vehicle, if speed is more than 70kmph, ask him to pay that that much
speed multiplied by 50rs. Like if his speed 100kmph, you need to ask him the fine(100-70)*50=? This is the fineamount he needs to pay, if his speed is not more 70, say him stay home, stay safe. */

let b=require('readline-sync')
let speed=b.question('Enter speed of vehicle:');
if (speed>70){
    console.log('amount to pay is:',speed*50,'rs')
}else if (speed>100){
    console.log('you have to pay fine :',(100-70)*50,'rs')
}else {
    console.log('stay home, stay safe.')
}