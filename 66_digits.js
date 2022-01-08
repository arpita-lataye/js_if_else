// The given number is of one digited or two digited or three digited or more than three digited.

let num=require('readline-sync')
let num1=num.questionInt('Enter number:');

if (num1>0 && num1<=9){
    console.log('One digited')
}else if (num1>9 && num1<=99){
    console.log('Two digited')
}else if (num1>99 && num1<999){
    console.log('Three digited')
}else if (num1>999 && num1<9999){
    console.log('Four digited')
}else {
    console.log('more than Five digit')
}
