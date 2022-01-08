// Accept the age, sex (‘M’, ‘F’), number of days and display the wages accordingly
// If age does not fall in any range then display the following message: “Enter appropriate age”
// Age            Sex   Wage/day
// >=18 and <30    M     700
//                 F     750
// >=30 and <=40   M     800
//                 F     850

let a=require('readline-sync');
let age=a.question('Enter your age:');
let sex=a.question('Enter sex(M/F):');
let nd=a.question('Enter number of days:');
if (age>=18 && age<30 && sex.toUpperCase()==='M'){
    amt=nd*700
    console.log('Total wages is:',amt)
}else if (age>=18 && age<30 && sex.toUpperCase()==='F'){
    amt=nd*750
    console.log('Total wages is:',amt)
}else if (age>=30 && age<40 && sex.toUpperCase()==='M'){
    amt=nd*800
    console.log('Total wages is:',amt)
}else if (age>=30 && age<40 && sex.toUpperCase()==='F'){
    amt=nd*850
    console.log('Total wages is:',amt)
}else{
    console.log('enter appropriate age')
}