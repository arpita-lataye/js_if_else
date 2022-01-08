// A student will not be allowed to sit in exam if his/her attendence is less than 75%.
// Take following input from user
// Number of classes held
// Number of classes attended.
// And print
// percentage of class attended
// Is student is allowed to sit in exam or not.

let held=require('readline-sync');
let classes_held=held.question('Enter number of classes held:');
let attendence=held.question('Enter number of classes attended:');
let atten=(classes_held/attendence*100)
console.log('attendence is',atten)
if (atten>=75){
    console.log('you are allow to sit in exam')
}else{
    console.log('sorry, you are not allowed. Attend more classes from next time.')
    let reciept=require('readline-sync');
    let sick=reciept.question('are you sick during exam(Y/N):');
    if (sick==='Y'){
        let reciept=require('readline-sync');
        let medical=reciept.question('do you have medical reciept(Y/N):');
        if (medical==='Y'){
            console.log('you are allowed to sit in exam')
        }else{
            if (atten>=75){
                console.log('you are allowed to sit in exam')
            }else{
                console.log('you are not allowed to sit in exam')
            }
        }    
    }
}