// A school has following rules for grading system:
// a. Below 25 - F
// b. 25 to 45 - E
// c. 45 to 50 - D
// d. 50 to 60 - C
// e. 60 to 80 - B
// f. Above 80 - A
// Ask user to enter marks and print the corresponding grade.


let a=require('readline-sync');
let marks=a.question('Enter marks:')
if (marks<25){
    console.log('F')
}else if (marks>=25 && marks<45){
    console.log('E')
}else if (marks>=45 && marks<50){
    console.log('D')
}else if (marks>=50 && marks<60){
    console.log('C')
}
else if (marks>=60 && marks<80){
    console.log('B')
}else{
    console.log('A')
}